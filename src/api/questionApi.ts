import { globalConfig } from "../config";

const questionApi = {
  getQuestionsForCategory: async (categoryId: number) => {
    return fetch(`${globalConfig.config.apiUrl}/categories/${categoryId}/questions`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
  getAllCategories: async () => {
    return fetch(`${globalConfig.config.apiUrl}/categories`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
};

export default questionApi;
