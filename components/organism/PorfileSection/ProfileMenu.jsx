import Fade from 'react-reveal/Fade';
import UpdateProfile from './UpdateProfile';

export default function ProfileMenu({
  dataProfile,
  show,
  paramsId,
  setUpdateMenu,
  updateMenu,
  myDataProfile,
  currentUser,
}) {
  if (updateMenu) {
    return (
      show && (
        <UpdateProfile
          myDataProfile={myDataProfile}
          setUpdateMenu={setUpdateMenu}
          paramsId={paramsId}
        />
      )
    );
  }
  return (
    show && (
      <Fade>
        {currentUser.id === paramsId || currentUser.role === 'admin' ? (
          <div className="absolute top-4 right-0 z-10">
            <button
              onClick={() => setUpdateMenu(true)}
              className="items-center flex flex-row py-2 px-4 bg-blue-500 rounded-l-lg hover:shadow-xlcolored transition ease-in-out duration-300"
            >
              <span className="text-white font-gemunu">
                Update <span className="text-yellow-300">Profile</span>
              </span>
              <UpdateIcon />
            </button>
          </div>
        ) : (
          <></>
        )}
        <img
          src="/namecards/eula.png"
          alt="namecards"
          className="w-full rounded-t-lg h-48 object-cover"
        />
        <img
          src={
            dataProfile.avatar === '' ? '/icons/hutao2.png' : dataProfile.avatar
          }
          alt="namecards"
          className="w-20 h-20 object-cover absolute top-36 left-5 rounded-full border-2 bg-gray-800"
        />
        <p className="text-white font-gemunu absolute top-40 left-28 text-2xl">
          {dataProfile.username}
        </p>
        <p className="text-white font-gemunu flex p-4 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          condimentum, turpis quis facilisis scelerisque, tortor nisi lacinia
          lectus, vitae placerat magna risus in velit. Mauris viverra nibh eu
          tortor vestibulum tristique. Aliquam nec dui eget metus imperdiet
          elementum a et justo. Aliquam gravida turpis et tristique elementum
        </p>
      </Fade>
    )
  );
}

function UpdateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 fill-current text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
