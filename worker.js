importScripts("bower_components/viz.js/viz.js");

onmessage = function(e) {
	console.log(e.data.src);
  var result = Viz(e.data.src, e.data.options);
  postMessage(result);
}
