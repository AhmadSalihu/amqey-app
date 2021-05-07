
window.addEventListener("load", (e) => {
	for (let i = 1; i <10; i++) {
		const checkBox = document.querySelector(`#showMega${i}`);
		// console.log(checkBox);
		checkBox.addEventListener("change", (e) => {
			// console.log(e.target)
			const divMega = e.target.nextElementSibling;
			divMega.classList.toggle("showItems")
		
		})
	}
})