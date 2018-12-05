import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, offset){
		/*  select DOM elements we want to reveal */
		this.itemsToReveal = elements; /* collection of elements */
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}

	/* leverage 'waypoints' library */
	createWaypoints(){
		var that = this; //save global this so we can access in waypoint handler function
		this.itemsToReveal.each(function(){ /* run on each features element */
			var currentItem = this;
			new Waypoint({
				element: currentItem, //can't use 'this' b/c waypoint is creating a new object.
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage //change waypoint default of 0 (top of view point) to bottom area
			});
		});
	}

}

export default RevealOnScroll;