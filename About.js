const menu = document.querySelector(".menuItems");
const info = document.querySelector(".info");

// Menu ka color change karna ha

menu.addEventListener("click", (e) => {
	for (const element of info.children) {
		if (element.classList.contains(e.target.innerText)) {
			element.classList.remove("hidden");
		}
    else 
    {
      if(!element.classList.contains("hidden"))
        element.classList.add("hidden")
    }
	}
});
