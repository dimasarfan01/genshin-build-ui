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
