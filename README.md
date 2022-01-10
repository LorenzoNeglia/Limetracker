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

![image](https://user-images.githubusercontent.com/82229242/148764558-37881e69-7743-4b9c-9ee8-c2522b7c3cf4.png)

if the url is different use the following method to get the file url.

### Get JS file URL

On the Section description click on link add button

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
<div id="btnBar">
<div id="hideCnv" onclick="hideCanvas()">Show Realtime Heatmap</div>

<div id="hideCnv" onclick="stopTrace()">Stop Trace</div>

<div id="hideCnv" onclick="printResult()">Print Heatmap and Screenshot</div>
</div>

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
