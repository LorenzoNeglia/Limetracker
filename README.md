# Limetracker
Development of a Javascript plugin for Eye Tracking and Heatmaps creation of limesurvey section

The subject observed by the user gets tracked by the external or internal webcam, the tracked position is used to develop a real time heatmap on the screen depicting with a range of colours the attention level of the user regarding different elements on the screen.

# Prerequisite
In order to use the following plugin you have to download these JS file

## heatmapjs
heatmap.js is a lightweight, easy to use JavaScript library to help you visualize your three dimensional data!

https://www.patrick-wied.at/static/heatmapjs/

## WebGazer
WebGazer.js is an eye tracking library that uses common webcams to infer the eye-gaze locations of web visitors on a page in real time.

https://webgazer.cs.brown.edu/

## html2canvas

Screenshots with JavaScript

http://html2canvas.hertzen.com/

## Import these script in Limesurvey

Import the file in Limesurvey resources folder.

![image](https://user-images.githubusercontent.com/82229242/148761425-785e15cf-30d4-4e5c-93d5-fd0b417f588f.png)

## Get Limesurvey Project Code

In the main section you can see the project code used in the file url on resources folder.

![id](https://user-images.githubusercontent.com/82229242/148764658-42ee93e4-c2ef-4599-9cda-b6b5ec7a46fb.PNG)

if the url is different use the following method to get the file url.

### Get JS file URL

On the Section description click on "link add" button

![Link](https://user-images.githubusercontent.com/82229242/148762396-cc4bca18-2e24-49dd-b6a7-aa3d5373e7c6.PNG)

Search the file on the resources folder

![Server](https://user-images.githubusercontent.com/82229242/148762602-e57c18b9-f095-48a7-998f-cbec13c3e731.PNG)

Add the file

![file](https://user-images.githubusercontent.com/82229242/148763221-5089aa08-7307-487b-b2ce-5d8b3f21073b.PNG)

You will se the file url on description text area, ready to use in html code.

![image](https://user-images.githubusercontent.com/82229242/148762805-6fc0470f-4995-41b9-8eb2-3b183fe87108.png)

![image](https://user-images.githubusercontent.com/82229242/148763380-e0bb372f-8dc3-4ed4-a32b-ed1374978f55.png)
# Quick Start

## First Step
Import the following JS file on the limesurevey section you want to trace.
```html
<script src="/upload/surveys/<Your Project Code>/files/heatmap.js"></script>
<script src="/upload/surveys/<Your Project Code>/files/webgazer.js"></script>
<script src="/upload/surveys/<Your Project Code>/files/html2canvas.js"></script>
<script src="/upload/surveys/<Your Project Code>/files/limetracker.js"></script>
```
## Second Step
Create the navigation bar.
```html
<div id="btnBar">
<div id="hideCnv" onclick="hideCanvas()">Show Realtime Heatmap</div>

<div id="hideCnv" onclick="stopTrace()">Stop Trace</div>


<div id="hideCnv" onclick="printResult()">Print Heatmap and Screenshot</div>
</div>
```
## Third Step
Add the navigation bar Style
```html
<style type="text/css">
  #heatmapContainer { width:100%; height:100%;position:absolute;}
  #btnBar{
  position: relative;
  z-index: 1;
  }
  #hideCnv {
	box-shadow: 0px 1px 0px 0px #1c1b18;
	background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
	background-color:#eae0c2;
	border-radius:15px;
	border:2px solid #333029;
	display:inline-block;
	cursor:pointer;
	color:#505739;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:12px 16px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    z-index: 1;
}
#hideCnv:hover {
	background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
	background-color:#ccc2a6;
}
#hideCnv:active {
	position:relative;
	top:1px;
}
</style>
```
### hideCanvas()
This function hide and show the heatmap on screen.

### stopTrace()
This function pause and resume the eye tracker and heatmap construtcion.

### printResult()
This function download trace result file:

  - Traced section screenshoot
  - Traced section heatmap
  - Traced screenshoot and heatmap overlayed.
 
## Toggle Calibration
Copy this code on your Limesurvey Section to insert Calibration Area
```html
<style type="text/css">
#calibrationContainer {
    position: relative;
            width: 100%;
    height: 600px;
  border-style: solid;
  border-width: 5px;
 }
 #upLft{
   position:absolute;
   width:30px;
   height:30px;
   top:0px;
   left:0px;
   background :red;
  }
   #upRgt{
   position:absolute;
   width:30px;
   height:30px;
   top:0px;
   right:0px;
   background :red;
  }
   #upCen{
   position:absolute;
   width:30px;
   height:30px;
   right:0px;
   left:0px;
   margin:auto;
   background :red;
  }
   #downLft{
   position:absolute;
   width:30px;
   height:30px;
   bottom:0px;
   left:0px;
   background :red;
  }
   #downRgt{
   position:absolute;
   width:30px;
   height:30px;
   bottom:0px;
   right:0px;
   background :red;
  }
  #downCen{
   position:absolute;
   width:30px;
   height:30px;
   bottom:0px;
   right:0px;
   left:0px;
   margin:auto;
   background :red;
  }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script><script>
  $(document).ready( function() {
  const cCounter = [0,0,0,0,0,0];
  $("#upLft").on("click", function() {
     cCounter[0]++;
     if(cCounter[0]==3){
     $('#upLft').css('background', 'green');
     cCounter[0]=0; 
     }
})

$("#upRgt").on("click", function() {
     cCounter[2]++;
     if(cCounter[2]==3){
     $('#upRgt').css('background', 'green');
     cCounter[1]=0;  
     }
})
$("#upCen").on("click", function() {
     cCounter[1]++;
     if(cCounter[1]==3){
     $('#upCen').css('background', 'green');
     cCounter[2]=0; 
     } 
})
$("#downLft").on("click", function() {
     cCounter[3]++;
     if(cCounter[3]==3){
     $('#downLft').css('background', 'green');
     cCounter[3]=0; 
} 
})
$("#downRgt").on("click", function() {
     cCounter[4]++;
     if(cCounter[4]==3){
     $('#downRgt').css('background', 'green'); 
     cCounter[4]=0; 
     }
})
$("#downCen").on("click", function() {
     cCounter[5]++;
     if(cCounter[5]==3){
     $('#downCen').css('background', 'green');
     cCounter[5]=0;  
     }
})
 });
</script>
<h1>Eye-Tracking Calibration</h1>

<p>Questa sezione ha il compito di calibrare lo strumento di Eye Tracking</p>

<p>Clicca 3 volte i quadrati rossi.</p>

<p>Quando tutti i quadrati rossi diventeranno verdi la calibrazione è terminata</p>

<div id="calibrationContainer">
<div id="upLft"> </div>

<div id="upCen"> </div>

<div id="upRgt"> </div>

<div id="downLft"> </div>

<div id="downCen"> </div>

<div id="downRgt"> </div>
</div>
```
The tool have self calibration, every click from the user improve the tool accuracy
