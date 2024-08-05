(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/xbox/games");
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (err) {
      console.log("Error fetching data:", err);
      return [];
    }
  };

  // Creating div elements with the first 100 games

  const createGameElements = (games) => {
    const $body = document.querySelector("body");
    games.slice(0, 100).forEach((game) => {
      const $div = document.createElement("div");
      const $h1 = document.createElement("h1");
      $h1.textContent = game.name;
      const $p = document.createElement("p");
      $p.textContent =
        game.releaseDates?.Australia || "Release date not available";
      $div.appendChild($h1);
      $div.appendChild($p);
      $body.appendChild($div);
    });
  };

  const init = async () => {
    try {
      const xboxGames = await fetchData();
      createGameElements(xboxGames);
    } catch (err) {
      console.log("Error initializing:", err);
    }
  };

  init();
})();
