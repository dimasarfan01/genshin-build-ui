import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { getDataTeamCompByQueryAPI } from '../../../services/get-data';
import AuthIcon from '../../atoms/AuthIcon';
import Input from '../../atoms/Input';
import Loader from '../../atoms/Loader';
import Pagination from '../../atoms/Pagination';
import DataFound from './DataFound';
import NoData from './NoData';

export default function FindSection() {
  const [getDataTeamComp, setGetDataTeamComp] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [queries, setQueries] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDataTeamCompList = async (page, query) => {
      setLoading(true);
      const data = await getDataTeamCompByQueryAPI(page, query);
      setGetDataTeamComp(data.data.data);
      setNumberOfPages(data.data.numberOfPages);
      setCurrentPage(data.data.currentPage);
      setLoading(false);
    };
    getDataTeamCompList(pages, queries);
  }, [pages, queries]);
  const handleIncrement = async () => {
    if (!loading) return setPages(pages + 1);
    return null;
  };
  const handleDecrement = async () => {
    if (!loading) return setPages(pages - 1);
    return null;
  };
  return (
    <section className="bg-gray-900 w-full h-full min-h-screen flex justify-center py-4 px-2">
      <Fade delay={200}>
        <div className="flex flex-col items-center lg:w-5/12 w-full bg-gray-800 rounded-xl shadow-xlsignin">
          <AuthIcon text="Find Team" />
          <div className="flex flex-col w-full items-center mt-4 space-y-4">
            <div className="w-full bg-gray-900 items-center py-4 shadow-xl">
              <Input
                type="text"
                placeholder="example: qiqi,mona,naruto,zorro or just qiqi"
                value={queries}
                onChange={(e) => setQueries(e.target.value)}
              />
            </div>
            {loading ? (
              <div className="flex justify-center">
                <Loader />
              </div>
            ) : (
              <>
                {getDataTeamComp.length === 0 ? (
                  <NoData queries={queries} />
                ) : (
                  <DataFound getDataTeamComp={getDataTeamComp} />
                )}
              </>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
      </Fade>
    </section>
  );
}
