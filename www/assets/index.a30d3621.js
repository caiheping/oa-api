var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var $=(e,l,r)=>l in e?G(e,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[l]=r,A=(e,l)=>{for(var r in l||(l={}))W.call(l,r)&&$(e,r,l[r]);if(U)for(var r of U(l))X.call(l,r)&&$(e,r,l[r]);return e},V=(e,l)=>H(e,J(l));import{l as Y,u as Z,a as x,d as ee,g as te}from"./index.65e2a609.js";import{g as O,s as ae}from"./dictFormat.31da75fc.js";import{u as oe}from"./useDrawer.8b3a90cf.js";import{_ as le,a as se}from"./index.da4ff793.js";import{F as ne}from"./index.ab3e0a2d.js";import{u as de}from"./useI18n.25a437e0.js";import{d as re,c as P,r as w,a as N,f as ie,a6 as ce,q as c,a3 as ue,t as M,y as me,z as _,k as t,x as o,a4 as R,S as k,R as h,v as pe,D as fe,M as F,n as ge}from"./ant-design-vue.27440fdb.js";const{t:d}=de(),ve=[{title:d("routes.dict.dictName"),dataIndex:"dictName",key:"dictName",align:"center"},{title:d("routes.dict.dictType"),dataIndex:"dictType",key:"dictType",align:"center",slots:{customRender:"dictType"}},{title:d("routes.dict.status"),dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:d("routes.dict.remark"),dataIndex:"remark",key:"remark",align:"center"},{title:d("routes.dict.createdAt"),dataIndex:"createdAt",key:"createdAt",align:"center"},{title:d("routes.dict.action"),key:"action",align:"center",slots:{customRender:"action"}}],ye=re({components:{FormSearch:ne},setup(){const e=P(()=>se().loading),l=w([]),r=w([]),K={dictName:[{required:!0,message:d("routes.dict.dictNameCannotBeRmpty"),trigger:"blur"}],dictType:[{required:!0,message:d("routes.dict.dictTypeCannotBeRmpty"),trigger:"blur"}],status:[{required:!0,message:d("routes.dict.statusCannotBeRmpty"),trigger:"change"}]},I=N([{type:"input",label:d("routes.dict.dictName"),name:"dictName",value:"",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"},{type:"input",label:d("routes.dict.dictType"),name:"dictType",value:"",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B"},{type:"select",label:d("routes.dict.status"),name:"status",value:void 0,placeholder:d("routes.dict.statusPlaceholder"),normalizer:{value:"dictValue",label:"dictLabel"},options:r}]),n=N({pageNum:1,pageSize:10,dictName:"",dictType:"",status:""}),D=a=>{i.value.current=1,n.pageNum=i.value.current,n.dictName=a.dictName,n.dictType=a.dictType,n.status=a.status,p(n)},m=w([]),i=w({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:a=>`\u5171 ${a} \u6761`}),S=a=>{i.value=a,n.pageNum=i.value.current,n.pageSize=i.value.pageSize,p(n)},v=N({selectedRowKeys:[]}),B=P(()=>v.selectedRowKeys.length>0),j=a=>{console.log("selectedRowKeys changed: ",a),v.selectedRowKeys=a},p=a=>{Y(a).then(g=>{console.log(g),m.value=g.data.rows,i.value.total=g.data.count,v.selectedRowKeys=[]})},b=()=>{p(n)},y=w(),u=N({id:void 0,dictName:void 0,dictType:void 0,status:"1",remark:void 0}),{open:f,drawerTitle:T}=oe();console.log(f);const C=()=>{u.id=void 0,y.value.resetFields(),console.log(y),f.value=!1},s=()=>{console.log(u),y.value.validate().then(()=>{u.id?Z(u).then(a=>{F.success(a.message),p(n),u.id=void 0,y.value.resetFields(),f.value=!1}):x(u).then(a=>{F.success(a.message),p(n),u.id=void 0,y.value.resetFields(),f.value=!1})}).catch(a=>{console.log("error",a)})},z=a=>{const g=a.id||v.selectedRowKeys;ee(g).then(()=>{(g.length&&g.length===m.value.length||m.value.length===1)&&Math.ceil(i.value.total/n.pageSize)===n.pageNum&&n.pageNum>1&&n.pageNum--,p(n),F.success(d("common.deleteSuccess"))})},q=a=>{console.log(a),F.success(d("common.cancelDelete"))},E=()=>{f.value=!0,T.value=d("common.add")},Q=a=>{te(a.id).then(g=>{f.value=!0,T.value=d("common.update"),ge(()=>{Object.keys(u).forEach(L=>{u[L]=g.data[L]})})})};return ie(async()=>{l.value=await O("sys_normal_disable"),l.value.forEach(a=>{a.label=a.dictLabel,a.value=a.dictValue}),r.value=await O("sys_normal_disable"),console.log(r),b()}),V(A({t:d,loading:e,queryParams:n,formFields:I,handleQuery:D,typeList:m,columns:ve,pagination:i,handleTableChange:S,selectDictLabel:ae,statusOptions:r},ce(v)),{hasSelected:B,onSelectChange:j,open:f,drawerTitle:T,formState:u,labelCol:{span:6},wrapperCol:{span:18},rules:K,formRef:y,handleClose:C,handleSubmit:s,confirm:z,cancel:q,handleAdd:E,handleUpdate:Q,disableOptions:l})}}),he={class:"p-4"},be={class:"mb-3"},Ce={class:"text-[#1890ff]"};function ke(e,l,r,K,I,n){const D=c("form-search"),m=c("a-button"),i=c("a-col"),S=c("a-popconfirm"),v=c("a-row"),B=c("router-link"),j=c("a-table"),p=c("a-input"),b=c("a-form-item"),y=c("a-radio-group"),u=c("a-textarea"),f=c("a-form"),T=c("a-drawer"),C=ue("has-permi");return M(),me("div",he,[_("div",be,[t(D,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),t(v,{gutter:10,class:"mb-2"},{default:o(()=>[R(t(i,null,{default:o(()=>[t(m,{color:"success",onClick:e.handleAdd},{default:o(()=>[k(h(e.t("common.add")),1)]),_:1},8,["onClick"])]),_:1},512),[[C,["system:dictType:add"]]]),R(t(i,null,{default:o(()=>[t(S,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:o(()=>[t(m,{disabled:!e.hasSelected,color:"error"},{default:o(()=>[k(h(e.t("common.delete")),1)]),_:1},8,["disabled"])]),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])]),_:1},512),[[C,["system:dictType:delete"]]])]),_:1}),t(j,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.typeList,pagination:e.pagination,onChange:e.handleTableChange},{dictType:o(({record:s})=>[t(B,{to:"dictData/"+s.id},{default:o(()=>[_("span",Ce,h(s.dictType),1)]),_:2},1032,["to"])]),status:o(({record:s})=>[_("span",null,h(e.selectDictLabel(e.statusOptions,s.status)),1)]),action:o(({record:s})=>[_("span",null,[R(t(m,{type:"link",color:"success",class:"mr-3",onClick:z=>e.handleUpdate(s)},{default:o(()=>[k(h(e.t("common.update")),1)]),_:2},1032,["onClick"]),[[C,["system:dictType:update"]]]),t(S,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:z=>e.confirm(s),onCancel:e.cancel},{default:o(()=>[R(t(m,{type:"link",color:"error"},{default:o(()=>[k(h(e.t("common.delete")),1)]),_:1},512),[[C,["system:dictType:delete"]]])]),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])]),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),t(T,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":l[4]||(l[4]=s=>e.open=s),maskClosable:!1,onClose:e.handleClose},{default:o(()=>[e.open?(M(),pe(f,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:o(()=>[t(v,null,{default:o(()=>[t(i,{span:12},{default:o(()=>[t(b,{label:e.t("routes.dict.dictName"),name:"dictName"},{default:o(()=>[t(p,{value:e.formState.dictName,"onUpdate:value":l[0]||(l[0]=s=>e.formState.dictName=s),placeholder:e.t("routes.dict.dictNamePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),t(i,{span:12},{default:o(()=>[t(b,{label:e.t("routes.dict.dictType"),name:"dictType"},{default:o(()=>[t(p,{value:e.formState.dictType,"onUpdate:value":l[1]||(l[1]=s=>e.formState.dictType=s),placeholder:e.t("routes.dict.dictTypePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),t(i,{span:12},{default:o(()=>[t(b,{label:e.t("routes.dict.status"),name:"status"},{default:o(()=>[t(y,{value:e.formState.status,"onUpdate:value":l[2]||(l[2]=s=>e.formState.status=s),options:e.disableOptions},null,8,["value","options"])]),_:1},8,["label"])]),_:1}),t(i,{span:12},{default:o(()=>[t(b,{label:e.t("routes.dict.remark"),name:"remark"},{default:o(()=>[t(u,{rows:3,value:e.formState.remark,"onUpdate:value":l[3]||(l[3]=s=>e.formState.remark=s),placeholder:e.t("routes.dict.remarkPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),t(i,{span:24},{default:o(()=>[t(b,null,{default:o(()=>[t(m,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:o(()=>[k(h(e.t("common.okText")),1)]),_:1},8,["onClick"]),t(m,{onClick:e.handleClose},{default:o(()=>[k(h(e.t("common.cancelText")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","label-col","wrapper-col"])):fe("",!0)]),_:1},8,["title","visible","onClose"])])}var Be=le(ye,[["render",ke]]);export{Be as default};
