let data;
let strOfArr = '';

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
    });
};
