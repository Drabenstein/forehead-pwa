const apiUrl = "http://localhost:3000/api";

const questionApi = {
  getQuestionsForCategory: async (categoryId: number) => {
    return await fetch(
      `${apiUrl}/questions?` +
        new URLSearchParams({
          categoryId: categoryId.toString(),
        })
    )
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
