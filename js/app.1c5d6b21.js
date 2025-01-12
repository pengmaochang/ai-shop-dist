(function(){"use strict";var e={6828:function(e,a,t){var l=t(6848),r=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={methods:{postPageHeight(){window.parent&&window.parent.postMessage(document.documentElement.scrollHeight,"*")}},mounted(){this.postPageHeight(),window.addEventListener("resize",this.postPageHeight)}},n=o,i=t(1656),u=(0,i.A)(n,r,s,!1,null,null,null),c=u.exports,g=t(6178),m=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a product image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),a("FormBlock",{attrs:{label:"Describe the product background or upload a background image",prop:"backgroundDesc"}},[a("div",{staticClass:"form-item--desc"},[a("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Generate a background for the sofa in an Italian living room.",type:"textarea",maxlength:"200",resize:"none"},model:{value:e.formValues.backgroundDesc,callback:function(a){e.$set(e.formValues,"backgroundDesc",a)},expression:"formValues.backgroundDesc"}}),a("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)])],1),a("ViewBlock",[a("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"small"}},[a("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[a("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(a){e.$set(e.formValues,"size",a)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[a("div",{staticClass:"radio-group-wrap"},[a("el-radio-group",{model:{value:e.formValues.number,callback:function(a){e.$set(e.formValues,"number",a)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),a("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[a("div",{staticClass:"checkbox-wrap"},[a("el-checkbox",{model:{value:e.formValues.agree,callback:function(a){e.$set(e.formValues,"agree",a)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),a("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(a){e.showUserRulesDialog=a},expression:"showUserRulesDialog"}},[a("strong",{staticClass:"rule-button",class:e.formValues.agree&&"rule-button--actived",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules. ")])])],1)])],1),a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{staticClass:"generate-images",attrs:{span:14}},[a("ViewBlock",{style:e.contentStyle},[a("el-row",{attrs:{gutter:10}},[1===e.formValues.number?a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap",attrs:{span:12}},[a("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1)],1)},d=[],p=function(){var e=this,a=e._self._c;return a("el-form-item",e._b({staticClass:"form-block",scopedSlots:e._u([{key:"label",fn:function(){return[a("h3",[e._v(e._s(e.label))])]},proxy:!0}])},"el-form-item",e.$attrs,!1),[e._t("default")],2)},f=[],h={props:{label:String}},b=h,v=(0,i.A)(b,p,f,!1,null,"333969a0",null),k=v.exports,w=function(){var e=this,a=e._self._c;return a("el-upload",{staticClass:"image-uploader",style:e.uploadStyle,attrs:{action:"","show-file-list":!1,"before-upload":e.beforeImgageUpload,"auto-upload":!1,limit:1}},[e.imageUrl?a("img",{staticClass:"image",style:e.imagePreviewStyle,attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus image-uploader-icon",style:e.imagePreviewStyle})])},x=[],C=(t(4603),t(7566),t(8721),{props:{uploadPosition:String,imagePreviewSize:String},data(){return{imageUrl:""}},computed:{uploadStyle(){return{textAlign:this.uploadPosition}},imagePreviewStyle(){return{width:this.imagePreviewSize,height:this.imagePreviewSize,lineHeight:this.imagePreviewSize}}},methods:{beforeImgageUpload(e){const a=["image/png","image/jpg","image/jpeg","image/webp"].includes(e.type),t=e.size/1024/1024<10;a||this.$message.error("The uploaded image must be in the format of png/jpg/jpeg/webp."),t||this.$message.error("The size of the uploaded image cannot exceed 10MB.");const l=new Promise(((a,t)=>{const l=new Image;l.onload=()=>{const r=l.width,s=l.height;r>=256&&r<=4096&&s>=256&&s<=4096?(this.imageUrl=l.src,this.$emit("change",e.raw),a()):(this.$message.error("The dimensions of the uploaded image must be between 256 and 4096 pixels in both length and width."),t(new Error))},l.src=URL.createObjectURL(e.raw)}));return a&&t&&l}}}),y=C,V=(0,i.A)(y,w,x,!1,null,"1d768e7b",null),_=V.exports,R=function(){var e=this,a=e._self._c;return a("div",{staticClass:"form-block"},[e.label?a("h3",[e._v(e._s(e.label))]):e._e(),e._t("default")],2)},U=[],D={props:{label:String}},z=D,A=(0,i.A)(z,R,U,!1,null,"5d4645ce",null),L=A.exports,S=function(){var e=this,a=e._self._c;return a("el-popover",{attrs:{placement:"top",width:"900",title:"AI User Rules",trigger:"manual","popper-class":"user-rules-dialog"},scopedSlots:e._u([{key:"reference",fn:function(){return[e._t("default")]},proxy:!0}],null,!0),model:{value:e.compVisible,callback:function(a){e.compVisible=a},expression:"compVisible"}},[a("div",{staticClass:"user-rules-content"},[e._v("XXX")]),a("p",{staticClass:"user-rules-buttons"},[a("el-button",{attrs:{size:"small"},on:{click:e.handleDialogCancel}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleDialogAgree}},[e._v(" 确定 ")])],1)])},I=[],B={model:{prop:"visible",event:"change"},props:{visible:{type:Boolean,required:!0}},computed:{compVisible:{set(e){this.$emit("change",e)},get(){return this.visible}}},methods:{handleDialogCancel(){this.compVisible=!1},handleDialogAgree(){this.$emit("agree",!0),this.compVisible=!1}}},O=B,$=(0,i.A)(O,S,I,!1,null,null,null),P=$.exports,j={components:{FormBlock:k,UploadImage:_,ViewBlock:L,UserRulesDialog:P},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1,contentHeight:null}},computed:{contentStyle(){return{height:`${this.contentHeight}px`}}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}},mounted(){this.contentHeight=document.querySelector(".el-col.generate-conditon").scrollHeight}},F=j,H=(0,i.A)(F,m,d,!1,null,"bbafca2a",null),M=H.exports,T=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"generate-conditon",attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a 2D image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center","image-preview-size":"486px"},on:{change:e.handleChangeImage}})],1)],1),a("ViewBlock",[a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{staticClass:"generate-images",attrs:{span:14}},[a("ViewBlock",{style:e.contentStyle},[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}])},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)],1)],1)],1)],1)],1)},E=[],q={components:{FormBlock:k,UploadImage:_,ViewBlock:L},data(){return{formValues:{imageRaw:null},formRules:{},srcList:[],generateLoading:!0,generateAnimated:!1,contentHeight:null}},computed:{contentStyle(){return{height:`${this.contentHeight}px`}}},methods:{handleChangeImage(e){this.formValues.imageRaw=e}},mounted(){this.contentHeight=document.querySelector(".el-col.generate-conditon").scrollHeight}},N=q,W=(0,i.A)(N,T,E,!1,null,"d57106d8",null),X=W.exports,G=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a product image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center","image-preview-size":"486px"},on:{change:e.handleChangeImage}})],1)],1),a("ViewBlock",[a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}])},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)],1)],1)],1)],1)],1)},J=[],K={components:{FormBlock:k,UploadImage:_,ViewBlock:L},data(){return{formValues:{imageRaw:null},formRules:{},srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},Q=K,Y=(0,i.A)(Q,G,J,!1,null,"0532757d",null),Z=Y.exports,ee=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a model image",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),a("FormBlock",{attrs:{label:"Describe the desired clothing for the model or upload a clothing image",prop:"backgroundDesc"}},[a("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Change the model's coat to a gray denim jacket.",type:"textarea",maxlength:"200",resize:"none",rows:5},model:{value:e.formValues.backgroundDesc,callback:function(a){e.$set(e.formValues,"backgroundDesc",a)},expression:"formValues.backgroundDesc"}}),a("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)],1),a("ViewBlock",[a("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"small"}},[a("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[a("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(a){e.$set(e.formValues,"size",a)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[a("div",{staticClass:"radio-group-wrap"},[a("el-radio-group",{model:{value:e.formValues.number,callback:function(a){e.$set(e.formValues,"number",a)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),a("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[a("div",{staticClass:"checkbox-wrap"},[a("el-checkbox",{model:{value:e.formValues.agree,callback:function(a){e.$set(e.formValues,"agree",a)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),a("strong",{staticClass:"rule-button",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules ")]),e._v(" . ")],1)])],1),a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[1===e.formValues.number?a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap",attrs:{span:12}},[a("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1),a("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(a){e.showUserRulesDialog=a},expression:"showUserRulesDialog"}})],1)},ae=[],te={components:{FormBlock:k,UploadImage:_,ViewBlock:L,UserRulesDialog:P},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},le=te,re=(0,i.A)(le,ee,ae,!1,null,"dabec218",null),se=re.exports,oe=function(){var e=this,a=e._self._c;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"form1",attrs:{model:e.formValues,rules:e.formRules,size:"small","label-position":"top"}},[a("FormBlock",{attrs:{label:"Upload a line art",prop:"imageRaw"}},[a("UploadImage",{attrs:{"upload-position":"center"},on:{change:e.handleChangeImage}})],1),a("FormBlock",{attrs:{label:"Describe the desired coloring effect or upload a reference image",prop:"backgroundDesc"}},[a("el-input",{staticClass:"desc-input",attrs:{placeholder:"e.g. Color the line art in the style of Hayao Miyazaki's animations.",type:"textarea",maxlength:"200",resize:"none",rows:5},model:{value:e.formValues.backgroundDesc,callback:function(a){e.$set(e.formValues,"backgroundDesc",a)},expression:"formValues.backgroundDesc"}}),a("UploadImage",{attrs:{"upload-position":"right","image-preview-size":"128px"},on:{change:e.handleChangeBackgroundImage}})],1)],1),a("ViewBlock",[a("el-form",{ref:"form2",attrs:{model:e.formValues,rules:e.formRules,"label-width":"250px",size:"small"}},[a("el-form-item",{attrs:{label:"Size selection",prop:"size"}},[a("el-select",{attrs:{placeholder:"Size selection"},model:{value:e.formValues.size,callback:function(a){e.$set(e.formValues,"size",a)},expression:"formValues.size"}},e._l(e.sizeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"Number of images to generate",prop:"number"}},[a("div",{staticClass:"radio-group-wrap"},[a("el-radio-group",{model:{value:e.formValues.number,callback:function(a){e.$set(e.formValues,"number",a)},expression:"formValues.number"}},e._l(e.numberOptions,(function(e){return a("el-radio-button",{key:e,attrs:{label:e}})})),1)],1)]),a("el-form-item",{attrs:{"label-width":"0",prop:"agree"}},[a("div",{staticClass:"checkbox-wrap"},[a("el-checkbox",{model:{value:e.formValues.agree,callback:function(a){e.$set(e.formValues,"agree",a)},expression:"formValues.agree"}},[e._v(" Read and agree to the ")]),a("strong",{staticClass:"rule-button",on:{click:e.handleUserRulesClick}},[e._v("  AI User Rules ")]),e._v(" . ")],1)])],1),a("el-button",{attrs:{type:"primary"}},[e._v("Click to generate")])],1)],1),a("el-col",{attrs:{span:14}},[a("ViewBlock",[a("el-row",{attrs:{gutter:10}},[1===e.formValues.number?a("el-col",{staticClass:"generated-image-wrap",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--single generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--single",attrs:{variant:"image"}})]},proxy:!0}],null,!1,2368681702)},[[a("el-image",{staticClass:"generated-image--single",attrs:{src:e.srcList[0]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1):2===e.formValues.number?e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap generated-image-wrap--duo",attrs:{span:24}},[a("el-skeleton",{staticClass:"generated-image--duo generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--duo",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--duo",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)})):e._l(e.formValues.number,(function(t){return a("el-col",{key:t,staticClass:"generated-image-wrap",attrs:{span:12}},[a("el-skeleton",{staticClass:"generated-image--plural generated-image-skeleton",attrs:{loading:e.generateLoading,animated:e.generateAnimated},scopedSlots:e._u([{key:"template",fn:function(){return[a("el-skeleton-item",{staticClass:"generated-image--plural",attrs:{variant:"image"}})]},proxy:!0}],null,!0)},[[a("el-image",{staticClass:"generated-image--plural",attrs:{src:e.srcList[t-1]||"","preview-src-list":e.srcList,fit:"fill"}})]],2)],1)}))],2)],1)],1)],1),a("UserRulesDialog",{on:{agree:e.handleDialogAgree},model:{value:e.showUserRulesDialog,callback:function(a){e.showUserRulesDialog=a},expression:"showUserRulesDialog"}})],1)},ne=[],ie={components:{FormBlock:k,UploadImage:_,ViewBlock:L,UserRulesDialog:P},data(){return{formValues:{imageRaw:null,backgroundDesc:"",backgroundRow:null,size:"768x1024",number:1,agree:!1},formRules:{},sizeOptions:[{value:"768x1024",label:"Illustration 3:4 (768x1024)"},{value:"1024x1024",label:"Avatar 1:1 (1024x1024)"},{value:"720x1280",label:"Wallpaper 9:16 (720x1280)"},{value:"1152x768",label:"Illustration 3:2 (1152x768)"},{value:"1280x720",label:"Movie 16:9 (1280x720)"},{value:"1024x768",label:"Article illustration 4:3 (1024x768)"}],numberOptions:[1,2,3,4],showUserRulesDialog:!1,srcList:[],generateLoading:!0,generateAnimated:!1}},methods:{handleChangeImage(e){this.formValues.imageRaw=e},handleChangeBackgroundImage(e){this.formValues.backgroundRow=e},handleUserRulesClick(){this.showUserRulesDialog=!0},handleDialogAgree(){this.formValues.agree=!0}}},ue=ie,ce=(0,i.A)(ue,oe,ne,!1,null,"0a702210",null),ge=ce.exports;l["default"].use(g.Ay);const me=[{path:"/",name:"home",redirect:"/advertisement"},{path:"/advertisement",name:"advertisement",component:M},{path:"/convert-2d",name:"convert2D",component:X},{path:"/refine-product",name:"refineProduct",component:Z},{path:"/model-outfit",name:"Convert2D",component:se},{path:"/line-art",name:"lineArt",component:ge}],de=new g.Ay({routes:me});var pe=de,fe=t(3518);l["default"].use(fe.Ay);var he=new fe.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),be=t(9143),ve=t.n(be),ke=t(1040);l["default"].config.productionTip=!1,l["default"].use(ve(),{locale:ke.A}),new l["default"]({router:pe,store:he,render:e=>e(c)}).$mount("#app")}},a={};function t(l){var r=a[l];if(void 0!==r)return r.exports;var s=a[l]={id:l,loaded:!1,exports:{}};return e[l].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(a,l,r,s){if(!l){var o=1/0;for(c=0;c<e.length;c++){l=e[c][0],r=e[c][1],s=e[c][2];for(var n=!0,i=0;i<l.length;i++)(!1&s||o>=s)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(n=!1,s<o&&(o=s));if(n){e.splice(c--,1);var u=r();void 0!==u&&(a=u)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,r,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var r,s,o=l[0],n=l[1],i=l[2],u=0;if(o.some((function(a){return 0!==e[a]}))){for(r in n)t.o(n,r)&&(t.m[r]=n[r]);if(i)var c=i(t)}for(a&&a(l);u<o.length;u++)s=o[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},l=self["webpackChunkai_shop"]=self["webpackChunkai_shop"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(6828)}));l=t.O(l)})();
//# sourceMappingURL=app.1c5d6b21.js.map