import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import BuildSection from '../../components/organism/BuildSection';
import Navbar from '../../components/organism/Navbar';
import {
  getDataArtifactsAPI,
  getDataCharactersAPI,
  getDataTeamCompByIdAPI,
  getDataWeaponAPI,
} from '../../services/get-data';

export default function UpdatePost({
  dataItem,
  dataCharacters,
  dataArtifacts,
  dataWeapon,
  dataId,
}) {
  return (
    <div>
      <Head>
        <title>Genshin Build | {dataItem.teamName}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_API}${dataItem.Character1.imageUrl}`}
        />
      </Head>
      <Navbar isCentered />
      <BuildSection
        dataCharacters={dataCharacters}
        dataArtifacts={dataArtifacts}
        dataWeapon={dataWeapon}
        dataItem={dataItem}
        dataId={dataId}
      />
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
    if (
      userFromPayload.id === data.data.creator._id ||
      userFromPayload.role === 'admin'
    ) {
      const _dataCharacters = await getDataCharactersAPI(jwtToken);
      const _dataArtifacts = await getDataArtifactsAPI(jwtToken);
      const _dataWeapon = await getDataWeaponAPI(jwtToken);
      return {
        props: {
          dataCharacters: _dataCharacters.data,
          dataArtifacts: _dataArtifacts.data,
          dataWeapon: _dataWeapon.data,
          dataId: id,
          dataItem: data.data,
        },
      };
    }
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}
