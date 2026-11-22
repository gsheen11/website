import { neon } from '@neondatabase/serverless';
import { createFileStore } from './files.js';

const sql = neon(process.env.DATABASE_URL);

export const fileStore = createFileStore((text, params) => sql.query(text, params));
