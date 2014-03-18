var Hypnos = require('../');

describe('hypnos should', function(){
	it('be defined as a CommonJS module',  function(){
		var hypnos = new Hypnos();
		hypnos.should.be.ok;
		hypnos.should.be.Object;
	});

	it('use default options if not passed', function(){
		var hypnos = new Hypnos();
		hypnos.options().should.be.ok;
		hypnos.options().should.be.eql(hypnos._defaults);
	});

	it('extend default options', function(){
		var hypnos = new Hypnos();
		hypnos.options({duration: 300});
		hypnos._defaults.duration = 300; 
		hypnos.options().should.be.eql(hypnos._defaults);
	});

	it('throw error if passed to options argument is not an object', function(){
		var hypnos = new Hypnos();
		hypnos.options.bind(null, true).should.throw()
	});

	it('throw error if no callback was passed to isSleeping method', function(){
		var hypnos = new Hypnos();
		hypnos.isSleeping.should.throw()
	});

});