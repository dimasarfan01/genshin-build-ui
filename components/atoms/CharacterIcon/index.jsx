export default function CharacterIcon(props) {
  const { icon, name, isMini } = props;
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  return (
    <div className="items-center flex flex-col space-y-1">
      {isMini ? (
        <img
          src={`${ROOT_API}${icon}`}
          alt="thumbnail"
          className="shadow-lg object-fit rounded-md w-8 max-w-xs bg-gray-700"
        />
      ) : (
        <img
          src={`${ROOT_API}${icon}`}
          alt="thumbnail"
          className="shadow-lg object-fit rounded-md lg:w-20 w-16 bg-gray-700 lg:min-w-16 min-w-16"
        />
      )}
      {name.length > 14 ? (
        <p
          className="text-white font-mono text-ss text-center"
          style={{ maxWidth: 50 }}
        >
          {name}
        </p>
      ) : (
        <p className="text-white font-mono text-xs text-center">{name}</p>
      )}
    </div>
  );
}
