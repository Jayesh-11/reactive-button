import t,{useState as n,useEffect as e}from"react";function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===e&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}('.reactive-btn-wrapper, .reactive-btn {\n\t--reactive-button-min-width: 100px;\n\t--reactive-button-min-height: 35px;\n\t--reactive-button-font-size: 14px;\n\t--reactive-button-font-weight: 400;\n\t--reactive-button-border-radius: 0px;\n\t--reactive-button-text-color: #FFFFFF;\n\t--reactive-progress-color: rgba(0, 0, 0, .15);\n\n\t--reactive-button-primary-color: rgba(88, 103, 221, 1);\n\t--reactive-button-dark-color: rgba(66, 78, 106, 1);\n\t--reactive-button-light-color: rgba(183, 186, 191, 1);\n\t--reactive-button-green-color: rgba(52, 191, 163, 1);\n\t--reactive-button-red-color: rgba(244, 81, 108, 1);\n\n\t--reactive-progress-outline-primary-color: rgba(88, 103, 221, .3);\n\t--reactive-progress-outline-dark-color: rgba(66, 78, 106, .3);\n\t--reactive-progress-outline-light-color: rgba(214, 212, 212, .3);\n\t--reactive-progress-outline-green-color: rgba(52, 191, 163, .3);\n\t--reactive-progress-outline-red-color: rgba(244, 81, 108, .3);\n}\n\n.reactive-btn-wrapper {\n\tdisplay: inline-block;\n\tmin-width: var(--reactive-button-min-width);\n\theight: var(--reactive-button-min-height);\n}\n\n.reactive-btn-wrapper.tiny {\n\tmin-width: calc(var(--reactive-button-min-width) - 35px);\n\theight: calc(var(--reactive-button-min-height) - 11px);\n}\n\n.reactive-btn-wrapper.small {\n\tmin-width: calc(var(--reactive-button-min-width) - 25px);\n\theight: calc(var(--reactive-button-min-height) - 5px);\n}\n\n.reactive-btn-wrapper.large {\n\tmin-width: calc(var(--reactive-button-min-width) + 25px);\n\theight: calc(var(--reactive-button-min-height) + 5px);\n}\n\n.reactive-btn-wrapper.block {\n\twidth: 100%;\n}\n\n.reactive-btn {\n\tmargin-bottom: 0;\n\tpadding: 6px 14px 6px;\n\tfont-size: var(--reactive-button-font-size);\n\tfont-weight: var(--reactive-button-font-weight);\n\twidth: 100%;\n\tmin-height: 100%;\n\tcolor: var(--reactive-button-text-color);\n\ttext-align: center;\n\tline-height: 1.5;\n\ttext-decoration: none;\n\tuser-select: none;\n\t-webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n\tvertical-align: middle;\n\tcursor: pointer;\n\tbackground-color: var(--reactive-button-primary-color);\n\tborder: none;\n\t-webkit-border-radius: var(--reactive-button-border-radius);\n\t-moz-border-radius: var(--reactive-button-border-radius);\n\tborder-radius: var(--reactive-button-border-radius);\n\t-webkit-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\t-moz-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\tbox-shadow: inset 0 -2px 0 rgba(0, 0, 0, .2);\n\t-webkit-transition: 0.1s;\n\t-moz-transition: 0.1s;\n\ttransition: 0.1s;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n\toutline: none !important;\n    align-items: center;\n\t-webkit-box-pack: center;\n    -webkit-box-align: center;\n}\n\n.reactive-btn.outline {\n\tbackground-color: transparent !important;\n}\n\n.reactive-btn:disabled {\n\tcursor: default;\n}\n\n.reactive-btn:hover:not(:disabled):not(.disabled) {\n\topacity: .85;\n}\n\n.reactive-btn:not(.no-animation):hover:not(:disabled):not(.disabled) {\n\topacity: .85;\n\t-webkit-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\t-moz-box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);\n\tmargin-top: -1px;\n\tpadding: 6px 14px 8px;\n}\n\n.reactive-btn:not(.no-animation):active:not(:disabled):not(.disabled) {\n\t-webkit-box-shadow: none;\n\t-moz-box-shadow: none;\n\tbox-shadow: none;\n\tmargin-top: 1px;\n\tpadding: 6px 14px 4px;\n}\n\n.reactive-btn:focus {\n\toutline: none !important;\n}\n\n.reactive-btn.rounded {\n\tborder-radius: 50rem !important;\n\t-webkit-border-radius: 50rem !important;\n\t-moz-border-radius: 50rem !important;\n}\n\n.reactive-btn.disabled {\n\topacity: .7;\n}\n\n.reactive-btn .content {\n\tposition: relative;\n}\n\n.reactive-btn .progress {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 100%;\n    width: 100%;\n\tbackground-color: var(--reactive-progress-color);\n\ttransform: translateX(-100%);\n\ttransition: transform .2s ease;\n}\n\n.reactive-btn:not([data-button-state="idle"]) .progress {\n\ttransform: translateX(0%);\n\ttransition: transform 3s cubic-bezier(0.59, 0.01, 0.41, 0.99);\n}\n\n.reactive-btn .drbll1:after {\n\tcontent: \'.\';\n\tanimation: dots 1s steps(5, end) infinite;\n}\n\n/* success state */\n/* .reactive-btn[data-button-state="success"] {\n\topacity: .7;\n} */\n\n\n/* error state */\n/* .reactive-btn[data-button-state="error"].outline {\n\tcolor: white;\n}\n\n.reactive-btn[data-button-state="error"] .progress {\n\topacity: .8;\n\tbackground: #f92672 !important;\n} */\n\n\n.reactive-btn-wrapper.tiny .reactive-btn {\n\tfont-size: calc(var(--reactive-button-font-size) - 4px);\n\tline-height: 1;\n}\n\n.reactive-btn-wrapper.small .reactive-btn {\n\tfont-size: calc(var(--reactive-button-font-size) - 2px);\n}\n\n.reactive-btn-wrapper.large .reactive-btn {\n\tfont-size: calc(var(--reactive-button-font-size) + 2px);\n}\n\n\n\n/* primary button starts */\n.reactive-btn.primary.outline {\n\tborder-color: var(--reactive-button-primary-color);\n\tcolor: var(--reactive-button-primary-color);\n\tborder: 1px solid var(--reactive-button-primary-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-primary-color) !important;\n}\n\n.reactive-btn.primary.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-primary-color);\n}\n\n.reactive-btn.primary.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-primary-color) !important;\n}\n\n/* primary button ends */\n\n\n\n/* dark button starts */\n\n.reactive-btn.dark {\n\tbackground: var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline {\n\tborder-color: var(--reactive-button-dark-color);\n\tcolor: var(--reactive-button-dark-color);\n\tborder: 1px solid var(--reactive-button-dark-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-dark-color) !important;\n}\n\n.reactive-btn.dark.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-dark-color);\n}\n\n.reactive-btn.dark.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-dark-color) !important;\n}\n\n/* dark button ends */\n\n\n\n\n/* light button starts */\n\n.reactive-btn.light {\n\tbackground: var(--reactive-button-light-color);\n\tcolor: #000000;\n}\n\n.reactive-btn.light.outline {\n\tborder-color: var(--reactive-button-light-color);\n\tcolor: var(--reactive-button-light-color);\n\tborder: 1px solid var(--reactive-button-light-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-light-color) !important;\n}\n\n.reactive-btn.light.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-light-color);\n}\n\n.reactive-btn.light.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-light-color) !important;\n}\n\n/* light button ends */\n\n\n\n\n/* green button starts */\n.reactive-btn.green {\n\tbackground: var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline {\n\tborder-color: var(--reactive-button-green-color);\n\tcolor: var(--reactive-button-green-color);\n\tborder: 1px solid var(--reactive-button-green-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-green-color) !important;\n}\n\n.reactive-btn.green.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-green-color);\n}\n\n.reactive-btn.green.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-green-color) !important;\n}\n\n/* green button ends */\n\n\n\n/* red button starts */\n.reactive-btn.red {\n\tbackground: var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline {\n\tborder-color: var(--reactive-button-red-color);\n\tcolor: var(--reactive-button-red-color);\n\tborder: 1px solid var(--reactive-button-red-color);\n\tbox-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n\t-webkit-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n\t-moz-box-shadow: inset 0 -1px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.outline .progress {\n\tbackground-color: var(--reactive-progress-outline-red-color) !important;\n}\n\n.reactive-btn.red.outline:hover:not(:disabled):not(.disabled) {\n\tbox-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n\t-webkit-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n\t-moz-box-shadow: inset 0 -3px 0 var(--reactive-button-red-color);\n}\n\n.reactive-btn.red.shadow {\n\tbox-shadow: 0px 5px 16px -3px var(--reactive-button-red-color) !important;\n}\n\n/* red button ends */\n\n\n\n.reactive-spin {\n\tanimation: reactive-spin 2s infinite linear;\n}\n.reactive-btn-loading-svg, .reactive-btn-success-svg, .reactive-btn-error-svg {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -0.125em;\n}\n\n@keyframes dots {\n\n\t0%,\n\t20% {\n\t\tcolor: rgba(0, 0, 0, 0);\n\t\ttext-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t40% {\n\t\tcolor: white;\n\t\ttext-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t60% {\n\t\ttext-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n\t}\n\n\t80%,\n\t100% {\n\t\ttext-shadow: .25em 0 0 white, .5em 0 0 white;\n\t}\n}\n\n@keyframes reactive-spin {\n\t0% {\n    -webkit-transform: rotate(0deg);\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\t-webkit-transform: rotate(360deg);\n\t\ttransform: rotate(360deg);\n\t}\n}');var a=t.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"spinner",className:"reactive-btn-loading-svg reactive-spin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t.createElement("path",{fill:"currentColor",d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"})),i=t.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",className:"reactive-btn-success-svg",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t.createElement("path",{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})),c=t.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",className:"reactive-btn-error-svg",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},t.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}));export default function(o){var s=o.color?o.color:"primary",b=o.idleText?o.idleText:"Click Me",l=o.loadingText&&""!==o.loadingText?o.loadingText:"Loading",d=o.successText&&""!==o.successText?o.successText:"Success",v=o.errorText&&""!==o.errorText?o.errorText:"Error",u=o.type?o.type:"button",p="reactive-btn".concat(o.className?" "+o.className:""),g=!!o.outline,m=!!o.shadow,x=o.style?o.style:{},h=!!o.rounded,w=o.size?o.size:"normal",f=void 0===o.animation||!1!==o.animation,k=r(n(o.buttonState?o.buttonState:"idle"),2),y=k[0],z=k[1];e((function(){void 0!==o.buttonState&&(z(o.buttonState),"success"!==o.buttonState&&"error"!==o.buttonState||setTimeout((function(){z("idle")}),o.messageDuration?o.messageDuration:2e3))}),[o.buttonState,o.messageDuration]);var E;return t.createElement(t.Fragment,null,t.createElement("span",{className:"reactive-btn-wrapper ".concat(w).concat(o.block?" block":""),style:{width:o.width,height:o.height}},t.createElement("button",{ref:void 0!==o.buttonRef?o.buttonRef:null,disabled:"idle"!==y||o.disabled,"data-button-state":y,type:u,className:"".concat(p," ").concat(s).concat(g?" outline":"").concat(f?"":" no-animation").concat(h?" rounded":"").concat(m?" shadow":"").concat(o.disabled?" disabled":""),onClick:function(){void 0!==o.onClick&&o.onClick()},style:x},t.createElement("span",{className:"progress"}),t.createElement("span",{className:"content"},t.createElement(t.Fragment,null,"idle"===(E=y)?b:"loading"===E?"Loading"===l?t.createElement(t.Fragment,null,a," ",l):l:"success"===E?"Success"===d?t.createElement(t.Fragment,null,i," ",d):d:"error"===E?"Error"===v?t.createElement(t.Fragment,null,c," ",v):v:void 0)))))}
