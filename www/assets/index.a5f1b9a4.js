import{u as e}from"./useI18n.94ac6758.js";import{d as a,r as t,c as s,b as l,q as d,t as n,A as r,k as p,x as c,V as o,U as u,B as i,F as x}from"./ant-design-vue.5cd75ca8.js";var h=a({props:{data:{type:Array,required:!0},original:{type:Array,default:()=>[]},baseFields:{type:Object,default:()=>({children:"children",title:"title",key:"id"})}},emits:["select"],setup(a,{emit:d}){const{t:n}=e(),r=t(""),p=t([]),c=t([]),o=t(!0),u=s((()=>a.data)),i=s((()=>a.baseFields)),x=s((()=>a.original));return l(r,(e=>{const a=x.value.map((a=>a.deptName.indexOf(e)>-1?a.deptId:null)).filter(((e,a,t)=>e&&t.indexOf(e)===a));c.value=a,r.value=e,o.value=!0})),l(p,(e=>{})),{t:n,searchValue:r,expandedKeys:c,autoExpandParent:o,deptTreeOption:u,replaceFields:i,selectedKeys:p,onExpand:e=>{c.value=e,o.value=!1},handleSelect:e=>{d("select",e)}}}});const y={key:0},f={class:"text-red-400"},v={key:1};h.render=function(e,a,t,s,l,h){const m=d("svg-icon"),K=d("a-input"),V=d("a-tree");return n(),r(x,null,[p(K,{allowClear:!0,value:e.searchValue,"onUpdate:value":a[0]||(a[0]=a=>e.searchValue=a),placeholder:e.t("component.deptSearch.placeholder")},{prefix:c((()=>[p(m,{name:"search",class:"text-[#d9d9d9]"})])),_:1},8,["value","placeholder"]),p(V,{blockNode:!0,expandedKeys:e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"replace-fields":e.replaceFields,"tree-data":e.deptTreeOption,selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":a[1]||(a[1]=a=>e.selectedKeys=a),onExpand:e.onExpand,onSelect:e.handleSelect},{title:c((({deptName:a})=>[a.indexOf(e.searchValue)>-1?(n(),r("span",y,[o(u(a.substr(0,a.indexOf(e.searchValue)))+" ",1),i("span",f,u(e.searchValue),1),o(" "+u(a.substr(a.indexOf(e.searchValue)+e.searchValue.length)),1)])):(n(),r("span",v,u(a),1))])),_:1},8,["expandedKeys","auto-expand-parent","replace-fields","tree-data","selectedKeys","onExpand","onSelect"])],64)};export{h as _};
