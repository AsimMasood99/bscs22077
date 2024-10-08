const content = {
	universityProjects: [
		{ name: "Snake Game", technologies: "C++", date: "Sept-2022" },
		{ name: "Bead 12", technologies: "C++/SFML", date: "Dec-2022" },
		{ name: "Chess", technologies: "C++/SFML", date: "Feb-2023" },
		{ name: "Ludo", technologies: "C++/SFML", date: "March-2023" },
		{ name: "Shogi", technologies: "C++/SFML", date: "Aug-2023" },
		{ name: "Solitaire", technologies: "C++/SFML", date: "Sept-2023" },
		{ name: "Text Editor", technologies: "C++", date: "Nov-2023" },
		{ name: "Mini Search Engine", technologies: "C++", date: "Nov-2023" },
	],
	personalProjects: [
		{ name: "FoodHub", technologies: "MERN Stack", date: "Aug-2024" },
	],
	arabicQuote: "النجاح رحلة، ليست وجهة",
	englishQuote: "Success is a journey, not a destination.",
};

const mainElement = document.querySelector("main");
const universityHeading = document.createElement("div");
universityHeading.classList.add("heading");
universityHeading.innerText = "University Projects";
mainElement.appendChild(universityHeading);

content.universityProjects.forEach((project) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	cardDiv.innerHTML = `
  <div>${project.name}</div>
  <div>Technologies used: ${project.technologies}</div>
  <div>${project.date}</div>
`;
	mainElement.appendChild(cardDiv);
});
const personalHeading = document.createElement("div");
personalHeading.classList.add("heading");
personalHeading.innerText = "Personal Projects";
mainElement.appendChild(personalHeading);

content.personalProjects.forEach((project) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	cardDiv.innerHTML = `
  <div>${project.name}</div>
  <div>Technologies used: ${project.technologies}</div>
  <div>${project.date}</div>
`;
	mainElement.appendChild(cardDiv);
});

const arabicText = document.querySelector(".arabic");
arabicText.innerText = content.arabicQuote;

const englishText = document.querySelector(".english");
englishText.innerText = content.englishQuote;

const menuBtn = document.getElementById("menu-btn");
const navLinksContainer = document.getElementById("nav-right");

menuBtn.addEventListener("click", () => {
	navLinksContainer.classList.toggle("show");
});
