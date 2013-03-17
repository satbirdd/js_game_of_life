function Body(arr) {
	this.structure = arr;
	this.reverse = [];

	this.tick =function() {
		this.old_structure = this.structure;
		this.length = this.old_structure.length;
		this.structure = [ ];
		for(var y = 0; y < this.length; y ++) {
			this.structure[y] = [];
			var	x_axe = this.structure[y];
			for(var x = 0; x < this.old_structure[y].length; x ++) {
				if (this.live(x, y)) {
					x_axe.push(1);
					if (1 != this.old_structure[y][x]) this.reverse.push([y, x]); // FIXME : untested
				} else {
					x_axe.push(0);
					if (0 != this.old_structure[y][x]) this.reverse.push([y, x]); // FIXME : untested
				}
			}
		}
	}

	this.live = function(x, y) {
		return this._have_two_alive_neighbours_and_self_alive(x, y)
		|| this._have_three_alive_neighbours(x, y);
			  
	}

	this._have_two_alive_neighbours_and_self_alive = function(x, y) {
		var top_alive = this.get_top_alive_neighbours(x, y);
		var current_alive = this.get_current_line_alive_neighbours(x, y);
		var buttom_alive = this.get_buttom_alive_neighbours(x, y);
		return (2 == top_alive + current_alive + buttom_alive
		&& this.is_self_alive(x, y))
	}

	this._have_three_alive_neighbours = function(x, y) {
		var top_alive = this.get_top_alive_neighbours(x, y);
		var current_alive = this.get_current_line_alive_neighbours(x, y);
		var buttom_alive = this.get_buttom_alive_neighbours(x, y);
		return 3 == top_alive + current_alive + buttom_alive;
	}

	this.get_top_alive_neighbours = function(x, y) {
		return this.top_left(x, y) + this.top(x, y) + this.top_right(x, y);
	}

	this.get_current_line_alive_neighbours = function(x, y) {
		return this.left(x, y) + this.right(x, y);
	}

	this.get_buttom_alive_neighbours = function(x, y) {
		return this.buttom_left(x, y) + this.buttom(x, y) + this.buttom_right(x, y);
	}




	this.top_left = function(x, y) {
		if (this.is_at_leftset_line(x, y) || this.is_at_topest_line(x, y)) return 0;
		return this.old_structure[y - 1][x - 1];
	}

	this.top = function(x, y) {
		if (this.is_at_topest_line(x, y)) return 0;
		return this.old_structure[y - 1][x];
	}

	this.top_right = function(x, y) {
		if (this.is_at_topest_line(x, y) || this.is_at_rightest_line(x, y)) return 0;
		return this.old_structure[y - 1][x + 1];
	}

	this.left = function(x, y) {
		if (this.is_at_leftset_line(x, y)) return 0;
		return this.old_structure[y][x-1];
	}

	this.right = function(x, y) {
		if (this.is_at_rightest_line(x, y)) return 0;
		return this.old_structure[y][x + 1];
	}

	this.buttom_left = function(x, y) {
		if (this.is_at_leftset_line(x, y) || this.is_at_buttom_line(x, y)) return 0;
		return this.old_structure[y + 1][x - 1]
	}

	this.buttom = function(x, y) {
		if (this.is_at_buttom_line(x, y)) return 0;
		return this.old_structure[y + 1][x];
	}

	this.buttom_right = function(x, y) {
		if (this.is_at_buttom_line(x, y) || this.is_at_rightest_line(x, y)) return 0;
		return this.old_structure[y + 1][x + 1]
	}



	this.is_at_topest_line = function(x, y) {
		return 0 == y;
	}

	this.is_at_leftset_line = function(x, y) {
		return 0 == x;
	}

	this.is_at_rightest_line = function(x, y) {
		return x == this.old_structure[y].length - 1;
	}

	this.is_at_buttom_line = function(x, y) {
		return y == this.length - 1;
	}

	this.is_self_alive = function(x, y) {
		return this.old_structure[y][x];
	}
}