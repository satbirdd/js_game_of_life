function Body(arr) {
	this.initialize = function(arr) {
		this.structure = arr;
	}

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

	this.live = function(x_index, y_index) {
		if (0 == x_index || x_index == this.old_structure[y_index].length) return false;
		if (1 == this.old_structure[y_index][x_index - 1] 
			  && 1 == this.old_structure[y_index][x_index +  1]) {
			return true;
		}
		return false;
	}

	this.initialize(arr);
}