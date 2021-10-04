import Head from 'next/head';
import 'rc-rate/assets/index.css';
import { ToastContainer } from 'react-toastify';
import 'tailwindcss/tailwind.css';
import '../components/atoms/Loader/styles.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const contextClass = {
    success: 'bg-gray-900',
    error: 'bg-gray-900',
    info: 'bg-gray-900',
    warning: 'bg-gray-900',
    default: 'bg-gray-900',
    dark: 'bg-gray-900',
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || 'default'] +
          ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer shadow-xlsignin'
        }
        bodyClassName={() => 'text-sm text-white font-medium block p-3'}
        position="top-right"
        autoClose={3000}
      />
    </>
  );
}

export default MyApp;
