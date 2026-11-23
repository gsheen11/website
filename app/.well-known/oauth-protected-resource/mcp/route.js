import { metadataCorsHandler, protectedResourceMetadataHandler } from '@clerk/mcp-tools/next';
import { mcpAuthOptions } from '../../../../lib/mcp-auth.js';

export const GET = protectedResourceMetadataHandler(mcpAuthOptions);
export const OPTIONS = metadataCorsHandler();
