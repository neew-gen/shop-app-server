(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-products"],{"0b84":function(e,t,c){"use strict";c("2dea")},2375:function(e,t,c){"use strict";var o=c("7a23");const n=Object(o["withScopeId"])("data-v-2d917819"),r=n((e,t,c,r,a,i)=>{const d=Object(o["resolveComponent"])("MDBSpinner"),s=Object(o["resolveComponent"])("MDBCol");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{class:"d-flex justify-content-center align-items-center custom-spinner"},{default:n(()=>[Object(o["createVNode"])(d,{color:"primary"})]),_:1})});var a=c("d318"),i=Object(o["defineComponent"])({name:"Spinner",components:{MDBSpinner:a["MDBSpinner"],MDBCol:a["MDBCol"]}});c("0b84");i.render=r,i.__scopeId="data-v-2d917819";t["a"]=i},"2dea":function(e,t,c){},"52bc":function(e,t,c){},"83dd":function(e,t,c){"use strict";var o=c("7a23");const n=Object(o["withScopeId"])("data-v-63fc3a12");Object(o["pushScopeId"])("data-v-63fc3a12");const r={key:0};Object(o["popScopeId"])();const a=n((e,t,c,a,i,d)=>{const s=Object(o["resolveComponent"])("MDBIcon"),u=Object(o["resolveComponent"])("swiper-slide"),l=Object(o["resolveComponent"])("swiper");return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"image-container",style:`height: ${e.height}; width: ${e.width};`},[e.imagesExist?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(s,{icon:"file-image",iconStyle:"far",size:"lg"})])),e.imagesExist&&e.images.length>1?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:1,"slides-per-view":1,"space-between":20,pagination:{type:"progressbar"},loop:e.images.length>1},{default:n(()=>[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.images,t=>(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:t.id},{default:n(()=>[Object(o["createVNode"])("div",{class:"background-image",style:`background-image: url(${t.imgUrl}); height: ${e.height}; width: ${e.width};`},null,4)]),_:2},1024))),128))]),_:1},8,["loop"])):Object(o["createCommentVNode"])("",!0),e.imagesExist&&e.images.length<=1?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:2,class:"background-image",style:"background-image: url("+e.images[0].imgUrl},null,4)):Object(o["createCommentVNode"])("",!0)],4)});var i=c("d318"),d=c("6d3b"),s=c("5dc8"),u=c("90eab"),l=c("a16a");c("5f67");d["a"].use([s["a"]]);var b=Object(o["defineComponent"])({name:"ProductImage",props:{height:{type:String,required:!0},width:{type:String,required:!0},images:{type:Array,required:!0}},components:{MDBIcon:i["MDBIcon"],Swiper:u["a"],SwiperSlide:l["a"]},setup:function(e){var t=Object(o["computed"])((function(){return Boolean(e.images[0])}));return{imagesExist:t}}});c("f229");b.render=a,b.__scopeId="data-v-63fc3a12";t["a"]=b},"901e":function(e,t,c){},"9d98":function(e,t,c){"use strict";function o(e,t){if(e.length<=t)return e;var c=t-3,o=e.slice(0,c);return o+"..."}c.d(t,"a",(function(){return o}))},c81c:function(e,t,c){"use strict";c("d2e1")},d2e1:function(e,t,c){},e19d:function(e,t,c){"use strict";c("52bc")},e53e:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var o=c("9ab4"),n=function(){function e(){this.receivers={}}return e.prototype.publish=function(e,t){return Object(o["b"])(this,void 0,Promise,(function(){var c;return Object(o["d"])(this,(function(o){return c=this.getTopicReceivers(e),c.map((function(e){return new Promise((function(c){return c(e(t))}))})),[2]}))}))},e.prototype.getTopicReceivers=function(e){return this.receivers[e]?this.receivers[e]:[]},e.prototype.subscribe=function(e,t){this.receivers[e]||(this.receivers[e]=[]),this.receivers[e].push(t)},e.prototype.unsubscribe=function(e){this.receivers[e]&&(this.receivers[e]=[])},e}(),r=new n},f229:function(e,t,c){"use strict";c("901e")},f8cc:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n=Object(o["createTextVNode"])(" No products yet. You can  "),r=Object(o["createTextVNode"])("create one"),a=Object(o["createTextVNode"])(". ");function i(e,t,c,i,d,s){const u=Object(o["resolveComponent"])("EditProductsFilter"),l=Object(o["resolveComponent"])("MDBCol"),b=Object(o["resolveComponent"])("router-link"),p=Object(o["resolveComponent"])("EditProductsItem"),j=Object(o["resolveComponent"])("MDBListGroup"),O=Object(o["resolveComponent"])("MDBRow"),m=Object(o["resolveComponent"])("Spinner"),f=Object(o["resolveComponent"])("MDBContainer");return Object(o["openBlock"])(),Object(o["createBlock"])(f,null,{default:Object(o["withCtx"])(()=>[e.loading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{col:"12"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u)]),_:1}),!e.loading&&e.data&&0===e.data.length?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,col:"12",class:"d-flex justify-content-center pt-2"},{default:Object(o["withCtx"])(()=>[n,Object(o["createVNode"])(b,{to:{name:"create-product"}},{default:Object(o["withCtx"])(()=>[r]),_:1}),a]),_:1})):(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:1},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.data,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:t,data:e},null,8,["data"]))),128))]),_:1})]),_:1}))]),_:1})),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[e.loading?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0})):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})}var d=c("9ab4"),s=c("d318"),u=c("9812"),l=c("e722");const b=Object(o["withScopeId"])("data-v-f0c43208");Object(o["pushScopeId"])("data-v-f0c43208");const p=Object(o["createVNode"])("div",{class:"d-flex flex-column filter-title"},[Object(o["createVNode"])("span",null,"Sort by"),Object(o["createVNode"])("span",null,"category")],-1),j=Object(o["createVNode"])("div",{class:"filter-fake"},null,-1);Object(o["popScopeId"])();const O=b((e,t,c,n,r,a)=>{const i=Object(o["resolveComponent"])("MDBNavbar");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(i,{light:"",bg:"light"},{default:b(()=>[p]),_:1}),j],64)});var m=Object(o["defineComponent"])({name:"EditProductsFilter",components:{MDBNavbar:s["MDBNavbar"]}});c("e19d");m.render=O,m.__scopeId="data-v-f0c43208";var f=m;const v=Object(o["withScopeId"])("data-v-280739c4");Object(o["pushScopeId"])("data-v-280739c4");const g={class:"edit-item"},h={class:"edit-item__image"},B={class:"edit-item__id"},k={class:"edit-item__name"},C={class:"edit-item__controls"},w=Object(o["createTextVNode"])("Delete"),N=Object(o["createTextVNode"])(" Edit ");Object(o["popScopeId"])();const D=v((e,t,c,n,r,a)=>{const i=Object(o["resolveComponent"])("ProductImage"),d=Object(o["resolveComponent"])("MDBBtn"),s=Object(o["resolveComponent"])("router-link"),u=Object(o["resolveComponent"])("MDBListGroupItem");return Object(o["openBlock"])(),Object(o["createBlock"])(u,null,{default:v(()=>[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])(i,{height:"140px",width:"140px",name:e.data.name,"img-url":e.data.imgUrl},null,8,["name","img-url"])]),Object(o["createVNode"])("div",B,"ID: "+Object(o["toDisplayString"])(e.data.id),1),Object(o["createVNode"])("div",k,"Name: "+Object(o["toDisplayString"])(e.textSlicer(e.data.name,20)),1),Object(o["createVNode"])("div",C,[Object(o["createVNode"])(d,{color:"dark",onClick:e.removeItem},{default:v(()=>[w]),_:1},8,["onClick"]),Object(o["createVNode"])(s,{class:"btn btn-light",to:{name:"edit-product",params:{id:e.data.id}}},{default:v(()=>[N]),_:1},8,["to"])])])]),_:1})});var y=c("6c42"),V=c("83dd"),_=c("e53e"),I=c("9d98"),M=Object(o["defineComponent"])({name:"EditProductsItem",components:{ProductImage:V["a"],MDBBtn:s["MDBBtn"],MDBListGroupItem:s["MDBListGroupItem"]},props:{data:{type:Object}},setup:function(e){var t=Object(y["b"])(),c=function(){e.data&&(Object(u["b"])("product",e.data.id),t.error("Product has been deleted!"),_["a"].publish("edit-products-update",void 0))};return{textSlicer:I["a"],removeItem:c}}});c("c81c");M.render=D,M.__scopeId="data-v-280739c4";var S=M,x=c("2375"),P=c("f23c"),E=c("0613"),F=Object(o["defineComponent"])({name:"edit-products",components:{EditProductsItem:S,MDBContainer:s["MDBContainer"],MDBRow:s["MDBRow"],MDBCol:s["MDBCol"],MDBListGroup:s["MDBListGroup"],EditProductsFilter:f,Spinner:x["a"]},setup:function(){var e=this,t=Object(E["b"])(),c=Object(P["b"])("NF","/products-edit-list",(function(){return Object(u["c"])(l["e"])})),n=c.data,r=c.loading;function a(e){return Object(d["b"])(this,void 0,Promise,(function(){var t,c;return Object(d["d"])(this,(function(o){switch(o.label){case 0:return r.value=!0,e?[3,2]:(t=n,[4,Object(P["a"])("NF","/products-edit-list",(function(){return Object(u["c"])(l["e"])}))]);case 1:return t.value=o.sent(),r.value=!1,[2];case 2:return c=n,[4,Object(P["a"])("NF","/products-edit-list-"+e,(function(){return Object(u["d"])(l["f"],{categoryId:e})}))];case 3:return c.value=o.sent(),r.value=!1,[2]}}))}))}_["a"].subscribe("edit-products-update",(function(){return Object(d["b"])(e,void 0,void 0,(function(){return Object(d["d"])(this,(function(e){switch(e.label){case 0:return t.getters.getCategoryDropdown?[4,a(t.getters.getCategoryDropdown)]:[2];case 1:return e.sent(),[2]}}))}))}));var i=t.watch((function(){return t.getters.getCategoryDropdown}),(function(t){return Object(d["b"])(e,void 0,void 0,(function(){return Object(d["d"])(this,(function(e){switch(e.label){case 0:return t?[4,a(t)]:[2];case 1:return e.sent(),[2]}}))}))}));return Object(o["onUnmounted"])((function(){i(),_["a"].unsubscribe("edit-products-update")})),{data:n,loading:r}}});F.render=i;t["default"]=F}}]);
//# sourceMappingURL=edit-products.1f6aa97a.js.map