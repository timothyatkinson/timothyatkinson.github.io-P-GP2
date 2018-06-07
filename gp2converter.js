function convert_graph(data){
	var nodes = data.split("|")[0];
	var edges = data.split("|")[1];
	nodes = nodes.split("[")[1];
	edges = edges.split("]")[0];
	nodes = nodes.trim();
	edges = edges.trim();
	
	var digraph = "digraph G { forcelabels=true;\n";	
	var nodeList = nodes.split(")");
	var i;
	for(i = 0; i < nodeList.length; i++){
		var node = nodeList[i];
		node = node.trim();
		if(!node.includes(",")){
			i = nodeList.length;
			break;
		}
		node = node.split("(")[1];
		var id = node.split(",")[0];
		var label = node.split(",")[1];
		label = label.trim();
		id = id.trim();
		if(label == "empty"){
			label = "";
		}
		digraph = digraph + "\n     " + id + " [label= <" + label + "<BR /><BR /><FONT POINT-SIZE=\"9\">" + id + "</FONT>>]";
	}	
	var edgeList = edges.split(")");
	for(i = 0; i < edgeList.length; i++){
		var edge = edgeList[i];
		edge = edge.trim();
		if(!edge.includes(",")){
			i = edgeList.length;
			break;
		}
		edge = edge.split("(")[1];
		var id = edge.split(",")[0];
		var source = edge.split(",")[1];
		var target = edge.split(",")[2];
		var label = edge.split(",")[3];
		label = label.trim();
		source = source.trim();
		target = target.trim();
		if(label == "empty"){
			label = "";
		}
		digraph = digraph + "\n     " + source + "->" + target + " [label= <" + label + ">]";
	}	
	digraph = digraph + "}";
	return digraph;
}