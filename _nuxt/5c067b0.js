(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{279:function(t,e,n){"use strict";var j=n(8),r=n(613),o=n.n(r);j.default.use(o.a)},308:function(t,e,n){},616:function(t,e,n){"use strict";n(617);var j=n(145),r=n(184),o=n(283),c=n(284),l=n(206),f=n(33),h=(n(83),n(35),n(143),n(144),n(273));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,j=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(j,arguments,r)}else n=j.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var j,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(j=t[i])&&(o=(r<3?j(o):r>3?j(e,n,o):j(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=d(n);function n(){var t;return Object(j.a)(this,n),(t=e.apply(this,arguments)).routes=["/","/transformation","/conversion"],t}return Object(r.a)(n,[{key:"changePath",value:function(t){var e=t.key,n=parseInt(e)-1;this.$router.push(this.routes[n])}},{key:"defaultKey",get:function(){return[(this.routes.indexOf(this.$route.path)+1).toString()]}}]),n}(h.b),v=y=m([h.a],y),k=(n(663),n(88)),component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticClass:"layout"},[n("a-layout-header",{staticStyle:{"background-color":"white",display:"flex","justify-content":"center",position:"fixed",width:"100%","z-index":"99999999"}},[n("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"light",mode:"horizontal","default-selected-keys":t.defaultKey},on:{click:t.changePath}},[n("a-menu-item",{key:"1"},[t._v(" Home ")]),t._v(" "),n("a-menu-item",{key:"2"},[t._v(" Transformation ")]),t._v(" "),n("a-menu-item",{key:"3"},[t._v(" Conversion ")])],1)],1),t._v(" "),n("a-layout-content",{staticStyle:{padding:"0 50px","background-color":"#ffffff"}},[n("div",{style:{padding:"6em 24px 24px 24px",minHeight:"90vh"}},[n("Nuxt")],1)]),t._v(" "),n("a-layout-footer",{staticStyle:{"text-align":"center","background-color":"white"}},[t._v("\n    Ant Design ©2018 Created by Ant UED\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},620:function(t,e,n){n(621),t.exports=n(622)},660:function(t,e,n){},663:function(t,e,n){"use strict";n(308)},852:function(t,e,n){var map={"./af":379,"./af.js":379,"./ar":380,"./ar-dz":381,"./ar-dz.js":381,"./ar-kw":382,"./ar-kw.js":382,"./ar-ly":383,"./ar-ly.js":383,"./ar-ma":384,"./ar-ma.js":384,"./ar-sa":385,"./ar-sa.js":385,"./ar-tn":386,"./ar-tn.js":386,"./ar.js":380,"./az":387,"./az.js":387,"./be":388,"./be.js":388,"./bg":389,"./bg.js":389,"./bm":390,"./bm.js":390,"./bn":391,"./bn-bd":392,"./bn-bd.js":392,"./bn.js":391,"./bo":393,"./bo.js":393,"./br":394,"./br.js":394,"./bs":395,"./bs.js":395,"./ca":396,"./ca.js":396,"./cs":397,"./cs.js":397,"./cv":398,"./cv.js":398,"./cy":399,"./cy.js":399,"./da":400,"./da.js":400,"./de":401,"./de-at":402,"./de-at.js":402,"./de-ch":403,"./de-ch.js":403,"./de.js":401,"./dv":404,"./dv.js":404,"./el":405,"./el.js":405,"./en-au":406,"./en-au.js":406,"./en-ca":407,"./en-ca.js":407,"./en-gb":408,"./en-gb.js":408,"./en-ie":409,"./en-ie.js":409,"./en-il":410,"./en-il.js":410,"./en-in":411,"./en-in.js":411,"./en-nz":412,"./en-nz.js":412,"./en-sg":413,"./en-sg.js":413,"./eo":414,"./eo.js":414,"./es":415,"./es-do":416,"./es-do.js":416,"./es-mx":417,"./es-mx.js":417,"./es-us":418,"./es-us.js":418,"./es.js":415,"./et":419,"./et.js":419,"./eu":420,"./eu.js":420,"./fa":421,"./fa.js":421,"./fi":422,"./fi.js":422,"./fil":423,"./fil.js":423,"./fo":424,"./fo.js":424,"./fr":425,"./fr-ca":426,"./fr-ca.js":426,"./fr-ch":427,"./fr-ch.js":427,"./fr.js":425,"./fy":428,"./fy.js":428,"./ga":429,"./ga.js":429,"./gd":430,"./gd.js":430,"./gl":431,"./gl.js":431,"./gom-deva":432,"./gom-deva.js":432,"./gom-latn":433,"./gom-latn.js":433,"./gu":434,"./gu.js":434,"./he":435,"./he.js":435,"./hi":436,"./hi.js":436,"./hr":437,"./hr.js":437,"./hu":438,"./hu.js":438,"./hy-am":439,"./hy-am.js":439,"./id":440,"./id.js":440,"./is":441,"./is.js":441,"./it":442,"./it-ch":443,"./it-ch.js":443,"./it.js":442,"./ja":444,"./ja.js":444,"./jv":445,"./jv.js":445,"./ka":446,"./ka.js":446,"./kk":447,"./kk.js":447,"./km":448,"./km.js":448,"./kn":449,"./kn.js":449,"./ko":450,"./ko.js":450,"./ku":451,"./ku.js":451,"./ky":452,"./ky.js":452,"./lb":453,"./lb.js":453,"./lo":454,"./lo.js":454,"./lt":455,"./lt.js":455,"./lv":456,"./lv.js":456,"./me":457,"./me.js":457,"./mi":458,"./mi.js":458,"./mk":459,"./mk.js":459,"./ml":460,"./ml.js":460,"./mn":461,"./mn.js":461,"./mr":462,"./mr.js":462,"./ms":463,"./ms-my":464,"./ms-my.js":464,"./ms.js":463,"./mt":465,"./mt.js":465,"./my":466,"./my.js":466,"./nb":467,"./nb.js":467,"./ne":468,"./ne.js":468,"./nl":469,"./nl-be":470,"./nl-be.js":470,"./nl.js":469,"./nn":471,"./nn.js":471,"./oc-lnc":472,"./oc-lnc.js":472,"./pa-in":473,"./pa-in.js":473,"./pl":474,"./pl.js":474,"./pt":475,"./pt-br":476,"./pt-br.js":476,"./pt.js":475,"./ro":477,"./ro.js":477,"./ru":478,"./ru.js":478,"./sd":479,"./sd.js":479,"./se":480,"./se.js":480,"./si":481,"./si.js":481,"./sk":482,"./sk.js":482,"./sl":483,"./sl.js":483,"./sq":484,"./sq.js":484,"./sr":485,"./sr-cyrl":486,"./sr-cyrl.js":486,"./sr.js":485,"./ss":487,"./ss.js":487,"./sv":488,"./sv.js":488,"./sw":489,"./sw.js":489,"./ta":490,"./ta.js":490,"./te":491,"./te.js":491,"./tet":492,"./tet.js":492,"./tg":493,"./tg.js":493,"./th":494,"./th.js":494,"./tk":495,"./tk.js":495,"./tl-ph":496,"./tl-ph.js":496,"./tlh":497,"./tlh.js":497,"./tr":498,"./tr.js":498,"./tzl":499,"./tzl.js":499,"./tzm":500,"./tzm-latn":501,"./tzm-latn.js":501,"./tzm.js":500,"./ug-cn":502,"./ug-cn.js":502,"./uk":503,"./uk.js":503,"./ur":504,"./ur.js":504,"./uz":505,"./uz-latn":506,"./uz-latn.js":506,"./uz.js":505,"./vi":507,"./vi.js":507,"./x-pseudo":508,"./x-pseudo.js":508,"./yo":509,"./yo.js":509,"./zh-cn":510,"./zh-cn.js":510,"./zh-hk":511,"./zh-hk.js":511,"./zh-mo":512,"./zh-mo.js":512,"./zh-tw":513,"./zh-tw.js":513};function j(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}j.keys=function(){return Object.keys(map)},j.resolve=r,t.exports=j,j.id=852}},[[620,5,1,6]]]);