webpackJsonp([11],{"7POG":function(t,a){},hugQ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=s("2uFj"),e=s("mtWM"),o=s.n(e),i={name:"author",head:{title:function(){return{inner:this.title}}},data:function(){return{title:"主题管理",list:null,add:{uId:JSON.parse(this.$localStorage.get("userInfo")).uId,name:"",color1:"",color2:""},modal:{add:!1}}},created:function(){this.getList()},methods:{addSubmit:function(){var t=this;o()({method:"get",url:l.e,params:this.add}).then(function(a){t.$message({message:a.data.msg,type:a.data.status?"success":"error"}),t.modal.add=!1,console.log(a),t.getList()})},getList:function(){var t=this;o()({method:"get",url:l.N,params:{sort:"asc"}}).then(function(a){t.list=a.data.data,console.log(t.list)})}},watch:{color:"renderCss"}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-view"},[s("div",{staticClass:"page-title"},[s("ul",{staticClass:"row w h"},[s("li",{staticClass:"col v-m g-4"},[t._v("主题管理")]),t._v(" "),s("li",{staticClass:"col v-m t-r"},[s("el-button",{attrs:{size:"small"},on:{click:function(a){t.modal.add=!0}}},[t._v("添加主题")])],1)])]),t._v(" "),s("div",{staticClass:"admin-main"},[t.list?s("ul",{staticClass:"grid theme-list"},t._l(t.list,function(a,l){return s("li",{key:l,staticClass:"grid-item g-4"},[s("div",{staticClass:"theme-item",style:"background:"+a.color1},[s("ul",{staticClass:"row w bottom"},[s("li",{staticClass:"col v-m"},[s("h2",{staticClass:"name"},[t._v(t._s(a.name))])]),t._v(" "),s("li",{staticClass:"col v-m hot t-r"},[s("span",{staticClass:"iconfont icon-hot"}),t._v(" "),s("span",{staticClass:"v-m"},[t._v(t._s(a.use.length))])])])])])})):t._e()]),t._v(" "),s("el-dialog",{attrs:{title:"添加主题",visible:t.modal.add,width:"50%"},on:{"update:visible":function(a){t.$set(t.modal,"add",a)}}},[s("el-form",{attrs:{model:t.add,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"主题名称"}},[s("el-input",{model:{value:t.add.name,callback:function(a){t.$set(t.add,"name",a)},expression:"add.name"}})],1),t._v(" "),s("ul",{staticClass:"row w"},[s("li",{staticClass:"col v-m g-6"},[s("el-form-item",{attrs:{label:"主色调"}},[s("el-color-picker",{staticClass:"v-m",attrs:{"show-alpha":""},model:{value:t.add.color1,callback:function(a){t.$set(t.add,"color1",a)},expression:"add.color1"}})],1)],1),t._v(" "),s("li",{staticClass:"col v-m g-6"},[s("el-form-item",{attrs:{label:"辅助颜色"}},[s("el-color-picker",{staticClass:"v-m",attrs:{"show-alpha":""},model:{value:t.add.color2,callback:function(a){t.$set(t.add,"color2",a)},expression:"add.color2"}})],1)],1),t._v(" "),s("li",{staticClass:"col v-m"},[s("p",{staticClass:"tips"},[t._v("选择颜色之后，会自动生成css代码！")])])])],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(a){t.modal.add=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var n=s("VU/8")(i,c,!1,function(t){s("7POG")},null,null);a.default=n.exports}});
//# sourceMappingURL=11.dfc6e1922162dfd3187b.js.map