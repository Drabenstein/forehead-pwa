const questionApi = {
  getQuestionsForCategory: async (category) => {
    return await fetch(`http://localhost:3001/questions?category=${category}`)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
  getAllCategories: async () => {
    return await fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
};
