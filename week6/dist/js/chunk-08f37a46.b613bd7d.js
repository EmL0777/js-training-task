(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f37a46"],{"1dde":function(t,r,n){var o=n("d039"),e=n("b622"),c=n("2d00"),i=e("species");t.exports=function(t){return c>=51||!o((function(){var r=[],n=r.constructor={};return n[i]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,n){var o=n("861d"),e=n("e8b5"),c=n("b622"),i=c("species");t.exports=function(t,r){var n;return e(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!e(n.prototype)?o(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},8418:function(t,r,n){"use strict";var o=n("c04e"),e=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var i=o(r);i in t?e.f(t,i,c(0,n)):t[i]=n}},"99af":function(t,r,n){"use strict";var o=n("23e7"),e=n("d039"),c=n("e8b5"),i=n("861d"),u=n("7b0b"),a=n("50c4"),s=n("8418"),d=n("65f0"),f=n("1dde"),p=n("b622"),l=n("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",y=l>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=f("concat"),w=function(t){if(!i(t))return!1;var r=t[v];return void 0!==r?!!r:c(t)},x=!y||!_;o({target:"Array",proto:!0,forced:x},{concat:function(t){var r,n,o,e,c,i=u(this),f=d(i,0),p=0;for(r=-1,o=arguments.length;r<o;r++)if(c=-1===r?i:arguments[r],w(c)){if(e=a(c.length),p+e>h)throw TypeError(b);for(n=0;n<e;n++,p++)n in c&&s(f,p,c[n])}else{if(p>=h)throw TypeError(b);s(f,p++,c)}return f.length=p,f}})},e6dc:function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("h1",[t._v("產品列表")]),n("table",t._l(t.products,(function(r){return n("tr",{key:r.id},[n("td",[t._v(t._s(r.title))]),n("td",[t._v(t._s(r.content))]),n("td",[t._v(t._s(r.price))]),n("td",[n("router-link",{attrs:{to:"product/"+r.id}},[t._v("看產品")])],1)])})),0)])},e=[],c=(n("99af"),{name:"Products",data:function(){return{products:[]}},methods:{getProducts:function(){var t=this,r="".concat("https://course-ec-api.hexschool.io","/api/").concat("d5cc7331-56ba-49f5-9c9f-6c2038f2b0a8","/ec/products?sort=asc");this.$http.get(r).then((function(r){t.products=r.data.data}))}},created:function(){this.getProducts()}}),i=c,u=n("2877"),a=Object(u["a"])(i,o,e,!1,null,null,null);r["default"]=a.exports},e8b5:function(t,r,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-08f37a46.b613bd7d.js.map