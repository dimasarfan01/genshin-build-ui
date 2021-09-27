import Image from 'next/image';

export default function IconText() {
  return (
    <div className="flex items-center">
      <Image src="/icons/qiqi.png" width="50" height="50" alt="thumbnail" />
      &nbsp;
      <h1 className="font-mono text-xl text-white transition duration-200 hover:text-blue-100">
        genshin
        <span className="text-blue-300">build</span>
      </h1>
    </div>
  );
}
