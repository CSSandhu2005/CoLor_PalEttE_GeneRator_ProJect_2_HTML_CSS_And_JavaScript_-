const geneRatorButton = document.getElementById("generator-button");
const colorPalette = document.querySelector(".colors-container");

const generateRandomColor = () => {
  let colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(hexCodeGenerator());
  }

  updatePalette(colors);
};

geneRatorButton.addEventListener("click", generateRandomColor);

const hexCodeGenerator = () => {
  let letter = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
};

const updatePalette = (colors) => {
  const colorBox = document.querySelectorAll(".color-box");
  const hexValue = document.querySelectorAll("#hex-value");

  colorBox.forEach((colorCard, index) => {
    colorCard.style.backgroundColor = colors[index];
    hexValue[index].textContent = colors[index];
  });
};

colorPalette.addEventListener("click", (e) => {
  if (e.target.id.includes("copy-button")) {
    const hexCodeValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexCodeValue)
      .then(iconChange(e.target))
      .catch((error) => {
        console.log(error);
      });
  } else if (e.target.classList.contains("color-box")) {
    const hexValue = e.target.children[0].firstElementChild.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(iconChange(e.target.children[0].children[1]))
      .catch((error) => {
        console.log(error);
      });
  }
});

const iconChange = (e) => {
  e.classList.remove("ri-file-copy-fill") ; 

  e.style.color = "#66ff00";
  e.classList.add("ri-check-double-fill"); 

  setTimeout(() => {
    e.classList.add("ri-file-copy-fill");
    e.style.color = "";
  }, 1500);
};
