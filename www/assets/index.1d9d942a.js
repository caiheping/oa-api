var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;"undefined"!=typeof require&&require;import{H as d,a as s}from"./index.2c6e8c15.js";import{g as c,s as i}from"./dictFormat.b2531267.js";import{_ as u}from"./index.440d206b.js";import{u as p}from"./useDrawer.6ddc8ed7.js";import{_ as m}from"./index.14eac354.js";import{u as k}from"./useI18n.94ac6758.js";import{d as v,c as C,r as h,a as f,f as y,a6 as b,M as g,n as U,q as A,a3 as x,t as w,A as S,B as R,k as _,x as T,a4 as O,V as j,U as D,F as I,Z as P,v as F}from"./ant-design-vue.5cd75ca8.js";function N(e){return d("/admin/examineAndApprove/makeUpCard/"+e,"GET",{},!1)}function E(e){return d("/admin/examineAndApprove/makeUpCard/"+e.id,"PUT",e)}const{t:L}=k(),z=[{title:L("routes.makeUpCard.nickName"),key:"user",align:"center",slots:{customRender:"user"}},{title:L("routes.makeUpCard.dateToBeSupplemented"),key:"clock_in",align:"center",slots:{customRender:"clock_in"}},{title:L("routes.makeUpCard.makeUpCardType"),dataIndex:"type",key:"type",align:"center",slots:{customRender:"type"}},{title:L("routes.makeUpCard.makeUpCardReason"),dataIndex:"makeUpCardReason",key:"makeUpCardReason",align:"center"},{title:L("routes.makeUpCard.createdAt"),dataIndex:"createdAt",key:"createdAt",align:"center"},{title:L("routes.makeUpCard.status"),dataIndex:"status",key:"status",slots:{customRender:"status"},align:"center"},{title:L("routes.makeUpCard.remark"),dataIndex:"remark",key:"remark",align:"center"},{title:L("routes.makeUpCard.action"),key:"action",align:"center",slots:{customRender:"action"}}];var K=v({components:{FormSearch:u,BaseForm:m},setup(){const e=C((()=>s().loading)),u=h([]),m=h([]),k=h(),v=f({pageNum:1,pageSize:10,nickName:"",type:"",status:""}),A=f([{type:"input",label:L("routes.makeUpCard.nickName"),name:"nickName",value:"",placeholder:L("routes.makeUpCard.nickNamePlaceholder")},{type:"select",label:L("routes.makeUpCard.status"),name:"status",value:void 0,placeholder:L("routes.makeUpCard.statusPlaceholder"),normalizer:{value:"dictValue",label:"dictLabel"},options:u}]),x=h([]),w=h({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),S=h(),R=f({selectedRowKeys:[]}),_=C((()=>R.selectedRowKeys.length>0)),T=e=>{(function(e={}){return d("/admin/examineAndApprove/makeUpCard","GET",e)})(e).then((e=>{x.value=e.data.rows,w.value.total=e.data.count,R.selectedRowKeys=[]}))},{open:O,drawerTitle:j}=p(),D=f({id:void 0,createdAt:void 0,type:void 0,makeUpCardReason:void 0,userId:void 0,deptId:void 0}),I=f({createdAt:[{required:!0,message:L("routes.makeUpCard.createdAtPlaceholder")}],type:[{required:!0,message:L("routes.makeUpCard.makeUpCardTypePlaceholder")}]}),P=f([{name:"createdAt",label:L("routes.makeUpCard.cardRenewalDate"),type:"date-picker",value:void 0,placeholder:L("routes.makeUpCard.cardRenewalDatePlaceholder"),span:24,labelCol:8},{name:"type",label:L("routes.makeUpCard.makeUpCardType"),type:"select",value:void 0,span:24,labelCol:8,placeholder:L("routes.makeUpCard.makeUpCardTypePlaceholder"),options:m,serialize:{value:"dictValue",label:"dictLabel"}},{name:"makeUpCardReason",label:L("routes.makeUpCard.makeUpCardReason"),type:"textarea",value:void 0,span:24,labelCol:8,placeholder:L("routes.makeUpCard.makeUpCardReasonPlaceholder")}]);return y((async()=>{u.value=await c("sys_examineAndApprove_status"),m.value=await c("sys_makeUpCard_type"),u.value.forEach((e=>{e.value=e.dictValue,e.lable=e.dictLabel})),m.value.forEach((e=>{e.value=e.dictValue,e.lable=e.dictLabel})),T(v)})),F=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&r(e,t,a[t]);if(o)for(var t of o(a))n.call(a,t)&&r(e,t,a[t]);return e})({t:L,loading:e,queryParams:v,formFields:A,handleQuery:e=>{w.value.current=1,v.pageNum=w.value.current,v.nickName=e.nickName,v.type=e.type,v.status=e.status,T(v)},tableList:x,columns:z,pagination:w,hasSelected:_,handleTableChange:e=>{w.value=e,v.pageNum=w.value.current,v.pageSize=w.value.pageSize,T(v)},selectDictLabel:i,confirm:e=>{const a=e.id||R.selectedRowKeys;(function(e){return d("/admin/examineAndApprove/makeUpCard/"+e,"DELETE")})(a).then((()=>{(a.length&&a.length===x.value.length||1===x.value.length)&&Math.ceil(w.value.total/v.pageSize)===v.pageNum&&v.pageNum>1&&v.pageNum--,T(v),g.success(L("common.deleteSuccess"))}))},cancel:e=>{g.success(L("common.cancelDelete"))},onSelectChange:e=>{R.selectedRowKeys=e}},b(R)),a(F,t({handleExamineAndApprove:async({key:e})=>{S.value&&(await N(S.value.id).then((e=>{Object.keys(D).forEach((a=>{D[a]=e.data[a]}))})),D.status=e,E(D).then((e=>{g.success(e.message),T(v)})))},handleClickDropdown:e=>{S.value=e},BaseFormRef:k,open:O,drawerTitle:j,examineAndApproveStatusOptions:u,makeUpCardTypeOptions:m,formState:D,formDataObj:P,rules:I,handleClose:()=>{D.id=void 0,D.userId=void 0,D.deptId=void 0,k.value.resetFields(),O.value=!1},handleAdd:()=>{O.value=!0,D.userId=void 0,D.deptId=void 0,j.value=L("common.add")},handleUpdate:e=>{N(e.id).then((a=>{O.value=!0,j.value=L("common.update"),D.userId=e.user.id,D.deptId=e.user.deptId,U((()=>{Object.keys(D).forEach((e=>{D[e]=a.data[e]}))}))}))},handleSubmit:()=>{D.id?E(D).then((e=>{g.success(e.message),T(v),D.id=void 0,k.value.resetFields(),O.value=!1})):function(e={}){return d("/admin/examineAndApprove/makeUpCard","POST",e)}(D).then((e=>{g.success(e.message),T(v),D.id=void 0,k.value.resetFields(),O.value=!1}))}}));var F}});const V={class:"p-4"},q={class:"mb-3"},B={class:"mr-3 text-[#faad14] cursor-pointer"};K.render=function(e,a,t,o,l,n){const r=A("form-search"),d=A("a-button"),s=A("a-col"),c=A("a-popconfirm"),i=A("a-row"),u=A("a-menu-item"),p=A("a-menu"),m=A("a-dropdown"),k=A("a-table"),v=A("BaseForm"),C=A("a-drawer"),h=x("has-permi");return w(),S("div",V,[R("div",q,[_(r,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),_(i,{gutter:10,class:"mb-2"},{default:T((()=>[O(_(s,null,{default:T((()=>[_(d,{color:"success",onClick:e.handleAdd},{default:T((()=>[j(D(e.t("common.add")),1)])),_:1},8,["onClick"])])),_:1},512),[[h,["examineAndApprove:makeUpCard:add"]]]),O(_(s,null,{default:T((()=>[_(c,{title:e.t("common.confirmDeleteSelect"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:T((()=>[_(d,{disabled:!e.hasSelected,color:"error"},{default:T((()=>[j(D(e.t("common.delete")),1)])),_:1},8,["disabled"])])),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])])),_:1},512),[[h,["examineAndApprove:makeUpCard:delete"]]])])),_:1}),_(k,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.tableList,pagination:e.pagination,onChange:e.handleTableChange},{user:T((({record:e})=>[R("span",null,D(e.user.nickName),1)])),clock_in:T((({record:e})=>{var a;return[R("span",null,D(null==(a=e.clock_in)?void 0:a.createdAt),1)]})),type:T((({record:a})=>[R("span",null,D(e.selectDictLabel(e.makeUpCardTypeOptions,a.type)),1)])),status:T((({record:a})=>[R("span",null,D(e.selectDictLabel(e.examineAndApproveStatusOptions,a.status)),1)])),action:T((({record:a})=>[R("span",null,[O(R("span",null,[_(m,{trigger:["click"],onClick:t=>e.handleClickDropdown(a)},{overlay:T((()=>[_(p,{onClick:e.handleExamineAndApprove},{default:T((()=>[(w(!0),S(I,null,P(e.examineAndApproveStatusOptions,(e=>(w(),F(u,{disabled:"0"===e.dictValue,key:e.dictValue},{default:T((()=>[j(D(e.dictLabel),1)])),_:2},1032,["disabled"])))),128))])),_:1},8,["onClick"])])),default:T((()=>[R("span",B,D(e.t("routes.makeUpCard.approve")),1)])),_:2},1032,["onClick"])],512),[[h,["examineAndApprove:makeUpCard:update"]]]),O(_(d,{type:"link",color:"success",class:"mr-3",onClick:t=>e.handleUpdate(a)},{default:T((()=>[j(D(e.t("common.update")),1)])),_:2},1032,["onClick"]),[[h,["examineAndApprove:makeUpCard:update"]]]),_(c,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:t=>e.confirm(a),onCancel:e.cancel},{default:T((()=>[O(_(d,{type:"link",color:"error"},{default:T((()=>[j(D(e.t("common.delete")),1)])),_:1},512),[[h,["examineAndApprove:makeUpCard:delete"]]])])),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),_(C,{width:"540px",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[0]||(a[0]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:T((()=>[_(v,{ref:"BaseFormRef",formData:e.formDataObj,data:e.formState,rules:e.rules,onSubmit:e.handleSubmit,onClose:e.handleClose},null,8,["formData","data","rules","onSubmit","onClose"])])),_:1},8,["title","visible","onClose"])])};export{K as default};