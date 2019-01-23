'use strict';

var os = require('os');
var colors = require('colors');
var time = require('../modules/time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    //console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    time.print();
    console.log('User name:'.bold.yellow, userInfo.username);
    console.log('Home dir:'.bgWhite.black, userInfo.homedir);
}

exports.print = getOSinfo;