'use strict'; 

var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');//enkodowanie przyjmowanych danych

process.stdin.on('readable', function() {//nasłuchiwanie na zdarzenie odczytu
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {//sprawdzenie czy na wejściu cokolwiek istnieje
        var instruction = input.toString().trim();//trim()pozbycie się wszystkich białych znaków z przodu i za tekstem
        switch (instruction) {//switch statement  zamiast if, if else
            case '/exit':
                process.stdout.write('Quitting app!\n');// standard output służący do wypisywania komunikatów z procesu
                process.exit();
                break;
            
            
            case '/version':
                process.stdout.write('Node version is: ' + process.versions.node + '\n');
                process.stdout.write('Language is: ' + process.env.lang + '\n');
                break;
            
            case '/getOSinfo':
                OSinfo.print();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');//komunikat do przekazywania błędów pojawi się w konsoli
        }
    }
    /*
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
        console.log('System:', type);
        console.log('Release:', release);
        console.log('CPU model:', cpu);
        console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
        console.log('User name:', userInfo.username);
        console.log('Home dir:', userInfo.homedir);
    }
    */
});