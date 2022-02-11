"use strict";
var chai = require('chai');
var dirtyChai = require('dirty-chai');
chai.use(dirtyChai);
global.jestExpect = global.expect;
global.expect = chai.expect;
