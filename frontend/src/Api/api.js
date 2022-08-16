const apiUrl = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return fetch(apiUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchGetUsers;
