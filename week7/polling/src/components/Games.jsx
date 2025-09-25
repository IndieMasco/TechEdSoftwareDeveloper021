import { useState, useEffect } from "react";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGamesData() {
      try {
        const response = await fetch("http://localhost:8080/games");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("API failed to fetch", error);
      }
    }
    getGamesData();
    const gamesInterval = setInterval(getGamesData, 3000);
    return () => clearInterval(gamesInterval);
  }, []);

  return (
    <>
      <h2>Games</h2>
      {games.map((games) => {
        return (
          <div>
            <h3>{games.name}</h3>
          </div>
        );
      })}
    </>
  );
}
