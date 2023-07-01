const apiUrl = "http://localhost:5194/api";

const questionApi = {
  getQuestionsForCategory: async (categoryId: number) => {
    return fetch(`${apiUrl}/categories/${categoryId}/questions`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
  getAllCategories: async () => {
    return fetch(`${apiUrl}/categories`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
};

export default questionApi;
