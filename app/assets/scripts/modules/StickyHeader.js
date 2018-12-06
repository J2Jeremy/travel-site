import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();
		this.pageSections = $('.page-section');
		this.headerLinks = $(".primary-nav a")
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: that.headerTriggerElement[0], //element looks for native DOM element, [0] 1st item in jquery object is pointer to DOM
			handler: function(direction){ //add param so darker header returns to original transparent using 'direction'.
				that.headerLinks.removeClass("is-current-link");
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentSection = this; //currentSection = every page-section element
			new Waypoint({
				element: currentSection,
				handler: function(direction){
					if(direction == "down"){
						var matchingHeaderLink = currentSection.getAttribute("data-matching-link"); //select those page-sections with matching custom attrib
						//could use jquery here to reset all classes so our links return to default white, add this logic to constructor
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link"); //update class in primary nav (where header links are styled)
					}
				},
				offset: "18%" //default 0 (top edge of viewport)
			});
			new Waypoint({
				element: currentSection,
				handler: function(direction){
					if(direction == "up"){
						var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link"); 
					}
				},
				offset: "-38%" 
			});
		});
	}

}

export default StickyHeader;