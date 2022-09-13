const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "61b61662d5mshe5433faa725328ap147ba9jsn953457a4b170",
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
};

// google "separation of concerns coding"
const getPlanets = () => {
  return fetch(
    "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
    options
  ).then((res) => res.json());
};

export default getPlanets;
