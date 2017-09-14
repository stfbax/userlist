const NODE_ENV = process.env.NODE_ENV || 'dev';

console.log('[CONFIG] Loaded for', NODE_ENV);

let config = null;

if (NODE_ENV === 'production') {
    config = require('./prod');
} else {
    config = require('./dev');
}

module.exports = config;
