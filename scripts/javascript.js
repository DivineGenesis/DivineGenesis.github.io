/*Project Array Key Vars
title - project name
link  - link to github project page
image - path to image file
info  - short description of project
latest- download recent version
 [title:"", link:"", image:"images/", info:"", latest:""]
*/

var projects[ 
	[title:"Soulbound",        
	 	link:"", 
	 	image:"images/soulbound",
		info:"Bind items to players"],
	[title:"BlockLimiter",
		link:"",
		image:"images/blocklimiter",
		info:"Limit specific blocks players can have exist in the world at one time"],
	[title:"BetterBlacklisting",
		link:"",
		image:"images/betterblacklist",
		info:"An item blacklisting plugin",
		latest:""]
];
 
var slides ["", "", ""];
int index = 0;

function nextSlide(int pos)
{
	index+=pos;

	if(index < 0)
		index = slides.length-1;
	else if(index >= slides.length)
		index = 0;
}

function displayProjects()
{
 
		document.write(projects[i].title);
 
}