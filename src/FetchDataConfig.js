const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const fetchData = async () => {
  let response = await fetch(API_ENDPOINT);
  let data = await response.json();
  return data;
};

export default fetchData;
