;var sgApp = (function(){
window.onload = function() {
	document.body.classList.add('scroll');
	document.querySelector('#preloader').classList.add('hidden');
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
	var home_header = document.querySelector('.home header');
	var home_1_ul = document.querySelector('.home-1 ul');
	var home_1_h2 =  document.querySelector('.home-1 .h-box');
	var home_1_btns_box =  document.querySelector('.home-1 .btns-box');
	var home_2_img = document.querySelector('.home-2 img');
	var home_3_li_elemes = document.querySelectorAll('.home-3-filmList ul li a');
	var home_3_li_elemes_title = document.querySelectorAll('.home-3-filmList ul li div');

	// hidden elements list
	var hiddenElement = function(selectorName){
		selectorName.classList.toggle('hidden');
	}
	hiddenElement(home_header);
	hiddenElement(home_1_ul);
	hiddenElement(home_1_h2);
	hiddenElement(home_1_btns_box);
	hiddenElement(home_2_img);


	// animate hidden elements
	var addAnimation = function(selectorName, typeAnimation,delay){
		var animDelay = setTimeout(function(){
			if(!selectorName.classList.contains('animated')){
				selectorName.classList.add('animated');
				selectorName.classList.toggle(typeAnimation);			
			}
		}, delay);
	}
	var removeAnimation = function(selectorName,typeAnimation){
		if(selectorName.classList.contains('animated')){
			selectorName.classList.remove('animated');
			selectorName.classList.toggle(typeAnimation);			
		}
	}
	var showHome_1 = function(){
		addAnimation(home_header, 'fadeInDown');
		addAnimation(home_1_ul, 'fadeInUp');
		addAnimation(home_1_h2, 'fadeInUp');
		addAnimation(home_1_btns_box, 'fadeInUp');
	}
	var showHome_2 = function(){
		addAnimation(home_2_img, 'fadeInLeft');
	}
	// Show block home1,2 after load page
	var startVertPosition = window.pageYOffset || document.documentElement.scrollTop; 
	if (startVertPosition >=0 && startVertPosition <=300){showHome_1()}
	else if (startVertPosition >=350 && startVertPosition <=900){showHome_2()}		


	// Show block home1,2 after scroll page
	window.onscroll = function() {
  		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  		if (scrolled >= 0 && scrolled<=300){
			showHome_1();
  		}
  		else{
  			removeAnimation(home_header, 'fadeInDown');
  			removeAnimation(home_1_ul, 'fadeInUp');
  			removeAnimation(home_1_h2, 'fadeInUp');
  			removeAnimation(home_1_btns_box, 'fadeInUp');
  		}
  		if(scrolled >= 350 && scrolled<=900){
  			addAnimation(home_2_img, 'fadeInLeft');
  		}
  		else{
  			removeAnimation(home_2_img, 'fadeInLeft');

  		}
	}

	// Show title of elements in block home-3
	var toggleHiddenText = function(evt){
		var targetElem = evt.target.parentNode.children[1]; 
		if (!targetElem.classList.contains('animated')){
			targetElem.classList.add('animated');
			targetElem.classList.add('fadeInLeft');			
		}
		else{
			targetElem.classList.remove('animated');
			targetElem.classList.remove('fadeInLeft');	
		}
	}

	for (var i=0; i<home_3_li_elemes.length; i++){
		home_3_li_elemes[i].addEventListener('mouseover',toggleHiddenText);
		home_3_li_elemes[i].addEventListener('mouseout',toggleHiddenText);
	}
}
})();