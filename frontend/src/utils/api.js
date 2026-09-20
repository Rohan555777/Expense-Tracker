import { Base_URL } from "../const/constant.js";
import axios from "axios";

async function fetchApi() {
  try {
    const res = await axios.get(Base_URL + "/transaction/summary", {
      withCredentials: true,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export default fetchApi;
export async function fetchPostApi(path, data) {
  try {
    const res = await axios.post(Base_URL + path, data, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }

    throw new Error("Something went wrong");
  }
}
