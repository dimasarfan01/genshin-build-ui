import Head from 'next/head';
import Navbar from '../../components/organism/Navbar';
import ProfileSection from '../../components/organism/PorfileSection';
import { getDataUsersAPI } from '../../services/get-data';

export default function Profile({ dataProfile, paramsId }) {
  return (
    <div>
      <Head>
        <title>Genshin Build | Profile</title>
        <link rel="icon" href="/icons/qiqi2.png" />
      </Head>
      <Navbar isCentered />
      <ProfileSection dataProfile={dataProfile} paramsId={paramsId} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const data = await getDataUsersAPI(id);
  if (data.data === undefined || data.data === null || data.data.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      dataProfile: data.data,
      paramsId: id,
    },
  };
}
