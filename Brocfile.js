var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

// Tell Broccoli how we want the assets to be compiled
var styles = compileSass(['sass'], 'style.scss', './style.css');

// Merge the compiled styles and scripts into one output directory.
module.exports = mergeTrees([styles]);