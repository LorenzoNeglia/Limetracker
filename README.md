# Limetracker
Javascript plugin development for Eye tracking and Heatmaps construction.
Through the use of the integrated or external webcam, the user point of gaze (where is looking on the screen) is traced, the traced position is used for real time heatmap construction of the user screen, illustrating with different colors the level of looking attention placed in different elements on screen.

# Quick Start
## First Step
Import the following JS file on the section you want to trace.
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
### hideCanvas()
This function hide and show the heatmap on screen.

### stopTrace()
This function pause and resume the eye tracker and heatmap construtcion.

### printResult()
This function download trace result file:
  -Traced section screenshoot
  -Traced section heatmap
  -Traced screenshoot and heatmap overlayed.
