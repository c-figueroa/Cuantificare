//Omar Gonzalez - 3systems.MX
//Sept 2013
//Cuantificare Draw Tools

var lines = require('com.lines');

currentWin = Ti.UI.currentWindow;

var fotoView = Ti.UI.createView({
    backgroundColor:'#DBDBDB',
    top:'20%',
    width:'60%',
    height:'60%',
    zIndex:1
});

var drawingViewWindow = Ti.UI.createWindow({
	backgroundColor:'transparent',
	top:'20%',
	left:150,
	width:'65%',
	height:'60%',
	opacity:.8,
	zIndex:4
});

var drawingView = Ti.UI.createView({
    backgroundColor:'transparent',
    top:'20%',
    width:'60%',
    height:'60%',
    opacity:.8,
    zIndex:3,
});

var lowerBar = Ti.UI.createView({
    backgroundColor:'#4069DB',
    bottom:0,
    left:0,
    height:'10%'
});

var higherBar = Ti.UI.createView({
    backgroundColor:'#D6D6D6',
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


var reverseAnimationView = Ti.UI.createView({
    backgroundColor:'#4C8AED',
    bottom:'10%',
    left:'20%',
    height:'10%',
    width:'20%',
    zIndex:8

});


var redoImage = Ti.UI.createImageView({
	image:'images/redo.png'
	
});

reverseAnimationView.add(redoImage);


var cameraButtonView = Ti.UI.createView({
	backgroundColor:'#4C8AED',
    bottom:'10%',
    right:'20%',
    height:'10%',
    width:'20%',
    zIndex:8
});

var cameraImage = Ti.UI.createImageView({
	image:'images/camara.png'
	
});

cameraButtonView.add(cameraImage);

var saveButtonView = Ti.UI.createView({
	backgroundColor:'#74A5F2',
    bottom:'10%',
    height:'10%',
    width:'20%',
    zIndex:8
});

var saveImage = Ti.UI.createImageView({
	image:'images/save.png'
	
});

saveButtonView.add(saveImage);

//Dynamic Labels


var labelView1 = Ti.UI.createView({
	backgroundColor: '#E0B73A',
	borderWidth:1,
	borderColor:'white',
	top:0,
	left:0,
	width:25,
	height:25
});

var labelView2 = Ti.UI.createView({
	backgroundColor:'#E0B73A',
	borderWidth:1,
	borderColor:'white',
	top:25,
	left:0,
	width:25,
	height:25
	
});	

var labelView3 = Ti.UI.createView({
	backgroundColor: '#E0B73A',
	borderWidth:1,
	borderColor:'white',
	top:50,
	left:0,
	width:25,
	height:25
});

//TouchMove Labels

var olt = Titanium.UI.create3DMatrix(), curX, curY;
 
labelView1.addEventListener('touchstart', function(e) {
    curX = e.x;
    curY = e.y;
});

labelView1.addEventListener('touchmove', function(e) {
    var deltaX = e.x - curX, deltaY = e.y - curY;
    olt = olt.translate(deltaX, deltaY, 0);
    labelView1.animate({
        transform : olt,
        duration : 100
    });
});

var olt2 = Titanium.UI.create3DMatrix(), curX, curY;
 
labelView2.addEventListener('touchstart', function(e) {
    curX = e.x;
    curY = e.y;
});

labelView2.addEventListener('touchmove', function(e) {
    var deltaX = e.x - curX, deltaY = e.y - curY;
    olt2 = olt2.translate(deltaX, deltaY, 0);
    labelView2.animate({
        transform : olt2,
        duration : 100
    });
});

var olt3 = Titanium.UI.create3DMatrix(), curX, curY;
 
labelView3.addEventListener('touchstart', function(e) {
    curX = e.x;
    curY = e.y;
});

labelView3.addEventListener('touchmove', function(e) {
    var deltaX = e.x - curX, deltaY = e.y - curY;
    olt3 = olt3.translate(deltaX, deltaY, 0);
    labelView3.animate({
        transform : olt3,
        duration : 100
    });
});

	
//Camera Tools Animation

var cameraTools = Ti.UI.createView({
    backgroundColor:'#1B67E0',
    top:'20%',
    left:-130,
    width:150,
    height:'60%',
    opacity:.4,
    zIndex:10
});

var cameraToolsIcon = Ti.UI.createImageView({
	image:'images/cross.png',
	left:0,
});

var cameraToolsLeft = Ti.UI.createView({
    backgroundColor:'#1B67E0',
    top:'20%',
    right:-130,
    width:150,
    height:'18%',
    opacity:.4,
    zIndex:10
});

cameraToolsLeft.add(cameraToolsIcon);

var cameraToolsLeft2 = Ti.UI.createView({
    backgroundColor:'#55963F',
    top:'40%',
    right:-130,
    width:150,
    height:'18%',
    opacity:.4,
    zIndex:10
});

var cameraToolsLeft3 = Ti.UI.createView({
    backgroundColor:'#D94E27',
    top:'60%',
    right:-130,
    width:150,
    height:'18%',
    opacity:.4,
    zIndex:10
});

var animation1 = Ti.UI.createAnimation();

animation1.opacity = .8;
animation1.duration = 1000;
animation1.left = 0;

var animation2 = Ti.UI.createAnimation();

animation2.opacity = .8;
animation2.duration = 1000;
animation2.right = 0;

//Reverse Animations

var reverseAnimation1 = Ti.UI.createAnimation();

reverseAnimation1.opacity = .4;
reverseAnimation1.duration = 1000;
reverseAnimation1.left = -130;

var reverseAnimation2 = Ti.UI.createAnimation();

reverseAnimation2.opacity = .4;
reverseAnimation2.duration = 1000;
reverseAnimation2.right = -130;

//EventListeners

cameraTools.addEventListener('click',function(){
    cameraTools.animate(animation1);
    currentWin.add(drawingViewWindow);
});

cameraToolsLeft.addEventListener('click',function(){
    cameraToolsLeft.animate(animation2);
    currentWin.add(drawingView);
});

/*
 
forwardAnimationView.addEventListener('click',function(){
    cameraTools.animate(animation1);
    cameraToolsLeft.animate(animation2);
    currentWin.add(drawingView);
});

*/

reverseAnimationView.addEventListener('click',function(){
    cameraTools.animate(reverseAnimation1);
    cameraToolsLeft.animate(reverseAnimation2);
    cameraToolsLeft2.animate(reverseAnimation2);
    cameraToolsLeft3.animate(reverseAnimation2);
    currentWin.remove(drawingView);
    currentWin.remove(drawingViewWindow);
});

cameraToolsLeft2.addEventListener('click',function(){
    cameraToolsLeft2.animate(animation2);
});

cameraToolsLeft3.addEventListener('click',function(){
    cameraToolsLeft3.animate(animation2);
});


//Text Input

var textField1 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'#336699',
	top:50,
	width:100,
	height:30,
	hintText:'stuff',
		
});

cameraTools.add(textField1);

var textField2 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'#336699',
	top:110,
	width:100,
	height:30,
	hintText:'stuff'

		
});

cameraTools.add(textField2);

var textField3 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'#336699',
	top:170,
	width:100,
	height:30,
	hintText:'stuff'
		
});

cameraTools.add(textField3);

var buttonDone = Titanium.UI.createButton({
    title:'done',
    width:100,
    height:40,
	bottom: 50
});

function addLabelData(e){
	
var label1 = Ti.UI.createLabel({
color:'white',
text:(textField1.value),
font:{fontSize:12}
	
});

labelView1.add(label1);	

var label2 = Ti.UI.createLabel({
	color:'white',
	text:(textField2.value),
	font:{fontSize:12}
});


labelView2.add(label2);

var label3 = Ti.UI.createLabel({
	color:'white',
	text:(textField3.value),
	font:{fontSize:12}
	
});

labelView3.add(label3);

}

buttonDone.addEventListener("click",function(eventObject){
   addLabelData();
});


cameraTools.add(buttonDone);



//Camera Script

cameraButtonView.addEventListener('click',function(e){
	Titanium.Media.showCamera({
		success:function(e){
			if (e.mediaType == Titanium.Media.MEDIA_TYPE_PHOTO){
				var imageView = Titanium.UI.createImageView({
					image:e.media,
					width:750,
					height:560
					
				});
				//add Foto to View
				fotoView.add(imageView);
				//if Video:
			}else if(e.mediaType === Titanium.Media.MEDIA_TYPE_VIDEO){
				var w = Titanium.UI.createWindow({
					title:'New Vidio-O',
					backgroundColor:'#0000'
				});
				var videoPlayer = Titanium.Media.createVideoPlayer({
					media:e.media
				});
				w.add(videoPlayer);
				//close video player after Watching
				videoPlayer.addEventListener('complete',function(e){
					w.remove(vdeoPlayer);
					videoPlayer = null;
					w.close();
				});
			}
		},
		error:function(e){
			alert('Hubo un Error!');
		},
		cancel:function(e){
			alert('Foto Cancelada');
		},
		allowEditing:true,
		saveToPhotoGallery:true,
		mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO,Titanium.Media.MEDIA_TYPE_VIDEO],
		videoQuality:Titanium.Media.QUALITY_LOW
	});
});

//Drawing Function:

attrib = {
		color:'yellow',
		touchEnable:true,
		thickness:5,
		roundness:3
};
//StartPoint Event Listener
drawingView.addEventListener('touchend',function(e){
	startX = e.x;
	startY = e.y;
	from = {x:startX,y:startY};
	//Triggers Endpoint Event Listener
	drawingView.addEventListener('singletap',endPoint);
});
//EndPoint Event Listener
var endPoint = function(){
	drawingView.addEventListener('singletap',function(e){    
     	touchX = e.x;
     	touchY = e.y;
     	to = {x:touchX,y:touchY};
     	lineOne = lines.createLine(from,to,attrib);
	 	drawingView.add(lineOne);
	 	//Resets StartPoint to last Endpoint:
		function consecutiveLine(e){
	 		from = {x:touchX,y:touchY};
	 	}
	 	consecutiveLine();
	});	
};
//Back to Main Menu:

var winmainMenu = Ti.UI.createWindow({
	backgroundColor:'white',
	title:'Main Menu',
	url:'mainmenu.js'
});

menuBack.addEventListener('click',function(){
	winmainMenu.open();
});

drawingViewWindow.add(labelView2);
drawingViewWindow.add(labelView1);
drawingViewWindow.add(labelView3);
currentWin.add(cameraTools);
currentWin.add(cameraToolsLeft);
currentWin.add(cameraToolsLeft2);
currentWin.add(cameraToolsLeft3);
currentWin.add(menuBack);
currentWin.add(fotoView);
currentWin.add(lowerBar);
currentWin.add(higherBar);
currentWin.add(cameraButtonView);
currentWin.add(reverseAnimationView);
currentWin.add(saveButtonView);
/*
currentWin.add(forwardAnimationView);
*/

