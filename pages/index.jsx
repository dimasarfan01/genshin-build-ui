import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../components/organism/Footer';
import MainSection from '../components/organism/MainSection';
import Navbar from '../components/organism/Navbar';
import { getDataUsersAPI } from '../services/get-data';

export default function Home({ dataProfile }) {
  useEffect(() => {
    localStorage.removeItem('user-form');
  }, []);
  return (
    <div>
      <Head>
        <title>Genshin Build | Home</title>
        <link rel="icon" href="/icons/qiqi.png" />
      </Head>
      <Navbar activeNavbar="character" profile={dataProfile} />
      <MainSection />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (token) {
    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload = jwtDecode(jwtToken);
    const userFromPayload = payload.user;
    const response = await getDataUsersAPI(userFromPayload.id, jwtToken);
    return {
      props: {
        dataProfile: response.data,
      },
    };
  }
  return {
    props: {
      dataProfile: false,
    },
  };
}
