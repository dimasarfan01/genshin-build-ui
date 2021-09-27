import Link from 'next/link';
import cx from 'classnames';

export default function MenuItem(props) {
  const { title, active, href = '/', notList, icon } = props;
  const classTitle = cx({
    'text-white': active,
    'text-gray-400': active ? false : true,
    'font-gemunu text-lg transition duration-200 hover:text-white': true,
  });
  return notList ? (
    <div className="hover:bg-blue-300 rounded-md p-1">
      <Link href={href}>
        <a className="w-40 flex flex-row">
          {icon}
          <p className="font-mono text-gray-700 text-sm"> {title}</p>
        </a>
      </Link>
    </div>
  ) : (
    <li className="lg:flex hidden">
      <Link href={href}>
        <a className={classTitle}>{title}</a>
      </Link>
    </li>
  );
}
