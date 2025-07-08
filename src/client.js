// src/client.js
export function getClient() {
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  if (subdomain === 'hhm') return 'hhm';
  if (subdomain === 'stepstone') return 'stepstone';
  if (subdomain === 'Heq') return 'HeQ';
  return 'default';
}

