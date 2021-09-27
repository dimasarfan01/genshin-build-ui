import IconText from '../../atoms/IconText';

export default function Footer() {
  return (
    <div className="bg-gray-800 p-4 flex lg:flex-row space-y-2 flex-col justify-between">
      <div className="flex flex-col lg:w-4/12 w-auto">
        <IconText />
        <p className="text-gray-200">
          genshinbuild is not affiliated with or endorsed by miHoYo.
          genshinbuild is a Build team composition for Genshin Impact player.
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-200 font-mono">© Since 2021</p>
        <img
          src="/icons/hutao.png"
          alt="thumbnail"
          className="h-16 w-16 lg:h-28 lg:w-28"
        />
      </div>
    </div>
  );
}
