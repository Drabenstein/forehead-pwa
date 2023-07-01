const apiUrl = "http://localhost:5194/api";

const questionApi = {
  getQuestionsForCategory: async (categoryId: number) => {
    return await fetch(`${apiUrl}/categories/${categoryId}/questions`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
  getAllCategories: async () => {
    return await fetch(`${apiUrl}/categories`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
};

export default questionApi;
