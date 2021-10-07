export default function AuthIcon({ text }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-9 h-30 bg-gray-800 rounded-t-2xl -mr-4 z-10" />
        <div className="flex flex-col items-center bg-gray-900 w-44">
          <h1 className="text-white font-gemunu text-2xl">{text}</h1>
        </div>
        <div className="w-9 h-30 bg-gray-800 rounded-t-2xl -ml-4 z-10" />
      </div>
      <span
        className="text-white bg-gray-900 rounded-b-xl h-4"
        style={{ padding: '0 4.5rem' }}
      />
    </>
  );
}
