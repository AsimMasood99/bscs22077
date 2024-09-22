const menu = document.querySelector(".menuItems");
const info = document.querySelector(".info");

menu.addEventListener("click", (e) => {
	for (const element of info.children) {
		if (element.classList.contains(e.target.innerText)) {
			element.classList.remove("hidden");
		} else {
			if (!element.classList.contains("hidden"))
				element.classList.add("hidden");
		}
	}
});

const content = {
	aboutInfo:
		"I am a full-stack web developer and a Computer Science student. I love solving problems and building cool web apps. I'm always exploring new technologies to help me enhance my skills.",
	education: {
		degrees: [
			{ title: "Matric - (2018-2020)", institution: "The Educators School" },
			{ title: "Pre Engineering - (2020-2022)", institution: "Kips College" },
			{ title: "Bachelors - (2022-2026)", institution: "Kips College" },
		],
		shortCourses: [
			{
				title: "Full Stack Web Dev - (2023-present)",
				institution: "The Odin Project",
			},
		],
	},
	skills: {
		hardSkills: [
			"Assembly Lang programming",
			"C/C++ programming",
			"HTML/CSS/JS",
			"React and Tailwind CSS",
			"ExpressJs and MongoDB",
		],
		softSkills: [
			"Problem Solving",
			"Time Management",
			"Teamwork",
			"Adaptability",
		],
	},
	awards: [
		"Softec Programming Competition <br> Participation Certificate",
		"CodeRush Programming Competition <br> Participation Certificate",
	],
};

const about = document.querySelector(".About");
about.innerText = content.aboutInfo;

const education = document.querySelector(".Edu_info");
const education_heading = document.createElement("div");
education_heading.innerText = "Degrees";
education_heading.classList.add("edu-heading", "text-yellow");
education.appendChild(education_heading);

content.education.degrees.forEach((degree) => {
	const newDegree = document.createElement("div");
	newDegree.innerHTML = `
      <div class="edu-card">
        <div>
        ${degree.title}
        </div>
        <div>
          ${degree.institution}
        </div>
      </div>`;
	education.appendChild(newDegree);
});

const coursesHeading = document.createElement("div");
coursesHeading.innerText = "Short Courses";
coursesHeading.classList.add("edu-heading", "text-yellow");
education.appendChild(coursesHeading);

content.education.shortCourses.forEach((course) => {
	const newCourse = document.createElement("div");
	newCourse.innerHTML = `
        <div class="edu-card">
          <div>${course.title}</div>
          <div>${course.institution}</div>
        </div>`;
	education.appendChild(newCourse);
});

const skills = document.querySelector(".Skills");

const hardSkillsHeading = document.createElement("div");
hardSkillsHeading.innerText = "Hard Skills";
hardSkillsHeading.classList.add("edu-heading", "text-yellow");
skills.appendChild(hardSkillsHeading);

content.skills.hardSkills.forEach((skill) => {
	const newSkill = document.createElement("div");
	newSkill.classList.add("edu-card");
	newSkill.innerText = skill;
	skills.appendChild(newSkill);
});

// Soft Skills
const softSkillsHeading = document.createElement("div");
softSkillsHeading.innerText = "Soft Skills";
softSkillsHeading.classList.add("edu-heading", "text-yellow");
skills.appendChild(softSkillsHeading);

content.skills.softSkills.forEach((skill) => {
	const newSkill = document.createElement("div");
	newSkill.classList.add("edu-card");
	newSkill.innerText = skill;
	skills.appendChild(newSkill);
});

const awards = document.querySelector(".Awards");

content.awards.forEach((award) => {
	const newAward = document.createElement("div");
	newAward.classList.add("edu-card");
	newAward.innerHTML = award;
	awards.appendChild(newAward);
});

const menuBtn = document.getElementById("menu-btn");
const navLinksContainer = document.getElementById("nav-right");

menuBtn.addEventListener("click", () => {
	navLinksContainer.classList.toggle("show");
});
