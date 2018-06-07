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
		console.log("Node: " + i);
		console.log(node);
		node = node.split("(")[1];
		id = node.split(",")[0];
		label = node.split(",")[1];
		label = label.trim();
		id = id.trim();
		console.log(id);
		if(label == "empty"){
			digraph = diagraph + "\n     " + id + " [label= <{<I>" + id + "</I>}>]" 
		}
		else{
			digraph = diagraph + "\n     " + id + " [label= <{<I>" + id + "</I>}>:" + label + "]";
		}
		console.log(digraph);
	}
	console.log(digraph);
	console.log(nodes);
	console.log(edges);
	console.log("Data: " + data);
	return "digraph G { a1 -> b3 }"
}