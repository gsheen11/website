import { z } from 'zod';
import { FileError } from './files.js';

export const instructions = `This is Grant's personal file system: plain-text files, usually Markdown, with paths like "goals.md" or "notes/music.md". It is the source of truth for Grant's goals, plans, projects and anything he has asked you to keep.

Before answering anything about Grant's goals, plans, projects or life, call "list" and read the files that look relevant. When Grant tells you something he wants kept, save it here. Prefer "edit" and "append" for changes; use "write" only for new files or when Grant asks you to rewrite one. Every save keeps the previous version.`;

const reply = (text, isError = false) => ({ content: [{ type: 'text', text }], isError });

function tool(server, name, description, input, run, annotations) {
  server.registerTool(name, { description, inputSchema: z.object(input), annotations }, async (args) => {
    try {
      return reply(await run(args));
    } catch (error) {
      if (error instanceof FileError) return reply(error.message, true);
      throw error;
    }
  });
}

export function registerFileTools(server, store) {
  const path = z.string().describe('Path of the file, such as "goals.md" or "notes/music.md".');

  tool(
    server,
    'list',
    'List files with their size and when they last changed. Pass a folder such as "notes" to list only that folder.',
    { folder: z.string().optional() },
    async ({ folder }) => {
      const files = await store.list(folder);
      if (!files.length) return 'No files yet.';
      return files.map((f) => `${f.path} (${f.chars} chars, updated ${new Date(f.updated_at).toISOString()})`).join('\n');
    },
    { readOnlyHint: true },
  );

  tool(
    server,
    'read',
    'Read the full text of one file.',
    { path },
    async ({ path }) => {
      const file = await store.read(path);
      if (!file) throw new FileError(`No file at "${path}". Use "list" to see what exists.`);
      return file.content;
    },
    { readOnlyHint: true },
  );

  tool(
    server,
    'write',
    'Create a file or replace a whole file. For changes, prefer "edit" or "append". The previous version is kept.',
    { path, content: z.string() },
    async ({ path, content }) => `Saved ${await store.write(path, content)}.`,
    { destructiveHint: true },
  );

  tool(
    server,
    'edit',
    'Replace one exact passage in a file. "old_text" must appear exactly once. The previous version is kept.',
    { path, old_text: z.string(), new_text: z.string() },
    async ({ path, old_text, new_text }) => `Edited ${await store.edit(path, old_text, new_text)}.`,
    { destructiveHint: true },
  );

  tool(
    server,
    'append',
    'Add text to the end of a file on a new line, creating the file if needed. The previous version is kept.',
    { path, text: z.string() },
    async ({ path, text }) => `Appended to ${await store.append(path, text)}.`,
    { destructiveHint: false },
  );
}
