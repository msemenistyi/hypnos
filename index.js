(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Hypnos = factory();
	}
}(this, function () {

	function Hypnos(opts){

		this.opts = {};
		this.options(opts);

		this._defaults = {
			duration: 200,
			error: 200
		};
	};

	Hypnos.prototype.isSleeping = function(callback) {

		if (typeof callback !== 'function'){
			throw new Error('Hypnos module should be provided with callback function');
		}

		var startTime = new Date();

		setTimeout(function(){
			var now = new Date();
			callback(now.valueOf() - startTime.valueOf() - options.duration > options.error);
		}, options.duration);
	};

	Hypnos.prototype.options = function(options) {
		var toBeReturned = false;
		if (typeof options !== 'undefined'){
			if (typeof options !== 'object'){
				throw new Error('Hypnos: The argument passed to options method should be ' + 
					'an object');
			}
			this.opts = options;
		} else {
			toBeReturned = true;
		}

		for (var i in this._defaults) {
			if (this._defaults.hasOwnProperty(i)){
				if (typeof this.opts[i] === 'undefined'){
					this.opts[i] = this._defaults[i];
				}
			}
		}

		if (toBeReturned){
			var opts = {};
			for (var i in this.opts) if (this.opts.hasOwnProperty(i)){
				opts[i] = this.opts[i];
			}
			return opts;
		}


	};

	return Hypnos;

}));