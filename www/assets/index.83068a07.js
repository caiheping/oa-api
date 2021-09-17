var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,d=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&s(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&s(e,t,a[t]);return e},n=(e,l)=>a(e,t(l));"undefined"!=typeof require&&require;import{g as u,s as i}from"./dictFormat.b2531267.js";import{g as c}from"./index.a28e8132.js";import{g as p,d as m,l as f,u as v,e as h,r as b}from"./index.0f56c5f0.js";import{g}from"./index.73583702.js";import{u as y,a as w,h as _}from"./index.2c6e8c15.js";import{u as S}from"./useDrawer.6ddc8ed7.js";import{T as k,f as I}from"./validate.05ef885d.js";import{_ as C}from"./index.a5f1b9a4.js";import{_ as N}from"./index.440d206b.js";import{u as x}from"./useI18n.94ac6758.js";import{d as P,c as O,r as R,a as T,f as U,a6 as j,n as F,M as q,q as z,a3 as E,t as L,A as B,k as D,x as K,B as A,a4 as V,V as M,U as Q,v as $,a5 as H,H as Z,F as G,Z as J}from"./ant-design-vue.5cd75ca8.js";const{t:W}=x(),X=[{title:W("routes.user.userName"),dataIndex:"userName",key:"userName",align:"center"},{title:W("routes.user.nickName"),dataIndex:"nickName",key:"nickName",align:"center"},{title:W("routes.user.roleIds"),key:"roles",align:"center",slots:{customRender:"roles"}},{title:W("routes.user.department"),key:"department",align:"center",slots:{customRender:"department"}},{title:W("routes.user.position"),key:"position",align:"center",slots:{customRender:"position"}},{title:W("routes.user.mobile"),key:"mobile",dataIndex:"mobile",align:"center"},{title:W("routes.user.status"),dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:W("routes.user.createdAt"),dataIndex:"createdAt",key:"createdAt",align:"center"},{title:W("routes.user.action"),key:"action",align:"center",slots:{customRender:"action"}}];var Y=P({components:{Treeselect:k,DeptSearch:C,FormSearch:N},setup(){const e=y(),a=O((()=>w().loading)),t=R([]),l=R([]),o=R([]),r=R([]),s=R([]),k=R([]),C=R(),N=R([]),x=R([]),P=R(),z=T({userName:"",deptId:0,roleId:"",pageNum:1,pageSize:10}),E=T([{type:"input",label:W("routes.user.userName"),name:"userName",value:void 0,placeholder:W("routes.user.userNamePlaceholder")},{type:"select",label:W("routes.user.roleIds"),name:"roleId",value:void 0,placeholder:W("routes.user.roleIdsPlaceholder"),normalizer:{value:"id",label:"roleName"},options:t}]),L=e=>{K.value.current=1,z.pageNum=K.value.current,z.userName=e.userName,z.roleId=e.roleId,M(z)},B=T({selectedRowKeys:[]}),D=R([]),K=R({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`}),A=O((()=>B.selectedRowKeys.length>0)),V=R([]),M=a=>{f(a).then((e=>{D.value=e.data.rows,K.value.total=e.data.count})),c().then((a=>{const t=_(a.data.rows,"deptId","parentId","children",e.userInfo.deptId).tree,l=a.data.rows.filter((a=>a.deptId===e.userInfo.deptId));l[0].children=t,V.value=l}))},Q=R(),$=T({id:void 0,deptId:void 0,nickName:void 0,userName:void 0,password:void 0,sex:"1",roleIds:[],mobile:void 0,status:"1",email:void 0,salary:void 0,position:"1",entryTime:void 0,birthday:void 0,education:void 0,remark:void 0}),H={deptId:[{required:!0,validator:I.number,message:W("routes.user.deptIdCannotBeEmpty"),trigger:"change"}],nickName:[{required:!0,message:W("routes.user.nickNameCannotBeEmpty"),trigger:"blur"}],userName:[{required:!0,message:W("routes.user.userNameCannotBeEmpty"),trigger:"blur"}],password:[{required:!0,message:W("routes.user.passwordCannotBeEmpty"),trigger:"blur"}],roleIds:[{required:!0,validator:I.checkRoleLength,trigger:"change"}],position:[{required:!0,message:W("routes.user.positionCannotBeEmpty"),trigger:"change"}],salary:[{required:!0,validator:I.number,message:W("routes.user.salaryCannotBeEmpty"),trigger:"blur"}]},{open:Z,drawerTitle:G}=S(),J=R(!1),Y=R(),ee=R(!1),ae=T({id:0,newPassword:""}),te=()=>{c().then((e=>{N.value=e.data.rows,x.value=_(e.data.rows,"deptId","parentId","children",0).tree,C.value.expandedKeys.value=N.value.map((e=>e.id))})),M(z),g().then((e=>{t.value=e.data.rows}))};return U((async()=>{l.value=await u("sys_normal_disable"),o.value=await u("sys_user_position"),r.value=await u("sys_user_education"),s.value=await u("sys_normal_disable"),k.value=await u("sys_user_sex"),s.value.forEach((e=>{e.label=e.dictLabel,e.value=e.dictValue})),k.value.forEach((e=>{e.label=e.dictLabel,e.value=e.dictValue})),te()})),n(d(n(d({t:W,loading:a,replaceFields:{children:"children",title:"deptName",key:"deptId"},deptSearchRef:C,originalTree:N,deptTreeOption:x,handleSelect:e=>{z.deptId=e[0],L(z)},queryRef:P,queryParams:z,formFields:E,handleQuery:L,statusOptions:l,columns:X},j(B)),{userList:D,pagination:K,handleTableChange:e=>{K.value=e,z.pageNum=K.value.current,z.pageSize=K.value.pageSize,M(z)},selectDictLabel:i,hasSelected:A,onSelectChange:e=>{B.selectedRowKeys=e},getRoles:e=>e.roles.map((e=>e.roleName)).join(","),confirm:e=>{const a=e.id||B.selectedRowKeys;m(a).then((()=>{(a.length&&a.length===D.value.length||1===D.value.length)&&Math.ceil(K.value.total/z.pageSize)===z.pageNum&&z.pageNum>1&&z.pageNum--,M(z),q.success(W("common.deleteSuccess"))}))},cancel:e=>{q.success(W("common.cancelDelete"))},handleAdd:()=>{Z.value=!0,J.value=!1,G.value=W("common.add")},handleUpdate:e=>{p(e.id).then((e=>{Z.value=!0,J.value=!0,G.value=W("common.update"),F((()=>{Object.keys($).forEach((a=>{$[a]=e.data[a]})),$.roleIds=e.data.roles.map((e=>e.id)),Q.value.forest.selectedNodeIds.push(e.data.deptId)}))}))},treeRef:Q,formRef:Y,rules:H,isUpdate:J,open:Z,drawerTitle:G,deptOptions:V,normalizer:e=>(e.children&&!e.children.length&&delete e.children,{id:e.deptId,label:e.deptName,children:e.children}),handleClose:()=>{$.id=void 0,$.deptId=void 0,$.password=void 0,$.userName=void 0,Y.value.resetFields(),Z.value=!1},handleSubmit:()=>{Y.value.validate().then((()=>{$.id?v($).then((e=>{q.success(e.message),$.id=void 0,$.deptId=void 0,$.password=void 0,$.userName=void 0,$.roleIds=void 0,Y.value.resetFields(),Z.value=!1,M(z)})):h($).then((e=>{q.success(e.message),$.id=void 0,$.deptId=void 0,$.password=void 0,$.userName=void 0,$.roleIds=void 0,Y.value.resetFields(),Z.value=!1,M(z)}))})).catch((e=>{}))},labelCol:{span:6},wrapperCol:{span:18},formState:$,roleOptions:t,handleTreeSelect:e=>{$.deptId=e.deptId},positionOptions:o,educationOptions:r,disableOptions:s,sexOptions:k,visible:ee}),j(ae)),{handleResetPwd:()=>{ae.newPassword?b(ae.id,{newPassword:ae.newPassword}).then((e=>{q.success(e.message),ae.newPassword="",ee.value=!1})):q.error(W("routes.user.newPasswordCannotBeEmpty"))},handleResetClose:()=>{ae.newPassword="",ee.value=!1},showModal:e=>{ae.id=e.id,ee.value=!0}})}});const ee={class:"p-4"},ae={class:"mb-3"},te={class:"flex items-center"},le={class:"whitespace-nowrap"};Y.render=function(e,a,t,l,o,r){const s=z("dept-search"),d=z("a-col"),n=z("form-search"),u=z("a-button"),i=z("a-popconfirm"),c=z("a-row"),p=z("a-table"),m=z("treeselect"),f=z("a-form-item"),v=z("a-input"),h=z("a-input-password"),b=z("a-select-option"),g=z("a-select"),y=z("a-radio-group"),w=z("a-input-number"),_=z("a-date-picker"),S=z("a-textarea"),k=z("a-form"),I=z("a-drawer"),C=z("a-modal"),N=E("has-permi");return L(),B("div",ee,[D(c,{gutter:15},{default:K((()=>[D(d,{span:4},{default:K((()=>[D(s,{ref:"deptSearchRef",original:e.originalTree,data:e.deptTreeOption,baseFields:e.replaceFields,onSelect:e.handleSelect},null,8,["original","data","baseFields","onSelect"])])),_:1}),D(d,{span:20},{default:K((()=>[A("div",ae,[D(n,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleQuery},null,8,["formFields","onSearch","onReset"])]),D(c,{gutter:10,class:"mb-2"},{default:K((()=>[V(D(d,null,{default:K((()=>[D(u,{color:"success",onClick:e.handleAdd},{default:K((()=>[M(Q(e.t("common.add")),1)])),_:1},8,["onClick"])])),_:1},512),[[N,["system:user:add"]]]),V(D(d,null,{default:K((()=>[D(i,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:K((()=>[D(u,{disabled:!e.hasSelected,color:"error"},{default:K((()=>[M(Q(e.t("common.delete")),1)])),_:1},8,["disabled"])])),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])])),_:1},512),[[N,["system:user:delete"]]])])),_:1}),D(p,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.userList,pagination:e.pagination,onChange:e.handleTableChange},{department:K((({record:e})=>[A("span",null,Q(e.department.deptName),1)])),status:K((({record:a})=>[A("span",null,Q(e.selectDictLabel(e.statusOptions,a.status)),1)])),roles:K((({record:a})=>[A("span",null,Q(e.getRoles(a)),1)])),position:K((({record:a})=>[A("span",null,Q(e.selectDictLabel(e.positionOptions,a.position)),1)])),action:K((({record:a})=>[A("span",null,[V(D(u,{type:"link",color:"success",class:"mr-3",onClick:t=>e.handleUpdate(a)},{default:K((()=>[M(Q(e.t("common.update")),1)])),_:2},1032,["onClick"]),[[N,["system:user:update"]]]),V(D(u,{type:"link",color:"success",class:"mr-3",onClick:t=>e.showModal(a)},{default:K((()=>[M(Q(e.t("routes.user.resetPwd")),1)])),_:2},1032,["onClick"]),[[N,["system:user:resetPwd"]]]),D(i,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:t=>e.confirm(a),onCancel:e.cancel},{default:K((()=>[V(D(u,{type:"link",color:"error"},{default:K((()=>[M(Q(e.t("common.delete")),1)])),_:1},512),[[N,["system:user:delete"]]])])),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])])),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"])])),_:1})])),_:1}),D(I,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[15]||(a[15]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:K((()=>[e.open?(L(),$(k,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:K((()=>[D(c,null,{default:K((()=>[V(D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.deptId"),name:"deptId"},{default:K((()=>[D(m,{ref:"treeRef",class:"!mt-[3px]",value:e.formState.deptId,"onUpdate:value":a[0]||(a[0]=a=>e.formState.deptId=a),normalizer:e.normalizer,placeholder:e.t("routes.user.deptIdPlaceholder"),options:e.deptOptions,onSelect:e.handleTreeSelect},null,8,["value","normalizer","placeholder","options","onSelect"])])),_:1},8,["label"])])),_:1},512),[[H,0!==e.formState.deptId]]),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.nickName"),name:"nickName"},{default:K((()=>[D(v,{value:e.formState.nickName,"onUpdate:value":a[1]||(a[1]=a=>e.formState.nickName=a),placeholder:e.t("routes.user.nickNamePlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),e.isUpdate?Z("",!0):(L(),$(d,{key:0,span:12},{default:K((()=>[D(f,{label:e.t("routes.user.userName"),name:"userName"},{default:K((()=>[D(v,{value:e.formState.userName,"onUpdate:value":a[2]||(a[2]=a=>e.formState.userName=a),placeholder:e.t("routes.user.userNamePlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1})),e.isUpdate?Z("",!0):(L(),$(d,{key:1,span:12},{default:K((()=>[D(f,{label:e.t("routes.user.password"),name:"password"},{default:K((()=>[D(h,{value:e.formState.password,"onUpdate:value":a[3]||(a[3]=a=>e.formState.password=a),placeholder:e.t("routes.user.passwordPlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1})),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.roleIds"),name:"roleIds"},{default:K((()=>[D(g,{mode:"multiple",value:e.formState.roleIds,"onUpdate:value":a[4]||(a[4]=a=>e.formState.roleIds=a),placeholder:e.t("routes.user.roleIdsPlaceholder")},{default:K((()=>[(L(!0),B(G,null,J(e.roleOptions,(e=>(L(),$(b,{key:e.id},{default:K((()=>[M(Q(e.roleName),1)])),_:2},1024)))),128))])),_:1},8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.position"),name:"position"},{default:K((()=>[D(g,{value:e.formState.position,"onUpdate:value":a[5]||(a[5]=a=>e.formState.position=a),placeholder:e.t("routes.user.positionPlaceholder")},{default:K((()=>[(L(!0),B(G,null,J(e.positionOptions,(e=>(L(),$(b,{value:e.dictValue,key:e.id},{default:K((()=>[M(Q(e.dictLabel),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.sex"),name:"sex"},{default:K((()=>[D(y,{value:e.formState.sex,"onUpdate:value":a[6]||(a[6]=a=>e.formState.sex=a),options:e.sexOptions},null,8,["value","options"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.mobile"),name:"mobile"},{default:K((()=>[D(v,{value:e.formState.mobile,"onUpdate:value":a[7]||(a[7]=a=>e.formState.mobile=a),placeholder:e.t("routes.user.mobilePlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.status"),name:"status"},{default:K((()=>[D(y,{value:e.formState.status,"onUpdate:value":a[8]||(a[8]=a=>e.formState.status=a),options:e.disableOptions},null,8,["value","options"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.email"),name:"email"},{default:K((()=>[D(v,{value:e.formState.email,"onUpdate:value":a[9]||(a[9]=a=>e.formState.email=a),placeholder:e.t("routes.user.emailPlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),"1"!==e.formState.position?(L(),$(d,{key:2,span:12},{default:K((()=>[D(f,{label:e.t("routes.user.salary"),name:"salary"},{default:K((()=>[D(w,{class:"!w-[100%]",value:e.formState.salary,"onUpdate:value":a[10]||(a[10]=a=>e.formState.salary=a),placeholder:e.t("routes.user.salaryPlaceholder"),precision:2,formatter:e=>`￥ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\￥\s?|(,*)/g,"")},null,8,["value","placeholder","formatter","parser"])])),_:1},8,["label"])])),_:1})):Z("",!0),"1"!==e.formState.position?(L(),$(d,{key:3,span:12},{default:K((()=>[D(f,{label:e.t("routes.user.entryTime"),name:"entryTime"},{default:K((()=>[D(_,{class:"!w-[100%]",value:e.formState.entryTime,"onUpdate:value":a[11]||(a[11]=a=>e.formState.entryTime=a),placeholder:e.t("routes.user.entryTimePlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1})):Z("",!0),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.birthday"),name:"birthday"},{default:K((()=>[D(_,{class:"!w-[100%]",value:e.formState.birthday,"onUpdate:value":a[12]||(a[12]=a=>e.formState.birthday=a),placeholder:e.t("routes.user.birthdayPlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.education"),name:"education"},{default:K((()=>[D(g,{allowClear:"",value:e.formState.education,"onUpdate:value":a[13]||(a[13]=a=>e.formState.education=a),placeholder:e.t("routes.user.educationPlaceholder")},{default:K((()=>[(L(!0),B(G,null,J(e.educationOptions,(e=>(L(),$(b,{value:e.dictValue,key:e.id},{default:K((()=>[M(Q(e.dictLabel),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),D(d,{span:12},{default:K((()=>[D(f,{label:e.t("routes.user.remark"),name:"remark"},{default:K((()=>[D(S,{rows:3,value:e.formState.remark,"onUpdate:value":a[14]||(a[14]=a=>e.formState.remark=a),placeholder:e.t("routes.user.remarkPlaceholder")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1}),D(d,{span:24},{default:K((()=>[D(f,null,{default:K((()=>[D(u,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:K((()=>[M(Q(e.t("common.okText")),1)])),_:1},8,["onClick"]),D(u,{onClick:e.handleClose},{default:K((()=>[M(Q(e.t("common.cancelText")),1)])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","label-col","wrapper-col"])):Z("",!0)])),_:1},8,["title","visible","onClose"]),D(C,{visible:e.visible,"onUpdate:visible":a[17]||(a[17]=a=>e.visible=a),title:e.t("routes.user.resetPwd"),onOk:e.handleResetPwd,onCancel:e.handleResetClose},{default:K((()=>[A("div",te,[A("span",le,Q(e.t("routes.user.newPassword"))+"：",1),D(h,{value:e.newPassword,"onUpdate:value":a[16]||(a[16]=a=>e.newPassword=a),placeholder:e.t("routes.user.newPasswordPlaceholder")},null,8,["value","placeholder"])])])),_:1},8,["visible","title","onOk","onCancel"])])};export{Y as default};