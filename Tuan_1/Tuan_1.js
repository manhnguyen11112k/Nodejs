function laSoNguyenDuong(n){
    return (Number.isInteger(n) && n > 0);
}

function KiemTraSNT(n){
    var a = 1;
    if (n < 2) return a = 0; 
    var i = 2;
    while(i <n){
        if( n % i == 0) {
            a = 0;
            break;
        }
        i++;
    }
    return a;
}

function SNT(n){
    var i = 0, KiemTra = 0, b = "";

    while ( i < n){
        KiemTra = KiemTraSNT(i);
        if( KiemTra == 1) 
            b += i + " ";
        i++;
    }
    console.log("Các số nguyên tố nhỏ hơn " + n + " là : " + b); 
}

var fs = require("fs");

function InDS(){
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file){
            fs.appendFile('a.txt', file + "\n",  function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            console.log(file);
        });
    });
}

function InND(){
    fs.readdir("./",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            fs.readFile(file, function (err, data) {
                if (err) {
                return console.error(err);
                }
                fs.appendFile('b.txt',"File " + file + " :\n" + data + "\n",  function(err) {
                    if (err) {
                        return console.error(err);
                    }
                });
            });
        });
    });
}

var n = 100;
var KiemTra = KiemTraSNT(n);
var s = laSoNguyenDuong(n);
 if(s== true){

    if( KiemTra == 1) {
        console.log(n + " là số nguyên tố!");
        SNT(n);
        InDS();
    }
    else {
        console.log(n + " không phải là số nguyên tố!");
        SNT(n);
        InND();
    }
}
else{
    console.log(n+" Không phải là số nguyên dương");
     console.log('\n không phải là số nguyên tố');
} 