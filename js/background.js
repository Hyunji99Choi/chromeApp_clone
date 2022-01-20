const bgImg = document.getElementById("backgroundImg");
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage =
  images[Math.floor(Math.floor(Math.random() * images.length))];

document.body.style.backgroundImage = "url('img/" + chosenImage + "')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

/*
bgImg.src = `img/${chosenImage}`;
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
*/
