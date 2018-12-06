import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: that.headerTriggerElement[0], //element looks for native DOM element, [0] 1st item in jquery object is pointer to DOM
			handler: function(direction){ //add param so darker header returns to original transparent using 'direction'.
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

}

export default StickyHeader;