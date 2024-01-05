// pages/_app.tsx
import '../src/styles/globals.css';
import Layout from '../src/components/Layout';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

