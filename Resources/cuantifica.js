currentWin = Ti.UI.currentWindow;

var higherBar = Ti.UI.createView({
    backgroundColor:'#D6D6D6',
    border:1,
    borderColor:'#8AA4DE',
    top:0,
    left:0,
    height:'10%',
    width:'90%',
    zIndex:1
});

var menuBack = Ti.UI.createView({
    backgroundColor:'#8AA4DE',
    border:1,
    borderColor:'#8AA4DE',
    top:0,
    left:'90%',
    width:'10%',
    height:'10%',
    zIndex:3
});

//Back to Menu

var winmainMenu = Ti.UI.createWindow({
	backgroundColor:'white',
	title:'Main Menu',
	url:'mainmenu.js'
});

menuBack.addEventListener('click',function(){
	winmainMenu.open();
});

currentWin.add(higherBar);
currentWin.add(menuBack);
