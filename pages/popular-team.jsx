import Head from 'next/head';
import Navbar from '../components/organism/Navbar';

export default function TeamBuild() {
  return (
    <div>
      <Head>
        <title>Genshin Build | Popular team</title>
        <link rel="icon" href="/icons/hutao.png" />
      </Head>
      <Navbar activeNavbar="popular" />
    </div>
  );
}
