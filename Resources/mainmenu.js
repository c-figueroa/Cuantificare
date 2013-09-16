//Omar Gonzalez - 3systems.MX
//Sept 2013 - Menu Script

currentWin = Ti.UI.currentWindow;

//Navigation Objects:

var drawtoolsMenu = Ti.UI.createView({
	backgroundColor:'transparent',
	top:'55%',
	height:'20%',
	width:'20%',
	opacity:.2,
	zIndex:2
});

var cuantificatoolsMenu = Ti.UI.createView({
	backgroundColor:'transparent',
	top:'35%',
	left:'30%',
	height:'20%',
	width:'20%',
	opacity:.2,
	zIndex:2
});

var supervisatoolsMenu = Ti.UI.createView({
	backgroundColor:'transparent',
	top:'35%',
	left:'50%',
	height:'20%',
	width:'20%',
	opacity:.2,
	zIndex:2
});

//Images 

var menubarBall = Ti.UI.createImageView({
	image:'images/menuball3.png',
	top:'30%',
	opacity:.1,
	zIndex:1
});

//Window Controllers:

var windrawTools = Ti.UI.createWindow({
    backgroundColor:'white',
    title:'Cuantificare Draw Tools V1.1',
    url:'drawtools.js'
});

var cuantificaTools = Ti.UI.createWindow({
	backgroundColor:'white',
	title:'Cuantifica Tools V1.1',
	url:'cuantifica.js'
});

var supervisaTools = Ti.UI.createWindow({
	backgroundColor:'white',
	title:'Cuantifica Tools V1.1',
	url:'supervisa.js'
});

//Animations

var menuballAnimation = Ti.UI.createAnimation();

menuballAnimation.opacity = 1;
menuballAnimation.speed = 2000;

currentWin.addEventListener('open',function(){
	menubarBall.animate(menuballAnimation);
	
});

//Menu EventListeners:

drawtoolsMenu.addEventListener('click',function(){
	windrawTools.open();
});

cuantificatoolsMenu.addEventListener('click',function(){
	cuantificaTools.open();
});

supervisatoolsMenu.addEventListener('click',function(){
	supervisaTools.open();
});

//Adding Gui elements

currentWin.add(drawtoolsMenu);
currentWin.add(cuantificatoolsMenu);
currentWin.add(supervisatoolsMenu);
currentWin.add(menubarBall);

