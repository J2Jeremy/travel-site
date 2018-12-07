import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';








var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll(); //remove to create reusable class
new RevealOnScroll( $(".feature-item"), "85%");
new RevealOnScroll( $(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var showModal = new Modal();