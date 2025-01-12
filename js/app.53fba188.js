(function(){"use strict";var e={7685:function(e,a,t){var l=t(6848),r=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=t(1656),n={},i=(0,o.A)(n,r,s,!1,null,null,null),u=i.exports,g=t(6178),m=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"normal","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a product image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),a("FormBlock",{attrs:{label:"Describe the product background or upload a background image",prop:"backgroundDesc"}},[a("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Generate a background for the sofa in an Italian living room.",type:"textarea",maxlength:"200",resize:"none",rows:5},model:{value:e.formValues.backgroundDesc,callback:function(a){e.$set(e.formValues,"backgroundDesc",a)},expression:"formValues.backgroundDesc"}}),a("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)],1),a("ViewBlock",[a("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"normal"}},[a("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[a("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(a){e.$set(e.formValues,"size",a)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[a("div",{staticClass:"radio-group-wrap"},[a("el-radio-group",{model:{value:e.formValues.number,callback:function(a){e.$set(e.formValues,"number",a)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),a("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[a("div",{staticClass:"checkbox-wrap"},[a("el-checkbox",{model:{value:e.formValues.agree,callback:function(a){e.$set(e.formValues,"agree",a)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),a("strong",{staticClass:"rule-button",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules ")]),e._v(" . ")],1)])],1),a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[1===e.formValues.number?a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap",attrs:{span:12}},[a("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1),a("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(a){e.showUserRulesDialog=a},expression:"showUserRulesDialog"}})],1)},c=[],d=function(){var e=this,a=e._self._c;return a("el-form-item",e._b({staticClass:"form-block",scopedSlots:e._u([{key:"label",fn:function(){return[a("h3",[e._v(e._s(e.label))])]},proxy:!0}])},"el-form-item",e.$attrs,!1),[e._t("default")],2)},p=[],f={props:{label:String}},h=f,b=(0,o.A)(h,d,p,!1,null,"333969a0",null),k=b.exports,v=function(){var e=this,a=e._self._c;return a("el-upload",{staticClass:"image-uploader",style:e.uploadStyle,attrs:{action:"","show-file-list":!1,"before-upload":e.beforeImgageUpload,"auto-upload":!1,limit:1}},[e.imageUrl?a("img",{staticClass:"image",style:e.imagePreviewStyle,attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus image-uploader-icon",style:e.imagePreviewStyle})])},w=[],x=(t(4603),t(7566),t(8721),{props:{uploadPosition:String,imagePreviewSize:String},data(){return{imageUrl:""}},computed:{uploadStyle(){return{textAlign:this.uploadPosition}},imagePreviewStyle(){return{width:this.imagePreviewSize,height:this.imagePreviewSize,lineHeight:this.imagePreviewSize}}},methods:{beforeImgageUpload(e){const a=["image/png","image/jpg","image/jpeg","image/webp"].includes(e.type),t=e.size/1024/1024<10;a||this.$message.error("The uploaded image must be in the format of png/jpg/jpeg/webp."),t||this.$message.error("The size of the uploaded image cannot exceed 10MB.");const l=new Promise(((a,t)=>{const l=new Image;l.onload=()=>{const r=l.width,s=l.height;r>=256&&r<=4096&&s>=256&&s<=4096?(this.imageUrl=l.src,this.$emit("change",e.raw),a()):(this.$message.error("The dimensions of the uploaded image must be between 256 and 4096 pixels in both length and width."),t(new Error))},l.src=URL.createObjectURL(e.raw)}));return a&&t&&l}}}),C=x,V=(0,o.A)(C,v,w,!1,null,"1d768e7b",null),y=V.exports,_=function(){var e=this,a=e._self._c;return a("div",{staticClass:"form-block"},[e.label?a("h3",[e._v(e._s(e.label))]):e._e(),e._t("default")],2)},R=[],U={props:{label:String}},D=U,A=(0,o.A)(D,_,R,!1,null,"5d4645ce",null),z=A.exports,L=function(){var e=this,a=e._self._c;return a("el-dialog",{attrs:{title:"AI User Rules",visible:e.compVisible,width:"60%",center:""},on:{"update:visible":function(a){e.compVisible=a}},scopedSlots:e._u([{key:"footer",fn:function(){return[a("el-button",{on:{click:e.handleDialogCancel}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleDialogAgree}},[e._v("Agree")])]},proxy:!0}])},[a("span",[e._v("XXX")])])},I=[],S={model:{prop:"visible",event:"change"},props:{visible:{type:Boolean,required:!0}},computed:{compVisible:{set(e){this.$emit("change",e)},get(){return this.visible}}},methods:{handleDialogCancel(){this.compVisible=!1},handleDialogAgree(){this.$emit("agree",!0),this.compVisible=!1}}},B=S,O=(0,o.A)(B,L,I,!1,null,null,null),$=O.exports,P={components:{FormBlock:k,UploadImage:y,ViewBlock:z,UserRulesDialog:$},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},j=P,F=(0,o.A)(j,m,c,!1,null,"37d0ff09",null),M=F.exports,T=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"normal","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a product image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center","image-preview-size":"486px"},on:{change:e.handleChangeImage}})],1)],1),a("ViewBlock",[a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}])},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)],1)],1)],1)],1)],1)},N=[],W={components:{FormBlock:k,UploadImage:y,ViewBlock:z},data(){return{formValues:{imageRaw:null},formRules:{},srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},X=W,E=(0,o.A)(X,T,N,!1,null,"a9b5535a",null),H=E.exports,q=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"normal","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a model image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),a("FormBlock",{attrs:{label:"Describe the desired clothing for the model or upload a clothing image",prop:"backgroundDesc"}},[a("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Change the model's coat to a gray denim jacket.",type:"textarea",maxlength:"200",resize:"none",rows:5},model:{value:e.formValues.backgroundDesc,callback:function(a){e.$set(e.formValues,"backgroundDesc",a)},expression:"formValues.backgroundDesc"}}),a("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)],1),a("ViewBlock",[a("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"normal"}},[a("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[a("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(a){e.$set(e.formValues,"size",a)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[a("div",{staticClass:"radio-group-wrap"},[a("el-radio-group",{model:{value:e.formValues.number,callback:function(a){e.$set(e.formValues,"number",a)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),a("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[a("div",{staticClass:"checkbox-wrap"},[a("el-checkbox",{model:{value:e.formValues.agree,callback:function(a){e.$set(e.formValues,"agree",a)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),a("strong",{staticClass:"rule-button",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules ")]),e._v(" . ")],1)])],1),a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[1===e.formValues.number?a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap",attrs:{span:12}},[a("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1),a("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(a){e.showUserRulesDialog=a},expression:"showUserRulesDialog"}})],1)},G=[],J={components:{FormBlock:k,UploadImage:y,ViewBlock:z,UserRulesDialog:$},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},K=J,Q=(0,o.A)(K,q,G,!1,null,"3917ade6",null),Y=Q.exports,Z=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"normal","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a 2D image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center","image-preview-size":"486px"},on:{change:e.handleChangeImage}})],1)],1),a("ViewBlock",[a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}])},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)],1)],1)],1)],1)],1)},ee=[],ae={components:{FormBlock:k,UploadImage:y,ViewBlock:z},data(){return{formValues:{imageRaw:null},formRules:{},srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},te=ae,le=(0,o.A)(te,Z,ee,!1,null,"cdc44be6",null),re=le.exports,se=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"normal","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a line art",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),a("FormBlock",{attrs:{label:"Describe the desired coloring effect or upload a reference image",prop:"backgroundDesc"}},[a("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Color the line art in the style of Hayao Miyazaki's animations.",type:"textarea",maxlength:"200",resize:"none",rows:5},model:{value:e.formValues.backgroundDesc,callback:function(a){e.$set(e.formValues,"backgroundDesc",a)},expression:"formValues.backgroundDesc"}}),a("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)],1),a("ViewBlock",[a("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"normal"}},[a("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[a("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(a){e.$set(e.formValues,"size",a)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[a("div",{staticClass:"radio-group-wrap"},[a("el-radio-group",{model:{value:e.formValues.number,callback:function(a){e.$set(e.formValues,"number",a)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),a("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[a("div",{staticClass:"checkbox-wrap"},[a("el-checkbox",{model:{value:e.formValues.agree,callback:function(a){e.$set(e.formValues,"agree",a)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),a("strong",{staticClass:"rule-button",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules ")]),e._v(" . ")],1)])],1),a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[1===e.formValues.number?a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap",attrs:{span:12}},[a("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1),a("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(a){e.showUserRulesDialog=a},expression:"showUserRulesDialog"}})],1)},oe=[],ne={components:{FormBlock:k,UploadImage:y,ViewBlock:z,UserRulesDialog:$},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},ie=ne,ue=(0,o.A)(ie,se,oe,!1,null,"1edfa278",null),ge=ue.exports;l["default"].use(g.Ay);const me=[{path:"/",name:"home",redirect:"/advertisement"},{path:"/advertisement",name:"advertisement",component:M},{path:"/refine-product",name:"refineProduct",component:H},{path:"/model-outfit",name:"Convert2D",component:Y},{path:"/convert-2d",name:"convert2D",component:re},{path:"/line-art",name:"lineArt",component:ge}],ce=new g.Ay({routes:me});var de=ce,pe=t(3518);l["default"].use(pe.Ay);var fe=new pe.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),he=t(9143),be=t.n(he),ke=t(1040);l["default"].config.productionTip=!1,l["default"].use(be(),{locale:ke.A}),new l["default"]({router:de,store:fe,render:e=>e(u)}).$mount("#app")}},a={};function t(l){var r=a[l];if(void 0!==r)return r.exports;var s=a[l]={id:l,loaded:!1,exports:{}};return e[l].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(a,l,r,s){if(!l){var o=1/0;for(g=0;g<e.length;g++){l=e[g][0],r=e[g][1],s=e[g][2];for(var n=!0,i=0;i<l.length;i++)(!1&s||o>=s)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(n=!1,s<o&&(o=s));if(n){e.splice(g--,1);var u=r();void 0!==u&&(a=u)}}return a}s=s||0;for(var g=e.length;g>0&&e[g-1][2]>s;g--)e[g]=e[g-1];e[g]=[l,r,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var r,s,o=l[0],n=l[1],i=l[2],u=0;if(o.some((function(a){return 0!==e[a]}))){for(r in n)t.o(n,r)&&(t.m[r]=n[r]);if(i)var g=i(t)}for(a&&a(l);u<o.length;u++)s=o[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(g)},l=self["webpackChunkai_shop"]=self["webpackChunkai_shop"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(7685)}));l=t.O(l)})();
//# sourceMappingURL=app.53fba188.js.map