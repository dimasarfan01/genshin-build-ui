import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import DetailSection from '../../components/organism/DetailSection';
import Footer from '../../components/organism/Footer';
import Navbar from '../../components/organism/Navbar';
import {
  getDataTeamCompByIdAPI,
  getDataUsersAPI,
} from '../../services/get-data';

export default function Details({ dataItem, dataProfile, dataId }) {
  return (
    <div>
      <Head>
        <title>Genshin Build | {dataItem.teamName}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_API}${dataItem.Character1.imageUrl}`}
        />
      </Head>
      <Navbar activeNavbar="character" profile={dataProfile} />
      <DetailSection
        dataItem={dataItem}
        profile={dataProfile}
        dataId={dataId}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req, params }) {
  const { id } = params;
  const { token } = req.cookies;

  const data = await getDataTeamCompByIdAPI(id);
  if (data.data === undefined || data.data === null || data.data.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  if (token) {
    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload = jwtDecode(jwtToken);
    const userFromPayload = payload.user;
    const response = await getDataUsersAPI(userFromPayload.id, jwtToken);
    return {
      props: {
        dataItem: data.data,
        dataProfile: response.data,
        dataId: id,
      },
    };
  }
  return {
    props: {
      dataItem: data.data,
      dataProfile: false,
      dataId: false,
    },
  };
}
