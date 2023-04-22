import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "9788bd998cmsh2c270e64909c9eep103cefjsn73fed5bc69a7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// const options = {
//   method: "GET",
//   url: "https://youtube-v31.p.rapidapi.com/search",
//   params: {
//     q: "music",
//     part: "snippet,id",
//     maxResults: "50",
//     order: "date",
//   },
//   headers: {
//     "X-RapidAPI-Key": "9788bd998cmsh2c270e64909c9eep103cefjsn73fed5bc69a7",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
