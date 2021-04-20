// Header 

// const header = document.querySelector('.header');


// window.onscroll = function(){
// 	var top = window.scrollY;
// 	if (top >= 120){
// 		header.classList.add('active')
// 	}else{
// 		header.classList.remove('active');
// 	} 

// }


// Burger

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
	const menuBody = document.querySelector('.nav');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active_burger_animate');
		menuBody.classList.toggle('active_burger');
});
}

