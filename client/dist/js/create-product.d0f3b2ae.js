(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create-product"],{"0373":function(e,t,o){"use strict";var c=o("7a23");const a=Object(c["withScopeId"])("data-v-168cace2");Object(c["pushScopeId"])("data-v-168cace2");const r=Object(c["createTextVNode"])(" No Category ");Object(c["popScopeId"])();const n=a((e,t,o,n,d,l)=>{const i=Object(c["resolveComponent"])("MDBDropdownToggle"),u=Object(c["resolveComponent"])("MDBDropdownItem"),b=Object(c["resolveComponent"])("MDBDropdownMenu"),p=Object(c["resolveComponent"])("MDBDropdown"),s=Object(c["resolveComponent"])("MDBSpinner");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[!e.loading&&e.data?(Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:0,modelValue:e.showDropdown,"onUpdate:modelValue":t[3]||(t[3]=t=>e.showDropdown=t),align:"end"},{default:a(()=>[Object(c["createVNode"])(i,{class:"category-dropdown",onClick:t[1]||(t[1]=t=>e.showDropdown=!e.showDropdown),disabled:void 0===e.data},{default:a(()=>[Object(c["createVNode"])("span",null,Object(c["toDisplayString"])(e.categoryName),1)]),_:1},8,["disabled"]),Object(c["createVNode"])(b,{"aria-labelledby":"dropdownMenuButton"},{default:a(()=>[Object(c["createVNode"])(u,{class:"dropdown-item",onMouseup:t[2]||(t[2]=t=>e.setDropdown(void 0))},{default:a(()=>[r]),_:1}),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.data,(t,o)=>(Object(c["openBlock"])(),Object(c["createBlock"])(u,{class:"dropdown-item",key:o,onMouseup:o=>e.setDropdown(t.id)},{default:a(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.name),1)]),_:2},1032,["onMouseup"]))),128))]),_:1})]),_:1},8,["modelValue"])):Object(c["createCommentVNode"])("",!0),e.loading?(Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:1},{default:a(()=>[Object(c["createVNode"])(i,{class:"category-dropdown",color:"primary",disabled:""},{default:a(()=>[Object(c["createVNode"])(s,{tag:"span",size:"sm"})]),_:1})]),_:1})):Object(c["createCommentVNode"])("",!0)],64)});var d=o("d318"),l=o("73fa"),i=o("1181"),u=o("962f"),b=o("0613"),p=Object(c["defineComponent"])({name:"CategoryDropdown",components:{MDBDropdown:d["MDBDropdown"],MDBDropdownToggle:d["MDBDropdownToggle"],MDBDropdownMenu:d["MDBDropdownMenu"],MDBDropdownItem:d["MDBDropdownItem"],MDBSpinner:d["MDBSpinner"]},setup:function(){var e=Object(b["b"])(),t=Object(c["ref"])(!1),o=Object(c["computed"])((function(){return e.getters.getCategoryDropdown})),a=function(o){e.dispatch("updateCategoryDropdown",o),t.value=!1},r=Object(l["b"])("SWR","/category-dropdown",(function(){return Object(i["c"])(u["d"])})),n=r.data,d=r.loading,p=Object(c["computed"])((function(){if(!n.value)return"No categories";if(!o.value)return"No category";var e=n.value.filter((function(e){return e.id===o.value}))[0];return e?e.name:"No category"}));return{showDropdown:t,setDropdown:a,data:n,loading:d,categoryName:p}}});o("5e0d");p.render=n,p.__scopeId="data-v-168cace2";t["a"]=p},"3a8f":function(e,t,o){e.exports=o.p+"img/no-photo.cfebf14d.svg"},"5e0d":function(e,t,o){"use strict";o("aed1")},aed1:function(e,t,o){},b227:function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a=Object(c["createVNode"])("div",null,"Category:",-1),r=Object(c["createTextVNode"])(" Add Product ");function n(e,t,o,n,d,l){const i=Object(c["resolveComponent"])("ImageContainer"),u=Object(c["resolveComponent"])("MDBCol"),b=Object(c["resolveComponent"])("CategoryDropdown"),p=Object(c["resolveComponent"])("MDBInput"),s=Object(c["resolveComponent"])("ErrorField"),j=Object(c["resolveComponent"])("MDBTextarea"),O=Object(c["resolveComponent"])("MDBBtn"),m=Object(c["resolveComponent"])("MDBRow"),g=Object(c["resolveComponent"])("MDBContainer");return Object(c["openBlock"])(),Object(c["createBlock"])(g,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,{tag:"form",class:"g-3",onSubmit:Object(c["withModifiers"])(e.onSubmit,["prevent"])},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(u,{col:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(i,{height:"40vh",width:"100%",name:e.values.name,"img-url":e.values.imgUrl},null,8,["name","img-url"])]),_:1}),Object(c["createVNode"])(u,{col:"12",class:"d-flex justify-content-between align-items-center"},{default:Object(c["withCtx"])(()=>[a,Object(c["createVNode"])(b)]),_:1}),Object(c["createVNode"])(u,{col:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(p,{label:"Product Name",modelValue:e.values.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.values.name=t)},null,8,["modelValue"]),Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.errors.name),1)]),_:1})]),_:1}),Object(c["createVNode"])(u,{col:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(p,{label:"Image Url",modelValue:e.values.imgUrl,"onUpdate:modelValue":t[2]||(t[2]=t=>e.values.imgUrl=t)},null,8,["modelValue"]),Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.errors.imgUrl),1)]),_:1})]),_:1}),Object(c["createVNode"])(u,{col:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(p,{label:"Price",type:"number",modelValue:e.values.price,"onUpdate:modelValue":t[3]||(t[3]=t=>e.values.price=t)},null,8,["modelValue"]),Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.errors.price),1)]),_:1})]),_:1}),Object(c["createVNode"])(u,{col:"12"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{label:"Description",rows:"4",modelValue:e.values.description,"onUpdate:modelValue":t[4]||(t[4]=t=>e.values.description=t)},null,8,["modelValue"]),Object(c["createVNode"])(s,null,{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.errors.description),1)]),_:1})]),_:1}),Object(c["createVNode"])(u,{col:"12",class:"d-flex justify-content-end mb-2"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{color:"light",type:"submit",disabled:!e.meta.valid},{default:Object(c["withCtx"])(()=>[r]),_:1},8,["disabled"])]),_:1})]),_:1},8,["onSubmit"]),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.values.categoryId),1)]),_:1})}var d=o("d318"),l=o("7bb1"),i=o("6c42"),u=o("506a"),b=o("1181"),p=o("0373"),s=o("b9aa"),j=o("0613"),O=o("ad5e"),m=Object(c["defineComponent"])({name:"create-product",components:{ErrorField:O["a"],CategoryDropdown:p["a"],MDBInput:d["MDBInput"],MDBTextarea:d["MDBTextarea"],MDBBtn:d["MDBBtn"],ImageContainer:s["a"],MDBRow:d["MDBRow"],MDBContainer:d["MDBContainer"],MDBCol:d["MDBCol"]},setup:function(){var e=Object(i["b"])(),t=Object(j["b"])(),o=Object(u["c"])({name:Object(u["e"])().required().min(4).label("Product name"),imgUrl:Object(u["e"])().required().url().label("Image URL"),price:Object(u["b"])().required().min(0).label("Product price"),description:Object(u["e"])().notRequired(),categoryId:Object(u["e"])().notRequired()}),a=Object(l["b"])({validationSchema:o,initialValues:{name:"",imgUrl:"",price:void 0,description:"",categoryId:""}}),r=a.values,n=a.errors,d=a.meta,p=a.resetForm;Object(l["a"])("name"),Object(l["a"])("imgUrl"),Object(l["a"])("price"),Object(l["a"])("description"),Object(l["a"])("categoryId");var s=t.watch((function(){return t.getters.getCategoryDropdown}),(function(e){r.categoryId=e})),O=function(){p(),d.value.valid=!1},m=function(){var o=r.name,c=r.imgUrl,a=r.price,n=r.description,d=r.categoryId;o&&c&&a&&n&&(Object(b["a"])("product",{name:o,imgUrl:c,price:a,description:n,categoryId:d}),O(),t.dispatch("updateCategoryDropdown",void 0),e.success("Product has been created!"))};return Object(c["onUnmounted"])((function(){s(),t.dispatch("updateCategoryDropdown",void 0)})),{values:r,errors:n,meta:d,onSubmit:m}}});m.render=n;t["default"]=m},b9aa:function(e,t,o){"use strict";var c=o("7a23"),a=o("3a8f"),r=o.n(a);const n=Object(c["withScopeId"])("data-v-0c088326");Object(c["pushScopeId"])("data-v-0c088326");const d={key:1,class:"image-container__placeholder",src:r.a,alt:""};Object(c["popScopeId"])();const l=n((e,t,o,a,r,n)=>(Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"image-container",style:`height: ${e.height}; width: ${e.width};`},[e.hasHttpInUrl(e.imgUrl)?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:"background-image",style:`background-image: url(${e.imgUrl});`},null,4)):(Object(c["openBlock"])(),Object(c["createBlock"])("img",d))],4)));var i=Object(c["defineComponent"])({name:"ImageContainer",props:{height:{type:String,required:!0},width:{type:String,required:!0},imgUrl:{type:String,required:!0},name:{type:String,required:!0}},setup:function(){var e=function(e){return null!=e.match(/(http(s?))/gim)};return{hasHttpInUrl:e}}});o("f39a");i.render=l,i.__scopeId="data-v-0c088326";t["a"]=i},bdb5:function(e,t,o){},f39a:function(e,t,o){"use strict";o("bdb5")}}]);
//# sourceMappingURL=create-product.d0f3b2ae.js.map