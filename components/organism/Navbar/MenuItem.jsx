import Link from 'next/link';
import cx from 'classnames';
import Flip from 'react-reveal/Flip';

export default function MenuItem(props) {
  const {
    title,
    active,
    href = '/',
    notList,
    children,
    onClick,
    isButton,
  } = props;
  const classTitle = cx({
    'text-white': active,
    'text-gray-400': active ? false : true,
    'font-gemunu text-lg transition duration-200 hover:text-white': true,
  });
  return notList ? (
    isButton ? (
      <div className="hover:bg-blue-300 rounded-md p-1 cursor-pointer">
        <a className="w-40 flex flex-row" type="button" onClick={onClick}>
          {children}
          <p className="font-mono text-gray-700 text-sm"> {title}</p>
        </a>
      </div>
    ) : (
      <div className="hover:bg-blue-300 rounded-md p-1">
        <Link href={href}>
          <a className="w-40 flex flex-row">
            {children}
            <p className="font-mono text-gray-700 text-sm"> {title}</p>
          </a>
        </Link>
      </div>
    )
  ) : (
    <li className="lg:flex hidden relative">
      <Link href={href}>
        <a>
          <p className={classTitle}>{title}</p>
          {active && (
            <Flip left>
              <span className="shadow-inner border-b-2 border-blue-200 border absolute -bottom-1 w-full rounded-md" />
            </Flip>
          )}
        </a>
      </Link>
    </li>
  );
}
