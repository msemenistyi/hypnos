Hypnos [![Build Status](https://travis-ci.org/msemenistyi/hypnos.png)](https://travis-ci.org/msemenistyi/connect-image-optimus)
=====


## Install
**Zip archive**:
[Download](https://github.com/msemenistyi/hypnos/archive/master.zip)

**Browserify**:
> npm install hypnos

**Bower**:
> bower install hypnos

##Overview
Hypnos is a module for determinign if device is sleeping. This may be used for 
cases when you need to know for sure, that device on which code is executing 
is currently working (most probably these are the cases with repetitive actions 
taking place or some time-driven queue).

Hypnos is making assumptions basing on setTimeout behaviour in javascript. It 
calls a setTimeout function with a certain delay and writes down the time of 
the call. In case when difference between call time, the time of callback execution
and the **error** exceeds the **error** value, true is being returned.

Ergo, callback will not be executed until browser takes control of the device.  

*Note:* There is also a possibility of performing similar action with help of
Page Visibility API but it lacks support in most mobile browsers. 

###Usage

Hypnos may be used without any modular system:
```html
<script src="./hypnos.js"></script>
<script>
	var hypnos = new Hypnos();
</script>
```

With help of browserify:
```js
	var Hypnos = require('hypnos');
	var hypnos = new Hypnos();
```

Or AMD style (RequireJS): 
```js
	define(['hypnos'], function(Hypnos))
	var hypnos = new Hypnos();
```

The actual usage:
```js
	hypnos.isSleeping(function(isSleeping){
		if (isSleeping){
			setFireToTheRain();
		}
	});
```

###API
- **constructor** (*Object* options) - creates a Hypnos instance. May be called with
one optional parameters - options object.

- **options** (*Object* options) - gets or sets options object. If options object 
is provided, sets it, otherwise - returns the current options object.

- **isSleeping** (*Function* callback) - checks whether device is sleeping. Accepts
callback which will be executed when device is awake. Callback accepts one parameter
**isSleeping** *Boolean* which shows if device was sleeping.

###Options
- **delay** *Int* - delay of setTimeout function for time checking. **Default** 200.
- **error** *Int* - the value of error possible for setTimeout. **Default** 200.

##Contributing
Feel free to open issues and send PRs, though make sure that you create tests
for new functionality and amend ones for fixes and changes. 

## Running tests
Tests are not covering the actual functionality due to complexity of their 
implementation but at least they cover passing parameters, options generation etc.
Run `npm test` in order to see test results.

## License

The MIT License (MIT)

Copyright (c) 2014 Semenistyi Mykyta nikeiwe@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.