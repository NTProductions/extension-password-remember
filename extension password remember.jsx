// jsx remember me code

var globalUsername, globalPassword;
var rememberMeFile = File("~/Documents/NTProductions/rememberMe.rem");

function getRememberMeInfo() {
if(rememberMeFile.exists) {
    rememberMeFile.open("r");
    var remObj = JSON.parse(rememberMeFile.read());
    rememberMeFile.close();

    return JSON.stringify(remObj);
} 
}

function writeToRememberMeFile(username, password) {
 var remObj = {
     username: username,
     password: password
 };

 rememberMeFile.open("w");
 rememberMeFile.write(JSON.stringify(remObj));
 rememberMeFile.close();
}

// in js

var rememberObj;
var csInterface = new CSInterface();
csInterface.evalScript('getRememberMeInfo()', function(res) {
    rememberObj = JSON.parse(res);

    alert(JSON.stringify(rememberObj));
});