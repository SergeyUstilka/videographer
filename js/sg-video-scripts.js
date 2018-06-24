;var sgApp = (function(){
window.onload = function() {
	// Script for menu
	var perspectiveBlock = document.querySelector('#perspective');
	var contentBoxBlock = document.querySelector('.content-box');
	var toggleMenuBtn= function(e){
		if (e.target.id == 'fan-btn'){
			perspectiveBlock.classList.add('animate', 'modalview');
		}
		else{
			perspectiveBlock.classList.remove('animate', 'modalview');			
		}
	}
	contentBoxBlock.addEventListener('click',toggleMenuBtn);




// Add animation to elements
	var home_1_ul = document.querySelector('.home-1 ul');
	var home_1_h2 =  document.querySelector('.home-1 .h-box');
	var home_1_btns_box =  document.querySelector('.home-1 .btns-box');

	// hidden elements list
	var hiddenElement = function(selectorName){
		selectorName.classList.add('hidden');
	}
	hiddenElement(home_1_ul);
	hiddenElement(home_1_h2);
	hiddenElement(home_1_btns_box);


	// animate hidden elements
	var addAnimation = function(selectorName, typeAnimation,delay){
		var animDelay = setTimeout(function(){
			selectorName.classList.add('animated');
			selectorName.classList.add(typeAnimation);			
		}, delay);
	}
	addAnimation(home_1_ul, 'fadeInDown');
	addAnimation(home_1_h2, 'fadeIn', 1000);
	addAnimation(home_1_btns_box, 'fadeInUp',2000);

}
})();