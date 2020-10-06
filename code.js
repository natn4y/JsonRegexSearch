let data;
let strOfArr = '';
let strOfArr2 = '';
let strOfArr3 = '';
let arr = ["words1", "words2", "words3"];
let i = 0;

function readJsonFile(jsonFile, callback, ) {
    let _file = new XMLHttpRequest();
    _file.overrideMimeType("application/json", );
    _file.open("GET", jsonFile, true, );
    _file.onreadystatechange = function () {
        if (_file.readyState === 4 && _file.status == "200") {
            callback(_file.responseText, );
        }
    }
    _file.send(null, );
};

function main() {
    strOfArr = '';
    readJsonFile("./words.json", function (text, ) {
        data = JSON.parse(text, );
        console.log(data);
        arrAtr();
    });
};

function arrAtr() {

    strOfArr = data[arr[0]] + ','; // !!!: alert
    strOfArr2 = data[arr[1]] + ','; // !!!: alert
    strOfArr3 = data[arr[2]] + ','; // !!!: alert

    strOfArr = strOfArr.concat(strOfArr2, strOfArr3);
    printHTML();
};

function printHTML() {
    let textfield;
    let regexp;
    let arrFiltered = '';

    textfield = document.getElementById('regexInput').value;

    if (document.getElementById('checkSearch1').checked == true) {
        regexp = new RegExp(`\\.*.*${textfield}\\.*.*`, 'gi');
    } else if (document.getElementById('checkSearch2').checked == true) {
        regexp = new RegExp(`\\.*.*${textfield}\\b`, 'gi');
    }
    arrOfStr = strOfArr.split(',').sort();

    // remove null and undefined values
    arrOfStr.forEach(element => {
        arrFiltered = arrFiltered.replace('null', '');
        arrFiltered += element.match(regexp) + ',';
    });

    arrFiltered = arrFiltered.slice(0, arrFiltered.length - 1, );
    console.log(arrFiltered);

    // transform in array
    arrFiltered = arrFiltered.split(',');
    arrFiltered = arrFiltered.filter(n => n);
    if (arrFiltered.includes('null')) {
        arrFiltered.pop();
    }
    console.log(arrFiltered);

    // show result
    let res = '';
    arrFiltered.forEach(element => {
        res += `${element} <br>`
    })
    document.getElementById('result').innerHTML = res;
};