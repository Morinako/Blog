(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eba5cd9"],{"0944":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"message-banner",style:t.cover},[s("div",{staticClass:"message-container"},[s("h1",{staticClass:"message-title"},[t._v("留言板")]),s("div",{staticClass:"animated fadeInUp message-input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.messageContent,expression:"messageContent"}],attrs:{placeholder:"说点什么吧"},domProps:{value:t.messageContent},on:{click:function(e){t.show=!0},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToList(e)},input:function(e){e.target.composing||(t.messageContent=e.target.value)}}}),s("button",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ml-3 animated bounceInLeft",on:{click:t.addToList}},[t._v(" 发送 ")])])]),s("div",{staticClass:"barrage-container"},[s("vue-baberrage",{attrs:{barrageList:t.barrageList},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"barrage-items"},[s("img",{staticStyle:{"border-radius":"50%"},attrs:{src:e.item.avatar,width:"30",height:"30"}}),s("span",{staticClass:"ml-2"},[t._v(t._s(e.item.nickname)+" :")]),s("span",{staticClass:"ml-2"},[t._v(t._s(e.item.messageContent))])])]}}])})],1)])])},n=[],i=(s("4160"),s("498a"),s("159b"),s("c24f")),r={mounted:function(){this.listMessage()},data:function(){return{show:!1,messageContent:"",barrageList:[]}},methods:{addToList:function(){if(""===this.messageContent.trim())return this.$toast({type:"error",message:"留言不能为空"}),!1;var t=this.$store.state.avatar?this.$store.state.avatar:this.$store.state.blogInfo.websiteConfig.touristAvatar,e=this.$store.state.nickname?this.$store.state.nickname:"游客",s={avatar:t,nickname:e,messageContent:this.messageContent,time:Math.floor(3*Math.random())+7};this.barrageList.push(s),this.messageContent="",Object(i["e"])(s)},listMessage:function(){var t=this;Object(i["c"])().then((function(e){e.flag&&(t.barrageList=e.data)}))}},computed:{cover:function(){var t="";return this.$store.state.blogInfo.pageList.forEach((function(e){"message"===e.pageLabel&&(t=e.pageCover)})),"background: url("+t+") center center / cover no-repeat"}}},o=r,c=(s("7f0f"),s("2877")),u=Object(c["a"])(o,a,n,!1,null,"43e5e964",null);e["default"]=u.exports},"34e0":function(t,e,s){},"7f0f":function(t,e,s){"use strict";var a=s("34e0"),n=s.n(a);n.a}}]);