function convert_graph(data){
	nodes = data.split("|")[0];
	edges = data.split("|")[1];
	nodes = nodes.replace("[", "");
	edges = edges.replace("]", "");
	console.log(nodes);
	console.log(edges);
	console.log("Data: " + data);
	return "digraph G { a1 -> b3 }"
}