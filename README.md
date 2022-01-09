# Limetracker
Javascript plugin development for Eye tracking and Heatmaps construction of limesurvey section.
Through the use of the integrated or external webcam, the user point of gaze (where is looking on the screen) is traced, the traced position is used for real time heatmap construction of the user screen, illustrating with different colors the level of looking attention placed in different elements on screen.

# Quick Start
## First Step
Import the following JS file on the limesurevey section you want to trace.
```html
<script src="/upload/surveys/272621/files/heatmap.js"></script>
<script src="/upload/surveys/272621/files/webgazer.js"></script>
<script src="/upload/surveys/272621/files/html2canvas.js"></script>
<script src="/upload/surveys/272621/files/limetracker.js"></script>
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
```
<style type="text/css">#heatmapContainer { width:100%; height:100%;position:absolute;}
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
### hideCanvas()
This function hide and show the heatmap on screen.

### stopTrace()
This function pause and resume the eye tracker and heatmap construtcion.

### printResult()
This function download trace result file:

  - Traced section screenshoot
  - Traced section heatmap
  - Traced screenshoot and heatmap overlayed.
