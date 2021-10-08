import CardBuild from '../../molecules/CardBuild';
import CharacterIcon from '../../atoms/CharacterIcon';
import { useEffect, useState } from 'react';
import {
  getDataTeamCompAPI,
  getDataTeamCompTopRatedAPI,
} from '../../../services/get-data';
import Fade from 'react-reveal/Fade';
import Loader from '../../atoms/Loader';
import Pagination from '../../atoms/Pagination';

export default function MainSection({ isTopRated }) {
  const [getDataTeamComp, setGetDataTeamComp] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataTeamCompList = async (page) => {
      setLoading(true);

      const data = isTopRated
        ? await getDataTeamCompTopRatedAPI(page)
        : await getDataTeamCompAPI(page);

      setGetDataTeamComp(data.data.data);
      setNumberOfPages(data.data.numberOfPages);
      setCurrentPage(data.data.currentPage);

      setLoading(false);
    };
    getDataTeamCompList(pages);
  }, [pages]);
  const handleIncrement = async () => {
    if (!loading) return setPages(pages + 1);
    return null;
  };
  const handleDecrement = async () => {
    if (!loading) return setPages(pages - 1);
    return null;
  };

  return (
    <div className="bg-gray-900 h-full w-full p-4 min-h-screen">
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : getDataTeamComp.length === 0 ? (
        <div className="flex justify-center">
          <div className="bg-gray-800 flex flex-col p-2 rounded-lg items-center w-64 h-auto">
            <p className="text-white">Not Data yet</p>
            <img src="/icons/hutao3.png" alt="notfound-icon" className="w-20" />
          </div>
        </div>
      ) : (
        <div className="grid grid-flow-row gap-4 lg:grid-cols-3">
          {getDataTeamComp.map((item, index) => {
            const reducer = (previousValue, currentValue) =>
              previousValue + currentValue;
            const ratingValue =
              item.rating.length === 0
                ? 0
                : item.rating.map((item) => item.value).reduce(reducer) /
                  item.rating.length;
            return (
              <Fade key={`${item._id}-${index}`} delay={300 * index}>
                <CardBuild
                  title={item.teamName}
                  rating={ratingValue}
                  href={`/detail/${item._id}`}
                >
                  <CharacterIcon
                    name={item.Character1.dataCharacter.nameCharacter}
                    icon={item.Character1.dataCharacter.imageUrl}
                  />
                  <CharacterIcon
                    name={item.Character2.dataCharacter.nameCharacter}
                    icon={item.Character2.dataCharacter.imageUrl}
                  />
                  <CharacterIcon
                    name={item.Character3.dataCharacter.nameCharacter}
                    icon={item.Character3.dataCharacter.imageUrl}
                  />
                  <CharacterIcon
                    name={item.Character4.dataCharacter.nameCharacter}
                    icon={item.Character4.dataCharacter.imageUrl}
                  />
                </CardBuild>
              </Fade>
            );
          })}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
