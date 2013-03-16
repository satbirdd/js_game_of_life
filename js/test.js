module("1 cells")
function process_cell(given, expected){
	var body = new Body(given)
	body.tick();
	deepEqual(body.structure, expected, "Passed!" );
}

test( "1 cell alive will die", function() {
	process_cell([ 1 ], [0])
});

test("1 cell dead will still be dead", function(){
	process_cell([0], [0])
});



module("2 cells")
test("2 cells alive will all die", function() {
	process_cell([1, 1], [0, 0])
});

test("2 cells dead will still all die", function() {
	process_cell([0, 0], [0, 0])
});

test("1 alive 1 dead, both die ", function(){
	process_cell([1, 0], [0, 0])
}) 

module("3 cells")
test("3 dead cell will still be all die", function(){
	process_cell([0, 0, 0], [0, 0, 0])
})

test("1 alive and 2 dead dead cells result in all die", function(){
	process_cell([1, 0, 0], [0, 0, 0])
	process_cell([0, 1, 0], [0, 0, 0])
})

test("2 alive and 1 dead cells result 3 dead cell", function(){
	process_cell([1, 1, 0], [0, 0, 0])
})

test("1 alive and 1 dead and 1 alive cells result in one alive cell", function(){
	process_cell([1, 0, 1], [0, 1, 0])
})