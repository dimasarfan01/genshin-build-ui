export default function Input({
  type,
  text,
  placeholder,
  isDesc,
  isFindQuery,
  onClick,
  ...props
}) {
  if (isDesc) {
    return (
      <div className="flex flex-col items-center min-w-full">
        <p className="font-gemunu text-white text-2xl">{text}</p>
        <textarea
          rows="4"
          cols="50"
          placeholder={placeholder}
          className="rounded-md w-11/12"
          {...props}
        />
      </div>
    );
  }
  if (isFindQuery) {
    return (
      <div className="flex flex-row justify-center w-11/12">
        <input
          type="query"
          placeholder={placeholder}
          className="rounded-l-lg w-full px-2"
          {...props}
        />
        <button
          type="button"
          onClick={onClick}
          className="bg-blue-400 p-2 rounded-r-lg"
        >
          <FindIcon />
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center min-w-full">
      <p className="font-gemunu text-white text-2xl">{text}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="lg:w-3/4 w-11/12 p-2 rounded-lg"
        {...props}
      />
    </div>
  );
}

function FindIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 fill-current text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
