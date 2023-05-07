// const getFact = async () =>
//   axios.get("https://catfact.ninja/fact").then((data) => data.data);

const getJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  return await axios
    .get("https://icanhazdadjoke.com/", config)
    .then((data) => data.data);
};

const list = document.getElementById("list");
const button = document.getElementById("newJoke");

const populateJoke = async () => {
  const joke = await getJoke();
  const li = document.createElement("li");
  li.textContent = joke.joke;
  list.appendChild(li);
};
button.addEventListener("click", populateJoke);
