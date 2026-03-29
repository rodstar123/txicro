import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TXICRO — Texas International Commerce & Relations Office',
    short_name: 'TXICRO',
    description: 'Fee-based cross-border advisory for international companies, investors, and institutions entering Texas through the Rio Grande Valley.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A1628',
    theme_color: '#0A1628',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
