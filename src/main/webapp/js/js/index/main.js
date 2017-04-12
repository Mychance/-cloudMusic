define(function(require) {

	var $ = require('jquery');
	require('../common/cookie');
	var Dialog = require('../common/dialog');
	var d = new Dialog();
	d.render();
	require('jquery-ui');
	
	var Login = require('./login');
	var sl = new Login();
	sl.render();
	
	var Reg = require('./reg');
	var R = new Reg();
	R.render();
	
	var Collection = require("./collection");
	var c = new Collection();
	c.render();
	
	var Music = require('../common/music');
	var m = new Music();
	m.render();

	var MList = require('../common/mlist');
	var l = new MList();
	l.render();

	var Index = require('./index');
	var i = new Index();
	i.render();

});




