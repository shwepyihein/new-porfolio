import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Merienda } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const roboto = Merienda({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />;
    </div>
  );
}
