webpackJsonp([8],{"9yWn":function(s,t){},Rf88:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("2uFj"),l=a("mtWM"),n=a.n(l),i={name:"message",head:{title:function(){return{inner:this.title}}},data:function(){return{title:"消息",message:[]}},created:function(){this.getMessage()},methods:{getMessage:function(){var s=this;n()({method:"get",url:e.x,params:{uId:JSON.parse(this.$localStorage.get("userInfo")).uId,pagesize:10}}).then(function(t){s.message=t.data.data.data})}}},c={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"message"},[a("Tabs",{attrs:{size:"small"}},[a("TabPane",{attrs:{label:"全部"}},[a("ul",{staticClass:"message-list"},s._l(s.message,function(t,e){return a("li",{key:e,staticClass:"row w"},[a("span",{staticClass:"col v-m"},[a("b",{staticClass:"title"},[a("Badge",{attrs:{dot:""}},[s._v(s._s(t.title))])],1),s._v(" "),a("span",{staticClass:"info"},[s._v(s._s(t.content))])]),s._v(" "),a("span",{staticClass:"col v-m t-r"},[a("span",{staticClass:"time"},[s._v(s._s(t.updated_at))])])])})),s._v(" "),a("div",{staticClass:"load-more"},[a("span",{staticClass:"hasmore"},[s._v("点击加载更多！")]),s._v(" "),a("span",{staticClass:"nomore"},[s._v("没有更多！")])])]),s._v(" "),a("TabPane",{attrs:{label:"接收"}},[a("ul",{staticClass:"message-list"},s._l(s.message,function(t,e){return a("li",{key:e,staticClass:"row w"},[a("span",{staticClass:"col v-m"},[a("b",{staticClass:"title"},[s._v(s._s(t.title))]),s._v(" "),a("span",{staticClass:"info"},[s._v(s._s(t.content))])]),s._v(" "),a("span",{staticClass:"col v-m t-r"},[a("span",{staticClass:"time"},[s._v(s._s(t.updated_at))])])])}))]),s._v(" "),a("TabPane",{attrs:{label:"发送"}},[a("ul",{staticClass:"message-list"},s._l(s.message,function(t,e){return a("li",{key:e,staticClass:"row w"},[a("span",{staticClass:"col v-m"},[a("b",{staticClass:"title"},[s._v(s._s(t.title))]),s._v(" "),a("span",{staticClass:"info"},[s._v(s._s(t.content))])]),s._v(" "),a("span",{staticClass:"col v-m t-r"},[a("span",{staticClass:"time"},[s._v(s._s(t.updated_at))])])])}))])],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,c,!1,function(s){a("9yWn")},null,null);t.default=r.exports}});
//# sourceMappingURL=8.35258740ef135864ebbe.js.map