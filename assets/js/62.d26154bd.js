(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{312:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"验证括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证括号","aria-hidden":"true"}},[s._v("#")]),s._v(" 验证括号")]),s._v(" "),a("p",[s._v("给定一个字符串，如果括号的出现顺序是(),()(),或者（（））,我们认为括号是有效的。如果出现顺序是))，或者)(，或者))((，则认为是无效的。现在需要写一个函数，判断给定的字符串是否有效。")]),s._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),a("ul",[a("li",[s._v('1 括号必须成对出现，每一个")"之前必然有一个"("，这样才能保证括号是有效的。')]),s._v(" "),a("li",[s._v('2 可以考虑使用Stack方式处理，循环括号字符串，每遇到一个"(",就入栈一个")"，当遇到")"时，就pop出一个元素，如果pop出来的元素与当前不同，那么就是false.')]),s._v(" "),a("li",[s._v("3 如果最终stack不是空的，那么就是false。")])]),s._v(" "),a("h2",{attrs:{id:"代码一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码一","aria-hidden":"true"}},[s._v("#")]),s._v(" 代码一")]),s._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[s._v("bool "),a("span",{attrs:{class:"token function"}},[s._v("validParentheses")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String braces"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  StackString stack "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("StackString")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("braces"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int i "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" braces"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{attrs:{class:"token operator"}},[s._v("++")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("braces"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"("')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       stack"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("push")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('")"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("isEmpty")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("pop")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" braces"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token comment"}},[s._v("//print(stack.stackArray);")]),s._v("\n        "),a("span",{attrs:{class:"token comment"}},[s._v('//print("top is: "+ stack.top.toString());')]),s._v("\n       "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" stack"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("isEmpty")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("StackString")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  int maxSize"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  List"),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("String"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" stackArray"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  int top"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{attrs:{class:"token function"}},[s._v("StackString")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int s"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    maxSize "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    stackArray "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("List")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("String"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("push")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String j"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    stackArray"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token operator"}},[s._v("++")]),s._v("top"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" j"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token function"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"top is: "')]),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v(" top"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  String "),a("span",{attrs:{class:"token function"}},[s._v("pop")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" stackArray"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("top"),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  String "),a("span",{attrs:{class:"token function"}},[s._v("peek")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" stackArray"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("top"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  bool "),a("span",{attrs:{class:"token function"}},[s._v("isEmpty")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("top "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  bool "),a("span",{attrs:{class:"token function"}},[s._v("isFull")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("top "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" maxSize "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"代码2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码2","aria-hidden":"true"}},[s._v("#")]),s._v(" 代码2")]),s._v(" "),a("p",[s._v('同样的思路，使用一个变量来记录。当遇到"("就自增1，当遇到")"就自减1，最终变量为0。如果不为0，说明是无效的括号串。')]),s._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[s._v("bool "),a("span",{attrs:{class:"token function"}},[s._v("validParentheses")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String braces"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    int stack "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int i "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" braces"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{attrs:{class:"token operator"}},[s._v("++")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        String current "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" braces"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("')'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" current "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'('")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("continue")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'('")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            stack"),a("span",{attrs:{class:"token operator"}},[s._v("++")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stack "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            stack"),a("span",{attrs:{class:"token operator"}},[s._v("--")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" stack "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}],!1,null,null,null);r.options.__file="StackAndParenthesesValid.md";t.default=r.exports}}]);