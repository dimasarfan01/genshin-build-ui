export default function Pagination(props) {
  const { currentPage, numberOfPages, handleDecrement, handleIncrement } =
    props;
  return (
    <div className="flex flex-row justify-center mt-8 mb-4">
      {currentPage === 1 ? (
        <button
          className="disabled:opacity-50 font-gemunu px-4 py-1 flex items-center justify-center rounded-l-lg bg-blue-500 text-white cursor-not-allowed"
          disabled
        >
          Previous
        </button>
      ) : (
        <button
          className="font-gemunu px-4 py-1 flex items-center justify-center rounded-l-lg bg-blue-500 hover:bg-blue-400 text-white"
          type="button"
          onClick={handleDecrement}
        >
          Previous
        </button>
      )}
      <button
        className="font-gemunu px-4 py-1 flex items-center justify-center bg-blue-900 text-white cursor-default"
        disabled
      >
        Pages: {numberOfPages === 0 ? 0 : currentPage} / {numberOfPages}
      </button>
      {currentPage === numberOfPages || numberOfPages === 0 ? (
        <button
          className="disabled:opacity-50 cursor-not-allowed font-gemunu px-7 py-1 flex items-center justify-center rounded-r-lg bg-blue-500 text-white"
          disabled
        >
          Next
        </button>
      ) : (
        <button
          className="font-gemunu px-7 py-1 flex items-center justify-center rounded-r-lg bg-blue-500 hover:bg-blue-400 text-white"
          type="button"
          onClick={handleIncrement}
        >
          Next
        </button>
      )}
    </div>
  );
}
