'use strict';

var os = require('os');
var uptime = os.uptime();

function changeTime() {
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = uptime - (hours * 3600) - (minutes * 60);

    if(hours > 0) {
        console.log('Uptime is: ', hours.toFixed(0), ' h ' + minutes.toFixed(0), ' min ' + seconds.toFixed(0), ' sec ');
        
    }
    else if(minutes > 0) {
        console.log('Uptime is: ', minutes.toFixed(0), ' min ' + seconds.toFixed(0), ' sec ');
    }
    else if(seconds > 0) {
        console.log('Uptime is: ', seconds.toFixed(0), ' sec ');
    }
    
}

exports.print = changeTime;