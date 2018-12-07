import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class Modal {
	constructor(){
		/* start by selecting all modal interactions */
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events(); //listen for events soon as page loads
	}

	// method for events
	// open modal btn
	// close modal btn
	// escape key
	events(){
		//bind 'this' so when openModal is called it points to constructor 'this' (modal)
		//instead of openModalButton's 'this' which is '.open-modal'
		this.openModalButton.click(this.openModal.bind(this));
		this.closeModalButton.click(this.closeModal.bind(this));

		//any key press
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e){
		if(e.keyCode == 27){
			this.closeModal();
		}
	}

	// open method
	// 'this' is reset to element that was clicked on b/c it was called
	// from the events() method i.e. it refer's to events 'this', use bind
	openModal(){
		this.modal.addClass("modal--is-visible");
		return false //prevents default behavior or href="#" scrolling to top
	}


	// need method to close
	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}











	
}

export default Modal;