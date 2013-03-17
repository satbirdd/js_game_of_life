module("1 lines, 1 cells")
function process_cell(given, expected){
	var body = new Body(given)
	body.tick();
	deepEqual(body.structure, expected, "Passed!" );
}

test( "1 cell alive will die", function() {
	process_cell([[1]], [[0]])
});;

test("1 cell dead will still be dead", function(){
	process_cell([[0]], [[0]])
});;



module("1 lines, 2 cells")
test("2 cells alive will all die", function() {
	process_cell([[1, 1]], [[0, 0]])
});;

test("2 cells dead will still all die", function() {
	process_cell([[0, 0]], [[0, 0]])
});;

test("1 alive 1 dead, both die ", function(){
	process_cell([[1, 0]], [[0, 0]])
}); 



module("1 lines, 3 cells")
test("3 dead cell will still be all die", function(){
	process_cell([[0, 0, 0]], [[0, 0, 0]])
});

test("1 alive and 2 dead dead cells result in all die", function(){
	process_cell([[1, 0, 0]], [[0, 0, 0]])
	process_cell([[0, 1, 0]], [[0, 0, 0]])
});

test("2 alive and 1 dead cells result 3 dead cell", function(){
	process_cell([[1, 1, 0]], [[0, 0, 0]])
});

test("1 alive and 1 dead and 1 alive cells result in one alive cell", function(){
	process_cell([[1, 0, 1]], [[0, 0, 0]])
});



module("1 lines, 4 cells")
test("1 alive cell with 3 dead cell will all die", function(){
	process_cell([[1, 0, 0, 0]], [[0, 0, 0, 0]]);
	process_cell([[0, 1, 0, 0]], [[0, 0, 0, 0]]);
});

test("2 alive cell with 2 dead cells will all die", function(){
	process_cell([[1, 1, 0, 0]], [[0, 0, 0, 0]]);
	process_cell([[0, 1, 1, 0]], [[0, 0, 0, 0]]);
});

test("1 alive with one dead with one alve with one dead will survive one cell", function(){
	process_cell([[1, 0, 1, 0]], [[0, 0, 0, 0]]);
	process_cell([[0, 1, 0, 1]], [[0, 0, 0, 0]]);
});

test("3 alive with 1 dead cell will  survive one cell", function(){
	process_cell([[1, 1, 1, 0]], [[0, 1, 0, 0]]);
	process_cell([[1, 1, 0, 1]], [[0, 0, 0, 0]]);
});

test("4 alive cells wil survive 2 cells", function(){
	process_cell([[1, 1, 1, 1]], [[0, 1, 1, 0]]);
});



module("2 lines, 2 cells")
test("2 dead cells will result in 2 dead cells", function(){
	process_cell([[0],
								[0]],
							 [[0],
								[0]])
});

test("2 alive cessl will result in 2 dead cells", function(){
	process_cell([[1],
								[1]],
							 [[0],
								[0]])
});

test("1 alive cell with 1 dead cell will all dead", function(){
	process_cell([[1],
								[0]],
							 [[0],
								[0]])
});



module("2 lines, 4 cells")
test("4 dead cells will all die", function(){
	process_cell([[0, 0],
								[0, 0]],
							 [[0, 0],
								[0, 0]])
});

test("3 dead cells will all die", function(){
	process_cell([[1, 0],
								[0, 0]],
							 [[0, 0],
								[0, 0]]);

	process_cell([[0, 1],
								[0, 0]],
							 [[0, 0],
								[0, 0]]);

	process_cell([[0, 0],
								[1, 0]],
							 [[0, 0],
								[0, 0]]);

	process_cell([[0, 0],
								[0, 1]],
							 [[0, 0],
								[0, 0]]);
});

test("2 alive cell will all die", function(){
	process_cell([[1, 1],
								[0, 0]],
							 [[0, 0],
								[0, 0]]);

	process_cell([[1, 0],
								[0, 1]],
							 [[0, 0],
								[0, 0]]);

	process_cell([[1, 0],
								[1, 0]],
							 [[0, 0],
								[0, 0]]);

	process_cell([[0, 1],
								[1, 0]],
							 [[0, 0],
								[0, 0]]);
});

test("3 alive cell will result in 4 alive cells", function(){
	process_cell([[1, 1],
								[1, 0]],
							 [[1, 1],
								[1, 1]]);

	process_cell([[0, 1],
								[1, 1]],
							 [[1, 1],
								[1, 1]]);
});

test("4 alive cells wiil still be all alive", function(){
	process_cell([[1, 1],
								[1, 1]],
							 [[1, 1],
								[1, 1]]);
});




module("2 lines, 9 cells")
test("1 alive with 5 dead cell result all die", function(){
	process_cell([[1, 0, 0],
								[0, 0, 0]],
							 [[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[0, 1, 0],
								[0, 0, 0]],
							 [[0, 0, 0],
								[0, 0, 0]]);
});

test("2 alive with 4 dead cell result all die", function(){
	process_cell([[1, 1, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[0, 1, 0],
								[0, 1, 0]],
							 [[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								 [0, 0, 1]],
							 	[[0, 0, 0],
								 [0, 0, 0]]);
});

test("3 alive with 3 dead cells in one row result 2 alive cells", function(){
	process_cell([[1, 1, 1],
								[0, 0, 0]],
							[[0, 1, 0],
								[0, 1, 0]]);
});

test("3 alive with 3 dead cessl in different row result 4 alive cells", function(){
	process_cell([[0, 1, 1],
								[0, 1, 0]],
								[[0, 1, 1],
								[0, 1, 1]]);
})


test("4 alive cells will result in 4 alive cells", function(){
	process_cell([[0, 1, 1],
								[0, 1, 1]],
								[[0, 1, 1],
								[0, 1, 1]]);
	process_cell([[0, 1, 1],
								[1, 1, 0]],
								[[1, 1, 1],
								[1, 1, 1]]);
	process_cell([[1, 1, 1],
								[1, 0, 0]],
								[[1, 1, 0],
								[1, 0, 0]]);
	process_cell([[1, 1, 1],
								[0, 1, 0]],
								[[1, 1, 1],
								[1, 1, 1]]);
})

test("5 alive cells and 1 dead cells ", function(){
	process_cell([[1, 1, 1],
								[0, 1, 1]],
								[[1, 0, 1],
								[1, 0, 1]]);
})

test(" 6 alive cells will result in 2 dead cells", function(){
	process_cell([[1, 1, 1],
								[1, 1, 1]],
								[[1, 0, 1],
								[1, 0, 1]]);
})



module("2 lines 8 cells ")
test("1 alive cell with 7 dead cells will all dead", function(){
	process_cell([[1, 0, 0, 0],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[0, 1, 0, 0],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);
})

test("2 alive cell with 6 dead cells will all dead", function(){
	process_cell([[1, 1, 0, 0],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[0, 1, 1, 0],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[0, 1, 0, 1],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[1, 0, 0, 1],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[1, 0, 0, 0],
								[1, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[1, 0, 0, 0],
								[0, 1, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[1, 0, 0, 0],
								[0, 0, 1, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[1, 0, 0, 0],
								[0, 0, 0, 1]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[0, 1, 0, 0],
								[0, 1, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[0, 1, 0, 0],
								[0, 0, 1, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);
})

test("3 alive cells with 5 dead cells will have diffrent result", function(){
	process_cell([[1, 1, 1, 0],
								[0, 0, 0, 0]],
								[[0, 1, 0, 0],
								[0, 1, 0, 0]]);

	process_cell([[1, 0, 1, 1],
								[0, 0, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);

	process_cell([[1, 1, 0, 0],
								[1, 0, 0, 0]],
								[[1, 1, 0, 0],
								[1, 1, 0, 0]]);

	process_cell([[1, 0, 1, 0],
								[1, 0, 0, 0]],
								[[0, 1, 0, 0],
								[0, 1, 0, 0]]);

	process_cell([[1, 0, 0, 1],
								[0, 1, 0, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);
})

test("4 alive cells with 4 dead cells", function(){
	process_cell([[1, 1, 1, 1],
								[0, 0, 0, 0]],
								[[0, 1, 1, 0],
								[0, 1, 1, 0]]);

	process_cell([[1, 1, 1, 0],
								[1, 0, 0, 0]],
								[[1, 1, 0, 0],
								[1, 0, 0, 0]]);

	process_cell([[1, 1, 1, 0],
								[0, 1, 0, 0]],
								[[1, 1, 1, 0],
								[1, 1, 1, 0]]);

	process_cell([[1, 1, 0, 1],
								[1, 0, 0, 0]],
								[[1, 1, 0, 0],
								[1, 1, 0, 0]]);

	process_cell([[1, 1, 0, 1],
								[0, 1, 0, 0]],
								[[1, 1, 1, 0],
								[1, 1, 1, 0]]);

	process_cell([[1, 1, 0, 0],
								[1, 1, 0, 0]],
								[[1, 1, 0, 0],
								[1, 1, 0, 0]]);

	process_cell([[1, 1, 0, 0],
								[1, 0, 1, 0]],
								[[1, 1, 0, 0],
								[1, 0, 0, 0]]);

	process_cell([[1, 1, 0, 0],
								[1, 0, 0, 1]],
								[[1, 1, 0, 0],
								[1, 1, 0, 0]]);

	process_cell([[1, 1, 0, 0],
								[0, 0, 1, 1]],
								[[0, 1, 1, 0],
								[0, 1, 1, 0]]);

	process_cell([[1, 0, 1, 0],
								[1, 0, 1, 0]],
								[[0, 0, 0, 0],
								[0, 0, 0, 0]]);
})



module("3 lines, 3 cells ")
test("3 dead cells will still be all dead", function(){
	process_cell([[0],
								[0],
								[0]],
								[[0],
								[0],
								[0]]);
})

test("1 alive with 2 dead cells will still be all dead", function(){
	process_cell([[1],
								[0],
								[0]],
								[[0],
								[0],
								[0]]);

	process_cell([[0],
								[1],
								[0]],
								[[0],
								[0],
								[0]]);
})

test("2 alive with 1 dead cells will still be all dead", function(){
	process_cell([[1],
								[1],
								[0]],
								[[0],
								[0],
								[0]]);

	process_cell([[1],
								[0],
								[1]],
								[[0],
								[0],
								[0]]);
})

test("3 alive cells will result in 1 alive cell", function(){
	process_cell([[1],
								[1],
								[1]],
								[[0],
								[1],
								[0]]);
})

module("3lines, 6 cells")
test("6 dead cell will still be all dead", function(){
	process_cell([[0, 0],
								[0, 0],
								[0, 0]],
								[[0, 0],
								[0, 0],
								[0, 0]]);
})

test("1 alive with 5 dead cell will still be all dead", function(){
	process_cell([[1, 0],
								[0, 0],
								[0, 0]],
								[[0, 0],
								[0, 0],
								[0, 0]]);

	process_cell([[0, 0],
								[1, 0],
								[0, 0]],
								[[0, 0],
								[0, 0],
								[0, 0]]);
})

test("2 alive with 4 dead cell will still be all dead", function(){
	process_cell([[1, 1],
								[0, 0],
								[0, 0]],
								[[0, 0],
								[0, 0],
								[0, 0]]);

	process_cell([[1, 0],
								[0, 1],
								[0, 0]],
								[[0, 0],
								[0, 0],
								[0, 0]]);
})

test("3 alive with 3 dead cell", function(){
	process_cell([[1, 1],
								[1, 0],
								[0, 0]],
								[[1, 1],
								[1, 1],
								[0, 0]]);

	process_cell([[0, 0],
								[1, 1],
								[1, 0]],
								[[0, 0],
								[1, 1],
								[1, 1]]);

	process_cell([[1, 0],
								[1, 0],
								[1, 0]],
								[[0, 0],
								[1, 1],
								[0, 0]]);
})

test("4 alive with 2 dead cell", function(){
	process_cell([[1, 1],
								[1, 1],
								[0, 0]],
								[[1, 1],
								[1, 1],
								[0, 0]]);

	process_cell([[1, 1],
								[1, 0],
								[1, 0]],
								[[1, 1],
								[1, 0],
								[0, 0]]);

	process_cell([[1, 1],
								[0, 1],
								[1, 0]],
								[[1, 1],
								[0, 1],
								[0, 0]]);
})

test("5 alive with 5 dead cell", function(){
	process_cell([[1, 1],
								[1, 1],
								[0, 1]],
								[[1, 1],
								[0, 0],
								[1, 1]]);

	process_cell([[1, 1],
								[1, 0],
								[1, 1]],
								[[1, 1],
								[0, 0],
								[1, 1]]);
})

test("6 alive cells", function(){
	process_cell([[1, 1],
								[1, 1],
								[1, 1]],
								[[1, 1],
								[0, 0],
								[1, 1]]);
})

module("3 lines 9 cells ")
test("less than 3 alive cells will still be all dead", function(){
	process_cell([[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[0, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[0, 1, 0],
								[0, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[0, 0, 0],
								[1, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[0, 0, 0],
								[0, 1, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 1],
								[0, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[1, 0, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[0, 1, 0],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[0, 0, 0],
								[0, 1, 1],
								[0, 0, 0]],
								[[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]]);
});


test("3 alive cells ", function(){
	process_cell([[1, 1, 1],
								[0, 0, 0],
								[0, 0, 0]],
								[[0, 1, 0],
								[0, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]],
								[[1, 1, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 1, 0],
								[0, 0, 0]],
								[[1, 1, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 0, 1],
								[0, 0, 0]],
								[[0, 1, 0],
								[0, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 0, 0],
								[1, 0, 0]],
								[[0, 0, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 0, 0],
								[0, 1, 0]],
								[[0, 0, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 0, 0],
								[0, 0, 1]],
								[[0, 0, 0],
								[0, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 1],
								[1, 0, 0],
								[0, 0, 0]],
								[[0, 1, 0],
								[0, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[1, 1, 0],
								[0, 0, 0]],
								[[1, 1, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[1, 0, 1],
								[0, 0, 0]],
								[[0, 1, 0],
								[0, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[1, 0, 0],
								[1, 0, 0]],
								[[0, 0, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[0, 1, 0],
								[0, 1, 0],
								[0, 1, 0]],
								[[0, 0, 0],
								[1, 1, 1],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[0, 1, 0],
								[1, 0, 0]],
								[[0, 0, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[0, 1, 0],
								[0, 0, 1]],
								[[0, 0, 0],
								[0, 1, 0],
								[0, 0, 0]]);
})

test("4 alive cells", function(){
	process_cell([[1, 1, 1],
								[1, 0, 0],
								[0, 0, 0]],
								[[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[0, 1, 0],
								[0, 0, 0]],
								[[1, 1, 1],
								[1, 1, 1],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[0, 0, 0],
								[1, 0, 0]],
								[[0, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[0, 0, 0],
								[0, 1, 0]],
								[[0, 1, 0],
								[1, 0, 1],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 1, 0],
								[0, 0, 0]],
								[[1, 1, 0],
								[1, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 0, 1],
								[0, 0, 0]],
								[[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 0, 0],
								[1, 0, 0]],
								[[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 0, 0],
								[0, 1, 0]],
								[[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 0, 0],
								[0, 0, 1]],
								[[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 1, 0],
								[1, 0, 0]],
								[[1, 1, 0],
								[0, 1, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[0, 1, 0],
								[0, 1, 0]],
								[[1, 1, 0],
								[0, 1, 1],
								[0, 0, 0]]);

	process_cell([[1, 0, 0],
								[1, 1, 0],
								[0, 1, 0]],
								[[1, 1, 0],
								[1, 1, 0],
								[1, 1, 0]]);

	process_cell([[1, 0, 0],
								[1, 0, 1],
								[0, 1, 0]],
								[[0, 1, 0],
								[1, 0, 0],
								[0, 1, 0]]);

	process_cell([[0, 1, 0],
								[1, 0, 1],
								[0, 1, 0]],
								[[0, 1, 0],
								[1, 0, 1],
								[0, 1, 0]]);
})

test("5 alive cells ", function(){
	process_cell([[1, 1, 1],
								[1, 1, 0],
								[0, 0, 0]],
								[[1, 0, 1],
								[1, 0, 1],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[1, 0, 1],
								[0, 0, 0]],
								[[1, 0, 1],
								[1, 0, 1],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[1, 0, 0],
								[1, 0, 0]],
								[[1, 1, 0],
								[1, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[0, 1, 0],
								[1, 0, 0]],
								[[1, 1, 1],
								[0, 0, 1],
								[0, 0, 0]]);

	process_cell([[1, 1, 1],
								[0, 1, 0],
								[0, 1, 0]],
								[[1, 1, 1],
								[0, 0, 0],
								[0, 0, 0]]);

	process_cell([[1, 1, 0],
								[1, 1, 0],
								[0, 1, 0]],
								[[1, 1, 0],
								[0, 0, 1],
								[1, 1, 0]]);
	process_cell([[1, 1, 0],
								[1, 0, 1],
								[0, 1, 0]],
								[[1, 1, 0],
								[1, 0, 1],
								[0, 1, 0]]);

	process_cell([[1, 0, 1],
								[1, 1, 0],
								[0, 1, 0]],
								[[1, 0, 0],
								[1, 0, 1],
								[1, 1, 0]]);

	process_cell([[1, 0, 1],
								[1, 1, 0],
								[1, 0, 0]],
								[[1, 0, 0],
								[1, 0, 0],
								[1, 1, 0]]);

	process_cell([[1, 0, 1],
								[1, 0, 1],
								[0, 1, 0]],
								[[0, 0, 0],
								[1, 0, 1],
								[0, 1, 0]]);
})

test("6 alive cells", function(){
	process_cell([[1, 1, 1],
								[1, 1, 1],
								[0, 0, 0]],
								[[1, 0, 1],
								[1, 0, 1],
								[0, 1, 0]]);

	process_cell([[1, 1, 1],
								[1, 1, 0],
								[1, 0, 0]],
								[[1, 0, 1],
								[0, 0, 1],
								[1, 1, 0]]);

	process_cell([[1, 1, 1],
								[1, 1, 0],
								[0, 1, 0]],
								[[1, 0, 1],
								[0, 0, 0],
								[1, 1, 0]]);

	process_cell([[1, 1, 1],
								[1, 1, 0],
								[0, 0, 1]],
								[[1, 0, 1],
								[1, 0, 0],
								[0, 1, 0]]);

	process_cell([[1, 1, 0],
								[1, 1, 0],
								[1, 1, 0]],
								[[1, 1, 0],
								[0, 0, 1],
								[1, 1, 0]]);
})