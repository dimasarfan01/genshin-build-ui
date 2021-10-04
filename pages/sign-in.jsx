import Footer from '../components/organism/Footer';
import Navbar from '../components/organism/Navbar';
import SigninUser from '../components/organism/SigninUser';
import Head from 'next/head';

export default function SignIn() {
  return (
    <div>
      <Head>
        <title>Genshin Build | Sign in</title>
        <link rel="icon" href="/icons/qiqi2.png" />
      </Head>
      <Navbar isCentered />
      <SigninUser />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
