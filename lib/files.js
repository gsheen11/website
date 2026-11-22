export const MAX_CHARS = 200_000;

export class FileError extends Error {}

export function checkPath(path) {
  path = path.trim().replace(/^\/+/, '');
  if (!path || path.split('/').some((part) => ['', '.', '..'].includes(part))) {
    throw new FileError(`"${path}" is not a valid file path.`);
  }
  return path;
}

export function createFileStore(query) {
  async function read(path) {
    const [file] = await query('select path, content, updated_at from files where path = $1', [checkPath(path)]);
    return file ?? null;
  }

  async function save(path, content) {
    if (content.length > MAX_CHARS) throw new FileError(`Files are limited to ${MAX_CHARS} characters.`);
    await query(
      `insert into files (path, content) values ($1, $2)
       on conflict (path) do update set content = excluded.content, updated_at = now()`,
      [path, content],
    );
    await query('insert into file_versions (path, content) values ($1, $2)', [path, content]);
    return `${path} (${content.length} characters)`;
  }

  return {
    read,

    list(folder = '') {
      const prefix = folder.replace(/^\/+|\/+$/g, '');
      return query(
        "select path, length(content) as chars, updated_at from files where $1 = '' or starts_with(path, $1 || '/') order by path",
        [prefix],
      );
    },

    write(path, content) {
      return save(checkPath(path), content);
    },

    async edit(path, oldText, newText) {
      const file = await read(path);
      if (!file) throw new FileError(`No file at "${path}".`);
      const count = oldText ? file.content.split(oldText).length - 1 : 0;
      if (count !== 1) {
        throw new FileError(
          count === 0
            ? `The text to replace was not found in "${file.path}".`
            : `The text to replace appears ${count} times in "${file.path}". Include more of the surrounding text.`,
        );
      }
      return save(file.path, file.content.replace(oldText, () => newText));
    },

    async append(path, text) {
      const file = await read(path);
      if (!file) return save(checkPath(path), text);
      const separator = file.content === '' || file.content.endsWith('\n') ? '' : '\n';
      return save(file.path, file.content + separator + text);
    },
  };
}
