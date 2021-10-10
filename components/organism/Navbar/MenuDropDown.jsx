import { Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import MenuItem from './MenuItem';

export default function MenuDropDown({ profile }) {
  const router = useRouter();
  const handleLogout = async () => {
    Cookies.remove('token');
    router.push('/');
  };
  return (
    <div className="text-right absolute right-4 z-10 lg:hidden flex">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Menu
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-44 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-2 space-y-2">
              <Menu.Item>
                <MenuItem title="Home" href="/" notList>
                  <HomeIcon
                    className="w-5 h-5 mr-2 fill-current text-gray-400"
                    aria-hidden="true"
                  />
                </MenuItem>
              </Menu.Item>
              <Menu.Item>
                <MenuItem title="Top rated team" href="/top-team" notList>
                  <PopularIcon
                    className="w-5 h-5 mr-2 fill-current text-gray-400"
                    aria-hidden="true"
                  />
                </MenuItem>
              </Menu.Item>
              <Menu.Item>
                <MenuItem title="Find Team" href="/find-team" notList>
                  <FindIcon
                    className="w-5 h-5 mr-2 fill-current text-gray-500 border border-gray-500 rounded-full"
                    aria-hidden="true"
                  />
                </MenuItem>
              </Menu.Item>
              {profile && (
                <Menu.Item>
                  <MenuItem title="Build Team" href="/build-team" notList>
                    <CreateIcon
                      className="w-5 h-5 mr-2 fill-current text-gray-500 rounded-full"
                      aria-hidden="true"
                    />
                  </MenuItem>
                </Menu.Item>
              )}
              <Menu.Item>
                {profile ? (
                  <MenuItem
                    title="Profile"
                    href={`/profile/${profile._id}`}
                    notList
                  >
                    <img
                      src={
                        profile.avatar === ''
                          ? '/icons/hutao2.png'
                          : profile.avatar
                      }
                      alt="avatar"
                      className="w-5 h-5 mr-2 rounded-full"
                    />
                  </MenuItem>
                ) : (
                  <MenuItem title="Sign in" href="/sign-in" notList>
                    <LoginIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  </MenuItem>
                )}
              </Menu.Item>
              {profile && (
                <Menu.Item>
                  <MenuItem
                    title="Log out"
                    onClick={handleLogout}
                    notList
                    isButton
                  >
                    <LogoutIcon
                      className="w-5 h-5 mr-2 fill-current text-white rounded-full bg-gray-500 p-1"
                      aria-hidden="true"
                    />
                  </MenuItem>
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function CreateIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      />
    </svg>
  );
}

function PopularIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        stroke="gray"
        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LoginIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        stroke="gray"
        d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FindIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LogoutIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}
