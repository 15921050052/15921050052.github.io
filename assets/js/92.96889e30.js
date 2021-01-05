(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{344:function(t,s,n){t.exports=n.p+"assets/img/boxmenu.0d90a8fa.png"},451:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"自定义-boxmenu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-boxmenu","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义 Boxmenu")]),t._v(" "),a("h3",{attrs:{id:"效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),a("p",[a("img",{attrs:{src:n(344),alt:"boxmenu"}})]),t._v(" "),a("h3",{attrs:{id:"sample-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-代码","aria-hidden":"true"}},[t._v("#")]),t._v(" sample 代码")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boxmenu")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FreshalRoute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" title "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Boxmenu'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),a("span",{attrs:{class:"token function"}},[t._v("buildMyRouteContent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/// Boxmenu的宽高比列")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" double aspectRatio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.75")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("///  portrait：Taller than wide,")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("///  landscape：Wider than tall.")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("///  简单的说portrait就是竖屏，landscape是横屏")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("///  如果横屏放3列，如果竖屏放4列")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int columnCount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MediaQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("of")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" Orientation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("portrait"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/// TODO : move to constants.dart")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/// 创建菜单项目")]),t._v("\n    List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("BoxMenuItem"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" menus "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ELECTRICITY"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bolt"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'electricity pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"WATER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tint"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'water pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"MOBILE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mobile"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mobile pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ELECTRICITY"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bolt"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'electricity pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"WATER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tint"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'water pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"MOBILE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mobile"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mobile pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ELECTRICITY"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bolt"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'electricity pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"WATER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tint"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'water pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"MOBILE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mobile"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mobile pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ELECTRICITY"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bolt"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'electricity pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"WATER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FontAwesomeIcons"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tint"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'water pressed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("SingleChildScrollView")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LayoutBuilder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BoxConstraints constraints"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double columnWidth "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" constraints"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("biggest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n              columnCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toDouble")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("columnWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token comment"}},[t._v("/// 最高225，随便定的一般现在都有1280了，所以至少能一屏幕显示4行菜单")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double rowHeight "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("225.0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" columnWidth "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" aspectRatio"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token function"}},[t._v("print")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token comment"}},[t._v("/// 11个项目，每行3个，应该就是4行。")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int rowCount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" columnCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ceil")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            padding"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EdgeInsets"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("symmetric")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertical"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("8.0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),a("span",{attrs:{class:"token comment"}},[t._v("/// 文档说，RepaintBoundary widget在渲染树的层中创建了一个RenderRepaintBoundary。这用于减少需要重绘的需求量。")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("/// 我的理解是，RepaintBoundary会减少其children的重绘，可以提高性能")]),t._v("\n            child"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("RepaintBoundary")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              child"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Column")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("上海海洋大学\n                children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" Widget"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("generate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int rowIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("/// 计算每行列数")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("/// 如果是最后一列，那么就是剩下的菜单数量比如11个项目，最后一行是第4行，rowIndex是3,")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("///  menus.length - columnCount * math.max(0, rowCount - 1)")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("///  = 11 - 3 * math.max(0,4-1) = 2")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("///  即最后一行为2列。")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int columnCountForRow "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" rowIndex "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" rowCount "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n                    "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" menus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" columnCount "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rowCount "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" columnCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Row")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" Widget"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("generate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("columnCountForRow"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    int columnIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int index "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" rowIndex "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" columnCount "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" columnIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                  "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" BoxMenuItem menuItem "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" menus"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("SizedBox")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" columnWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rowHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    child"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Card "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                      color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grey"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shade300"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      "),a("span",{attrs:{class:"token comment"}},[t._v("/// customer widget")]),t._v("\n                      child"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LabelBelowIcon")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        betweenHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15.0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" menuItem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" menuItem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        iconColor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indigo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shade800"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        isCircleEnabled"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        onPressed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" menuItem"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onPressed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                      "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String _label"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" IconData _icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" _onPressed"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" label "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" _label"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" icon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" _icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" onPressed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" _onPressed"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("BoxMenuItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_label"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_onPressed"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br"),a("span",{staticClass:"line-number"},[t._v("85")]),a("br"),a("span",{staticClass:"line-number"},[t._v("86")]),a("br"),a("span",{staticClass:"line-number"},[t._v("87")]),a("br"),a("span",{staticClass:"line-number"},[t._v("88")]),a("br"),a("span",{staticClass:"line-number"},[t._v("89")]),a("br"),a("span",{staticClass:"line-number"},[t._v("90")]),a("br"),a("span",{staticClass:"line-number"},[t._v("91")]),a("br"),a("span",{staticClass:"line-number"},[t._v("92")]),a("br"),a("span",{staticClass:"line-number"},[t._v("93")]),a("br"),a("span",{staticClass:"line-number"},[t._v("94")]),a("br"),a("span",{staticClass:"line-number"},[t._v("95")]),a("br"),a("span",{staticClass:"line-number"},[t._v("96")]),a("br"),a("span",{staticClass:"line-number"},[t._v("97")]),a("br"),a("span",{staticClass:"line-number"},[t._v("98")]),a("br"),a("span",{staticClass:"line-number"},[t._v("99")]),a("br"),a("span",{staticClass:"line-number"},[t._v("100")]),a("br"),a("span",{staticClass:"line-number"},[t._v("101")]),a("br"),a("span",{staticClass:"line-number"},[t._v("102")]),a("br")])])])}],o=n(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);e.options.__file="boxmenu.md";s.default=e.exports}}]);