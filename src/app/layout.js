import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ShareSetu | Recover Your Unclaimed Money',
  description: "India's Government Certified Platform to recover unclaimed shares, Provident Fund (PF), Insurance, Mutual Funds, and more.",
  keywords: 'IEPF, Unclaimed Funds, PF, Insurance, Mutual Funds, India Recovery, ShareSetu',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/logo.png" />
        <link rel="canonical" href="https://sharesetu.in" />
        <meta name="robots" content="index,follow" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
