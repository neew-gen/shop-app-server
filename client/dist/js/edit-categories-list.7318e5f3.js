(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-categories-list"],{"0b84":function(e,t,c){"use strict";c("2dea")},2375:function(e,t,c){"use strict";var n=c("7a23");const o=Object(n["withScopeId"])("data-v-2d917819"),r=o((e,t,c,r,a,i)=>{const s=Object(n["resolveComponent"])("MDBSpinner"),d=Object(n["resolveComponent"])("MDBCol");return Object(n["openBlock"])(),Object(n["createBlock"])(d,{class:"d-flex justify-content-center align-items-center custom-spinner"},{default:o(()=>[Object(n["createVNode"])(s,{color:"primary"})]),_:1})});var a=c("d318"),i=Object(n["defineComponent"])({name:"Spinner",components:{MDBSpinner:a["MDBSpinner"],MDBCol:a["MDBCol"]}});c("0b84");i.render=r,i.__scopeId="data-v-2d917819";t["a"]=i},"2baa":function(e,t,c){"use strict";c.r(t);var n=c("7a23");const o=Object(n["createTextVNode"])(" No categories yet. You can  "),r=Object(n["createTextVNode"])("create one"),a=Object(n["createTextVNode"])(". ");function i(e,t,c,i,s,d){const u=Object(n["resolveComponent"])("router-link"),l=Object(n["resolveComponent"])("MDBCol"),b=Object(n["resolveComponent"])("EditCategoriesItem"),p=Object(n["resolveComponent"])("MDBListGroup"),j=Object(n["resolveComponent"])("MDBRow"),O=Object(n["resolveComponent"])("Spinner"),m=Object(n["resolveComponent"])("MDBContainer");return Object(n["openBlock"])(),Object(n["createBlock"])(m,null,{default:Object(n["withCtx"])(()=>[e.loading?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0},{default:Object(n["withCtx"])(()=>[!e.loading&&e.data&&0===e.data.length?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,col:"12",class:"d-flex justify-content-center pt-2"},{default:Object(n["withCtx"])(()=>[o,Object(n["createVNode"])(u,{to:{name:"create-category"}},{default:Object(n["withCtx"])(()=>[r]),_:1}),a]),_:1})):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.data,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:t,data:e},null,8,["data"]))),128))]),_:1})]),_:1}))]),_:1})),Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])(()=>[e.loading?(Object(n["openBlock"])(),Object(n["createBlock"])(O,{key:0})):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})}var s=c("9ab4"),d=c("d318"),u=c("73fa"),l=c("1181"),b=c("962f");const p=Object(n["withScopeId"])("data-v-0237fa97");Object(n["pushScopeId"])("data-v-0237fa97");const j={class:"edit-item"},O={class:"edit-item__image"},m={class:"edit-item__id"},f={class:"edit-item__name"},v={class:"edit-item__controls"},g=Object(n["createTextVNode"])("Delete"),h=Object(n["createTextVNode"])(" Edit ");Object(n["popScopeId"])();const B=p((e,t,c,o,r,a)=>{const i=Object(n["resolveComponent"])("ImageContainer"),s=Object(n["resolveComponent"])("MDBBtn"),d=Object(n["resolveComponent"])("router-link"),u=Object(n["resolveComponent"])("MDBListGroupItem");return Object(n["openBlock"])(),Object(n["createBlock"])(u,null,{default:p(()=>[Object(n["createVNode"])("div",j,[Object(n["createVNode"])("div",O,[Object(n["createVNode"])(i,{height:"140px",width:"140px",name:e.data.name,"img-url":e.data.imgUrl},null,8,["name","img-url"])]),Object(n["createVNode"])("div",m,"ID: "+Object(n["toDisplayString"])(e.data.id),1),Object(n["createVNode"])("div",f,"Name: "+Object(n["toDisplayString"])(e.textSlicer(e.data.name,20)),1),Object(n["createVNode"])("div",v,[Object(n["createVNode"])(s,{color:"dark",onClick:e.removeItem},{default:p(()=>[g]),_:1},8,["onClick"]),Object(n["createVNode"])(d,{class:"btn btn-light",to:{name:"edit-category",params:{id:e.data.id}}},{default:p(()=>[h]),_:1},8,["to"])])])]),_:1})});var C=c("6c42"),k=c("b9aa"),y=c("e53e"),D=c("d302"),w=Object(n["defineComponent"])({name:"EditCategoriesItem",components:{ImageContainer:k["a"],MDBBtn:d["MDBBtn"],MDBListGroupItem:d["MDBListGroupItem"]},props:{data:{type:Object}},setup:function(e){var t=Object(C["b"])(),c=function(){e.data&&(Object(l["b"])("category",e.data.id),t.error("Category has been deleted!"),y["a"].publish("edit-categories-update",void 0))};return{textSlicer:D["a"],removeItem:c}}});c("b0a9");w.render=B,w.__scopeId="data-v-0237fa97";var _=w,I=c("2375"),M=Object(n["defineComponent"])({name:"edit-categories",components:{EditCategoriesItem:_,MDBContainer:d["MDBContainer"],MDBRow:d["MDBRow"],MDBCol:d["MDBCol"],MDBListGroup:d["MDBListGroup"],Spinner:I["a"]},setup:function(){var e=this,t=Object(u["b"])("SWR","/categories-edit-list",(function(){return Object(l["c"])(b["e"])})),c=t.data,o=t.loading;function r(){return Object(s["b"])(this,void 0,Promise,(function(){var e;return Object(s["d"])(this,(function(t){switch(t.label){case 0:return o.value=!0,e=c,[4,Object(u["a"])("SWR","/categories-edit-list",(function(){return Object(l["c"])(b["e"])}))];case 1:return e.value=t.sent(),o.value=!1,[2]}}))}))}return y["a"].subscribe("edit-categories-update",(function(){return Object(s["b"])(e,void 0,void 0,(function(){return Object(s["d"])(this,(function(e){switch(e.label){case 0:return[4,r()];case 1:return e.sent(),[2]}}))}))})),Object(n["onUnmounted"])((function(){y["a"].unsubscribe("edit-categories-update")})),{data:c,loading:o}}});M.render=i;t["default"]=M},"2dea":function(e,t,c){},"3a8f":function(e,t,c){e.exports=c.p+"img/no-photo.cfebf14d.svg"},"9cdf":function(e,t,c){},b0a9:function(e,t,c){"use strict";c("9cdf")},b9aa:function(e,t,c){"use strict";var n=c("7a23"),o=c("3a8f"),r=c.n(o);const a=Object(n["withScopeId"])("data-v-0c088326");Object(n["pushScopeId"])("data-v-0c088326");const i={key:1,class:"image-container__placeholder",src:r.a,alt:""};Object(n["popScopeId"])();const s=a((e,t,c,o,r,a)=>(Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"image-container",style:`height: ${e.height}; width: ${e.width};`},[e.hasHttpInUrl(e.imgUrl)?(Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:0,class:"background-image",style:`background-image: url(${e.imgUrl});`},null,4)):(Object(n["openBlock"])(),Object(n["createBlock"])("img",i))],4)));var d=Object(n["defineComponent"])({name:"ImageContainer",props:{height:{type:String,required:!0},width:{type:String,required:!0},imgUrl:{type:String,required:!0},name:{type:String,required:!0}},setup:function(){var e=function(e){return null!=e.match(/(http(s?))/gim)};return{hasHttpInUrl:e}}});c("f39a");d.render=s,d.__scopeId="data-v-0c088326";t["a"]=d},bdb5:function(e,t,c){},d302:function(e,t,c){"use strict";function n(e,t){if(e.length<=t)return e;var c=t-3,n=e.slice(0,c);return n+"..."}c.d(t,"a",(function(){return n}))},e53e:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c("9ab4"),o=function(){function e(){this.receivers={}}return e.prototype.publish=function(e,t){return Object(n["b"])(this,void 0,Promise,(function(){var c;return Object(n["d"])(this,(function(n){return c=this.getTopicReceivers(e),c.map((function(e){return new Promise((function(c){return c(e(t))}))})),[2]}))}))},e.prototype.getTopicReceivers=function(e){return this.receivers[e]?this.receivers[e]:[]},e.prototype.subscribe=function(e,t){this.receivers[e]||(this.receivers[e]=[]),this.receivers[e].push(t)},e.prototype.unsubscribe=function(e){this.receivers[e]&&(this.receivers[e]=[])},e}(),r=new o},f39a:function(e,t,c){"use strict";c("bdb5")}}]);
//# sourceMappingURL=edit-categories-list.7318e5f3.js.map