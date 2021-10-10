import Link from 'next/link';

export default function IconButton({ text, href, onClick, icon, noLink }) {
  if (noLink) {
    return (
      <button
        className="font-gemunu bg-yellow-400 py-2 px-4 rounded-md flex flex-row space-x-2 items-center hover:shadow-xlcolored transition ease-in-out duration-500"
        type="button"
        onClick={onClick}
      >
        <p className="text-lg text-black">{text}</p>
        <span>{icon}</span>
      </button>
    );
  }

  return (
    <Link href={href}>
      <a
        className="font-gemunu bg-yellow-400 py-2 px-4 rounded-md flex flex-row space-x-2 items-center hover:shadow-xlcolored transition ease-in-out duration-500"
        type="button"
        onClick={onClick}
      >
        <p className="text-lg text-black">{text}</p>
        <span>{icon}</span>
      </a>
    </Link>
  );
}
