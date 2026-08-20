import characters from "./utils/GetCharacterIconsKeyHalf";
import CharacterCard from "./components/CharacterCard";

const AllCharacter = () => {
  return (
    <div className="mx-auto flex w-full flex-wrap justify-around gap-x-5.5 gap-y-5 m-auto">
      {characters.map((data) => (
        <CharacterCard
          key={data.name}
          name={data.name}
          srcFrontPage={data.medium}
          srcBackCover={data.fullGradient}
        />
      ))}
    </div>
  );
};

export default AllCharacter;
