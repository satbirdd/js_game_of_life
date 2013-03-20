var body_arr = [];
var body_span = [];
var body;

document.body.onload = function() {
	for (var y = 0; y < 100; y ++) {
		var html_x_axes = body_span[y] = [];
		var arr_x_axes = body_arr[y] = [];
		for (var x = 0; x < 100; x ++) {
			var span = document.createElement('span');
			document.body.appendChild(span);
			html_x_axes[x] = span;
			arr_x_axes[x] = 0;
		}
	}
	body = new Body(body_arr);
	run_the_game();
}

function run_the_game() {
	init_body(glider_gun);

	setInterval('sync_spans()', 100);
}

function sync_spans() {
	for (var index = 0; index < body.reverse.length; index ++) {
		var y = body.reverse[index][0];
		var x = body.reverse[index][1];
		if(body.structure[y][x] == 0 ){
			body_span[y][x].setAttribute('class', '');
		} else {
			body_span[y][x].setAttribute('class', 'alive');
		}
	}
	body.tick();
}

var glider_gun = [[1, 25],
				[2, 23], [2, 25],
				[3, 13], [3, 14], [3, 21], [3, 22], [3, 35], [3, 35],
				[4, 12], [4, 16], [4, 21], [4, 22], [4, 35], [4, 36],
				[5, 1], [5, 2], [5, 11], [5, 17], [5, 21], [5, 22],
				[6, 1], [6, 2], [6, 11], [6, 15], [6, 17], [6, 18], [6, 23], [6, 25],
				[7, 11], [7, 17], [7, 25],
				[8, 12], [8, 16],
				[9, 13], [9, 14]]

var lightweight_spaceship = [[1, 3], [1, 4],
							[2, 1], [2, 2], [2, 4], [2, 5],
							[3, 1], [3, 2], [3, 3], [3, 4],
							[4, 2], [4, 3]]

var glider = [[1, 2],
			 [2, 3],
			 [3, 1], [3, 2], [3, 3]]

function init_body(arr) {
	for(var index = 0; index < arr.length; index ++){
		var position = arr[index];
		body_arr[position[0]][position[1]] = 1;
	}
	init_draw();
}

function init_draw() {
	for(var y = 0; y < body.structure.length; y ++) {
		for(var x = 0; x < body.structure[y].length; x ++){
			if(body.structure[y][x] == 0) {
				body_span[y][x].setAttribute('class', '');
			} else {
				body_span[y][x].setAttribute('class', 'alive');
			}
		}
	}
}

// document.