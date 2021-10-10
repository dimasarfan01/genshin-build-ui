import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { getDataTeamCompByQueryAPI } from '../../../services/get-data';
import AuthIcon from '../../atoms/AuthIcon';
import Input from '../../atoms/Input';
import Loader from '../../atoms/Loader';
import Pagination from '../../atoms/Pagination';
import DataFound from './DataFound';
import NoData from './NoData';
import IconButton from '../../atoms/IconButton';

export default function FindSection() {
  const [getDataTeamComp, setGetDataTeamComp] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [queries, setQueries] = useState('');
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    queries === '' && setWaiting(true);
  }, [queries]);
  const handleFind = () => {
    const getDataTeamCompList = async (page, query) => {
      setWaiting(false);
      setLoading(true);
      const response = await getDataTeamCompByQueryAPI(page, query);
      return response.data;
    };
    getDataTeamCompList(pages, queries).then((data) => {
      setGetDataTeamComp(data.data);
      setNumberOfPages(data.numberOfPages);
      setCurrentPage(data.currentPage);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };
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
            <div className="bg-gray-900 py-4 shadow-xl w-full flex flex-col items-center">
              <Input
                placeholder="example: qiqi,mona,naruto,zorro or just qiqi"
                value={queries}
                onChange={(e) => setQueries(e.target.value)}
                onClick={handleFind}
                isFindQuery
              />
            </div>
            {loading ? (
              <div className="flex justify-center">
                <Loader />
              </div>
            ) : (
              <>
                {waiting ? (
                  <div className="flex justify-center flex-col bg-gray-900 lg:w-1/2 w-11/12 items-center rounded-lg py-2">
                    <p className="text-white">i'm Waiting...</p>
                    <img
                      src="/icons/qiqi2.png"
                      alt="notfound-icon"
                      className="w-20"
                    />
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
              </>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
      </Fade>
    </section>
  );
}
