/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var div=document.createElement("DIV");
var h1=document.createElement("H1");
h1.appendChild(document.createTextNode("To Do App"));
div.appendChild(h1);


var input=document.createElement("INPUT");
input.id="enter";
div.appendChild(input);

var div1=document.createElement("DIV");
div1.innerHTML="<button id=add onclick=addNewElement()>ADD</button>"
div.appendChild(div1);

var ul=document.createElement("UL");
ul.id="ul1";
div.appendChild(ul);

var body=document.getElementsByTagName("BODY")[0];
body.appendChild(div);

var display=[" "];
var ind=0;

var addNewElement =() =>
{
   display[ind]=document.getElementById("enter").value;
   console.log(display[ind]);
   var li=document.createElement("LI");
   li.id=ind;
   
  

   li.innerHTML=display[ind]+"<br><form><input type=radio onclick=tododdel("+ind+") name=check id=Td"+ind+" checked>ToDO</input><br><input type=radio onclick=inpddel("+ind+") name=check id=Ip"+ind+">InProgress</input><br><input type=radio onclick=dodel("+ind+") name=check id=Do"+ind+">Done</input><br><button style=display:none id=del"+ind+" onclick=deleted("+ind+")>Delete</button></form><br>"
   ul.appendChild(li);

   
   ind++;
}


var tododdel =(ind) =>
{
    document.getElementById("del"+ind).style.display="none";
}
var inpddel =(ind) =>
{
    document.getElementById("del"+ind).style.display="none";
}
var dodel =(ind) =>
{
    document.getElementById("del"+ind).style.display="unset";
}
var deleted =(ind)=>
{
    
document.getElementById(ind).remove();
}



/***/ })
/******/ ]);