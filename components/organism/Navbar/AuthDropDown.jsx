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
          <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-white bg-gray-900 rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
                    className="w-5 h-5 mr-2 rounded-full"
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
