//! EXO 20.1
//TODO: via JS afficher le profil utilisateur dans la page web
const userData = {
	name: "John delavega",
	email: "john.doe@example.com",
	age: 25,
	dob: "08/02/1989",
	active: true,
	img: " https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg ",
};

const body = document.querySelector("body");
const newImg = document.createElement("img");
const newH1 = document.createElement("h1");
const newP1 = document.createElement("p");
const newP2 = document.createElement("p");
const newP3 = document.createElement("p");
const newP4 = document.createElement("p");
const newDiv = document.createElement("div");

newImg.src = userData.img;
newH1.innerText = userData.name;
newP1.innerText = userData.email;
newP2.innerText = userData.age;
newP3.innerText = userData.dob;
newP4.innerText = userData.active;
body.append(newDiv);
newDiv.append(newImg, newH1, newP1, newP2, newP3, newP4);
const allP = document.querySelectorAll("p");

newH1.style.color = "white";

for (let i = 0; i < allP.length; i++) {
	allP[i].style.color = "white";
}

newDiv.style.background = "linear-gradient(90deg, rgba(200,115,160,1) 29%, rgba(241,113,255,0.9864320728291317) 76%)";
body.style.backgroundImage =
	"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH8lf2XnfjB2OO4EtSV0W2CXrJp87ijx5jFsQtsQvwrjTZAbpHoA0iXVunF9WUsgjWDg&usqp=CAU')";
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";
newDiv.style.alignItems = "center";
newDiv.style.width = "50vw";
newDiv.style.margin = "auto";
newDiv.style.padding = "10px";
newDiv.style.border = " solid white 3px";
newDiv.style.borderRadius = "1vw";
body.style.marginTop = "10vh";
newImg.style.width = "40vw";
newImg.style.borderRadius = "1vw";
