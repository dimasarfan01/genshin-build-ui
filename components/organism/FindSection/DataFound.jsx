import CardBuild from '../../molecules/CardBuild';
import CharacterIcon from '../../atoms/CharacterIcon';
import Fade from 'react-reveal/Fade';

export default function DataFound({ getDataTeamComp }) {
  return (
    <>
      {getDataTeamComp.map((item, index) => {
        const reducer = (previousValue, currentValue) =>
          previousValue + currentValue;
        const ratingValue =
          item.rating.length === 0
            ? 0
            : item.rating.map((item) => item.value).reduce(reducer) /
              item.rating.length;
        return (
          <Fade key={`${item._id}-${index}`} delay={50 * index}>
            <CardBuild
              isFindTeam
              title={item.teamName}
              rating={ratingValue}
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
