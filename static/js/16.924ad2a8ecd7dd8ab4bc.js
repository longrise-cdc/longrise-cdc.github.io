webpackJsonp([16],{"QX2+":function(t,e){},wvNF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("mtWM"),n=a.n(l),i=a("2uFj"),s=a("KeBu"),o=a("KgXo"),d={data:function(){return{loading:!1,tag:["primary","success","warning","danger"],filterText:"",list:[],current:{},modal:{add:!1,del:!1},add:{name:"",parent:"",uId:JSON.parse(this.$localStorage.get("userInfo")).uId},del:{uId:JSON.parse(this.$localStorage.get("userInfo")).uId,id:""},defaultProps:{children:"children",label:"name"}}},created:function(){this.getList()},components:{empty:s.a,AppLoading:o.a},methods:{clearCurrent:function(){console.log("清空"),this.current={}},getList:function(){var t=this;this.loading=!this.loading,this.list=[],n()({method:"get",url:i.a}).then(function(e){t.loading=!t.loading,"[object Array]"===Object.prototype.toString.call(e.data.data)?t.list=e.data.data:t.list.push(e.data.data),console.log(t.list)})},addSubmit:function(){var t=this;n()({method:"get",url:i.d,params:this.add}).then(function(e){t.$message({message:e.data.msg,type:e.data.status?"success":"error"}),t.modal.add=!1,t.getList()})},modalAdd:function(t){t&&(this.current=t,this.add.parent=t.uId),this.modal.add=!0},delSubmit:function(){var t=this;n()({method:"get",url:i.o,params:this.del}).then(function(e){t.$message({message:e.data.msg,type:e.data.status?"success":"error"}),t.modal.del=!1,t.getList()}),this.modal.del=!1},modalDel:function(t){this.current=t,this.del.id=t.uId,this.modal.del=!0}},watch:{filterText:function(t){this.$refs.tree.filter(t)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-view",staticStyle:{"padding-bottom":"10px"}},[a("div",{staticStyle:{height:"55px","margin-top":"-55px",padding:"8px 10px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.modalAdd(null,null)}}},[t._v("添加一级分类")])],1),t._v(" "),t.list?a("div",{staticClass:"admin-main",staticStyle:{overflow:"auto"}},[a("el-row",{attrs:{gutter:20}},t._l(t.list,function(e,l){return a("el-col",{key:l,attrs:{span:8}},[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.name))]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"5px 10px","margin-left":"10px"},attrs:{type:"danger"},on:{click:function(a){t.modalDel(e)}}},[t._v("删除")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"5px 10px"},attrs:{type:"primary"},on:{click:function(a){t.modalAdd(e)}}},[t._v("添加分类")])],1),t._v(" "),t._l(e.children,function(e){return a("el-tag",{key:e.name,staticStyle:{margin:"5px"},attrs:{closable:"",type:t.tag[l]},on:{close:function(a){t.modalDel(e)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})],2)],1)})),t._v(" "),t.list.length||t.loading?t._e():a("empty",[a("img",{attrs:{slot:"icon",src:"static/tip1.png",alt:""},slot:"icon"}),t._v(" "),a("p",{attrs:{slot:"text"},slot:"text"},[t._v("还没有添加任何部门哦！\n        "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.modalAdd(null,null)}}},[t._v("前去添加")])],1)]),t._v(" "),t.loading?a("app-loading",{staticStyle:{height:"100%"},attrs:{name:"tail-spin"}},[a("span",{attrs:{slot:"text"},slot:"text"},[t._v("正在努力加载中，请稍后！")])]):t._e()],1):t._e(),t._v(" "),a("el-dialog",{attrs:{title:Object.keys(t.current).length?"请填写子分类":"请填顶级分类",visible:t.modal.add,width:"30%"},on:{"update:visible":function(e){t.$set(t.modal,"add",e)},close:t.clearCurrent}},[Object.keys(t.current).length?a("p",{staticStyle:{"margin-bottom":"20px"}},[t._v("您正在添加"),a("span",{staticStyle:{color:"#D94447",margin:"0 5px"}},[t._v(t._s(t.current.name))]),t._v("的二级部门")]):t._e(),t._v(" "),a("el-input",{attrs:{placeholder:"请填写部门名称",clearable:""},model:{value:t.add.name,callback:function(e){t.$set(t.add,"name",e)},expression:"add.name"}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.modal.add=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"确认删除",visible:t.modal.del,width:"30%"},on:{"update:visible":function(e){t.$set(t.modal,"del",e)}}},[a("p",{staticStyle:{"margin-bottom":"20px"}},[t._v("您正在删除"),a("span",{staticStyle:{color:"#D94447",margin:"0 5px"}},[t._v(t._s(t.current.name))])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.modal.del=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.delSubmit}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(d,r,!1,function(t){a("QX2+")},null,null);e.default=c.exports}});
//# sourceMappingURL=16.924ad2a8ecd7dd8ab4bc.js.map