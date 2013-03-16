function Body(arr) {
	this.structure = arr;

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
				} else {
					x_axe.push(0);
				}
			}
		}
	}

	this.live = function(x, y) {
		return this._have_two_alive_neighbours_and_self_alive(x, y)
		// || this._have_three_alive_neighbours(x, y)
			  
	}

	this._have_two_alive_neighbours_and_self_alive = function(x, y) {
		if (0 == x || x == this.old_structure[y].length) return false;
		if (1 == this.old_structure[y][x - 1] 
			  && 1 == this.old_structure[y][x +  1]
			  && 1 == this.old_structure[y][x]) {
			return true;
		}
		return false;
	}
}