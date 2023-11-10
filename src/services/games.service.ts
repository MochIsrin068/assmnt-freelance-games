export const getListGames = async() => {
    try {
        const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            headers: {
                'X-RapidAPI-Key': '6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            }
        })
        
        const data = response?.json()
        return data
    } catch (error) {
        throw Error
    }
}