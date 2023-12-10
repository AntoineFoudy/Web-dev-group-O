/* Gallery Javascript */

/* Reference 
   https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
   https://www.w3schools.com/jsref/prop_style_backgroundsize.asp
   https://www.w3schools.com/jsref/prop_style_backgroundattachment.asp
*/

/// These lines are used to create a background, resize it to a certain resolution and then make it in a fixed position so it doesn't move during scrolling ///

/*Default background (image 1) */
document.body.style.background = "url('galleryphotos/yellowstonegrass.jpg') no-repeat"; 
document.body.style.backgroundSize = "1920px 1080px";  
document.body.style.backgroundAttachment = "fixed";

/* Buttons that are used to change the background of the gallery */
function backgroundImage1(){
	document.body.style.background = "url('galleryphotos/yellowstonegrass.jpg') no-repeat"; /*stops the image from repeating itself */
	document.body.style.backgroundSize = "1920px 1080px";  /// readjusts the background image to 1920x1080 resolution
	document.body.style.backgroundAttachment = "fixed"; /* Makes the image so it doesn't move if you scroll */
}

/* repeat of the code above */

function backgroundImage2(){
	document.body.style.background = "url('galleryphotos/hotspring.jpg') no-repeat";
	document.body.style.backgroundSize = "1920px 1080px";  /// readjusts the background image to 1920x1080 resolution
	document.body.style.backgroundAttachment = "fixed";
}

function backgroundImage3(){
	document.body.style.background = "url('galleryphotos/snowlake.jpg') no-repeat";
	document.body.style.backgroundSize = "1920px 1080px";  /// readjusts the background image to 1920x1080 resolution
	document.body.style.backgroundAttachment = "fixed";
	
}

/* reference - https://codepen.io/ethornbury/pen/Jjxwrzz 
	reference 2 - https://www.nps.gov/yell/learn/nature/wolves.htm 
*/

function infoButton(){
	/// array of facts about wolves /// 
	var facts = ["As of January 2023, there are at least 108 wolves in the yellowstone park", "90% of the wolves' winter diet is through elk and consists of more deer and smaller mammals in the summer", "The wolves inhabit most of the park, with peak activity being at dawn and dusk"];
	
	var index = Math.floor(Math.random()*3); ///random number generator to choose the facts ///
    alert(facts[index]); /// prints the facts through an alert box ///
}

/* reference - https://codepen.io/ethornbury/pen/Jjxwrzz 
   reference 2 - https://www.nps.gov/yell/learn/nature/wolves.htm 
*/

/* Reference 
   https://www.w3schools.com/jsref/prop_style_backgroundimage.as
   https://www.w3schools.com/jsref/prop_style_backgroundsize.asp
   https://www.w3schools.com/jsref/prop_style_backgroundattachment.asp
*/


