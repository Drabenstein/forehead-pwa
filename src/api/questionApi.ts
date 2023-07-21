import { globalConfig } from "../config";

const questionApi = {
  getQuestionsForCategory: (categoryId: number) => {
    const headers = new Headers({
      "X-API-Key": globalConfig.config.apiKey,
    });

    return fetch(
      `${globalConfig.config.apiUrl}/categories/${categoryId}/questions`,
      {
        headers: headers,
      },
    )
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  },
  getAllCategories: () => {
    const headers = new Headers({
      "X-API-Key": globalConfig.config.apiKey,
    });

    return fetch(`${globalConfig.config.apiUrl}/categories`, {
      headers: headers,
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  },
};

export default questionApi;
