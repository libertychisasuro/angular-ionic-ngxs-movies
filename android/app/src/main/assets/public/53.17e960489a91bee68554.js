(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{usFA:function(e,t,n){"use strict";n.r(t),n.d(t,"IonActionSheet",function(){return d}),n.d(t,"IonActionSheetController",function(){return u});var o=n("cBjU"),i=n("5VCM"),a=n("Zpxf");function r(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.4),i.fromTo("translateY","100%","0%");var a=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(a)}function s(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.4,0),i.fromTo("translateY","0%","100%");var a=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(a)}function c(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.26),i.fromTo("translateY","100%","0%");var a=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(a)}function l(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.26,0),i.fromTo("translateY","0%","100%");var a=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(a)}var d=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.componentDidLoad=function(){this.ionActionSheetDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionActionSheetDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,i.a)},e.prototype.dispatchCancelHandler=function(e){var t=e.detail.role;if(Object(i.d)(t)){var n=this.buttons.find(function(e){return"cancel"===e.role});this.callButtonHandler(n)}},e.prototype.present=function(){return Object(i.e)(this,"actionSheetEnter",r,c)},e.prototype.dismiss=function(e,t){return Object(i.b)(this,e,t,"actionSheetLeave",s,l)},e.prototype.onDidDismiss=function(e){return Object(i.c)(this.el,"ionActionSheetDidDismiss",e)},e.prototype.onWillDismiss=function(e){return Object(i.c)(this.el,"ionActionSheetWillDismiss",e)},e.prototype.buttonClick=function(e){var t=e.role;Object(i.d)(t)?this.dismiss(void 0,t):this.callButtonHandler(e)&&this.dismiss(void 0,e.role)},e.prototype.callButtonHandler=function(e){return!e||!e.handler||!1!==e.handler()},e.prototype.hostData=function(){var e=this.translucent?Object(a.a)(this.mode,this.color,"action-sheet-translucent"):{};return{style:{zIndex:2e4+this.overlayId},class:Object.assign({},e,Object(a.b)(this.cssClass))}},e.prototype.render=function(){var e=this,t=this.buttons.map(function(e){return"string"==typeof e&&(e={text:e}),e.cssClass||(e.cssClass=""),e}),n=t.find(function(e){return"cancel"===e.role}),i=t.filter(function(e){return"cancel"!==e.role});return[Object(o.b)("ion-backdrop",{tappable:this.enableBackdropDismiss}),Object(o.b)("div",{class:"action-sheet-wrapper",role:"dialog"},Object(o.b)("div",{class:"action-sheet-container"},Object(o.b)("div",{class:"action-sheet-group"},this.header?Object(o.b)("div",{class:"action-sheet-title"},this.header,this.subHeader?Object(o.b)("div",{class:"action-sheet-sub-title"},this.subHeader):null):null,i.map(function(t){return Object(o.b)("button",{class:b(t),onClick:function(){return e.buttonClick(t)}},Object(o.b)("span",{class:"action-sheet-button-inner"},t.icon?Object(o.b)("ion-icon",{name:t.icon,class:"action-sheet-icon"}):null,t.text))})),n?Object(o.b)("div",{class:"action-sheet-group action-sheet-group-cancel"},Object(o.b)("button",{class:b(n),onClick:function(){return e.buttonClick(n)}},Object(o.b)("span",{class:"action-sheet-button-inner"},n.icon?Object(o.b)("ion-icon",{name:n.icon,class:"action-sheet-icon"}):null,n.text))):null))]},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"action-sheet"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionActionSheetDidLoad",method:"ionActionSheetDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidUnload",method:"ionActionSheetDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionActionSheetWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'ion-action-sheet{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;position:fixed;z-index:1000;display:block;-ms-touch-action:none;touch-action:none}.action-sheet-wrapper{left:0;right:0;top:0;bottom:0;margin:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;z-index:10;display:block;width:100%;max-width:500px;pointer-events:none}.action-sheet-button{width:100%;border:0;font-family:inherit}.action-sheet-button:active,.action-sheet-button:focus{outline:0}.action-sheet-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group{overflow:scroll;-ms-scroll-chaining:none;overscroll-behavior:contain;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;pointer-events:all}.action-sheet-group-cancel{overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.action-sheet-md{font-family:Roboto,"Helvetica Neue",sans-serif}.action-sheet-md .action-sheet-title{padding:11px 16px 17px;text-align:left;text-align:start;font-size:16px;color:var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666))}.action-sheet-md .action-sheet-sub-title{padding:16px 0 0;font-size:14px}.action-sheet-md .action-sheet-group{background-color:var(--ion-overlay-md-background-color,var(--ion-overlay-background-color,#fafafa))}.action-sheet-md .action-sheet-group:first-child{padding-top:8px}.action-sheet-md .action-sheet-group:last-child{padding-bottom:8px}.action-sheet-md .action-sheet-button{padding:0 16px;text-align:left;text-align:start;position:relative;overflow:hidden;height:48px;font-size:16px;color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626));background:0 0;contain:strict}.action-sheet-md .action-sheet-button.activated{background:var(--ion-background-md-color-step-50,var(--ion-background-color-step-50,#f2f2f2))}.action-sheet-md .action-sheet-icon{margin:0 32px 0 0;font-size:24px}.action-sheet-md .action-sheet-button-inner{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.action-sheet-md .action-sheet-selected{font-weight:700}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function b(e){var t=Object.assign({"action-sheet-button":!0},Object(a.b)(e.cssClass));return e.role&&(t["action-sheet-"+e.role]=!0),t}var u=function(){function e(){this.actionSheets=new Map}return e.prototype.actionSheetWillPresent=function(e){this.actionSheets.set(e.target.overlayId,e.target)},e.prototype.actionSheetWillDismiss=function(e){this.actionSheets.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){Object(i.i)(this.actionSheets)},e.prototype.create=function(e){return Object(i.f)(this.doc.createElement("ion-action-sheet"),e)},e.prototype.dismiss=function(e,t,n){return void 0===n&&(n=-1),Object(i.g)(e,t,this.actionSheets,n)},e.prototype.getTop=function(){return Object(i.h)(this.actionSheets)},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionActionSheetWillPresent",method:"actionSheetWillPresent"},{name:"body:ionActionSheetWillDismiss",method:"actionSheetWillDismiss"},{name:"body:ionActionSheetDidUnload",method:"actionSheetWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}()}}]);