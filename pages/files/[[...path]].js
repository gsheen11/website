import Head from 'next/head';
import { getAuth } from '@clerk/nextjs/server';
import { fileStore } from '../../lib/db.js';

export async function getServerSideProps({ req, params }) {
  if (!getAuth(req).userId) return { notFound: true };
  const path = params.path?.join('/');
  if (!path) return { props: { files: (await fileStore.list()).map((f) => f.path) } };
  const file = await fileStore.read(path);
  if (!file) return { notFound: true };
  return { props: { path, content: file.content } };
}

export default function Files({ files, path, content }) {
  return (
    <main className="files">
      <Head>
        <title>{path ?? 'Files'}</title>
      </Head>
      {files ? (
        <>
          <h1>Files</h1>
          <ul>
            {files.map((file) => (
              <li key={file}>
                <a href={`/files/${file}`}>{file}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <a href="/files">Files</a>
          <h1>{path}</h1>
          <pre>{content}</pre>
        </>
      )}
    </main>
  );
}
