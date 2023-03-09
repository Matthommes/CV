const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/logo.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setName() {
    const myName = prompt("what is your name?");
    if (!myName) {
        setName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool ${myName}`
}

if (!localStorage.getItem("name")) {
    setName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool ${storedName}`;
}

// Set button event handler to trigger set name
myButton.onclick = () => {
    setName();
}
//