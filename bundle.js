/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Karla&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--1: #f7f7f7;
	--2: #eeeeee;
	--3: #393e46;
	--4: #929aab;
	--5: #38598b;
	--6: #a2a8d3;
}

* {
	box-sizing: border-box;
	font-family: "Schibsted Grotesk", sans-serif;
	margin: 0;
	padding: 0;
	border: 0;
}

body {
	display: grid;
	height: 100vh;
	grid-template-rows: 1fr 12fr 1fr;
	background-color: var(--3);
}

/* ---------------footer--------------- */
footer {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
}

.github {
	width: 35px;
}
/* ---------------header--------------- */
header {
	display: flex;
}

.header-flex {
	display: flex;
	align-items: center;
	margin: 10px;
	border: 2px solid #0a66c2;
	border-radius: 20px;
}

h3 {
	font-size: 16px;
}

.catergory {
	display: flex;
	padding: 5px;
	align-items: center;
	gap: 20px;
}

.catergory:hover {
	cursor: pointer;
	background-color: #9e9e9e;
	border-radius: 5px;
}

.icon {
	width: 25px;
}

#title {
	color: var(--2);
	letter-spacing: 3px;
	padding: 5px;
	padding-right: 20px;
	text-shadow: 5px 5px 10px rgba(135, 135, 135, 0.4);
}

#checklist {
	width: 50px;
	height: 50px;
	margin-left: 20px;
}

/* ------------------------------------ */

/* ---------------nav--------------- */

nav {
	display: flex;
	flex-direction: column;
	padding: 10px;
	gap: 5px;
	border-right: 1px solid var(--3);
}

.title {
	padding: 3px;
	font-weight: 100;
	font-weight: bold;
	margin-bottom: 10px;
	border-bottom: 1px solid;
}

#projectNav {
	border-radius: 5px;
}

h2 {
	color: #0a66c2;
}

a {
	list-style: none;
	text-decoration: none;
	font-weight: bold;
}

a:visited {
	color: black;
}

a:hover {
	cursor: pointer;
	text-decoration: underline;
	color: var(--2);
}

.projectButton {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
}

.projectButton:hover {
	cursor: pointer;
	background-color: #9e9e9e;
	border-radius: 5px;
}

.deleteButton {
	height: 20px;
	opacity: 0;
	font-size: 0.6rem;
	font-weight: 600;
	border: 1px solid black;
	color: rgb(0, 0, 0);
	padding: 2px;
	border-radius: 3px;
	background-color: rgb(233, 100, 100);
}

.deleteButton:hover {
	cursor: pointer;
	border: 1px solid red;
	opacity: 1;
	transition: 0.3s;
}

.projectButton:hover {
	.deleteButton {
		opacity: 0.75;
		transition: 0.75s;
	}
}

/* #addProjectButton {
	scale: 0.6;
	font-size: 0.7rem;
	width: fit-content;
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 5px;
	border: 1px solid transparent;
} */

#addProjectButton:hover,
#editProject:hover,
#addTask:hover,
button.projectInput:hover {
	cursor: pointer;
	border: 1px solid var(--3);
}

.visible {
	/* display: block !important; */
	visibility: visible !important;
	opacity: 1 !important;
}

.displayNone {
	display: none;
}

#projectInput,
#taskInput {
	display: flex;
	flex-direction: column;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.3s ease-in;
	padding: 20px;
	gap: 25px;
	background-color: rgb(159, 156, 156);
	border-radius: 5px;
	box-shadow: 0px 0px 12px 2000px rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 350px;
	border: 1px solid black;
}

.radio-inputs {
	position: relative;
	align-self: center;
	display: flex;
	flex-wrap: wrap;
	border-radius: 0.5rem;
	background-color: #eee;
	box-sizing: border-box;
	box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
	width: 300px;
	font-size: 14px;
}

.radio-inputs .radio {
	flex: 1 1 auto;
	text-align: center;
}

.radio-inputs .radio input {
	display: none;
}

.radio-inputs .radio .name {
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	border-radius: 0.5rem;
	border: none;
	padding: 0.5rem 0;
	color: rgba(51, 65, 85, 1);
	transition: all 0.15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
	background-color: #fff;
	font-weight: 600;
}

input,
textarea {
	resize: none;
	padding: 5px;
	outline: none;
	border-radius: 4px;
	box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
}

input:focus {
	outline: 1px solid rgba(0, 0, 0, 0.3);
}

.together {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.togetherButtons {
	display: flex;
	justify-content: space-evenly;
	margin-top: 15px;
}

button.projectInput,
button.taskInput {
	width: 30%;
	border-radius: 5px;
	padding: 3px;
	border: 1px solid transparent;
}

#submitProject,
#submitTask {
	background-color: rgba(0, 128, 0, 0.571);
	border: 1px solid transparent;
}

#cancelSubmitProject,
#cancelSubmitTask {
	background-color: rgba(158, 17, 17, 0.626);
	border: 1px solid transparent;
}

#submitTask:hover,
#cancelSubmitTask:hover,
#submitProject:hover,
#cancelSubmitProject:hover {
	border: 1px solid black;
	scale: 1.05;
	transition: 0.3s;
	cursor: pointer;
}

label {
	font-size: 0.7rem;
	padding: 2px;
}

.join {
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 5px;
	padding-bottom: 0;
	/* border-bottom: 1px solid var(--3); */
	height: 50px;
}

/* ---------------main--------------- */

main {
	display: grid;
	grid-template-columns: minmax(350px, 20vw) 3fr;
	background-color: var(--2);
}

section {
	display: flex;
	flex-direction: column;

	padding: 10px;
}

.intro {
	display: flex;
	flex-direction: column;
}

#introText {
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	line-height: 30px;
	max-width: 60ch;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid grey;
	padding: 15px;
	border-radius: 5px;
	background-color: var(--1);
}

span {
	font-size: 12px;
	font-style: italic;
}

.icon {
	width: 35px;
	height: 35px;
}

.editTogether {
	display: flex;
	justify-content: space-between;
}

#projectDesc {
	margin-top: 20px;
	padding: 5px;
}

#editProject {
	visibility: hidden;
}

#addTask {
	visibility: hidden;
	font-size: 1.25rem;
	min-width: 50px;
}

#taskContainer {
	padding: 20px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.taskCard {
	font-size: 0.7rem;
	padding: 10px;
	border: 1px solid rgba(0, 0, 0, 0.205);
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	gap: 30px;
}

.delete {
	display: none;
	font-size: 0.6rem;
	font-weight: 600;
	border: 1px solid black;
	color: rgb(0, 0, 0);
	padding: 2px;
	border-radius: 3px;
	background-color: rgb(233, 100, 100);
}

.delete:hover {
	background-color: rgb(228, 191, 122);
	scale: 1.025;
	border: 1px solid black;
	transition: 0.2s;
	cursor: pointer;
}

.desc {
	display: none;
	max-width: 50ch;
	padding: 10px;
	font-size: 0.6rem;
}

.name {
	font-weight: bold;
}

.Low,
.Medium,
.Urgent {
	display: flex;
	justify-content: center;
	font-size: 0.6rem;
	padding: 5px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 15px;
}

.Low {
	background-color: rgba(152, 238, 152, 0.694);
}

.Medium {
	background-color: rgba(243, 203, 131, 0.731);
}

.Urgent {
	background-color: rgb(232, 96, 96);
}

.showButton {
	width: 21.5px;
	background-color: transparent;
}

.showButton:hover {
	cursor: pointer;
	color: white;
	scale: 1.05;
}

.taskJoin {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.taskComplete {
	display: flex;
	align-items: center;
	gap: 5px;
}

input[type="checkbox"] {
	box-shadow: none;
}

input[type="checkbox"]:focus {
	outline: none;
}

.taskNameAndButton,
.taskNameAndButtonX {
	display: flex;
	align-items: center;
}

.flex {
	/* border-bottom: 1px solid var(--3); */
	display: flex;
	align-items: center;
	gap: 30px;
}

button {
	background-color: var(--6);
}

/* ---- */

@media only screen and (max-width: 755px) {
	header {
		justify-content: center;
	}
	main {
		display: block;
	}

	nav {
		gap: 0;
		border-radius: 5px;
		padding: 0;
		margin: 10px;
		border: 0;
	}
	.block {
		margin-bottom: 10px;
		background-color: lightgray;
		border-radius: 5px;
	}

	.join {
		border-radius: 5px;
	}

	#currentProject {
		font-size: 1em;
	}

	#projectDesc {
		margin: 0;
	}

	#taskContainer {
		padding: 0;
	}

	.taskCard {
		margin: 0;
	}

	.taskNameAndButtonX {
		flex-direction: column-reverse;
		align-items: baseline;
	}
	.desc {
		padding-left: 0;
	}

	h2 {
		font-family: "Karla", sans-serif;
		letter-spacing: 0px;
	}
}

.button-18 {
	min-width: 100px;
	height: 30px;
	align-items: center;
	background-color: #0a66c2;
	border: 1px solid transparent;
	border-radius: 100px;
	color: #ffffff;
	cursor: pointer;
	display: inline-flex;
	font-size: 12px;
	font-weight: 600;
	justify-content: center;
	line-height: 20px;
	max-width: 480px;
	overflow: hidden;
	padding: 0px;
	padding-left: 15px;
	padding-right: 15px;
	text-align: center;
	touch-action: manipulation;
	transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
		box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
		color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
	user-select: none;
	-webkit-user-select: none;
	vertical-align: middle;
}

.button-18:hover,
.button-18:focus {
	background-color: #16437e;
	color: #ffffff;
}

.button-18:active {
	background: #09223b;
	color: rgb(255, 255, 255, 0.7);
}

.button-18:disabled {
	cursor: not-allowed;
	background: rgba(0, 0, 0, 0.08);
	color: rgba(0, 0, 0, 0.3);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--1: #f7f7f7;\r\n\t--2: #eeeeee;\r\n\t--3: #393e46;\r\n\t--4: #929aab;\r\n\t--5: #38598b;\r\n\t--6: #a2a8d3;\r\n}\r\n@import url(\"https://fonts.googleapis.com/css2?family=Karla&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Anuphan&family=Schibsted+Grotesk&display=swap\");\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tfont-family: \"Schibsted Grotesk\", sans-serif;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n\r\nbody {\r\n\tdisplay: grid;\r\n\theight: 100vh;\r\n\tgrid-template-rows: 1fr 12fr 1fr;\r\n\tbackground-color: var(--3);\r\n}\r\n\r\n/* ---------------footer--------------- */\r\nfooter {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n}\r\n\r\n.github {\r\n\twidth: 35px;\r\n}\r\n/* ---------------header--------------- */\r\nheader {\r\n\tdisplay: flex;\r\n}\r\n\r\n.header-flex {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 10px;\r\n\tborder: 2px solid #0a66c2;\r\n\tborder-radius: 20px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 16px;\r\n}\r\n\r\n.catergory {\r\n\tdisplay: flex;\r\n\tpadding: 5px;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n}\r\n\r\n.catergory:hover {\r\n\tcursor: pointer;\r\n\tbackground-color: #9e9e9e;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.icon {\r\n\twidth: 25px;\r\n}\r\n\r\n#title {\r\n\tcolor: var(--2);\r\n\tletter-spacing: 3px;\r\n\tpadding: 5px;\r\n\tpadding-right: 20px;\r\n\ttext-shadow: 5px 5px 10px rgba(135, 135, 135, 0.4);\r\n}\r\n\r\n#checklist {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tmargin-left: 20px;\r\n}\r\n\r\n/* ------------------------------------ */\r\n\r\n/* ---------------nav--------------- */\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 10px;\r\n\tgap: 5px;\r\n\tborder-right: 1px solid var(--3);\r\n}\r\n\r\n.title {\r\n\tpadding: 3px;\r\n\tfont-weight: 100;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 10px;\r\n\tborder-bottom: 1px solid;\r\n}\r\n\r\n#projectNav {\r\n\tborder-radius: 5px;\r\n}\r\n\r\nh2 {\r\n\tcolor: #0a66c2;\r\n}\r\n\r\na {\r\n\tlist-style: none;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n}\r\n\r\na:visited {\r\n\tcolor: black;\r\n}\r\n\r\na:hover {\r\n\tcursor: pointer;\r\n\ttext-decoration: underline;\r\n\tcolor: var(--2);\r\n}\r\n\r\n.projectButton {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 5px;\r\n}\r\n\r\n.projectButton:hover {\r\n\tcursor: pointer;\r\n\tbackground-color: #9e9e9e;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.deleteButton {\r\n\theight: 20px;\r\n\topacity: 0;\r\n\tfont-size: 0.6rem;\r\n\tfont-weight: 600;\r\n\tborder: 1px solid black;\r\n\tcolor: rgb(0, 0, 0);\r\n\tpadding: 2px;\r\n\tborder-radius: 3px;\r\n\tbackground-color: rgb(233, 100, 100);\r\n}\r\n\r\n.deleteButton:hover {\r\n\tcursor: pointer;\r\n\tborder: 1px solid red;\r\n\topacity: 1;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.projectButton:hover {\r\n\t.deleteButton {\r\n\t\topacity: 0.75;\r\n\t\ttransition: 0.75s;\r\n\t}\r\n}\r\n\r\n/* #addProjectButton {\r\n\tscale: 0.6;\r\n\tfont-size: 0.7rem;\r\n\twidth: fit-content;\r\n\tpadding: 5px;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 10px;\r\n\tborder-radius: 5px;\r\n\tborder: 1px solid transparent;\r\n} */\r\n\r\n#addProjectButton:hover,\r\n#editProject:hover,\r\n#addTask:hover,\r\nbutton.projectInput:hover {\r\n\tcursor: pointer;\r\n\tborder: 1px solid var(--3);\r\n}\r\n\r\n.visible {\r\n\t/* display: block !important; */\r\n\tvisibility: visible !important;\r\n\topacity: 1 !important;\r\n}\r\n\r\n.displayNone {\r\n\tdisplay: none;\r\n}\r\n\r\n#projectInput,\r\n#taskInput {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\ttransition: opacity 0.3s ease-in;\r\n\tpadding: 20px;\r\n\tgap: 25px;\r\n\tbackground-color: rgb(159, 156, 156);\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0px 0px 12px 2000px rgba(0, 0, 0, 0.8);\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\twidth: 350px;\r\n\tborder: 1px solid black;\r\n}\r\n\r\n.radio-inputs {\r\n\tposition: relative;\r\n\talign-self: center;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tborder-radius: 0.5rem;\r\n\tbackground-color: #eee;\r\n\tbox-sizing: border-box;\r\n\tbox-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);\r\n\twidth: 300px;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.radio-inputs .radio {\r\n\tflex: 1 1 auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.radio-inputs .radio input {\r\n\tdisplay: none;\r\n}\r\n\r\n.radio-inputs .radio .name {\r\n\tdisplay: flex;\r\n\tcursor: pointer;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder-radius: 0.5rem;\r\n\tborder: none;\r\n\tpadding: 0.5rem 0;\r\n\tcolor: rgba(51, 65, 85, 1);\r\n\ttransition: all 0.15s ease-in-out;\r\n}\r\n\r\n.radio-inputs .radio input:checked + .name {\r\n\tbackground-color: #fff;\r\n\tfont-weight: 600;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n\tresize: none;\r\n\tpadding: 5px;\r\n\toutline: none;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\ninput:focus {\r\n\toutline: 1px solid rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.together {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.togetherButtons {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\tmargin-top: 15px;\r\n}\r\n\r\nbutton.projectInput,\r\nbutton.taskInput {\r\n\twidth: 30%;\r\n\tborder-radius: 5px;\r\n\tpadding: 3px;\r\n\tborder: 1px solid transparent;\r\n}\r\n\r\n#submitProject,\r\n#submitTask {\r\n\tbackground-color: rgba(0, 128, 0, 0.571);\r\n\tborder: 1px solid transparent;\r\n}\r\n\r\n#cancelSubmitProject,\r\n#cancelSubmitTask {\r\n\tbackground-color: rgba(158, 17, 17, 0.626);\r\n\tborder: 1px solid transparent;\r\n}\r\n\r\n#submitTask:hover,\r\n#cancelSubmitTask:hover,\r\n#submitProject:hover,\r\n#cancelSubmitProject:hover {\r\n\tborder: 1px solid black;\r\n\tscale: 1.05;\r\n\ttransition: 0.3s;\r\n\tcursor: pointer;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 0.7rem;\r\n\tpadding: 2px;\r\n}\r\n\r\n.join {\r\n\talign-items: center;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: 5px;\r\n\tpadding-bottom: 0;\r\n\t/* border-bottom: 1px solid var(--3); */\r\n\theight: 50px;\r\n}\r\n\r\n/* ---------------main--------------- */\r\n\r\nmain {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: minmax(350px, 20vw) 3fr;\r\n\tbackground-color: var(--2);\r\n}\r\n\r\nsection {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\r\n\tpadding: 10px;\r\n}\r\n\r\n.intro {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#introText {\r\n\tfont-family: Verdana, Geneva, Tahoma, sans-serif;\r\n\tline-height: 30px;\r\n\tmax-width: 60ch;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tborder: 1px solid grey;\r\n\tpadding: 15px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: var(--1);\r\n}\r\n\r\nspan {\r\n\tfont-size: 12px;\r\n\tfont-style: italic;\r\n}\r\n\r\n.icon {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n}\r\n\r\n.editTogether {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#projectDesc {\r\n\tmargin-top: 20px;\r\n\tpadding: 5px;\r\n}\r\n\r\n#editProject {\r\n\tvisibility: hidden;\r\n}\r\n\r\n#addTask {\r\n\tvisibility: hidden;\r\n\tfont-size: 1.25rem;\r\n\tmin-width: 50px;\r\n}\r\n\r\n#taskContainer {\r\n\tpadding: 20px;\r\n\tborder-radius: 5px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 5px;\r\n}\r\n\r\n.taskCard {\r\n\tfont-size: 0.7rem;\r\n\tpadding: 10px;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.205);\r\n\tborder-radius: 5px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tgap: 30px;\r\n}\r\n\r\n.delete {\r\n\tdisplay: none;\r\n\tfont-size: 0.6rem;\r\n\tfont-weight: 600;\r\n\tborder: 1px solid black;\r\n\tcolor: rgb(0, 0, 0);\r\n\tpadding: 2px;\r\n\tborder-radius: 3px;\r\n\tbackground-color: rgb(233, 100, 100);\r\n}\r\n\r\n.delete:hover {\r\n\tbackground-color: rgb(228, 191, 122);\r\n\tscale: 1.025;\r\n\tborder: 1px solid black;\r\n\ttransition: 0.2s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.desc {\r\n\tdisplay: none;\r\n\tmax-width: 50ch;\r\n\tpadding: 10px;\r\n\tfont-size: 0.6rem;\r\n}\r\n\r\n.name {\r\n\tfont-weight: bold;\r\n}\r\n\r\n.Low,\r\n.Medium,\r\n.Urgent {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 0.6rem;\r\n\tpadding: 5px;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.25);\r\n\tborder-radius: 15px;\r\n}\r\n\r\n.Low {\r\n\tbackground-color: rgba(152, 238, 152, 0.694);\r\n}\r\n\r\n.Medium {\r\n\tbackground-color: rgba(243, 203, 131, 0.731);\r\n}\r\n\r\n.Urgent {\r\n\tbackground-color: rgb(232, 96, 96);\r\n}\r\n\r\n.showButton {\r\n\twidth: 21.5px;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.showButton:hover {\r\n\tcursor: pointer;\r\n\tcolor: white;\r\n\tscale: 1.05;\r\n}\r\n\r\n.taskJoin {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n}\r\n\r\n.taskComplete {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n\tbox-shadow: none;\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus {\r\n\toutline: none;\r\n}\r\n\r\n.taskNameAndButton,\r\n.taskNameAndButtonX {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.flex {\r\n\t/* border-bottom: 1px solid var(--3); */\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 30px;\r\n}\r\n\r\nbutton {\r\n\tbackground-color: var(--6);\r\n}\r\n\r\n/* ---- */\r\n\r\n@media only screen and (max-width: 755px) {\r\n\theader {\r\n\t\tjustify-content: center;\r\n\t}\r\n\tmain {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\tnav {\r\n\t\tgap: 0;\r\n\t\tborder-radius: 5px;\r\n\t\tpadding: 0;\r\n\t\tmargin: 10px;\r\n\t\tborder: 0;\r\n\t}\r\n\t.block {\r\n\t\tmargin-bottom: 10px;\r\n\t\tbackground-color: lightgray;\r\n\t\tborder-radius: 5px;\r\n\t}\r\n\r\n\t.join {\r\n\t\tborder-radius: 5px;\r\n\t}\r\n\r\n\t#currentProject {\r\n\t\tfont-size: 1em;\r\n\t}\r\n\r\n\t#projectDesc {\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t#taskContainer {\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\t.taskCard {\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t.taskNameAndButtonX {\r\n\t\tflex-direction: column-reverse;\r\n\t\talign-items: baseline;\r\n\t}\r\n\t.desc {\r\n\t\tpadding-left: 0;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-family: \"Karla\", sans-serif;\r\n\t\tletter-spacing: 0px;\r\n\t}\r\n}\r\n\r\n.button-18 {\r\n\tmin-width: 100px;\r\n\theight: 30px;\r\n\talign-items: center;\r\n\tbackground-color: #0a66c2;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 100px;\r\n\tcolor: #ffffff;\r\n\tcursor: pointer;\r\n\tdisplay: inline-flex;\r\n\tfont-size: 12px;\r\n\tfont-weight: 600;\r\n\tjustify-content: center;\r\n\tline-height: 20px;\r\n\tmax-width: 480px;\r\n\toverflow: hidden;\r\n\tpadding: 0px;\r\n\tpadding-left: 15px;\r\n\tpadding-right: 15px;\r\n\ttext-align: center;\r\n\ttouch-action: manipulation;\r\n\ttransition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\r\n\t\tbox-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\r\n\t\tcolor 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\r\n\tuser-select: none;\r\n\t-webkit-user-select: none;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.button-18:hover,\r\n.button-18:focus {\r\n\tbackground-color: #16437e;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.button-18:active {\r\n\tbackground: #09223b;\r\n\tcolor: rgb(255, 255, 255, 0.7);\r\n}\r\n\r\n.button-18:disabled {\r\n\tcursor: not-allowed;\r\n\tbackground: rgba(0, 0, 0, 0.08);\r\n\tcolor: rgba(0, 0, 0, 0.3);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectNav: () => (/* binding */ addProjectNav),
/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject)
/* harmony export */ });
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems */ "./src/displayItems.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle



/* eslint-disable prefer-destructuring */
let count = 0;

// Our current project by default is 0
// Whenever a project is clicked, it ID (index in array) becomes current project
window.currentProject = 0;
function addProjectNav(project, projectArray) {
	const nav = document.getElementById("projectNav");
	const name = project.name;
	// const projects = projectArray;
	// console.log(projects);

	const newProject = document.createElement("div");
	newProject.setAttribute("class", "projectButton");
	newProject.setAttribute("id", `project_${count}`);

	newProject.innerHTML = `
	<a href="#" class="projectButtonx" id="link_project_${count}">• ${name}</a>
	<button class="deleteButton" id="deleteButton${count}" onclick="deleteProject(this.id)" return false;>Delete</button>
	`;
	nav.append(newProject);

	const linkToTrack = document.getElementById(`link_project_${count}`);
	const id = newProject.id.slice(-1);

	linkToTrack.addEventListener("click", () => {
		currentProject = id;
		(0,_displayItems__WEBPACK_IMPORTED_MODULE_0__.displayCurrentProject)(projectArray, id);
		(0,_displayItems__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(projectArray[currentProject], currentProject);
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setLastProject)(id);
	});

	count += 1;
}

const catergory = Array.from(document.querySelectorAll(".catergory"));
catergory.forEach((item) => {
	item.addEventListener("click", () => {
		switch (item.id) {
			case "all":
				currentProject = "all";
				break;
			case "today":
				currentProject = "today";
				break;
			case "week":
				currentProject = "week";
				break;
			case "important":
				currentProject = "important";
				break;
			default:
		}
	});
});

// Returns the ID of our currently selected project
function getCurrentProject() {
	if (currentProject === undefined) {
		return null;
	}
	return currentProject;
}




/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   orderTasksByDate: () => (/* binding */ orderTasksByDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");


function createCard() {
	// when our tasks gets created and added, make a card for it
}

function orderTasksByDate(project) {
	const { tasks } = project;
	tasks.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(a.date, b.date)); // sorts our tasks by date
}




/***/ }),

/***/ "./src/displayItems.js":
/*!*****************************!*\
  !*** ./src/displayItems.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addVisibleClass: () => (/* binding */ addVisibleClass),
/* harmony export */   displayCurrentProject: () => (/* binding */ displayCurrentProject),
/* harmony export */   displayNone: () => (/* binding */ displayNone),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   removeDisplayNone: () => (/* binding */ removeDisplayNone),
/* harmony export */   removeVisibleClass: () => (/* binding */ removeVisibleClass)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle



// Adds visible class to our DOM element
function addVisibleClass(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.add("visible");
	});
}

// Removes visible class from our given (item) DOM element
function removeVisibleClass(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.remove("visible");
	});
}

function displayNone(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.add("displayNone");
	});
}

function removeDisplayNone(item) {
	const element = Array.from(document.querySelectorAll(`${item}`));

	element.forEach((dom) => {
		dom.classList.remove("displayNone");
	});
}

function displayCurrentProject(projectArray, id) {
	const edit = document.getElementById("editProject");
	const add = document.getElementById("addTask");
	const title = document.getElementById("currentProject");
	const desc = document.getElementById("projectDesc");

	if (projectArray === 1) {
		switch (id) {
			case "all":
				title.textContent = `All Tasks`;
				break;
			case "today":
				title.textContent = `Today`;
				break;
			case "week":
				title.textContent = `Week`;
				break;
			case "important":
				title.textContent = `Important`;
				break;
			default:
		}

		return;
	}

	title.textContent = projectArray[id].name;
	desc.textContent = projectArray[id].desc;
	edit.style.visibility = "visible";
	add.style.visibility = "visible";
}

// function checkIfExistsElswhere(id) {
// 	const index = id.slice(-1);
// 	const projectIndex = getCurrentProject();
// 	const task = projectArray[projectIndex].tasks[index];

// 	const exists = sideArray[3].tasks.findIndex(
// 		(item) => item.title === task.title
// 	);

// 	if (exists !== -1) {
// 		sideArray[3].tasks[exists].completed = true;
// 	}
// 	console.log(task);
// 	console.log(exists);
// }

function completeTask(id) {
	const index = id.slice(-1);
	const projectIndex = (0,_addProject__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();
	const checkbox = document.getElementById(`${id}`);
	const cardToChange = document.getElementById(
		`project_${projectIndex}_task_${index}`
	);
	cardToChange.style.textDecoration = "line-through";
	checkbox.setAttribute("onclick", "unCompleteTask(this.id)");
	switch (projectIndex) {
		case "all":
			sideArray[0].tasks[index].completed = true;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "today":
			sideArray[1].tasks[index].completed = true;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "week":
			sideArray[2].tasks[index].completed = true;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "important":
			sideArray[3].tasks[index].completed = true;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		default:
	}
	// checkIfExistsElswhere(id);
	projectArray[projectIndex].tasks[index].completed = true;
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(projectArray);

	// remove from local storage
}

function unCompleteTask(id) {
	const index = id.slice(-1);
	const projectIndex = (0,_addProject__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();
	const checkbox = document.getElementById(`${id}`);
	const cardToChange = document.getElementById(
		`project_${projectIndex}_task_${index}`
	);
	cardToChange.style.textDecoration = "none";
	checkbox.setAttribute("onclick", "completeTask(this.id)");
	switch (projectIndex) {
		case "all":
			sideArray[0].tasks[index].completed = false;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "today":
			sideArray[1].tasks[index].completed = false;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "week":
			sideArray[2].tasks[index].completed = false;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "important":
			sideArray[3].tasks[index].completed = false;
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		default:
	}

	projectArray[projectIndex].tasks[index].completed = false;
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(projectArray);
}

function displayTasks(project, projectIndex) {
	const container = document.getElementById("taskContainer");

	if (container) {
		container.remove();
	}
	const section = document.querySelector("section");
	const taskContainer = document.createElement("article");
	taskContainer.setAttribute("id", "taskContainer");

	section.append(taskContainer);

	const array = project.tasks;

	for (let index = 0; index < array.length; index += 1) {
		const element = array[index];

		if (typeof element.date === "string") {
			element.date = new Date(element.date);
		}

		const date = element.date.toString().slice(4, 21);

		const newTask = document.createElement("div");
		newTask.setAttribute(`id`, `project_${projectIndex}_task_${index}`);
		newTask.classList.add("taskCard");

		newTask.innerHTML = `
		<div class="taskJoin">
			<div class="taskNameAndButton">
				<button id="showMore${index}" class="showButton" onclick="showMore(this.id)">+</button>
				<div class="taskDisplay name" id="taskDisplayName">${element.title}</div>
			</div>
			<div class="taskNameAndButtonX">
				<button class="taskDisplay delete" id="deleteTask${index}" onclick="deleteTask(this.id)">Delete</button>
				<div class="taskDisplay desc" id="taskDisplayDesc ${index}">${element.description}</div>
			</div>
		</div>
		<div class="taskComplete">
				<div class="taskDisplay ${element.priority}" id="taskDisplayPriority${index}">${element.priority}</div>
				<div class="taskDisplay date" id="taskDisplayDate">${date}</div>
				<input type="checkbox" name="complete" id="complete${index}" onclick="completeTask(this.id)">
		</div>
		`;

		taskContainer.append(newTask);

		if (element.completed === true) {
			// const completeBox = document.getElementById(`complete${index}`);
			// console.log(completeBox);
			// completeBox.click();

			completeTask(`complete${index}`);
			const checkbox = document.getElementById(`complete${index}`);
			checkbox.setAttribute("checked", "");
		}
	}
}

function showMore(id) {
	const buttonClicked = document.getElementById(`${id}`);
	const index = id.slice(-1);

	const element = document.getElementById(`taskDisplayDesc ${index}`);
	const deleteButton = document.getElementById(`deleteTask${index}`);
	deleteButton.style.display = "block";
	element.style.display = "block";
	buttonClicked.textContent = "-";
	buttonClicked.setAttribute("onclick", "showLess(this.id)");
}

function showLess(id) {
	const buttonClicked = document.getElementById(`${id}`);
	const index = id.slice(-1);

	const element = document.getElementById(`taskDisplayDesc ${index}`);
	const deleteButton = document.getElementById(`deleteTask${index}`);
	deleteButton.style.display = "none";
	element.style.display = "none";

	buttonClicked.textContent = "+";
	buttonClicked.setAttribute("onclick", "showMore(this.id)");
}

function deleteTask(id) {
	const projectIndex = (0,_addProject__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();
	const index = id.slice(-1);
	const cardToDelete = document.getElementById(
		`project_${projectIndex}_task_${index}`
	);
	cardToDelete.remove();
	switch (projectIndex) {
		case "all":
			sideArray[0].tasks.splice(index, 1);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "today":
			sideArray[1].tasks.splice(index, 1);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "week":
			sideArray[2].tasks.splice(index, 1);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		case "important":
			sideArray[3].tasks.splice(index, 1);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(null, sideArray);
			return;
		default:
	}

	projectArray[projectIndex].tasks.splice(index, 1);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(projectArray);
}

function deleteProject(id) {
	const index = id.slice(-1);
	const navToDelete = document.getElementById(`project_${index}`);
	navToDelete.remove();

	projectArray.splice(index, 1);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.adjustStorage)(projectArray);

	const itemToClick = document.getElementById(`link_project_${index - 1}`);
	if (itemToClick !== null) {
		itemToClick.click();
		return;
	}

	// eslint-disable-next-line no-restricted-globals
	location.reload();
}

window.deleteProject = deleteProject;
window.deleteTask = deleteTask;
window.unCompleteTask = unCompleteTask;
window.completeTask = completeTask;
window.showMore = showMore;
window.showLess = showLess;




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustStorage: () => (/* binding */ adjustStorage),
/* harmony export */   getLastProject: () => (/* binding */ getLastProject),
/* harmony export */   getSideStorage: () => (/* binding */ getSideStorage),
/* harmony export */   getStorage: () => (/* binding */ getStorage),
/* harmony export */   setLastProject: () => (/* binding */ setLastProject)
/* harmony export */ });
function adjustStorage(projectArray, sideArray) {
	if (projectArray !== null) {
		localStorage.setItem("projects", JSON.stringify(projectArray));
	}

	if (sideArray !== undefined) {
		console.log(sideArray);
		localStorage.setItem("sideProjects", JSON.stringify(sideArray));
	}
	// localStorage.setItem("lastProject", JSON.stringify(getCurrentProject()));
}

function setLastProject(id) {
	localStorage.setItem("lastProject", JSON.stringify(id));
}

function getStorage() {
	const savedProjects = JSON.parse(localStorage.getItem("projects")).filter(
		(n) => n
	);

	return savedProjects;
}

function getSideStorage() {
	const side = JSON.parse(localStorage.getItem("sideProjects")).filter(
		(n) => n
	);

	return side;
}

window.getSideStorage = getSideStorage;

function getLastProject() {
	const lastProject = JSON.parse(localStorage.getItem("lastProject"));

	return lastProject;
}




/***/ }),

/***/ "./src/objectCreate.js":
/*!*****************************!*\
  !*** ./src/objectCreate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeButton: () => (/* binding */ changeButton),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   getProjectInput: () => (/* binding */ getProjectInput),
/* harmony export */   getTaskInput: () => (/* binding */ getTaskInput)
/* harmony export */ });
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems */ "./src/displayItems.js");
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */


// Create our project object
function createProject([name, desc]) {
	return {
		name,
		desc,
		tasks: [],
	};
}

// gets our input values for new projects
function getProjectInput() {
	const name = document.getElementById("projectName").value;
	const desc = document.getElementById("projectDescription").value;
	return [name, desc];
}

function changeNavItem(name, id) {
	const navToChange = document.getElementById(`link_project_${id}`);
	navToChange.textContent = `${name}`;
}

function changeButton(edit, cancel) {
	if (edit === true && cancel === true) {
		const buttonToChanges = document.getElementById("submitEdit");
		buttonToChanges.setAttribute("id", "submitProject");
		return;
	}
	if (edit === true) {
		const buttonToChange = document.getElementById("submitProject");
		buttonToChange.setAttribute("id", "submitEdit");
		return;
	}

	const buttonToChange = document.getElementById("submitEdit");
	buttonToChange.setAttribute("id", "submitProject");
}

function editProject(projectArray, id) {
	projectArray[id].name = getProjectInput()[0];
	projectArray[id].desc = getProjectInput()[1];

	(0,_displayItems__WEBPACK_IMPORTED_MODULE_0__.displayCurrentProject)(projectArray, id);
	changeNavItem(projectArray[id].name, id);
	(0,_displayItems__WEBPACK_IMPORTED_MODULE_0__.removeVisibleClass)("#projectInput");
}

// Create our task object
function createTask([title, description, date, priority]) {
	return {
		title,
		description,
		date: new Date(date),
		priority,
	};
}

function getTaskInput() {
	const name = document.getElementById("taskName").value;
	const desc = document.getElementById("taskDescription").value;
	const date = document.getElementById("taskDate").value;
	let priority = "Low";
	const radio = Array.from(document.querySelectorAll('input[name="radio"]'));

	radio.forEach((box) => {
		if (box.checked) {
			priority = box.id;
		}
	}); // checks which radio is checked and returns value

	return [name, desc, date, priority];
}




/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _objectCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectCreate */ "./src/objectCreate.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayItems */ "./src/displayItems.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */







const welcomeText = document.getElementById("introText");
window.projects = [];
window.x = undefined;
window.projectArray = [];
window.sideArray = [];
let currentProject;
let edit = false;

// Creates our initial projects that are defaults
if (sideArray.length < 1) {
	const all = (0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.createProject)(["all", "all tasks"]);
	const today = (0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.createProject)(["today", "today tasks"]);
	const week = (0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.createProject)(["week", "week tasks"]);
	const important = (0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.createProject)(["important", "important tasks"]);
	sideArray.push(all, today, week, important);
}

// task input validation, requires a valid name and date to submit
function validateTask() {
	const nameInput = document.getElementById("taskName");
	const dateInput = document.getElementById("taskDate");
	if (dateInput.validity.valid && nameInput.validity.valid) {
		return true;
	}
	return false;
}

// project input vlaidaiton, requires valid name
function validateProject() {
	const nameInput = document.getElementById("projectName");
	if (nameInput.validity.valid) {
		return true;
	}
	return false;
}

const catergory = Array.from(document.querySelectorAll(".catergory"));
catergory.forEach((item) => {
	item.addEventListener("click", () => {
		const add = document.getElementById("addTask");
		const desc = document.getElementById("projectDesc");
		welcomeText.style.display = "none";
		(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayCurrentProject)(1, item.id);
		add.style.visibility = "hidden";
		desc.style.visibility = "hidden";

		switch (item.id) {
			case "all":
				(0,_card__WEBPACK_IMPORTED_MODULE_4__.orderTasksByDate)(sideArray[0]);
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(sideArray[0], "all");
				break;

			case "today":
				(0,_card__WEBPACK_IMPORTED_MODULE_4__.orderTasksByDate)(sideArray[1]);
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(sideArray[1], "today");
				break;

			case "week":
				(0,_card__WEBPACK_IMPORTED_MODULE_4__.orderTasksByDate)(sideArray[2]);
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(sideArray[2], "week");
				break;

			case "important":
				(0,_card__WEBPACK_IMPORTED_MODULE_4__.orderTasksByDate)(sideArray[3]);
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(sideArray[3], "important");
				break;

			default:
		}
	});
});

// get our taskTime in seconds, and our current time. If the difference is within 86400 seconds (a day)
// then our task is due today and should be added to today list
function today(task) {
	const taskEpoch = (task.date.getTime() / 1000).toFixed(0);
	const currentEpoch = (new Date().getTime() / 1000).toFixed(0);
	const time = taskEpoch - currentEpoch;

	if (time < 86400 && time > 0) {
		return true;
	}
	return false;
}

// checks if the task is within one week from current time
function week(task) {
	const taskEpoch = (task.date.getTime() / 1000).toFixed(0);
	const currentEpoch = (new Date().getTime() / 1000).toFixed(0);
	const time = taskEpoch - currentEpoch;

	if (time < 86400 * 7 && time > 0) {
		return true;
	}

	return false;
}

const buttons = Array.from(document.querySelectorAll("button"));
// listen to all buttons on the page, switch case to perform a set of actions based on what button is clicked
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		switch (btn.id) {
			// makes our task inputs visible
			case "addTask":
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.addVisibleClass)("#taskInput");
				break;

			// makes our project inputs visible
			case "addProjectButton":
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.addVisibleClass)("#projectInput");
				welcomeText.style.display = "none";
				break;

			// logic for submitting our custom project
			case "submitProject":
				{
					// if user inputs does not pass validation, return
					if (!validateProject()) {
						return;
					}

					const project = (0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.createProject)((0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.getProjectInput)());
					projects.push(project);
					projectArray.push(project); // this will always contain total projects, add to localstorage
					(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.adjustStorage)(projectArray);
					(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();
					(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.addProjectNav)(project, projectArray);
					if (projectArray.length <= 1) {
						// by default display our first entry
						(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayCurrentProject)(projectArray, 0);
						currentProject = 0;
					}
					(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.removeVisibleClass)("#projectInput");
				}
				break;

			// hides project inputs
			case "cancelSubmitProject":
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.removeVisibleClass)("#projectInput");
				if (edit === true) {
					(0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.changeButton)(edit, true);
					edit = false;
				}
				break;

			// hides task inputs
			case "cancelSubmitTask":
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.removeVisibleClass)("#taskInput");
				break;

			// logic for submitting a task
			case "submitTask": {
				// if task inputs are not valid, return
				if (!validateTask()) {
					return;
				}
				const task = (0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.createTask)((0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.getTaskInput)()); // gives a task object from our inputs
				const current = projectArray[(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)()]; //
				current.tasks.push(task);

				// we check if our task needs adding to any of our default catergories
				// if the task priority is urgent, add to urgent array
				if (task.priority === "Urgent") {
					sideArray[3].tasks.push(task);
				}

				// if the task is today, add it to our Today list
				if (today(task)) {
					sideArray[1].tasks.push(task);
				}

				// if the task is within the next week, add it to our week list
				if (week(task)) {
					sideArray[2].tasks.push(task);
				}

				// Always push the task to our "All task" array and adjust our storage
				sideArray[0].tasks.push(task);
				(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.adjustStorage)(null, sideArray);
				(0,_card__WEBPACK_IMPORTED_MODULE_4__.orderTasksByDate)(current);
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.removeVisibleClass)("#taskInput");
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(current, (0,_addProject__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());
				(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.adjustStorage)(projectArray); // adds task to storage
				break;
			}
			case "editProject":
				// when edit button is clicked
				// set get our currently selected project ID
				// make our input form visible and change the button
				currentProject = (0,_addProject__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();
				(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.addVisibleClass)("#projectInput");
				edit = true;
				(0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.changeButton)(edit);
				break;

			case "submitEdit":
				(0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.editProject)(projectArray, currentProject);
				edit = false;
				(0,_objectCreate__WEBPACK_IMPORTED_MODULE_1__.changeButton)(edit);
				(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.adjustStorage)(projectArray);
				break;
			default:
		}
	});
});

// When page is loaded, get storage and displ
window.addEventListener("load", () => {
	if (localStorage.getItem("sideProjects") !== null) {
		sideArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.getSideStorage)();
	}

	if (
		localStorage.getItem("projects") !== null &&
		localStorage.getItem("projects") !== "[]"
	) {
		welcomeText.style.display = "none";
		window.proj = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();
		for (let i = 0; i < proj.length; i += 1) {
			const element = proj[i];
			projectArray.push(element);
			(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.addProjectNav)(element, projectArray);
		}

		if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLastProject)() === null) {
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.setLastProject)(0);
		}

		// display out last viewed project and click the nav to generate the tasks
		(0,_displayItems__WEBPACK_IMPORTED_MODULE_3__.displayCurrentProject)(projectArray, (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLastProject)());
		const itemToClick = document.getElementById(
			`link_project_${(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.getLastProject)()}`
		);
		itemToClick.click();
	}

	// examples();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map