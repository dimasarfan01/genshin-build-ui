import Image from 'next/image';

export default function CharacterIcon(props) {
  const { icon, name } = props;
  return (
    <div className="items-center flex flex-col space-y-1">
      <img
        src={`/character/${icon}.png`}
        alt="thumbnail"
        className="shadow-lg object-fit rounded-md lg:w-20 w-16 bg-gray-800 lg:min-w-20 min-w-16"
      />
      {name.length > 7 ? (
        <p className="text-white font-mono text-sm text-center">{name}</p>
      ) : (
        <p className="text-white font-mono">{name}</p>
      )}
    </div>
  );
}
