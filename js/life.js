function Body(arr) {
	this.initialize = function(arr) {
		this.structure = arr;
	}

	this.tick =function() {
		var old_structure = this.structure;
		this.structure = [ ];
		for( var i = 0; i < old_structure.length; i ++) {
			this.structure.push(0);
		}
	}

	this.initialize(arr);
}