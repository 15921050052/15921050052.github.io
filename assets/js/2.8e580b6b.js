(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{356:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"singlton-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#singlton-pattern","aria-hidden":"true"}},[s._v("#")]),s._v(" Singlton pattern")]),s._v(" "),t("p",[s._v("An implementation of singleton class should have following properties:")]),s._v(" "),t("p",[s._v("It should have only one instance :")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("It should have only one instance")]),s._v(": This is done by providing instance of class from within the class. Outer classes or subclasses should be prevented to create the instance. This is done by making the constructor private in java so that no class can access the constructor and hence cannot instantiate it.")]),s._v(" "),t("li",[t("strong",[s._v("Instance should be globally accessible")]),s._v(" : Instance of singleton class should be globally accessible so that each class can use it. In java it is done by making the access-specifier of instance public.")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("//A singleton class should have public visiblity ")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("//so that complete application can use ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    \n  "),t("span",{attrs:{class:"token comment"}},[s._v("//static instance of class globally accessible ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG instance "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor so that class ")]),s._v("\n    "),t("span",{attrs:{class:"token comment"}},[s._v("//cannot be instantiated from outside ")]),s._v("\n    "),t("span",{attrs:{class:"token comment"}},[s._v("//this class ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("Singleton class can be instantiated by two methods:")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("Early initialization")]),s._v(" : In this method, class is initialized whether it is to be used or not. Main advantage of this method is its simplicity. You initiate the class at the time of class loading. Its drawback is that class is always initialized whether it is being used or not.")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Lazy initialization")]),s._v(" : In this method, class in initialized only when it is required. It can save you from instantiating the class when you don’t need it. Generally lazy initialization is used when we create a singleton class.")])])]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("h3",{attrs:{id:"eager-initialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eager-initialization","aria-hidden":"true"}},[s._v("#")]),s._v(" Eager initialization:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Java code to create singleton class by  ")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Eager Initialization ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v("  \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{attrs:{class:"token comment"}},[s._v("// public instance initialized when loading the class ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG instance "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("Pros:")]),s._v(" "),t("p",[s._v("Very simple to implement.\nNo need to implement getInstance() method. Instance can be accessed directly.\nCons:")]),s._v(" "),t("p",[s._v("May lead to resource wastage. Because instance of class is created always, whether it is required or not.\nCPU time is also wasted in creation of instance if it is not required.\nException handling is not possible.")]),s._v(" "),t("h3",{attrs:{id:"using-static-block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-static-block","aria-hidden":"true"}},[s._v("#")]),s._v(" Using static block")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Java code to create singleton class ")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Using Static block ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v("  \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{attrs:{class:"token comment"}},[s._v("// public instance ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// static block to initialize instance ")]),s._v("\n    instance "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("Pros:")]),s._v(" "),t("p",[s._v("Very simple to implement.\nNo need to implement getInstance() method. Instance can be accessed directly.\nExceptions can be handled in static block.\nCons:")]),s._v(" "),t("p",[s._v("May lead to resource wastage. Because instance of class is created always, whether it is required or not.\nCPU time is also wasted in creation of instance if it is not require")]),s._v(" "),t("h3",{attrs:{id:"lazy-initialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lazy-initialization","aria-hidden":"true"}},[s._v("#")]),s._v(" Lazy initialization")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("//Java Code to create singleton class ")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// With Lazy initialization ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v("  \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{attrs:{class:"token comment"}},[s._v("// private instance, so that it can be ")]),s._v("\n  "),t("span",{attrs:{class:"token comment"}},[s._v("// accessed by only by getInstance() method ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token comment"}},[s._v("//method to return instance of class ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG "),t("span",{attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" null"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n      "),t("span",{attrs:{class:"token comment"}},[s._v("// if instance is null, initialize ")]),s._v("\n      instance "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("Pros:")]),s._v(" "),t("p",[s._v("Object is created only if it is needed. It may overcome resource overcome and wastage of CPU time.\nException handling is also possible in method.\nCons:")]),s._v(" "),t("p",[s._v("Every time a condition of null has to be checked.\ninstance can’t be accessed directly.\nIn multithreaded environment, it may break singleton property.")]),s._v(" "),t("h3",{attrs:{id:"thread-safe-singleton"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread-safe-singleton","aria-hidden":"true"}},[s._v("#")]),s._v(" Thread Safe Singleton:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Java program to create Thread Safe ")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Singleton class ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v("  \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{attrs:{class:"token comment"}},[s._v("// private instance, so that it can be ")]),s._v("\n  "),t("span",{attrs:{class:"token comment"}},[s._v("// accessed by only by getInstance() method ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n "),t("span",{attrs:{class:"token comment"}},[s._v("//synchronized method to control simultaneous access ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG "),t("span",{attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" null"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n      "),t("span",{attrs:{class:"token comment"}},[s._v("// if instance is null, initialize ")]),s._v("\n      instance "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("Pros:")]),s._v(" "),t("p",[s._v("Lazy initialization is possible.\nIt is also thread safe.\nCons:")]),s._v(" "),t("p",[s._v("getInstance() method is synchronized so it causes slow performance as multiple threads can’t access it simultaneously.")]),s._v(" "),t("h3",{attrs:{id:"lazy-initialization-with-double-check-locking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lazy-initialization-with-double-check-locking","aria-hidden":"true"}},[s._v("#")]),s._v(" Lazy initialization with Double check locking:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("// Java code to explain double check locking ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v("  \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{attrs:{class:"token comment"}},[s._v("// private instance, so that it can be ")]),s._v("\n  "),t("span",{attrs:{class:"token comment"}},[s._v("// accessed by only by getInstance() method ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG "),t("span",{attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" null"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n      "),t("span",{attrs:{class:"token comment"}},[s._v("//synchronized block to remove overhead ")]),s._v("\n      "),t("span",{attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GFG"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n      "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        "),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),t("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v("null"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n        "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n          "),t("span",{attrs:{class:"token comment"}},[s._v("// if instance is null, initialize ")]),s._v("\n          instance "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n        \n      "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("Pros:")]),s._v(" "),t("p",[s._v("Lazy initialization is possible.\nIt is also thread safe.\nPerformance reduced because of synchronized keyword is overcome.\nCons:")]),s._v(" "),t("p",[s._v("First time, it can affect performance.")]),s._v(" "),t("h2",{attrs:{id:"bill-pugh-singleton-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bill-pugh-singleton-implementation","aria-hidden":"true"}},[s._v("#")]),s._v(" Bill Pugh Singleton Implementation:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("// Java code for Bill Pugh Singleton Implementaion ")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),s._v("  \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token comment"}},[s._v("// private constructor ")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token comment"}},[s._v("// Inner class to provide instance of class ")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BillPughSingleton")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("final")]),s._v(" GFG INSTANCE "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("GFG")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n  \n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" GFG "),t("span",{attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" BillPughSingleton"),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INSTANCE"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"when-to-use-what"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-what","aria-hidden":"true"}},[s._v("#")]),s._v(" When to use What")]),s._v(" "),t("ul",[t("li",[s._v("Eager initialization is easy to implement but it may cause resource and CPU time wastage. Use it only if cost of initializing a class is less in terms of resources or your program will always need the instance of class.")]),s._v(" "),t("li",[s._v("By using Static block in Eager initialization we can provide exception handling and also can control over instance.")]),s._v(" "),t("li",[s._v("Using synchronized we can create singleton class in multi-threading environment also but it can cause slow performance, so we can use Double check locking mechanism.")]),s._v(" "),t("li",[s._v("Bill Pugh implementation is most widely used approach for singleton classes. Most developers prefer it because of its simplicity and advantages.")])])])}],!1,null,null,null);e.options.__file="singleton.md";a.default=e.exports}}]);