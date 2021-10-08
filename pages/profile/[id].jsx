import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import Navbar from '../../components/organism/Navbar';
import ProfileSection from '../../components/organism/PorfileSection';
import { getDataUsersAPI, getMyUserDataAPI } from '../../services/get-data';

export default function Profile({
  dataProfile,
  paramsId,
  myDataProfile,
  currentUser,
}) {
  return (
    <div>
      <Head>
        <title>Genshin Build | Profile</title>
        <link rel="icon" href="/icons/qiqi2.png" />
      </Head>
      <Navbar isCentered />
      <ProfileSection
        dataProfile={dataProfile}
        paramsId={paramsId}
        myDataProfile={myDataProfile}
        currentUser={currentUser}
      />
    </div>
  );
}

export async function getServerSideProps({ req, params }) {
  const { id } = params;
  const { token } = req.cookies;

  const data = await getDataUsersAPI(id);
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
    const myData = await getMyUserDataAPI(id, jwtToken);
    return {
      props: {
        myDataProfile: myData.data,
        dataProfile: data.data,
        paramsId: id,
        currentUser: userFromPayload,
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
