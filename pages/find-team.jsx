import Head from 'next/head';
import FindSection from '../components/organism/FindSection';
import Footer from '../components/organism/Footer';
import Navbar from '../components/organism/Navbar';

export default function FindTeam() {
  return (
    <div>
      <Head>
        <title>Genshin Build | Find Team</title>
        <link rel="icon" href="/icons/hutao.png" />
      </Head>
      <Navbar activeNavbar="search" />
      <FindSection />
      <Footer />
    </div>
  );
}
