import CardBuild from '../../molecules/CardBuild';
import CharacterIcon from '../../atoms/CharacterIcon';
import Fade from 'react-reveal/Fade';

export default function DataFound({ getDataTeamComp }) {
  return (
    <>
      {getDataTeamComp.map((item, index) => {
        return (
          <Fade key={`${item._id}-${index}`} delay={300 * index}>
            <CardBuild
              isFindTeam
              title={item.teamName}
              rating={item.rating}
              href={`/detail/${item._id}`}
            >
              <CharacterIcon
                name={item.Character1.dataCharacter.nameCharacter}
                icon={item.Character1.dataCharacter.imageUrl}
              />
              <CharacterIcon
                name={item.Character2.dataCharacter.nameCharacter}
                icon={item.Character2.dataCharacter.imageUrl}
              />
              <CharacterIcon
                name={item.Character3.dataCharacter.nameCharacter}
                icon={item.Character3.dataCharacter.imageUrl}
              />
              <CharacterIcon
                name={item.Character4.dataCharacter.nameCharacter}
                icon={item.Character4.dataCharacter.imageUrl}
              />
            </CardBuild>
          </Fade>
        );
      })}
    </>
  );
}
