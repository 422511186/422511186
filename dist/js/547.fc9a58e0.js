"use strict";(self["webpackChunkpoetrymirror"]=self["webpackChunkpoetrymirror"]||[]).push([[547],{7547:function(e,s,t){t.r(s),t.d(s,{default:function(){return U}});var n=t(6252),l=t(3577),i=t(7924),a=t(6407),c=t(4850),d=t(6987);const o=e=>((0,n.dD)("data-v-7ad2170b"),e=e(),(0,n.Cn)(),e),u={class:"box"},r={class:"tag"},h={class:"Text"},m=(0,n.Uk)("每日推荐"),_=o((()=>(0,n._)("div",{class:"yuan"},null,-1))),p=o((()=>(0,n._)("i",{class:"dividing-line"},null,-1))),g={class:"top-box"},f={class:"poem"},v={class:"main"},x={class:"left"},w=o((()=>(0,n._)("i",{class:"ic1"},null,-1))),k=o((()=>(0,n._)("div",{class:"text"},[(0,n._)("h2",null,"寻诗")],-1))),b=[w,k],C=o((()=>(0,n._)("i",{class:"ic2"},null,-1))),y=o((()=>(0,n._)("div",{class:"text"},[(0,n._)("h2",null,"作诗")],-1))),W=[C,y],$=o((()=>(0,n._)("i",{class:"battle-ic"},null,-1))),I=o((()=>(0,n._)("div",{class:"text"},[(0,n._)("h2",null,"对战")],-1))),P=[$,I],z={class:"right"},D=o((()=>(0,n._)("img",{class:"img-1",src:i,alt:""},null,-1))),T=o((()=>(0,n._)("h2",null,"AI对诗",-1))),j=o((()=>(0,n._)("img",{class:"img-1",src:a,alt:""},null,-1))),A=o((()=>(0,n._)("h2",null,"海报生成",-1))),O=o((()=>(0,n._)("img",{class:"img-1",src:c,alt:""},null,-1))),q=o((()=>(0,n._)("h2",null,"诗人名录",-1))),E=o((()=>(0,n._)("img",{class:"img-1",src:d,alt:""},null,-1))),G=o((()=>(0,n._)("h2",null,"含诗歌姓名生成",-1)));function H(e,s,t,i,a,c){const d=(0,n.up)("router-link"),o=(0,n.up)("el-carousel-item"),w=(0,n.up)("el-carousel");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",null,[(0,n._)("div",r,[(0,n._)("span",h,[(0,n.Wm)(d,{to:"/"},{default:(0,n.w5)((()=>[m])),_:1})])]),_,p]),(0,n._)("div",g,[(0,n._)("div",{class:"prev",onClick:s[0]||(s[0]=(...e)=>c.reduce&&c.reduce(...e))}),(0,n._)("div",{class:"next",onClick:s[1]||(s[1]=(...e)=>c.add&&c.add(...e))}),a.show?((0,n.wg)(),(0,n.j4)(w,{key:0,height:"300px","indicator-position":"none",arrow:"never",interval:5e3,onChange:c.changeCampus,ref:"remarkCarusel"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.poems,(e=>((0,n.wg)(),(0,n.j4)(o,{key:e},{default:(0,n.w5)((()=>[(0,n._)("div",f,[(0,n._)("div",null,[(0,n._)("h1",null,"--"+(0,l.zw)(e.poem)+"《"+(0,l.zw)(e.name)+"》",1)]),(0,n._)("p",null,(0,l.zw)(e.content),1)])])),_:2},1024)))),128))])),_:1},8,["onChange"])):(0,n.kq)("",!0)]),(0,n._)("nav",v,[(0,n._)("div",x,[(0,n._)("div",{class:"card",onClick:s[2]||(s[2]=e=>this.$router.push("/forPoetry"))},b),(0,n._)("div",{class:"card",onClick:s[3]||(s[3]=e=>this.$router.push("/doPoems"))},W),(0,n._)("div",{class:"card",onClick:s[4]||(s[4]=e=>this.$router.push("/gameIndex"))},P)]),(0,n._)("div",z,[(0,n._)("div",null,[(0,n.Wm)(d,{to:"/aiToPoetry"},{default:(0,n.w5)((()=>[D,T])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(d,{to:"/poster"},{default:(0,n.w5)((()=>[j,A])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(d,{to:"/poetsList"},{default:(0,n.w5)((()=>[O,q])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(d,{to:"/doName"},{default:(0,n.w5)((()=>[E,G])),_:1})])])])])}var K={name:"main-component",watch:{index(){this.$refs.remarkCarusel.setActiveItem(this.index)}},mounted(){this.$axios({url:"/api/recommend/",method:"GET"}).then((e=>{this.poems=e.data,this.show=!0})).catch((()=>{this.show=!0}))},data(){return{index:0,poems:[{id:512,name:"观田家",dynasty:null,poem:"韦应物",content:"微雨众卉新，一雷惊蛰始",tag:"惊蛰"}],show:!1}},methods:{reduce(){0===this.index?this.index=this.poems.length-1:this.index--},add(){this.index===this.poems.length-1?this.index=0:this.index++},changeCampus(e){this.index=e},getPoem(e){let s=this.poems[e],t=["雨","雪","晴","风","云"];return-1===t.indexOf(s.tag)?s.content:s.content.substr(0,s.content.indexOf("。")+1)}}},L=t(3744);const N=(0,L.Z)(K,[["render",H],["__scopeId","data-v-7ad2170b"]]);var U=N},4850:function(e,s,t){e.exports=t.p+"img/314e251f95cad1c89f5749113515d00cc83d51cc.6b2e3549.png"},6987:function(e,s,t){e.exports=t.p+"img/717fbc8fd7397febe946d28e876975a.3bb78457.png"},6407:function(e,s,t){e.exports=t.p+"img/8809c146eb1770d79f1df245c4ee29d.1e3ee74c.png"},7924:function(e,s,t){e.exports=t.p+"img/9cc546f784ae5f63868b180e43f02a4.642ce9a0.png"}}]);
//# sourceMappingURL=547.fc9a58e0.js.map