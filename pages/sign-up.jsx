import Head from 'next/head';
import Footer from '../components/organism/Footer';
import Navbar from '../components/organism/Navbar';
import SignupUser from '../components/organism/SignupUser';

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>Genshin Build | Sign up</title>
        <link rel="icon" href="/icons/hutao2.png" />
      </Head>
      <Navbar isCentered />
      <SignupUser />
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
