let data;
let strOfArr = '';
let strOfArr2 = '';
let strOfArr3 = '';
let arr = ["words1", "words2", "words3"];

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

    strOfArr  = data[arr[0]] + ','; // !!!: alert
    strOfArr2 = data[arr[1]] + ','; // !!!: alert
    strOfArr3 = data[arr[2]] + ','; // !!!: alert

    strOfArr = strOfArr.concat(strOfArr2, strOfArr3);
    console.log(strOfArr);
};
