"use strict";(self["webpackChunkapp_name"]=self["webpackChunkapp_name"]||[]).push([[887],{4685:function(t,e,o){
/*!
 * devextreme-vue
 * Version: 22.1.6
 * Build date: Tue Oct 18 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DxLoadIndicator=void 0;var i=n(o(3559)),s=o(5536),a=s.createComponent({props:{elementAttr:Object,height:[Function,Number,String],hint:String,indicatorSrc:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:elementAttr":null,"update:height":null,"update:hint":null,"update:indicatorSrc":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:rtlEnabled":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=i.default,this.$_hasAsyncTemplate=!0}});e.DxLoadIndicator=a,e["default"]=a},4312:function(t,e,o){o.d(e,{Z:function(){return N}});var n=o(7678),i=o(343),s=o(2454),a=o(4099),r=o(450),l=o(8274),d=o(1389),u=o(2376),c=o(268),p=o(2264),h=o(1866),m=o(652),f=o(3298),g=o(3970),v=(0,l.Jj)(),w=c.Z.add,b="dx-toast",x=b+"-",y=x+"wrapper",_=x+"content",C=x+"message",D=x+"icon",T="dxToast",k=["info","warning","error","success"],S=[],O=8e3,W=null,Z={top:{my:"top",at:"top",of:null,offset:"0 0"},bottom:{my:"bottom",at:"bottom",of:null,offset:"0 -20"},center:{my:"center",at:"center",of:null,offset:"0 0"},right:{my:"center right",at:"center right",of:null,offset:"0 0"},left:{my:"center left",at:"center left",of:null,offset:"0 0"}},B={h:0,v:0};w((function(){u.Z.subscribeGlobal(d["default"].getDocument(),h.Z.down,(function(t){for(var e=S.length-1;e>=0;e--)if(!S[e]._proxiedDocumentDownHandler(t))return}))}));var H=f.Z.inherit({_getDefaultOptions:function(){return(0,a.l)(this.callBase(),{message:"",type:"info",displayTime:2e3,position:"bottom center",animation:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,from:1,to:0}},shading:!1,height:"auto",hideTopOverlayHandler:null,closeOnSwipe:!0,closeOnClick:!1})},_defaultOptionsRules:function(){return this.callBase().concat([{device:{platform:"android"},options:{hideOnOutsideClick:!0,width:"auto",position:{at:"bottom left",my:"bottom left",offset:"20 -20"},animation:{show:{type:"slide",duration:200,from:{position:{my:"top",at:"bottom",of:v}}},hide:{type:"slide",duration:200,to:{position:{my:"top",at:"bottom",of:v}}}}}},{device:function(t){var e="phone"===t.deviceType,o="android"===t.platform;return e&&o},options:{width:"100vw",position:{at:"bottom center",my:"bottom center",offset:"0 0"}}},{device:function(t){return"phone"===t.deviceType},options:{width:"100vw"}},{device:function(){return(0,g.x2)()},options:{minWidth:344,maxWidth:568,displayTime:4e3}}])},_init:function(){this.callBase(),this._posStringToObject()},_renderContentImpl:function(){this.option("message")&&(this._message=(0,n.Z)("<div>").addClass(C).text(this.option("message")).appendTo(this.$content())),this.setAria("role","alert",this._message),k.includes(this.option("type").toLowerCase())&&this.$content().prepend((0,n.Z)("<div>").addClass(D)),this.callBase()},_render:function(){this.callBase(),this.$element().addClass(b),this.$wrapper().addClass(y),this.$content().addClass(x+String(this.option("type")).toLowerCase()),this.$content().addClass(_),this._toggleCloseEvents("Swipe"),this._toggleCloseEvents("Click")},_renderScrollTerminator:p.ZT,_toggleCloseEvents:function(t){var e="dx"+t.toLowerCase();u.Z.off(this.$content(),e),this.option("closeOn"+t)&&u.Z.on(this.$content(),e,this.hide.bind(this))},_posStringToObject:function(){if((0,r.HD)(this.option("position"))){var t=this.option("position").split(" ")[0],e=this.option("position").split(" ")[1];switch(this.option("position",(0,a.l)({boundaryOffset:B},Z[t])),e){case"center":case"left":case"right":this.option("position").at+=" "+e,this.option("position").my+=" "+e}}},_show:function(){return W&&W!==this&&(clearTimeout(W._hideTimeout),W.hide()),W=this,this.callBase.apply(this,arguments).done(function(){clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(this.hide.bind(this),this.option("displayTime"))}.bind(this))},_hide:function(){return W=null,this.callBase.apply(this,arguments)},_overlayStack:function(){return S},_zIndexInitValue:function(){return this.callBase()+O},_dispose:function(){clearTimeout(this._hideTimeout),W=null,this.callBase()},_optionChanged:function(t){switch(t.name){case"type":this.$content().removeClass(x+t.previousValue),this.$content().addClass(x+String(t.value).toLowerCase());break;case"message":this._message&&this._message.text(t.value);break;case"closeOnSwipe":this._toggleCloseEvents("Swipe");break;case"closeOnClick":this._toggleCloseEvents("Click");break;case"displayTime":break;default:this.callBase(t)}}});(0,m.Z)(T,H);var P=H,I=P,$=(0,l.Jj)(),M=null,j={};function L(t,e,o){var l=(0,r.PO)(t)?t:{message:t},d=(0,r.PO)(e)?e:void 0,u=(0,r.PO)(e)?void 0:e,{onHidden:c}=l;if(null!==d&&void 0!==d&&d.position){var{position:p}=d,h=d.direction||R(p),m=(0,r.HD)(p)?p:"".concat(p.top,"-").concat(p.left,"-").concat(p.bottom,"-").concat(p.right),{onShowing:f}=l,g=E(m);F(g,h),(0,a.l)(l,{container:g,onShowing:function(t){A(g,h,p),new i.Z(f,{context:t.model}).execute(arguments)}})}(0,a.l)(l,{type:u,displayTime:o,onHidden:function(t){(0,n.Z)(t.element).remove(),new i.Z(c,{context:t.model}).execute(arguments)}}),M=(0,n.Z)("<div>").appendTo((0,s.S3)()),new I(M,l).show()}var R=t=>(0,r.HD)(t)&&t.includes("top")?"down-push":"up-push",q=t=>{var e=(0,n.Z)("<div>").appendTo((0,s.S3)());return j[t]=e,e},E=t=>{var e=j[t];return e||q(t)},F=(t,e)=>{var o="dx-toast-stack dx-toast-stack-".concat(e,"-direction");t.removeAttr("class").addClass(o)},A=(t,e,o)=>{var{offsetWidth:n,offsetHeight:i}=t.children().first().get(0),s={toastWidth:n,toastHeight:i,windowHeight:$.innerHeight,windowWidth:$.innerWidth},a=(0,r.HD)(o)?z(o,s):o,l=J(e,a,s);t.css(l)},z=(t,e)=>{var{toastWidth:o,toastHeight:n,windowHeight:i,windowWidth:s}=e;switch(t){case"top left":return{top:10,left:10};case"top right":return{top:10,right:10};case"bottom left":return{bottom:10,left:10};case"bottom right":return{bottom:10,right:10};case"top center":return{top:10,left:Math.round(s/2-o/2)};case"left center":return{top:Math.round(i/2-n/2),left:10};case"right center":return{top:Math.round(i/2-n/2),right:10};case"center":return{top:Math.round(i/2-n/2),left:Math.round(s/2-o/2)};case"bottom center":default:return{bottom:10,left:Math.round(s/2-o/2)}}},J=(t,e,o)=>{var n,i,s,a,r,l,d,u,c,p,h,m,{toastWidth:f,toastHeight:g,windowHeight:v,windowWidth:w}=o;switch(t.replace(/-push|-stack/g,"")){case"up":return{bottom:null!==(n=e.bottom)&&void 0!==n?n:v-g-e.top,top:"",left:null!==(i=e.left)&&void 0!==i?i:"",right:null!==(s=e.right)&&void 0!==s?s:""};case"down":return{top:null!==(a=e.top)&&void 0!==a?a:v-g-e.bottom,bottom:"",left:null!==(r=e.left)&&void 0!==r?r:"",right:null!==(l=e.right)&&void 0!==l?l:""};case"left":return{right:null!==(d=e.right)&&void 0!==d?d:w-f-e.left,left:"",top:null!==(u=e.top)&&void 0!==u?u:"",bottom:null!==(c=e.bottom)&&void 0!==c?c:""};case"right":return{left:null!==(p=e.left)&&void 0!==p?p:w-f-e.right,right:"",top:null!==(h=e.top)&&void 0!==h?h:"",bottom:null!==(m=e.bottom)&&void 0!==m?m:""}}},N=L},1454:function(t,e,o){o.r(e),o.d(e,{default:function(){return b}});var n=o(6252),i=o(9963);const s={class:"dx-button-text"},a={key:1};function r(t,e,o,r,l,d){const u=(0,n.up)("dx-required-rule"),c=(0,n.up)("dx-label"),p=(0,n.up)("dx-item"),h=(0,n.up)("dx-custom-rule"),m=(0,n.up)("dx-button-options"),f=(0,n.up)("dx-button-item"),g=(0,n.up)("dx-loadIndicator"),v=(0,n.up)("dx-form");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[0]||(e[0]=(0,i.iM)(((...t)=>r.onSubmit&&r.onSubmit(...t)),["prevent"]))},[(0,n.Wm)(v,{"form-data":r.formData,disabled:r.loading},{changePassword:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("span",s,[r.loading?((0,n.wg)(),(0,n.j4)(g,{key:0,width:"24px",height:"24px",visible:!0})):(0,n.kq)("",!0),r.loading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",a,"Continue"))])])])),default:(0,n.w5)((()=>[(0,n.Wm)(p,{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{message:"Password is required"}),(0,n.Wm)(c,{visible:!1})])),_:1}),(0,n.Wm)(p,{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{message:"Password is required"}),(0,n.Wm)(h,{message:"Passwords do not match","validation-callback":r.confirmPassword},null,8,["validation-callback"]),(0,n.Wm)(c,{visible:!1})])),_:1}),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{width:"100%",type:"default",template:"changePassword","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"])],32)}o(7658);var l=o(3791),d=o.n(l),u=o(4685),c=o.n(u),p=o(4312),h=o(2201),m=o(2262),f=o(7758),g={components:{DxForm:d(),DxItem:l.DxItem,DxLabel:l.DxLabel,DxButtonItem:l.DxButtonItem,DxButtonOptions:l.DxButtonOptions,DxRequiredRule:l.DxRequiredRule,DxCustomRule:l.DxCustomRule,DxLoadIndicator:c()},setup(){const t=(0,h.tv)(),e=(0,h.yj)(),o=(0,m.iH)(""),n=(0,m.iH)(!1),i=(0,m.qj)({password:""});async function s(){const{password:e}=i;n.value=!0;const s=await f.Z.changePassword(e,o.value);n.value=!1,s.isOk?t.push("/login-form"):(0,p.Z)(s.message,"error",2e3)}function a(t){return t.value===i.password}return o.value=e.params.recoveryCode,{loading:n,formData:i,onSubmit:s,confirmPassword:a}}},v=o(3744);const w=(0,v.Z)(g,[["render",r]]);var b=w}}]);
//# sourceMappingURL=login0.585b8406.js.map