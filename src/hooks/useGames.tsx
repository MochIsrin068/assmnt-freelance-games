import { useEffect, useState } from "react";
import { getListGames } from "../services/games.service";

export default function useGames() {
  const [isLoadData, setIsLoadData] = useState(false);
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState<Array<string>>([]);
  const [genreSelected, setGenreSelected] = useState("");

  function removeDuplicates(arr: Array<string>) {
    return arr.filter((item, index, self) => {
        return index === self.indexOf(item);
    });
}

  const loadDataGames = async () => {
    setIsLoadData(true);
    try {
      const data = await getListGames();
      const dataFiltered = !genreSelected
        ? data
        : data?.filter((item: {genre: string}) => item?.genre === genreSelected);
      setGames(dataFiltered);

      setIsLoadData(false);

      const genresData : Array<string> = data.map((item: { genre: string }) => item.genre)
      setGenres(removeDuplicates(genresData));
    } catch (error) {
      setIsLoadData(false);
    }
  };

  const onFilterbyGenre = (event: {target: {value: string}}) => {
    const value = event?.target?.value || '';
    setGenreSelected(value);
  };

  useEffect(() => {
    loadDataGames();
  }, [genreSelected]);

  return {
    games,
    isLoadData,
    onFilterbyGenre,
    genres,
    genreSelected
  };
}
