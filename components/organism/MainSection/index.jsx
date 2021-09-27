import CardBuild from '../../molecules/CardBuild';
import CharacterIcon from '../../atoms/CharacterIcon';

export default function MainSection() {
  return (
    <div className="bg-gray-900 h-full w-full p-4">
      <div className="grid grid-flow-row gap-4 lg:grid-cols-3">
        <CardBuild title="Morgana" rating={4}>
          <CharacterIcon icon="Ganyu" name="Ganyu" />
          <CharacterIcon icon="Venti" name="Venti" />
          <CharacterIcon icon="Mona" name="Mona" />
          <CharacterIcon icon="Diona" name="Diona" />
        </CardBuild>
        <CardBuild title="National Team" rating={4.7}>
          <CharacterIcon icon="Xiangling" name="Xiangling" />
          <CharacterIcon icon="Chongyun" name="Chongyun" />
          <CharacterIcon icon="Xinqiu" name="Xinqiu" />
          <CharacterIcon icon="Bennett" name="Bennett" />
        </CardBuild>
        <CardBuild title="Taser Comp" rating={3.5}>
          <CharacterIcon icon="Tartaglia" name="Tartaglia" />
          <CharacterIcon icon="Beidou" name="Beidou" />
          <CharacterIcon icon="Sucrose" name="Sucrose" />
          <CharacterIcon icon="Fischl" name="Fischl" />
        </CardBuild>
        <CardBuild title="Vape Hu Tao Comp" rating={4.5}>
          <CharacterIcon icon="Hu Tao" name="Hu Tao" />
          <CharacterIcon icon="Xinqiu" name="Xinqiu" />
          <CharacterIcon icon="Sucrose" name="Sucrose" />
          <CharacterIcon icon="Bennett" name="Bennett" />
        </CardBuild>
      </div>
    </div>
  );
}
