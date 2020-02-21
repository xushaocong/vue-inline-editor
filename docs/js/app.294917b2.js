(function(t){function e(e){for(var o,r,l=e[0],s=e[1],c=e[2],f=0,d=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/v-inline-editor/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0111":function(t,e,n){"use strict";var o=n("dc14"),i=n.n(o);i.a},"10fe":function(t,e,n){"use strict";var o=n("78c5"),i=n.n(o);i.a},"4a35":function(t,e,n){},"4b76":function(t,e,n){"use strict";var o=n("4a35"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("section",{staticClass:"page-main"},[n("vue-inline-editor",{attrs:{pastePlain:t.pastePlain},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-header"},[n("h1",{staticClass:"project-name"},[t._v("\n      v-inline-editor\n    ")]),n("h2",{staticClass:"project-tagline"},[t._v("\n      A WYSIWYG editor of inline mode.\n    ")]),n("a",{staticClass:"btn",attrs:{href:"https://github.com/xushaocong/v-inline-editor"}},[t._v("View on GitHub")])])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"vueInlineEditor",staticClass:"vue-inline-editor"},[n("div",{ref:"editContent",staticClass:"vie-editor-content",attrs:{contenteditable:"true"},on:{keyup:t.handleKeyup,paste:function(e){return e.stopPropagation(),t.handlePaste(e)},mouseup:t.handleMouseup,blur:t.handleBlur}})])},l=[],s=(n("6762"),n("2fdb"),n("6b54"),n("28a5"),n("4917"),n("ac6a"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"toolbar",staticClass:"vie-toolbar",staticStyle:{top:"-9999px"}},[t._l(t.toolbar,(function(e,o){return[e in t.buttons?n("button",{key:o,staticClass:"button",class:{active:t.buttons[e].active},attrs:{title:t.buttons[e].title,unselectable:"on"},on:{click:function(n){return n.stopPropagation(),t.btnHandler(n,e)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-"+[t.buttons[e].className]}})])]):e in t.selects?n("select",{directives:[{name:"model",rawName:"v-model",value:t.selects[e].value,expression:"selects[item].value"}],key:o,staticClass:"select",attrs:{unselectable:"on"},on:{change:[function(n){var o=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.selects[e],"value",n.target.multiple?o:o[0])},function(n){return t.selectHandler(n,e)}]}},t._l(t.config[e],(function(e,o){return n("option",{key:o,domProps:{value:e.value}},[t._v("\n        "+t._s(e.label)+"\n      ")])})),0):e in t.colorPickers?n("color-picker",{key:o,attrs:{title:t.colorPickers[e].title,unselectable:"on"},on:{change:function(n){return t.colorPickerHandle(n,e)}},model:{value:t.colorPickers[e].value,callback:function(n){t.$set(t.colorPickers[e],"value",n)},expression:"colorPickers[item].value"}},[n("svg",{staticClass:"icon",attrs:{slot:"icon","aria-hidden":"true"},slot:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+[t.colorPickers[e].className]}})])]):t._e()]}))],2)}),c=[],u={buttons:{bold:{className:"bold",action:"bold",title:"加粗",native:!0,active:!1},italic:{className:"italic",action:"italic",title:"斜体",native:!0,active:!1},underline:{className:"underline",action:"underline",title:"下划线",native:!0,active:!1},strikeThrough:{className:"strikethrough",action:"strikeThrough",title:"删除线",native:!0,active:!1},superscript:{className:"superscript",action:"superscript",title:"上标",native:!0,active:!1},subscript:{className:"subscript",action:"subscript",title:"下标",native:!0,active:!1},justifyLeft:{className:"align-left",action:"justifyLeft",title:"左对齐",native:!0,active:!1},justifyCenter:{className:"align-center",action:"justifyCenter",title:"居中对齐",native:!0,active:!1},justifyRight:{className:"align-right",action:"justifyRight",title:"右对齐",native:!0,active:!1},link:{className:"link",title:"链接"},unLink:{className:"unlink",action:"unLink",title:"取消链接"},removeFormat:{className:"eraser",action:"removeFormat",title:"清除样式",native:!0}},selects:{fontName:{className:"",value:""},fontSize:{className:"",value:""}},colorPickers:{foreColor:{className:"fore-color",value:"",title:"文字颜色"},backColor:{className:"back-color",value:"",title:"文字背景"}}},f=JSON.parse(JSON.stringify(u));function d(){return f}var p={toolbar:["fontName","fontSize","foreColor","backColor","bold","italic","underline","strikeThrough","superscript","subscript","justifyLeft","justifyCenter","justifyRight","removeFormat"],fontName:[{value:"微软雅黑",label:"微软雅黑"},{value:"宋体",label:"宋体"},{value:"仿宋",label:"仿宋"},{value:"serif",label:"Serif"},{value:"Helvetica",label:"Helvetica"}],fontSize:[{value:"12px",label:"12px"},{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"20px",label:"20px"},{value:"24px",label:"24px"},{value:"28px",label:"28px"},{value:"32px",label:"32px"},{value:"48px",label:"48px"}]};function h(t){var e=JSON.parse(JSON.stringify(p));return t?e[t]:e}var v,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.closeColorPanel,expression:"closeColorPanel"}],staticClass:"color-picker"},[n("button",{staticClass:"color-picker__trigger",on:{click:t.toggleStatus}},[t._t("icon")],2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputColor,expression:"inputColor"}],ref:"colorPickerInput",staticClass:"color-picker__input",attrs:{type:"color"},domProps:{value:t.inputColor},on:{change:function(e){return t.updateValue(t.inputColor)},input:function(e){e.target.composing||(t.inputColor=e.target.value)}}}),n("div",{staticClass:"color-picker__panel",class:{open:t.openStatus},style:t.position+": 0"},[n("div",{staticClass:"color-picker__panel-header"},["transparent"===t.showPanelColor?n("div",{staticClass:"color-transparent"}):n("div",{staticClass:"color-view",style:"background-color: "+t.showPanelColor}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.showPanelColor,expression:"showPanelColor"}],staticClass:"color-value",attrs:{type:"text",readonly:""},domProps:{value:t.showPanelColor},on:{input:function(e){e.target.composing||(t.showPanelColor=e.target.value)}}})]),n("div",{staticClass:"color-picker__panel-body"},[n("h3",[t._v("主题颜色")]),n("ul",{staticClass:"theme-color"},[n("button",{staticClass:"button-transparent",on:{mouseover:function(e){t.hoverColor="transparent"},mouseout:function(e){t.hoverColor=null},click:function(e){return t.updateValue("transparent")}}},[n("i",{staticClass:"iconfont icon-slash"})]),t._l(t.themeColor,(function(e,o){return n("button",{key:o,style:{backgroundColor:e},on:{mouseover:function(n){t.hoverColor=e},mouseout:function(e){t.hoverColor=null},click:function(n){return t.updateValue(e)}}})}))],2),n("h3",[t._v("标准颜色")]),n("ul",{staticClass:"base-color"},t._l(t.colorPanel,(function(e,o){return n("li",{key:o},[n("ul",t._l(e,(function(e){return n("button",{key:e,style:{backgroundColor:e},on:{mouseover:function(n){t.hoverColor=e},mouseout:function(e){t.hoverColor=null},click:function(n){return t.updateValue(e)}}})})),0)])})),0),n("button",{staticClass:"more-color",on:{click:t.showMoreColor}},[t._v("\n        更多颜色\n      ")])])])])},b=[],g=o["a"].prototype.$isServer,y=function(){return!g&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),C=[],x="@@clickoutsideContext",k=0;!o["a"].prototype.$isServer&&y(document,"mousedown",(function(t){return v=t})),!o["a"].prototype.$isServer&&y(document,"mouseup",(function(t){C.forEach((function(e){return e[x].documentHandler(t,v)}))}));var w={bind:function(t,e,n){C.push(t);var o=k++,i=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(n.context&&o.target&&i.target)||t.contains(o.target)||t.contains(i.target)||t===o.target||n.context.popperElm&&(n.context.popperElm.contains(o.target)||n.context.popperElm.contains(i.target))||(e.expression&&t[x].methodName&&n.context[t[x].methodName]?n.context[t[x].methodName]():t[x].bindingFn&&t[x].bindingFn())};t[x]={id:o,documentHandler:i,methodName:e.expression,bindingFn:e.value}},update:function(t,e){t[x].methodName=e.expression,t[x].bindingFn=e.value},unbind:function(t){for(var e=C.length,n=0;n<e;n++)if(C[n][x].id===t[x].id){C.splice(n,1);break}}},S={name:"ColorPicker",directives:{Clickoutside:w},props:{value:{type:String,required:!0},defaultColor:{type:String,default:"#666"},position:{type:String,default:"left"}},data:function(){return{openStatus:!1,hoverColor:null,themeColor:["#000","#fff","#ffebcd","#ff8000","#ffc12a","#448026","#ffff00","#ff0000","#0000ff"],colorPanel:[["#400000","#804000","#004000","#004040"],["#808000","#808040","#808080","#408080"],["#ff8080","#ff0000","#804040","#800000"],["#ffff90","#ffff00","#ff8040","#ff8000"],["#80ff80","#80ff00","#00ff00","#008000"],["#00ff80","#00ff40","#008080","#008040"],["#80ffff","#00ffff","#004080","#0000ff"],["#0080ff","#0080c0","#8080ff","#0000a0"],["#ff80c0","#8080c0","#800040","#800080"],["#ff80ff","#ff00ff","#ff0080","#8000ff"]],inputColor:this.value}},computed:{showPanelColor:function(){return this.hoverColor?this.hoverColor:this.showColor},showColor:function(){return this.value||""}},methods:{closeColorPanel:function(){this.openStatus=!1},toggleStatus:function(){this.openStatus=!this.openStatus},showMoreColor:function(){this.$refs.colorPickerInput.click()},updateValue:function(t){t&&(this.$emit("input",t),this.$emit("change",t),this.openStatus=!1)},handleDefaultColor:function(){this.updateValue(this.defaultColor)},parseColor:function(t){if(4!==t.length)return t;t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]},rgbToHex:function(t,e,n){var o=(t<<16|e<<8|n).toString(16);return"#"+new Array(Math.abs(o.length-7)).join("0")+o},hexToRgb:function(t){t=this.parseColor(t);for(var e=[],n=1;n<7;n+=2)e.push(parseInt("0x"+t.slice(n,n+2)));return e},gradient:function(t,e,n){for(var o=this.hexToRgb(t),i=this.hexToRgb(e),a=(i[0]-o[0])/n,r=(i[1]-o[1])/n,l=(i[2]-o[2])/n,s=[],c=0;c<n;c++)s.push(this.rgbToHex(parseInt(a*c+o[0]),parseInt(r*c+o[1]),parseInt(l*c+o[2])));return s}}},_=S,z=(n("10fe"),n("2877")),H=Object(z["a"])(_,m,b,!1,null,null,null),N=H.exports,M={name:"VieToolbar",components:{ColorPicker:N},props:{},data:function(){var t=d(),e=t.buttons,n=t.selects,o=t.colorPickers;return{options:null,buttons:e,selects:n,colorPickers:o,config:h(),toolbar:h("toolbar")}},mounted:function(){this.options&&(this.options.toolbar&&(this.toolbar=this.options.toolbar,this.config.toolbar=this.options.toolbar),this.options.fontSize&&(this.config.fontSize=this.options.fontSize),this.options.fontName&&(this.config.fontName=this.options.fontName))},methods:{btnHandler:function(t,e){var n=this.buttons[e];n.action&&n.native&&this.$emit("execCommand",{name:e,value:null})},selectHandler:function(t,e){this.$emit("execCommand",{name:e,value:this.selects[e].value})},colorPickerHandle:function(t,e){this.$emit("execCommand",{name:e,value:t})}}},P=M,T=(n("0111"),Object(z["a"])(P,s,c,!1,null,null,null)),L=T.exports,V=(n("a2f0"),n("b46c"),{name:"VueInlineEditor",props:{value:{type:String,required:!0},options:{type:Object,default:null},pastePlain:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value,editContent:null,toolbar:null}},mounted:function(){this.editContent=this.$refs.editContent,this.editContent.innerHTML=this.value,this.initToolbar(),document.addEventListener("click",this.bindClickEvent)},beforeDestroy:function(){this.toolbar.$el.remove()},destroyed:function(){document.removeEventListener("click",this.bindClickEvent)},methods:{setCurrentVal:function(t){this.$emit("input",t),this.$emit("change",t),this.currentValue=t},execCommand:function(t){var e=t.name,n=t.value;if(this[e])this[e](e,n);else{var o=this.getSelection(),i=this.getRange();if(!o||!i)return;document.queryCommandSupported("styleWithCss")&&document.execCommand("styleWithCss",!1,!0),document.execCommand(e,!1,n)}this.updateButtonState();var a=this.editContent.innerHTML;this.setCurrentVal(a)},getSelection:function(){if(document.getSelection)return document.getSelection()},getRange:function(){var t,e=this.getSelection();return e&&0!==e.rangeCount&&(t=e.getRangeAt(0)),t},fontSize:function(t,e){var n=this,o=this.getSelection(),i=this.getRange();if(o&&i&&!i.collapsed){var a=i.cloneContents().childNodes;if(1===a.length&&1===a[0].nodeType&&"span"===a[0].tagName.toLowerCase()){var r=i.extractContents().childNodes[0];r.style.fontSize=e,i.insertNode(r),i.selectNode(r),o.removeAllRanges(),o.addRange(i)}else if(-1!==navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Edge")){document.queryCommandSupported("styleWithCss")&&document.execCommand("styleWithCss",!1,!0),document.execCommand("fontSize",!1,7);var l=i.commonAncestorContainer;3===l.nodeType&&(l=l.parentNode),"span"===l.tagName.toLowerCase()&&(l=l.parentNode),Array.prototype.forEach.call(l.getElementsByTagName("span"),(function(t){"-webkit-xxx-large"!==t.style.fontSize.trim()&&"xxx-large"!==t.style.fontSize.trim()||(t.style.fontSize=e),t.normalize()}))}else{document.queryCommandSupported("styleWithCss")&&document.execCommand("styleWithCss",!1,!1),document.execCommand("fontSize",!1,7);var s=[],c=[],u=i.commonAncestorContainer;3===u.nodeType&&(u=u.parentNode),"font"===u.tagName.toLowerCase()&&(u=u.parentNode),s=u.getElementsByTagName("font");for(var f=function(t){var o=s[t],i=document.createElement("span");Array.prototype.forEach.call(o.attributes,(function(t){"size"===t.nodeName?i.style.fontSize=e:i.setAttribute(t.nodeName,t.nodeValue)})),i.innerHTML=o.innerHTML,0!==i.querySelectorAll("span").length&&n.formatContent(i,"span","fontSize"),i.normalize(),o.parentNode.replaceChild(i,o),c.push(i),t--,d=t},d=0;d<s.length;d++)f(d);i.setStartBefore(c[0]),i.setEndAfter(c[c.length-1]),o.removeAllRanges(),o.addRange(i)}}},formatContent:function(t,e,n){for(var o=[],i={fontSize:/font-size:\s?\d+px;/g,verticalAlign:/vertical-align:\s?(sub|super);/g},a=t.getElementsByTagName(e),r=0;r<a.length;r++){var l=a[r];if(1===l.attributes.length&&0!==l.style.length&&null!=l.getAttribute("style").match(i[n]))if(0===l.children.length)if(1===l.style.length){var s=l.parentNode;s.replaceChild(document.createTextNode(l.innerHTML),l),s.normalize(),r--}else l.style[n]="";else o.push(l)}o.length&&this.formatContent(t,e,n)},showToolbar:function(){var t=window.getSelection(),e=t.getRangeAt(0),n=this.toolbar.$el,o=2,i=window.innerWidth-n.clientWidth-2,a=e.getBoundingClientRect(),r=(a.right-a.left)/2+a.left-n.clientWidth/2,l=a.top-(n.clientHeight+8)+window.pageYOffset;r=r<o?o:r>i?i:r,n.style.top=l+"px",n.style.left=r+"px"},hideToolbar:function(){this.toolbar.$el.style.top="-9999px"},handleKeyup:function(t){var e=t.target.innerHTML;this.toolbar.$el.style.top="-9999px",this.setCurrentVal(e)},handleMouseup:function(){var t=this;setTimeout((function(){var e=window.getSelection();e.isCollapsed?t.hideToolbar():(t.updateButtonState(),t.showToolbar())}),1)},handlePaste:function(t){if(this.pastePlain){t.preventDefault();var e=(t.clipboardData||window.clipboardData).getData("text/plain");document.queryCommandSupported("insertText")?document.execCommand("insertText",!1,e):document.execCommand("paste",!1,e)}},handleBlur:function(t){this.$emit("blur",t)},rgbToHex:function(t){var e=/\((.+)\)/,n=t.match(e);if(n){n=n[1].split(",");var o=parseInt(n[0].trim()),i=parseInt(n[1].trim()),a=parseInt(n[2].trim()),r=(o<<16|i<<8|a).toString(16);return"#"+new Array(Math.abs(r.length-7)).join("0")+r}return""},updateButtonState:function(){var t=this.toolbar.buttons,e=this.toolbar.selects,n=this.toolbar.colorPickers,o=document,i={is_bold:o.queryCommandValue("bold"),is_italic:o.queryCommandValue("italic"),is_underline:o.queryCommandValue("underline"),is_strikeThrough:o.queryCommandValue("strikeThrough"),is_superscript:o.queryCommandValue("superscript"),is_subscript:o.queryCommandValue("subscript"),is_justifyLeft:o.queryCommandValue("justifyLeft"),is_justifyCenter:o.queryCommandValue("justifyCenter"),is_justifyRight:o.queryCommandValue("justifyRight")};for(var a in t)t[a].hasOwnProperty("active")&&(t[a].active="true"===i["is_"+a]);var r=o.queryCommandValue("fontName");e.fontName.value=r.split(",")[0]||"",e.fontSize.value=this.updateFontSize()||"";var l=o.queryCommandValue("foreColor"),s=o.queryCommandValue("backColor");n.foreColor.value=this.rgbToHex(l)||"",n.backColor.value=this.rgbToHex(s)||""},getFontSize:function(t){3===t.nodeType&&(t=t.parentNode);var e=t.style["fontSize"]||this.getWindow(t).getComputedStyle(t,"").getPropertyValue("font-size");return e},getWindow:function(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},updateFontSize:function(){var t=window.getSelection(),e=t.getRangeAt(0),n=e.startContainer,o=this.getFontSize(n),i=/^([\d]+)(\w+)$/.exec(o);return i?Math.floor(i[1])+i[2]:o},bindClickEvent:function(t){var e=t.path||t.composedPath&&t.composedPath();if(e){var n=e.includes(this.toolbar.$el),o=e.includes(this.editContent);n||o||this.hideToolbar()}},initToolbar:function(){var t=new o["a"](L);t.$on("execCommand",this.execCommand),t.$data.options=this.options;var e=t.$mount();document.body.appendChild(e.$el),this.toolbar=e}}}),j=V,E=(n("4b76"),Object(z["a"])(j,r,l,!1,null,null,null)),$=E.exports,B={name:"App",components:{VueInlineEditor:$},data:function(){return{content:"请选中文本进行编辑",pastePlain:!0}}},O=B,A=(n("5c0b"),Object(z["a"])(O,i,a,!1,null,null,null)),q=A.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("e332"),i=n.n(o);i.a},"78c5":function(t,e,n){},a2f0:function(t,e,n){},b46c:function(t,e){(function(t){var e='<svg><symbol id="icon-underline" viewBox="0 0 1024 1024"><path d="M0 945.230769 945.230769 945.230769 945.230769 1024 0 1024 0 945.230769ZM0 0 407.076943 0 407.076943 61.934356 319.153861 68.127823 299.076923 86.088783 299.076923 530.158041C299.076923 614.802038 317.076716 675.290663 353.076933 711.625649 389.077071 747.960635 448.153442 766.127892 530.307702 766.127892 606.000364 766.127892 660.807522 746.825177 694.730752 708.219274 728.653982 669.613371 745.61536 606.337733 745.61536 518.390469L745.61536 91.043525 724.153817 69.366469 633.461524 61.934356 633.461524 0 955.384596 0 955.384596 61.934356 868.846119 69.366469 849.461563 91.043525 849.461563 531.396687C849.461563 649.072561 819.923338 734.334661 760.846178 787.185585 701.76894 840.03651 606.462188 866.461538 474.923087 866.461538 406.153531 866.461538 345.807951 857.481137 293.884613 839.520098 241.961275 821.55906 201.230887 795.856581 171.692347 762.411796 149.076834 735.986373 133.038474 705.74206 123.57695 671.677991 114.115348 637.613922 109.384625 588.789524 109.384625 525.203298L109.384625 86.088783 89.307687 68.127823 0 61.934356 0 0Z"  ></path></symbol><symbol id="icon-italic" viewBox="0 0 1024 1024"><path d="M897.948 61.745l0 64.322-128.65 0L447.674 897.933l128.65 0 0 64.32L126.052 962.253l0-64.32 128.65 0 321.622-771.866-128.65 0L447.674 61.745 897.948 61.745z"  ></path></symbol><symbol id="icon-eraser" viewBox="0 0 1024 1024"><path d="M674.37504 69.888a20.224 20.224 0 0 0-28.48 0L6.08704 709.76a20.224 20.224 0 0 0 0 28.544l124.416 124.416a56.128 56.128 0 0 0 34.432 14.272h398.656c11.072 0 26.56-6.4 34.432-14.272l420.288-420.352a20.224 20.224 0 0 0 0-28.544l-343.936-343.936zM558.47104 786.816a56.128 56.128 0 0 1-34.496 14.272H215.36704a56.128 56.128 0 0 1-34.432-14.272l-58.624-58.688a20.224 20.224 0 0 1 0-28.544l234.496-234.56a20.224 20.224 0 0 1 28.544 0l233.152 233.216a20.224 20.224 0 0 1 0 28.48l-60.032 60.096z" fill="#666666" ></path></symbol><symbol id="icon-bold" viewBox="0 0 1024 1024"><path d="M163.89832738 853.08066132v-683.98678637c7.86353164-67.26127551-39.59849673-98.92602915-142.38608023-95.27510424v-56.02765746h539.77524244c245.17366619 3.72113633 371.62205369 86.00737034 379.6260058 246.64807746 0 119.63800812-79.12678203 190.62041997-237.23992553 213.0174397 197.64142881 29.97971286 296.56745795 112.12552887 296.56746036 246.6480799-11.86550645 183.17814974-140.42019855 276.69800181-385.59386476 280.34892423h-593.13491831v-56.09786893c102.78758595 3.79134534 150.24961188-28.01382876 142.38608023-95.27510429z m243.13757553-336.37658413v313.97956197c-3.93176586 74.77375474 31.66475361 110.22985619 106.78956074 106.50872232 150.24961188-3.72113633 225.4446281-67.33148452 225.44462812-190.62041999-4.00197481-153.19843689-79.19699103-229.86786431-225.44462812-229.8678643h-106.78956074z m0-336.37658662v274.73212011h47.46202592c154.25158671 0 229.30618487-59.7487938 225.44462803-179.38680435-4.00197481-123.35914447-61.36362558-186.82907463-172.01474319-190.62042003-67.33148452 0-100.89191329 31.80517407-100.89191076 95.27510427z" fill="#8FA6BF" ></path></symbol><symbol id="icon-back-color" viewBox="0 0 1024 1024"><path d="M327 167h-1.9c-2.8 17.7-5.9 31.4-9.5 41l-88 244.3h197.2L336.1 208c-2.8-7.9-5.8-21.5-9.1-41zM203.6 518.6l-56.5 160.7h361.2l-60-160.7z" fill="#656565" ></path><path d="M592.3 91.8H64v585.7L287.1 91.8h81.3l223.7 587.5h0.2z" fill="#656565" ></path><path d="M64 677.5l-0.7 1.9h83.8v-0.1H64zM508.3 679.4h83.8v-0.1h-83.8z" fill="" ></path><path d="M287.1 91.8L64 677.5v1.8h83.1l56.5-160.8h244.7l60 160.8h83.8L368.4 91.8h-81.3z m-59.5 360.4l88-244.3c3.6-9.6 6.7-23.3 9.5-41h1.9c3.3 19.5 6.4 33.1 9.1 41l88.7 244.3H227.6zM502 886H64.4V702.8H502V886z m-377.6-60H442v-63.2H124.4V826zM959.3 703.8L743.7 926.2 528 703.8z" fill="#919191" ></path></symbol><symbol id="icon-fore-color" viewBox="0 0 1024 1024"><path d="M388.4 87.8h-81.3L83.3 675.4h83.8l56.5-160.8h244.7l60 160.8h83.8L388.4 87.8zM247.6 448.2l88-244.3c3.6-9.6 6.7-23.3 9.5-41h1.9c3.3 19.5 6.4 33.1 9.1 41l88.7 244.3H247.6z" fill="#919191" ></path><path d="M84 704.8h429v173.6H84z" fill="#656565" ></path><path d="M548 704.8l215.7 222.4 215.6-222.4z" fill="#919191" ></path></symbol><symbol id="icon-align-left" viewBox="0 0 1024 1024"><path d="M1000.15484777 196.33978785H27.32487111V69.5786003H1000.15484777v126.76118755zM634.61866509 450.41228994H27.32487111V323.65110239H634.61866509v126.76118755z m365.53618268 252.97224814H27.32487111V576.62335052H1000.15484777v126.76118756z m-365.53618268 254.07250209H27.32487111v-126.76118756H634.61866509v126.76118756z" fill="" ></path></symbol><symbol id="icon-align-right" viewBox="0 0 1024 1024"><path d="M34.02666667 76.05333333h956.05333333v124.58666667H34.02666667zM393.17333333 325.76h596.8v124.58666667H393.17333333zM34.02666667 574.4h956.05333333v124.58666667H34.02666667zM393.17333333 824h596.8v124.58666667H393.17333333z"  ></path></symbol><symbol id="icon-align-center" viewBox="0 0 1024 1024"><path d="M34.45333333 77.86666667h954.56v124.37333333H34.45333333zM213.76 327.25333333H809.6v124.37333334H213.76zM34.45333333 575.46666667h954.56v124.37333333H34.45333333zM213.76 824.74666667H809.6v124.37333333H213.76z"  ></path></symbol><symbol id="icon-subscript" viewBox="0 0 1024 1024"><path d="M781.2 383h-26.6c-4.9-47.4-18.1-82.1-39.5-104.1C688 251.1 649.3 237.2 599.2 237.2H480v507c0 51.5 5.8 84.3 17.3 98.2 14.8 17.2 39.1 25.8 72.8 25.8h29.6v23.4H240.6v-23.4h30.7c34.4 0 59.8-11 76.2-33.1 8.2-13.9 12.3-44.2 12.3-90.8V237.3H259.3c-55.6 0-93.5 9-114 27-30.2 22-47.8 61.7-52.7 118.8H63.9l-0.3-208.7h717.3l0.3 208.6zM901 134.8h19.9V323.9c0 8.9 0.6 14.7 1.7 17.2 1.1 2.6 3 4.5 5.6 5.8s7.8 2 15.5 2h16v18.8H844.5v-18.8h17.8c7.7 0 12.9-0.7 15.4-2 2.6-1.4 4.5-3.5 6-6.5 1.4-3 2.1-8.5 2.1-16.4V173.5h-41.3v-19.1c22.5-3.2 41.4-9.7 56.5-19.6z"  ></path></symbol><symbol id="icon-strikethrough" viewBox="0 0 1024 1024"><path d="M959.6 324.6h-33.2c-6.2-59.1-22.6-102.5-49.3-130-33.9-34.7-82.1-52-144.7-52H583.5v633c0 64.4 7.2 105.2 21.6 122.6 18.5 21.5 48.8 32.2 90.9 32.2h37v29.2H284.6v-29.2h38.3c43 0 74.7-13.8 95.1-41.4 10.2-17.4 15.3-55.1 15.3-113.4v-633H307.9c-69.4 0-116.8 11.2-142.3 33.7-37.7 27.5-59.7 77-65.8 148.4H64L63.6 64h895.7l0.3 260.6z"  ></path><path d="M65.9 439.5H959v91.6H65.9z"  ></path></symbol><symbol id="icon-superscript" viewBox="0 0 1024 1024"><path d="M875.8 325.2h-30.1c-5.6-53.5-20.5-92.8-44.6-117.7-30.7-31.4-74.3-47.1-131-47.1H535.4v573.1c0 58.3 6.5 95.3 19.5 111 16.7 19.4 44.2 29.1 82.3 29.1h33.5v26.5h-406v-26.5h34.7c38.9 0 67.6-12.5 86.1-37.5 9.2-15.7 13.9-49.9 13.9-102.7v-573H285.8c-62.8 0-105.7 10.2-128.8 30.5-34.2 24.9-54 69.7-59.6 134.4H64.9l-0.3-236h811l0.2 235.9zM893.2 670.4h22.5v213.7c0 10.1 0.6 16.6 1.9 19.5 1.3 2.9 3.4 5.1 6.4 6.6 3 1.5 8.8 2.2 17.5 2.2h18.1v21.2H829.3v-21.2h20.1c8.7 0 14.6-0.8 17.4-2.3 2.9-1.5 5.1-4 6.7-7.4 1.6-3.4 2.4-9.6 2.4-18.5v-170h-46.7v-21.6c25.6-3.6 46.9-11 64-22.2z"  ></path></symbol></svg>',n=function(){var t=document.getElementsByTagName("script");return t[t.length-1]}(),o=n.getAttribute("data-injectcss"),i=function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{var n=function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()};document.addEventListener("DOMContentLoaded",n,!1)}else document.attachEvent&&o(t,e);function o(t,e){var n=t.document,o=!1,i=function(){o||(o=!0,e())},a=function t(){try{n.documentElement.doScroll("left")}catch(e){return void setTimeout(t,50)}i()};a(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,i())}}},a=function(t,e){e.parentNode.insertBefore(t,e)},r=function(t,e){e.firstChild?a(t,e.firstChild):e.appendChild(t)};function l(){var t,n;t=document.createElement("div"),t.innerHTML=e,e=null,n=t.getElementsByTagName("svg")[0],n&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",r(n,document.body))}if(o&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(s){console&&console.log(s)}}i(l)})(window)},dc14:function(t,e,n){},e332:function(t,e,n){}});
//# sourceMappingURL=app.294917b2.js.map