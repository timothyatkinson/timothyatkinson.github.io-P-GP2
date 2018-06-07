function convert_graph(data){
	nodes = data.split("|")[0];
	edges = data.split("|")[1];
	nodes = nodes.split("[")[1];
	edges = edges.split("]")[0];
	edges = edges.replace("]", "");
	
	var digraph = "digraph G {";	
	var nodeList = nodes.split(")");
	var i;
	for(i = 0; i < nodeList.length; i++){
		node = nodeList[i];
		node = node.split("(")[1];
		id = node.split(",")[0];
		id = id.trim();
		console.log(id);
	}
	console.log(nodes);
	console.log(edges);
	console.log("Data: " + data);
	return "digraph G { a1 -> b3 }"
}