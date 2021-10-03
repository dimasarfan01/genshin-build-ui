import CharacterIcon from '../../atoms/CharacterIcon';
import Fade from 'react-reveal/Fade';

export default function CardData({ dataCharacter, number }) {
  return (
    <Fade delay={300 * number}>
      <div className="flex flex-col lg:p-4 px-1 py-2 bg-gray-900 rounded-lg space-y-4">
        <div className="flex flex-row justify-evenly">
          <CharacterIcon
            icon={dataCharacter.dataCharacter.imageUrl}
            name={dataCharacter.dataCharacter.nameCharacter}
          />
          <CharacterIcon
            icon={dataCharacter.dataWeapon.imageUrl}
            name={dataCharacter.dataWeapon.nameWeapon}
          />

          {dataCharacter.dataArtifact.artifact1._id ===
          dataCharacter.dataArtifact.artifact2._id ? (
            <div className="flex flex-col">
              <div className="flex flex-row lg:space-x-5 space-x-4">
                <CharacterIcon
                  icon={dataCharacter.dataArtifact.artifact1.imageUrl}
                  name={``}
                />
                <CharacterIcon
                  icon={dataCharacter.dataArtifact.artifact2.imageUrl}
                  name={``}
                />
              </div>
              {dataCharacter.dataArtifact.artifact1.nameArtifact.length > 17 ? (
                <p className="text-center text-white font-mono text-ss">
                  4 {dataCharacter.dataArtifact.artifact1.nameArtifact}
                </p>
              ) : (
                <p className="text-center text-white font-mono text-xs">
                  4 {dataCharacter.dataArtifact.artifact1.nameArtifact}
                </p>
              )}
            </div>
          ) : (
            <>
              <CharacterIcon
                icon={dataCharacter.dataArtifact.artifact1.imageUrl}
                name={`2 ${dataCharacter.dataArtifact.artifact1.nameArtifact}`}
              />
              <CharacterIcon
                icon={dataCharacter.dataArtifact.artifact2.imageUrl}
                name={`2 ${dataCharacter.dataArtifact.artifact2.nameArtifact}`}
              />
            </>
          )}
        </div>
        <div className="flex flex-row space-x-2 justify-evenly">
          <CharacterIcon
            icon={'/images/stat/Icon_Flower_of_Life.png'}
            name={dataCharacter.dataArtifact.flower}
            isMini
          />
          <CharacterIcon
            icon={'/images/stat/Icon_Plume_of_Death.png'}
            name={dataCharacter.dataArtifact.plume}
            isMini
          />
          <CharacterIcon
            icon={'/images/stat/Icon_Sands_of_Eon.png'}
            name={dataCharacter.dataArtifact.sands}
            isMini
          />
          <CharacterIcon
            icon={'/images/stat/Icon_Goblet_of_Eonothem.png'}
            name={dataCharacter.dataArtifact.goblet}
            isMini
          />
          <CharacterIcon
            icon={'/images/stat/Icon_Circlet_of_Logos.png'}
            name={dataCharacter.dataArtifact.circlet}
            isMini
          />
        </div>
      </div>
    </Fade>
  );
}
