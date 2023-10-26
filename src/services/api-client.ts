import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8da9df0365c6493b83ee8940591473d6",
  },
});
