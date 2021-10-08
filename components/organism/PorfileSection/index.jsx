import React, { useState } from 'react';
import MenuList from './MenuList';
import ProfileMenu from './ProfileMenu';

export default function ProfileSection({
  dataProfile,
  paramsId,
  myDataProfile,
  currentUser,
}) {
  const [tabs, setTabs] = useState('profile');
  const [updateMenu, setUpdateMenu] = useState(false);
  const handleClickMenuList = (val) => {
    setTabs(val);
    setUpdateMenu(false);
  };
  return (
    <div className="bg-gray-900 h-full w-full p-4 min-h-screen flex justify-center">
      <div className="flex flex-col items-center bg-gray-800 lg:w-1/2 w-full rounded-lg">
        <div className="lg:w-9/12 w-11/12 flex flex-col items-center space-y-4 h-full mb-6">
          <ul className="flex flex-row space-x-5 bg-gray-900 mt-4 p-4 rounded-lg w-full justify-center">
            <MenuList
              active={tabs === 'profile'}
              onClick={() => handleClickMenuList('profile')}
              title="Profile"
            />
            <MenuList
              active={tabs === 'posts'}
              onClick={() => handleClickMenuList('posts')}
              title="Posts"
            />
          </ul>
          <div className="bg-gray-900 w-full flex flex-col relative rounded-lg min-h-80">
            <ProfileMenu
              dataProfile={dataProfile}
              show={tabs === 'profile'}
              paramsId={paramsId}
              updateMenu={updateMenu}
              setUpdateMenu={setUpdateMenu}
              myDataProfile={myDataProfile}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
