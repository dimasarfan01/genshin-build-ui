import Rate from 'rc-rate';
import CardData from './CardData';
import Fade from 'react-reveal/Fade';
import moment from 'moment';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import IconButton from '../../atoms/IconButton';
import { postRatingDataTeamAPI } from '../../../services/post-data';
import { toast } from 'react-toastify';
import Button from '../../atoms/Button';
import { useRouter } from 'next/router';
import { nFormatter } from '../../../function/numberFormatter';

export default function DetailSection({ dataItem, dataId }) {
  const {
    teamName,
    rating,
    Character1,
    Character2,
    Character3,
    Character4,
    desc,
    video,
    creator,
    createdAt,
    updatedAt,
    _id,
  } = dataItem;
  const router = useRouter();
  const [myCurrentRating, setMyCurrentRating] = useState(0);
  const [isCreator, setIsCreator] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  const ratingValue =
    rating.length === 0
      ? 0
      : rating.map((item) => item.value).reduce(reducer) / rating.length;

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('value', myCurrentRating);
    const result = await postRatingDataTeamAPI(dataId, data);
    if (result?.error) toast.error(result.message);
    else {
      toast.success(result.data);
      router.reload();
    }
  };
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsUserExist(true);
      const jwtToken = window.atob(`${token}`);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload.user;
      const findId = rating.findIndex(
        (val) => val._id.toString() === userFromPayload.id
      );
      setMyCurrentRating(findId === -1 ? 0 : rating[findId].value);
      if (
        userFromPayload.id === creator._id ||
        userFromPayload.role === 'admin'
      ) {
        setIsCreator(true);
      }
    }
  }, []);
  return (
    <section className="bg-gray-900 h-full w-full lg:p-4 py-4 px-1 min-h-screen">
      <div className="flex flex-col lg:mx-40 mx-0 bg-gray-800 p-2 rounded-md space-y-4">
        <div className="flex flex-row justify-between pt-2">
          <h1 className="text-white font-mono lg:text-lg text-sm pl-1 lg:w-auto w-36">
            {teamName}
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <Rate
                count={5}
                defaultValue={0}
                value={ratingValue}
                allowHalf={true}
                disabled
              />
              <p className="text-yellow-400 lg:text-lg text-sm">
                {ratingValue.toString().length > 3
                  ? ratingValue.toString().slice(0, 4)
                  : ratingValue}
              </p>
            </div>
            <p className="text-white text-sm font-gemunu text-right">
              ({nFormatter(Number(rating.length), 1)}{' '}
              {rating.length > 1 ? 'users' : 'user'})
            </p>
          </div>
        </div>
        <hr />
        {isUserExist && (
          <div className="flex justify-between flex-row items-center">
            <div className="bg-gray-900 p-2 rounded-lg flex flex-row">
              <div className="flex flex-col">
                <p className="text-white font-gemunu text-md">
                  Rate this build
                </p>
                <Rate
                  count={5}
                  value={myCurrentRating}
                  allowHalf={true}
                  onChange={(value) => setMyCurrentRating(value)}
                />
              </div>
              <Button text="Submit" onClick={handleSubmit} />
            </div>
            {isCreator && (
              <IconButton
                text="Update"
                href={`/update/${_id}`}
                icon={<UpdateIcon />}
              />
            )}
          </div>
        )}
        <div className="flex flex-row bg-gray-900 justify-between min-h-16 items-center lg:px-4 lg:py-2 p-2 rounded-lg">
          <div
            className="flex flex-row items-center space-x-2 cursor-pointer "
            onClick={() => router.push(`/profile/${creator._id}`)}
          >
            <img
              src={creator.avatar === '' ? '/icons/hutao2.png' : creator.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-white hover:underline">{creator.username}</p>
          </div>
          <div>
            {createdAt === updatedAt ? (
              <>
                <p className="text-white text-xs text-right">Posted At</p>
                <p className="text-white">{moment(createdAt).fromNow()}</p>
              </>
            ) : (
              <>
                <p className="text-white text-xs text-right">Updated At</p>
                <p className="text-white">{moment(updatedAt).fromNow()}</p>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-flow-row gap-2 lg:grid-cols-2">
          <CardData dataCharacter={Character1} number={1} />
          <CardData dataCharacter={Character2} number={2} />
          <CardData dataCharacter={Character3} number={3} />
          <CardData dataCharacter={Character4} number={4} />
        </div>
        <Fade>
          <div className="flex flex-col bg-gray-900 p-2 rounded-lg space-y-3">
            <p className="text-white text-center">{desc}</p>
            {video === '' ? null : (
              <div className="lg:h-96 h-48">
                <iframe
                  height="100%"
                  width="100%"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </Fade>
        {/* <div className="flex flex-col bg-gray-900 p-2 rounded-lg space-y-3">
          <p className="text-white">Review this build</p>
        </div> */}
      </div>
    </section>
  );
}

function UpdateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 fill-current text-black"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path
        fillRule="evenodd"
        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
