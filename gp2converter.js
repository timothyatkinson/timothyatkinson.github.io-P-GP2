function convert_graph(data){
	nodes = data.split("|")[0];
	edges = data.split("|")[1];
	nodes.replace("[", "");
	edges.replace("]", "");
	console.log(nodes);
	console.log(edges);
	return "digraph G { a1 -> b3 }"
}