async function loadImage() {
  let formUrl = document.getElementById("url").value;
  let token = "BAAPNJS-R0R4K8Z-H1TAC7S-GFF1GB9";
  let url = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${formUrl}`;

  const response = await fetch(url);
  const object = await response.json();

  let newImg = document.createElement("img");

  newImg.className = "screenshot";

  newImg.setAttribute("src", object.screenshot);

  let container = document.querySelector(".image");
  let reference = document.querySelector(".reference");

  if (document.images.length >= 1) {
    let existingImg = document.querySelector(".screenshot");
    container.replaceChild(newImg, existingImg);
  } else {
    container.insertBefore(newImg, reference);
  }
}

let button = document.getElementById("btn");

button.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    loadImage();
  } catch (e) {
    console.log("Error!");
    console.log(e);
  }
});
