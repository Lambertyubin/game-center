import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a3347134b6148fea219bce20c89a34a",
  },
});
