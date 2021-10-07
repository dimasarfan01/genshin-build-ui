import React, { useState } from 'react';
import MenuList from './MenuList';
import ProfileMenu from './ProfileMenu';

export default function ProfileSection({ dataProfile, paramsId }) {
  const [tabs, setTabs] = useState('profile');
  const [updateMenu, setUpdateMenu] = useState(false);
  return (
    <div className="bg-gray-900 h-full w-full p-4 min-h-screen flex justify-center">
      <div className="flex flex-col items-center bg-gray-800 lg:w-1/2 w-full rounded-lg">
        <div className="lg:w-9/12 w-11/12 flex flex-col items-center space-y-4">
          <ul className="flex flex-row space-x-5 bg-gray-900 mt-4 p-4 rounded-lg w-full justify-center">
            <MenuList
              active={tabs === 'profile'}
              onClick={() => setTabs('profile')}
              title="Profile"
            />
            <MenuList
              active={tabs === 'posts'}
              onClick={() => setTabs('posts')}
              title="Posts"
            />
          </ul>
          <div className="bg-gray-900 w-full flex flex-col relative rounded-lg min-h-80">
            {updateMenu === false ? (
              <ProfileMenu
                dataProfile={dataProfile}
                show={tabs === 'profile'}
                paramsId={paramsId}
                onClick={() => setUpdateMenu(true)}
              />
            ) : (
              <div onClick={() => setUpdateMenu(false)}>update profile</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
