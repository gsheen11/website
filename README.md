# grantsheen.com

My personal website, and my personal MCP: a small file system that Claude reads and writes.

- Endpoint: `https://www.grantsheen.com/mcp`
- Tools: `list`, `read`, `write`, `edit`, `append`
- Sign-in: Clerk OAuth, invite-only
- Storage: Postgres on Neon. `files` holds each file; `file_versions` keeps every save.

Setup: run `db/schema.sql` once in the Neon SQL editor. Environment variables live in Vercel: `DATABASE_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`.
