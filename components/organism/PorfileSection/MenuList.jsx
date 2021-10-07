import cx from 'classnames';
import Flip from 'react-reveal/Flip';

export default function MenuList({ active, onClick, title }) {
  const classTitle = cx({
    'text-white': active,
    'text-gray-400': active ? false : true,
    'font-gemunu text-lg transition duration-200 hover:text-white': true,
  });
  return (
    <li className="flex relative cursor-pointer" onClick={onClick}>
      <p className={classTitle}>{title}</p>
      {active && (
        <Flip left>
          <span className="shadow-inner border-b-2 border-blue-200 border absolute -bottom-1 w-full rounded-md" />
        </Flip>
      )}
    </li>
  );
}
