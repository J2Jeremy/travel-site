import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll(); //remove to create reusable class
new RevealOnScroll( $(".feature-item"), "85%");
new RevealOnScroll( $(".testimonial"), "60%");