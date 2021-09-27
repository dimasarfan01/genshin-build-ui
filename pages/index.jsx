import Head from 'next/head';
import Footer from '../components/organism/Footer';
import MainSection from '../components/organism/MainSection';
import Navbar from '../components/organism/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Genshin Build | Home</title>
        <link rel="icon" href="/icons/qiqi.png" />
      </Head>
      <Navbar activeNavbar="character" />
      <MainSection />
      <Footer />
    </div>
  );
}
