import { withClerkMcpAuth } from '@clerk/mcp-tools/next';
import { createMcpHandler } from 'mcp-handler';
import { fileStore } from '../../lib/db.js';
import { mcpAuthOptions } from '../../lib/mcp-auth.js';
import { instructions, registerFileTools } from '../../lib/mcp-server.js';

const handler = createMcpHandler((server) => registerFileTools(server, fileStore), {
  serverInfo: { name: 'grant-personal-files', version: '0.1.0' },
  instructions,
});

const authHandler = withClerkMcpAuth(handler, mcpAuthOptions);

export { authHandler as GET, authHandler as POST, authHandler as DELETE };
