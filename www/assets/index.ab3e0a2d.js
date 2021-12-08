import{u as L}from"./useI18n.25a437e0.js";import{_ as N}from"./index.da4ff793.js";import{d as Q,r as b,b as T,c as V,q as n,t as l,v as r,x as t,y as F,X as C,F as g,S as v,R as _,D as q,k as s}from"./ant-design-vue.27440fdb.js";const H=Q({props:{formFields:{type:Array,required:!0}},emits:["search","reset"],setup(a,{emit:u,attrs:h}){const{t:k}=L();console.log(a,u,h);const d=b(),m={};a.formFields.forEach(p=>{m[p.name]=p.value});const c=b(m);T(a.formFields,()=>{a.formFields.forEach(p=>{c.value[p.name]=p.value})},{deep:!0});const f=V(()=>a.formFields);return{t:k,formDataList:f,formState:c,formRef:d,handleQuery:()=>{u("search",c.value)},handleReset:()=>{d.value.resetFields(),u("reset",c.value)}}}});function I(a,u,h,k,d,m){const c=n("a-input"),f=n("a-cascader"),y=n("a-date-picker"),S=n("a-month-picker"),p=n("a-range-picker"),w=n("a-week-picker"),R=n("a-time-picker"),j=n("a-select-option"),z=n("a-select"),i=n("a-form-item"),U=n("a-button"),D=n("a-space"),$=n("a-form");return l(),r($,{ref:"formRef",layout:"inline",model:a.formState},{default:t(()=>[(l(!0),F(g,null,C(a.formDataList,(e,B)=>(l(),r(i,{key:B,label:e.label,name:e.name},{default:t(()=>[e.type==="input"?(l(),r(c,{key:0,allowClear:!0,value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o,placeholder:e.placeholder},null,8,["value","onUpdate:value","placeholder"])):e.type==="cascader"?(l(),r(f,{key:1,options:e.options?e.options:[],value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o,placeholder:e.placeholder},null,8,["options","value","onUpdate:value","placeholder"])):e.type==="date-picker"?(l(),r(y,{key:2,value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o,placeholder:e.placeholder},null,8,["value","onUpdate:value","placeholder"])):e.type==="month-picker"?(l(),r(S,{key:3,value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o,placeholder:e.placeholder},null,8,["value","onUpdate:value","placeholder"])):e.type==="range-picker"?(l(),r(p,{key:4,value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o},null,8,["value","onUpdate:value"])):e.type==="week-picker"?(l(),r(w,{key:5,value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o,placeholder:e.placeholder},null,8,["value","onUpdate:value","placeholder"])):e.type==="time-picker"?(l(),r(R,{key:6,value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o,format:e.format?e.format:"HH:mm"},null,8,["value","onUpdate:value","format"])):e.type==="select"?(l(),r(z,{key:7,placeholder:e.placeholder,style:{width:"200px"},value:a.formState[e.name],"onUpdate:value":o=>a.formState[e.name]=o},{default:t(()=>[(l(!0),F(g,null,C(e.options,(o,E)=>(l(),r(j,{value:o[e.normalizer?e.normalizer.value:"value"],key:E},{default:t(()=>[v(_(o[e.normalizer?e.normalizer.label:"label"]),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["placeholder","value","onUpdate:value"])):q("",!0)]),_:2},1032,["label","name"]))),128)),s(i,null,{default:t(()=>[s(D,null,{default:t(()=>[s(U,{type:"primary",onClick:a.handleQuery},{default:t(()=>[v(_(a.t("common.searchText")),1)]),_:1},8,["onClick"]),s(U,{onClick:a.handleReset},{default:t(()=>[v(_(a.t("common.resetText")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["model"])}var J=N(H,[["render",I]]);export{J as F};