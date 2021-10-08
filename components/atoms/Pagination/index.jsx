export default function Pagination(props) {
  const {
    currentPage,
    numberOfPages,
    handleDecrement,
    handleIncrement,
    onChange,
    value,
  } = props;
  let rows = [];
  for (let index = 1; index <= numberOfPages; index++) {
    rows.push(index);
  }
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
      <div className="flex flex-row items-center space-x-1 font-gemunu bg-blue-900 text-white px-4 cursor-default">
        <p>Pages:</p>
        <select
          className={`font-gemunu bg-blue-900 text-white px-2 ${
            numberOfPages === 0 && 'cursor-not-allowed'
          }`}
          value={value}
          onChange={onChange}
          defaultValue={0}
          disabled={numberOfPages === 0}
        >
          {rows.map((item, index) => {
            return (
              <option key={index} value={item}>
                {numberOfPages === 0 ? 0 : item}
              </option>
            );
          })}
        </select>
      </div>
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
