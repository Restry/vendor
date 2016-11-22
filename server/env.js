var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://42.121.119.36/vendor-db',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://42.121.119.36/vendor-db',
		port: process.env.PORT || 8001
	}
};
