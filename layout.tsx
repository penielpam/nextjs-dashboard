import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Primeview Dashboard',
    default: 'Primeview Dashboard',
  },
  description: 'This is based off official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 
export default function RootLayout() {
  // ...
}