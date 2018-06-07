function convert_graph(data){
	nodes = data.split("|")[0];
	edges = data.split("|")[1];
	nodes = nodes.split("[")[1];
	edges = edges.split("]")[0];
	nodes = nodes.trim();
	edges = edges.trim();
	
	var digraph = "digraph G { forcelabels=true;\n";	
	var nodeList = nodes.split(")");
	var i;
	for(i = 0; i < nodeList.length; i++){
		node = nodeList[i];
		console.log("Node: " + i);
		node = node.trim();
		if(!node.includes(",")){
			i = nodeList.length;
			break;
		}
		console.log(node);
		node = node.split("(")[1];
		id = node.split(",")[0];
		label = node.split(",")[1];
		label = label.trim();
		id = id.trim();
		console.log(id);
		console.log(label);
		if(label == "empty"){
			label = "~";
		}
		digraph = digraph + "\n     " + id + " [label= <" + label + "<BR /><FONT POINT-SIZE=\"10\">" + id + "</FONT>>]";
		console.log(digraph);
	}
	digraph = digraph + "}";
	console.log(digraph);
	console.log(nodes);
	console.log(edges);
	console.log("Data: " + data);
	return digraph;
}