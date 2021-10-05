export default function SelectItem({
  name,
  children,
  isCharacter,
  isAritfact,
  isWeapon,
  dataItem,
  hasData,
  ...props
}) {
  if (hasData) {
    return (
      <div className="px-2 w-full flex items-center flex-col">
        <p className="text-white font-gemunu text-lg">{name}</p>
        <select className="w-full rounded-lg p-2 cursor-pointer" {...props}>
          {dataItem.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {isCharacter && item.nameCharacter}
                {isAritfact && `2 ${item.nameArtifact}`}
                {isWeapon && item.nameWeapon}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  return (
    <div className="px-2 w-full flex flex-col items-center">
      <p className="text-white">{name}</p>
      <select className="w-full rounded-lg p-2 cursor-pointer" {...props}>
        {children}
      </select>
    </div>
  );
}
