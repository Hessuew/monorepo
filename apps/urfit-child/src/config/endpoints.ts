/**
 * Endpoint configuration for the urFIT-child project
 */

interface EndpointConfig {
  publicFiles: string;
  subscribe: string;
}

function getEndpointConfig(): EndpointConfig {
  // Check if we're in development mode
  const isDev = import.meta.env.DEV;

  if (isDev) {
    return {
      publicFiles: 'http://localhost:8787/files',
      subscribe: 'http://localhost:8787/subscribe',
    };
  }

  // Production endpoints
  return {
    publicFiles: 'https://subscribe.juhani-juusola.workers.dev/files',
    subscribe: 'https://subscribe.juhani-juusola.workers.dev/subscribe',
  };
}

export const ENDPOINTS = getEndpointConfig();
