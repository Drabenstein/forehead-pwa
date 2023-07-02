import { globalConfig } from "../config";

const questionApi = {
  getQuestionsForCategory: (categoryId: number) => {
    return fetch(
      `${globalConfig.config.apiUrl}/categories/${categoryId}/questions`
    )
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  },
  getAllCategories: () => {
    return fetch(`${globalConfig.config.apiUrl}/categories`)
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  },
};

export default questionApi;
