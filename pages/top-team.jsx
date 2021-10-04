import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import Navbar from '../components/organism/Navbar';
import { getDataUsersAPI } from '../services/get-data';

export default function TeamBuild({ dataProfile }) {
  return (
    <div>
      <Head>
        <title>Genshin Build | Popular team</title>
        <link rel="icon" href="/icons/hutao.png" />
      </Head>
      <Navbar activeNavbar="topteam" profile={dataProfile} />
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
