import Rate from 'rc-rate';
import Link from 'next/link';
import cx from 'classnames';

export default function CardBuild(props) {
  const { title, rating, children, href = '/', isFindTeam } = props;
  const classCard = cx({
    'bg-gray-800': isFindTeam ? false : true,
    'bg-gray-900': isFindTeam ? true : false,
    'rounded-md p-2 flex flex-col hover:shadow-xlcolored cursor-pointer transition ease-in-out duration-300': true,
  });
  const classChildren = cx({
    'mx-2': isFindTeam ? true : false,
    'flex flex-row mt-2 space-x-2 justify-evenly ': true,
  });

  return (
    <Link href={href}>
      <div className={classCard}>
        <div className="flex flex-row justify-between items-center">
          {title.length > 15 ? (
            <p className="text-white font-mono pl-3 text-sm">{title}</p>
          ) : (
            <p className="text-white font-mono pl-3">{title}</p>
          )}
          <Rate count={5} value={rating} allowHalf={true} disabled />
        </div>
        <div className={classChildren}>{children}</div>
      </div>
    </Link>
  );
}
