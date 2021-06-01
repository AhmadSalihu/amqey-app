
window.addEventListener("load", (e) => {
	for (let i = 1; i < 10; i++) {
		window.onload = function () {	
			const checkBox = document.querySelector(`#showMega${i}`);
			if (checkBox) {
				checkBox.addEventListener("load", (e) => {
					const divMega = e.target.nextElementSibling;
					divMega.classList.toggle("showItems")		
				})
			}
		}
	}
})