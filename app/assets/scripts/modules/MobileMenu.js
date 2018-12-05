import $ from 'jquery';

class MobileMenu{
	constructor(){
	//the old way 'spaghetti' 3 things happening DOM selector, EVENT handler, FUNCTION definition
		/*
		$(".site-header__menu-icon").click(function(){
			console.log("icon clicked!");
		})
		*/
	//the organized way - selector
		this.siteHeader = $(".site-header"); //so we can add bg color and trasnition to mobile nav
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	//the organized way - all events listed we want to watch for
	//browser doesnt look for events method name, add to constructor
	//bind gives our two methods the same 'this' reference.
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	//the organized way - function defined.
	//need to us JS to add new class to nav items that are currently hidden to show them, then style with CSS
	//'this' keyword issue here. this usually refers to object itself, however this method is invoked in the
	//events() method,in JS when function is used as event handler, 'this' refers to the DOM that the event
	//fired from, which is 'menuContent', use bind = assign this reference.
	toggleTheMenu(){
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");//so we can add bg color and trasnition to mobile nav
	}

}
export default MobileMenu;

