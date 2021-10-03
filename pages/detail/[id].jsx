import Head from 'next/head';
import DetailSection from '../../components/organism/DetailSection';
import Footer from '../../components/organism/Footer';
import Navbar from '../../components/organism/Navbar';
import { getDataTeamCompByIdAPI } from '../../services/get-data';

export default function Details({ dataItem }) {
  return (
    <div>
      <Head>
        <title>Genshin Build | {dataItem.teamName}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_API}${dataItem.Character1.imageUrl}`}
        />
      </Head>
      <Navbar activeNavbar="character" />
      <DetailSection dataItem={dataItem} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const data = await getDataTeamCompByIdAPI(id);

  return {
    props: {
      dataItem: data.data,
    },
  };
}
