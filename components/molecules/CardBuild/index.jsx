import Rate from 'rc-rate';

export default function CardBuild(props) {
  const { title, rating, children } = props;
  return (
    <div className="bg-gray-700 rounded-md p-2 flex flex-col">
      <div className="flex flex-row justify-between items-center">
        {title.length > 15 ? (
          <p className="text-white font-mono pl-3 text-sm">{title}</p>
        ) : (
          <p className="text-white font-mono pl-3">{title}</p>
        )}
        <Rate count={5} value={rating} allowHalf={true} disabled />
      </div>
      <div className="flex flex-row mt-2 space-x-2 justify-evenly">
        {children}
      </div>
    </div>
  );
}
