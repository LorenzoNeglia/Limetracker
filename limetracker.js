setTimeout(function(){  
          heatmap = h337.create({
          container: document.getElementById('dynamicReloadContainer'),
          maxOpacity: .5,
          radius: 40,
          blur: .70,
          // backgroundColor with alpha so you can see through it
          backgroundColor: 'rgba(0, 0, 58, 0.70)'
        });
	
	heatmap.addData({ x: 0, y: 0, value: 100});
	window.saveDataAcrossSessions = true
        webgazer.setGazeListener((data, timestamp) => {
           if(data != null)
		heatmap.addData({ x: data.x, y: data.y + this.scrollY, value: 20});
	 }).showVideo(false).begin()}, 3000);

var org_html = document.getElementsByClassName("heatmap-canvas");

setTimeout(function(){  
      if(org_html != null){
        $(org_html).wrapAll('<div id="HeatmapContainer"></div>');
	$("#HeatmapContainer").css("visibility", "hidden");
      }
  }, 3000);

function hideCanvas() {
  	if($("#HeatmapContainer").css("visibility")=="hidden"){
    	   $("#HeatmapContainer").css("visibility", "visible");
    	}else{
     	   $("#HeatmapContainer").css("visibility", "hidden");
    	}
}

var trace = true;
function stopTrace() {
  	if(trace){
    	  webgazer.pause();
          trace = false;
    	}else{
 	  webgazer.resume();
          trace = true;
    }
}

var ScreenGet = false;
var call = false;

function printResult(){
  var heatmapDT = heatmap.getDataURL();
  var Screen;
  var ScreenOV;
 
if(!call){  
if(!ScreenGet){
  	html2canvas(document.querySelector("#dynamicReloadContainer")).then(canvas => {
   	Screen = canvas;
	var link = document.createElement('a');
  	link.download = 'Screen.png';
  	link.href = Screen.toDataURL()
 	 link.click();
 	ScreenGet = true;
});
}
var x = document.getElementById("HeatmapContainer");
if (x.style.visibility == "hidden"){
	x.style.visibility = "visible";
      }

html2canvas(document.querySelector("#dynamicReloadContainer")).then(canvas => {
  	ScreenOV = canvas;
  	var link = document.createElement('a');
  	link.download = 'ScreenOV.png';
  	link.href = ScreenOV.toDataURL()
  	link.click();
 });

	x.style.visibility="hidden";
	call = true;
	
	var link = document.createElement('a');
 	link.download = 'Heatmap.png';
 	link.href = heatmapDT;
  	link.click();
}
}
