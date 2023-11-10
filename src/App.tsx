import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import useGames from "./hooks/useGames";

type TPropsItemGame = {
  title: string;
  genre: string;
  short_description: string;
  platform: string;
  release_date: string;
  thumbnail: string;
};

export default function App() {
  const { games, isLoadData, genres, onFilterbyGenre, genreSelected } = useGames();

  console.log("data", games, isLoadData, games.splice(10));

  return (
    <>
      <main className="bg-[#EDF1F3]">
        <Header />
        <div className="py-[40px] px-[154px] bg-[#EDF1F3]">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Game Terbaru</h2>
            <div className="py-3 px-4 bg-white rounded border border-solid border-[#C9D2DA]">
              <select value={genreSelected} onChange={onFilterbyGenre}>
                <option value="">Semua Genre</option>
                {genres.map((option: string) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {isLoadData ? (
            <div className="text-center flex items-center justify-center bg-white p-8">Loading...</div>
          ) : (
            <div className="grid grid-cols-3 gap-x-9 gap-y-6 mt-[40px]">
              {games.map((item: TPropsItemGame) => {
                return (
                  <ItemCard
                    image={item?.thumbnail}
                    title={item?.title}
                    description={item?.short_description}
                    genre={item?.genre}
                    platform={item?.platform}
                    releaseDate={item?.release_date}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
