import Rate from 'rc-rate';
import CardData from './CardData';
import Fade from 'react-reveal/Fade';

export default function DetailSection({ dataItem }) {
  const {
    teamName,
    rating,
    Character1,
    Character2,
    Character3,
    Character4,
    desc,
    video,
  } = dataItem;
  return (
    <section className="bg-gray-900 h-full w-full lg:p-4 py-4 px-1 min-h-screen">
      <div className="flex flex-col lg:mx-40 mx-0 bg-gray-800 p-2 rounded-md space-y-4">
        <div className="flex flex-row justify-between pt-2">
          <h1 className="text-white font-mono text-lg pl-1">{teamName}</h1>
          <Rate count={5} value={rating} allowHalf={true} disabled />
        </div>
        <hr />
        <div className="grid grid-flow-row gap-2 lg:grid-cols-2">
          <CardData dataCharacter={Character1} number={1} />
          <CardData dataCharacter={Character2} number={2} />
          <CardData dataCharacter={Character3} number={3} />
          <CardData dataCharacter={Character4} number={4} />
        </div>
        <Fade delay={300 * 5}>
          <div className="flex flex-col bg-gray-900 p-2 rounded-lg space-y-3">
            <p className="text-white text-center">{desc}</p>
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
          </div>
        </Fade>
        <div className="flex flex-col bg-gray-900 p-2 rounded-lg space-y-3">
          <p className="text-white">Review this build</p>
        </div>
      </div>
    </section>
  );
}
