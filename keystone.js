var keystone = require('keystone');

keystone.init({

	'name': 'NTUGarage',
	'brand': 'NTUGarage',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '1010272a90187e3f6180d6d8abf57223b45625be7342c06277e1eb7628352f234cf526b5a245535d85d0d24a586ffa0928f26fff3ecda248800c7439771b3e71',

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
