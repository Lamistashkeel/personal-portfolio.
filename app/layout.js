import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './globals.css';


export const metadata = {
  metadataBase: new URL('https://personal-portfolio-lamis-iota.vercel.app'), // ← your Vercel URL for now
  title: 'Lamis-Portfolio',
  
  description: 'Full Stack AI-driven MERN Developer',
  openGraph: {
    title: 'Lamis | Portfolio',
    description: 'Full Stack AI-driven MERN Developer & Data Analyst.',
    url: 'https://your-domain.vercel.app',
    images: [{ url: '/assets/img/header-img.svg' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}