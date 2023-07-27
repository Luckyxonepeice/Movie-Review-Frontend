import { catchError, getToken } from "../utils/helper";
import client from "./client";

export const getAppInfo = async () => {
  try {
    const token = localStorage.getItem("auth-token");
    const { data } = await client("/admin/app-info", {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};

export const getMostRatedMovies = async () => {
  try {
    const token = localStorage.getItem("auth-token");
    const { data } = await client("/admin/most-rated", {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
