import Link from 'next/link';
import IconText from '../../atoms/IconText';
import MenuDropDown from './MenuDropDown';
import MenuItem from './MenuItem';
import AuthDropDown from './AuthDropDown';

export default function Navbar(props) {
  const { activeNavbar, isCentered, profile } = props;

  if (isCentered) {
    return (
      <nav className="bg-gray-800 px-4 lg:px-10 h-20 w-full flex items-center justify-center border-b-2 border-gray-600">
        <Link href="/">
          <a>
            <IconText />
          </a>
        </Link>
      </nav>
    );
  }
  return (
    <nav className="bg-gray-800 px-4 lg:px-10 h-20 w-full flex items-center justify-between border-b-2 border-gray-600">
      <Link href="/">
        <a>
          <IconText />
        </a>
      </Link>
      <MenuDropDown profile={profile} />
      <div className="flex items-center space-x-4">
        <ul className="flex flex-row space-x-5 text-white">
          <MenuItem
            title="Home"
            href="/"
            active={activeNavbar === 'character'}
          />
          <MenuItem
            title="Top rated team"
            href="/top-team"
            active={activeNavbar === 'topteam'}
          />
          <MenuItem
            title="Find team"
            href="/find-team"
            active={activeNavbar === 'search'}
          />
        </ul>
        <div
          className="lg:block hidden"
          style={{
            borderLeft: '2px solid lightblue',
            height: '2.50rem',
          }}
        />
        {profile ? (
          <AuthDropDown profile={profile} />
        ) : (
          <Link href="/sign-in">
            <a
              className="font-gemunu px-4 py-1 hidden lg:flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 text-white"
              type="button"
            >
              Sign in
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}
