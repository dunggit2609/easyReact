import axiosClient from "./axiosClient";

const tableApi = {
  async getAll() {
    const url = "people/";
    const data = await axiosClient.get(url);
    return data;
  },
};

export default tableApi;
