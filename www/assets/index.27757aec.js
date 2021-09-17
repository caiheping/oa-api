var e=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,n=(o,l,a)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[l]=a;"undefined"!=typeof require&&require;import{H as r,a as s}from"./index.2c6e8c15.js";import{g as i,s as d}from"./dictFormat.b2531267.js";import{_ as u}from"./index.14eac354.js";import{_ as m}from"./index.440d206b.js";import{u as p}from"./useDrawer.6ddc8ed7.js";import{u as k}from"./useI18n.94ac6758.js";import{d as f,c as I,r as v,a as h,f as y,a6 as b,n as g,M as C,q as T,a3 as w,t as x,A as O,B as S,k as F,x as N,a4 as A,V as j,U as D}from"./ant-design-vue.5cd75ca8.js";const{t:P}=k(),_=[{title:P("routes.clockIn.nickName"),key:"user",align:"center",slots:{customRender:"user"}},{title:P("routes.clockIn.clockInType"),key:"type",align:"center",slots:{customRender:"type"}},{title:P("routes.clockIn.clockInWiFi"),dataIndex:"wifiBefore",key:"wifiBefore",align:"center"},{title:P("routes.clockIn.clockInAddr"),dataIndex:"firstClockInAddr",key:"firstClockInAddr",align:"center"},{title:P("routes.clockIn.clockInTime"),dataIndex:"firstClockInTime",key:"firstClockInTime",align:"center"},{title:P("routes.clockIn.clockOutWiFi"),dataIndex:"wifiNext",key:"wifiNext",align:"center"},{title:P("routes.clockIn.clockOutAddr"),dataIndex:"lastClockInAddr",key:"lastClockInAddr",align:"center"},{title:P("routes.clockIn.clockOutTime"),dataIndex:"lastClockInTime",key:"lastClockInTime",align:"center"},{title:P("routes.clockIn.action"),key:"action",align:"center",slots:{customRender:"action"}}];var R=f({components:{FormSearch:m,BaseForm:u},setup(){const e=I((()=>s().loading)),u=v([]),m=v(),k=h({pageNum:1,pageSize:10,nickName:"",type:""}),f=h([{type:"input",label:P("routes.clockIn.nickName"),name:"nickName",value:"",placeholder:P("routes.clockIn.nickNamePlaceholder")},{type:"select",label:P("routes.clockIn.clockInType"),name:"type",value:void 0,placeholder:P("routes.clockIn.clockInTypePlaceholder"),normalizer:{value:"dictValue",label:"dictLabel"},options:u}]),T=v([]),w=v({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),x=h({selectedRowKeys:[]}),O=I((()=>x.selectedRowKeys.length>0)),S=e=>{(function(e={}){return r("/admin/baseInfo/clockIn","GET",e)})(e).then((e=>{T.value=e.data.rows,w.value.total=e.data.count,x.selectedRowKeys=[]}))},{open:F,drawerTitle:N}=p(),A=h({type:[{required:!0,message:P("routes.clockIn.clockInTypePlaceholder")}]}),j=h([{name:"type",label:P("routes.clockIn.clockInType"),type:"select",value:void 0,span:24,placeholder:P("routes.clockIn.clockInTypePlaceholder"),options:u,serialize:{value:"dictValue",label:"dictLabel"}},{name:"wifiBefore",label:P("routes.clockIn.clockInWiFi"),type:"input",value:void 0,span:24,placeholder:P("routes.clockIn.clockInWiFiPlaceholder")},{name:"firstClockInAddr",label:P("routes.clockIn.clockInAddr"),type:"input",span:24,value:void 0,placeholder:P("routes.clockIn.clockInAddrPlaceholder")},{name:"firstClockInTime",label:P("routes.clockIn.clockInTime"),type:"time-picker",span:24,value:void 0,placeholder:P("routes.clockIn.clockInTime"),props:{valueFormat:"YYYY-MM-DD HH:mm",format:"HH:mm"}},{name:"wifiNext",label:P("routes.clockIn.clockOutWiFi"),type:"input",value:void 0,span:24,placeholder:P("routes.clockIn.clockOutWiFiPlaceholder")},{name:"lastClockInAddr",label:P("routes.clockIn.clockOutAddr"),type:"input",span:24,value:void 0,placeholder:P("routes.clockIn.clockOutAddrPlaceholder")},{name:"lastClockInTime",label:P("routes.clockIn.clockOutTime"),type:"time-picker",span:24,value:void 0,placeholder:P("routes.clockIn.clockOutTime"),props:{valueFormat:"YYYY-MM-DD HH:mm",format:"HH:mm"}}]),D=h({id:void 0,type:"1",wifiBefore:void 0,firstClockInAddr:void 0,firstClockInTime:void 0,wifiNext:void 0,lastClockInAddr:void 0,lastClockInTime:void 0});return y((async()=>{u.value=await i("sys_clock_in_type"),u.value.forEach((e=>{e.value=e.dictValue,e.lable=e.dictLabel})),S(k)})),R=((e,o)=>{for(var l in o||(o={}))t.call(o,l)&&n(e,l,o[l]);if(a)for(var l of a(o))c.call(o,l)&&n(e,l,o[l]);return e})({t:P,loading:e,queryParams:k,formFields:f,handleQuery:e=>{w.value.current=1,k.pageNum=w.value.current,k.nickName=e.nickName,k.type=e.type,S(k)},tableList:T,columns:_,pagination:w,hasSelected:O,handleTableChange:e=>{w.value=e,k.pageNum=w.value.current,k.pageSize=w.value.pageSize,S(k)},selectDictLabel:d,confirm:e=>{const o=e.id||x.selectedRowKeys;(function(e){return r("/admin/baseInfo/clockIn/"+e,"DELETE")})(o).then((()=>{(o.length&&o.length===T.value.length||1===T.value.length)&&Math.ceil(w.value.total/k.pageSize)===k.pageNum&&k.pageNum>1&&k.pageNum--,S(k),C.success(P("common.deleteSuccess"))}))},cancel:e=>{C.success(P("common.cancelDelete"))},onSelectChange:e=>{x.selectedRowKeys=e},handleAdd:()=>{F.value=!0,N.value=P("common.add")},handleUpdate:e=>{var o;(o=e.id,r("/admin/baseInfo/clockIn/"+o,"GET",{},!1)).then((e=>{F.value=!0,N.value=P("common.update"),g((()=>{Object.keys(D).forEach((o=>{D[o]=e.data[o]}))}))}))}},b(x)),o(R,l({BaseFormRef:m,open:F,drawerTitle:N,clockInOptions:u,formState:D,rules:A,formDataObj:j,handleClose:()=>{D.id=void 0,m.value.resetFields(),F.value=!1},handleSubmit:()=>{var e;D.id?(e=D,r("/admin/baseInfo/clockIn/"+e.id,"PUT",e)).then((e=>{C.success(e.message),S(k),D.id=void 0,m.value.resetFields(),F.value=!1})):function(e={}){return r("/admin/baseInfo/clockIn","POST",e)}(D).then((e=>{C.success(e.message),S(k),D.id=void 0,m.value.resetFields(),F.value=!1}))}}));var R}});const B={class:"p-4"},H={class:"mb-3"};R.render=function(e,o,l,a,t,c){const n=T("form-search"),r=T("a-button"),s=T("a-col"),i=T("a-popconfirm"),d=T("a-row"),u=T("a-table"),m=T("BaseForm"),p=T("a-drawer"),k=w("has-permi");return x(),O("div",B,[S("div",H,[F(n,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),F(d,{gutter:10,class:"mb-2"},{default:N((()=>[A(F(s,null,{default:N((()=>[F(r,{color:"success",onClick:e.handleAdd},{default:N((()=>[j(D(e.t("common.add")),1)])),_:1},8,["onClick"])])),_:1},512),[[k,["baseInfo:clockIn:add"]]]),A(F(s,null,{default:N((()=>[F(i,{title:e.t("common.confirmDeleteSelect"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:N((()=>[F(r,{disabled:!e.hasSelected,color:"error"},{default:N((()=>[j(D(e.t("common.delete")),1)])),_:1},8,["disabled"])])),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])])),_:1},512),[[k,["baseInfo:clockIn:delete"]]])])),_:1}),F(u,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.tableList,pagination:e.pagination,onChange:e.handleTableChange},{user:N((({record:e})=>[S("span",null,D(e.user.nickName),1)])),type:N((({record:o})=>[S("span",null,D(e.selectDictLabel(e.clockInOptions,o.type)),1)])),action:N((({record:o})=>[S("span",null,[A(F(r,{type:"link",color:"success",class:"mr-3",onClick:l=>e.handleUpdate(o)},{default:N((()=>[j(D(e.t("common.update")),1)])),_:2},1032,["onClick"]),[[k,["baseInfo:clockIn:update"]]]),F(i,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:l=>e.confirm(o),onCancel:e.cancel},{default:N((()=>[A(F(r,{type:"link",color:"error"},{default:N((()=>[j(D(e.t("common.delete")),1)])),_:1},512),[[k,["baseInfo:clockIn:delete"]]])])),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),F(p,{width:"540px",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":o[0]||(o[0]=o=>e.open=o),maskClosable:!1,onClose:e.handleClose},{default:N((()=>[F(m,{ref:"BaseFormRef",formData:e.formDataObj,data:e.formState,rules:e.rules,onSubmit:e.handleSubmit,onClose:e.handleClose},null,8,["formData","data","rules","onSubmit","onClose"])])),_:1},8,["title","visible","onClose"])])};export{R as default};
