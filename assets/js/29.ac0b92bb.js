(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{388:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"image-magick生成文字图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-magick生成文字图片","aria-hidden":"true"}},[a._v("#")]),a._v(" Image Magick生成文字图片")]),a._v(" "),s("h2",{attrs:{id:"圆角"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圆角","aria-hidden":"true"}},[a._v("#")]),a._v(" 圆角")]),a._v(" "),s("p",[a._v("先生成圆角背景图片")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("magick convert -size 64x64 xc:none -fill "),s("span",{attrs:{class:"token comment"}},[a._v('#2e692f -draw "roundRectangle 0,0 64,64 10,10" 1.png')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在图片上添加文字")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("magick convert 1.png -fill white -font SIMHEI -gravity center  -pointsize 28 -draw "),s("span",{attrs:{class:"token string"}},[a._v("\"text 0,0 '鲜美'\"")]),a._v(" 4.png\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}],!1,null,null,null);n.options.__file="magick.md";e.default=n.exports}}]);