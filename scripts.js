const gitBtn = document.querySelector("#btn-get");
const gitinput = document.querySelector("#text-input");
const gitOutput = document.querySelector("#text-output");

const get_api = () => {
  fetch("https://www.swapi.tech/api/people/?name=" + gitinput.value, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      gitOutput.innerHTML = "";
      gitOutput.innerHTML += "Height : " + data.result[0].properties.height;
      gitOutput.innerHTML += " , mass : " + data.result[0].properties.mass;
      gitOutput.innerHTML += " , Gender : " + data.result[0].properties.gender;
      gitOutput.innerHTML +=
        " , Hair_color : " + data.result[0].properties.hair_color;
    })
    .catch((error) => console.log("error", error));
};
gitBtn.addEventListener("click", get_api);
