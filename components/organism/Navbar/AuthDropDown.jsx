import { Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import MenuItem from './MenuItem';

export default function AuthDropDown({ profile }) {
  const router = useRouter();
  const handleLogout = async () => {
    Cookies.remove('token');
    router.push('/');
  };
  return (
    <div className="text-right z-10 lg:flex hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="pt-2 inline-flex justify-center w-full text-sm font-medium text-white bg-gray-900 rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
              src={profile.avatar === '' ? '/icons/hutao2.png' : profile.avatar}
              alt="profil-img"
              className="w-12 h-12 border rounded-full bg-gray-900 lg:block hidden"
            />
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
                <MenuItem title="Profile" href="/profile" notList>
                  <img
                    src={
                      profile.avatar === ''
                        ? '/icons/hutao2.png'
                        : profile.avatar
                    }
                    alt="avatar"
                    className="w-5 h-5 mr-2 rounded-full items-center"
                  />
                </MenuItem>
              </Menu.Item>
              <Menu.Item>
                <MenuItem title="Build Team" href="/build-team" notList>
                  <CreateIcon
                    className="w-5 h-5 mr-2 fill-current text-gray-600"
                    aria-hidden="true"
                  />
                </MenuItem>
              </Menu.Item>
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
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
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
