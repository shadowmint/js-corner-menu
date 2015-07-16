module.exports = (function() { return {"styles.css":"/* Constants */\n/* Animation to open menu */\n@-webkit-keyframes showmenu {\n  0% {\n    line-height: 0em;\n    height: 0em; }\n  100% {\n    height: 1.5em;\n    line-height: 1.5em; } }\n@keyframes showmenu {\n  0% {\n    line-height: 0em;\n    height: 0em; }\n  100% {\n    height: 1.5em;\n    line-height: 1.5em; } }\n\n.corner-menu > div {\n  display: inline-block; }\n\n.corner-menu h1 {\n  margin: 0px;\n  padding: 0px; }\n\n.corner-menu ul {\n  padding: 0px;\n  margin: 0px; }\n  .corner-menu ul li {\n    height: 0em;\n    line-height: 0em;\n    overflow: hidden;\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px;\n    width: 100%; }\n\n.corner-menu.state--active li {\n  height: 1.5em;\n  line-height: 1.5em;\n  -webkit-animation-name: showmenu;\n          animation-name: showmenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n.corner-menu-box {\n  position: fixed;\n  left: 0px;\n  top: 0px; }\n"}; })();