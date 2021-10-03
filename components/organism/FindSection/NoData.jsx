export default function NoData({ queries }) {
  return (
    <>
      {queries === '' ? (
        <div className="flex justify-center flex-col bg-gray-900 lg:w-1/2 w-11/12 items-center rounded-lg py-2">
          <p className="text-white">i'm Waiting...</p>
          <img src="/icons/qiqi2.png" alt="notfound-icon" className="w-20" />
        </div>
      ) : (
        <div className="flex justify-center flex-col bg-gray-900 lg:w-1/2 w-11/12 items-center rounded-lg py-2">
          <p className="text-white">Not Found</p>
          <img src="/icons/hutao3.png" alt="notfound-icon" className="w-20" />
        </div>
      )}
    </>
  );
}
