const myInfo = {
	info: "I am a full-stack web developer and a Computer Science student. I love solving problems and building cool web apps.I'm always expsloring new technologies to help me enhance my skills.",
};

const descp = document.getElementById("discrip");
descp.innerText = myInfo.info;
//
const menuBtn = document.getElementById("menu-btn");
const navLinksContainer = document.getElementById("nav-right");

menuBtn.addEventListener("click", () => {
	navLinksContainer.classList.toggle("show");
});
