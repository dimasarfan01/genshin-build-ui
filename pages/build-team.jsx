import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import BuildSection from '../components/organism/BuildSection';
import Navbar from '../components/organism/Navbar';
import {
  getDataArtifactsAPI,
  getDataCharactersAPI,
  getDataWeaponAPI,
} from '../services/get-data';

export default function BuildTeam({
  dataCharacters,
  dataArtifacts,
  dataWeapon,
  dataId,
  dataItem,
}) {
  return (
    <div>
      <Head>
        <title>Genshin Build | Build Team</title>
        <link rel="icon" href="/icons/hutao.png" />
      </Head>
      <Navbar isCentered />
      <BuildSection
        dataCharacters={dataCharacters}
        dataArtifacts={dataArtifacts}
        dataWeapon={dataWeapon}
        dataId={dataId}
        dataItem={dataItem}
      />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (token) {
    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const _dataCharacters = await getDataCharactersAPI(jwtToken);
    const _dataArtifacts = await getDataArtifactsAPI(jwtToken);
    const _dataWeapon = await getDataWeaponAPI(jwtToken);
    return {
      props: {
        dataCharacters: _dataCharacters.data,
        dataArtifacts: _dataArtifacts.data,
        dataWeapon: _dataWeapon.data,
      },
    };
  }
  return {
    props: {
      dataCharacters: {},
      dataId: undefined,
      dataItem: undefined,
    },
  };
}
