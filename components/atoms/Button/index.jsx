import cx from 'classnames';
import Link from 'next/link';

export default function Button({ text, roundedFull, onClick, isLink, href }) {
  const classTitle = cx({
    'rounded-lg': roundedFull ? false : true,
    'rounded-full': roundedFull ? true : false,
    'flex font-gemunu px-4 py-1 items-center justify-center bg-blue-500 hover:bg-blue-400 text-white min-w-20': true,
  });
  const classLink = cx({
    'text-blue-500 hover:text-blue-300 hover:underline': true,
  });
  if (isLink) {
    return (
      <Link href={href}>
        <a className={classLink} type="button" onClick={onClick}>
          {text}
        </a>
      </Link>
    );
  }
  return (
    <button className={classTitle} type="button" onClick={onClick}>
      {text}
    </button>
  );
}
