(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{327:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Code obfuscation hides function and class names in your compiled Dart code, making it difficult for an attacker to reverse engineer your proprietary app.")]),t._v(" "),s("p",[t._v("Note that Dart obfuscation has not yet been thoroughly tested. Please "),s("a",{attrs:{href:"https://github.com/flutter/flutter/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("file a bug"),s("OutboundLink")],1),t._v(" if you experience any issues. For more information, see "),s("a",{attrs:{href:"https://stackoverflow.com/questions/50542764/how-to-obfuscate-flutter-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue on Stack Overflow"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("Define this flag as follows:")]),t._v(" "),t._m(7),s("p",[t._v("Step 2 - Apply your changes\nIn the project root of your app, run the following two commands:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),s("p",[t._v("For information on obfuscating the Android host, see Enabling "),s("a",{attrs:{href:"https://flutter.io/android-release/#enabling-proguard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proguard"),s("OutboundLink")],1),t._v(" in "),s("a",{attrs:{href:"https://flutter.io/android-release/#enabling-proguard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Preparing an Android App for Release"),s("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"obfuscating-dart-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obfuscating-dart-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Obfuscating Dart Code")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"android"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android","aria-hidden":"true"}},[this._v("#")]),this._v(" Android")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add the following line to "),e("code",[this._v("<ProjectRoot>/android/gradle.properties")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("extra-gen-snapshot-options=--obfuscate\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios","aria-hidden":"true"}},[this._v("#")]),this._v(" iOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Step 1 - Modify the "build aot" call\nAdd the following flag to the build aot call in the '),e("code",[this._v("<ProjectRoot>/packages/flutter_tools/bin/xcode_backend.sh")]),this._v(" file:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("${extra_gen_snapshot_options_or_none}\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('local extra_gen_snapshot_options_or_none=""\nif [[ -n "$EXTRA_GEN_SNAPSHOT_OPTIONS" ]]; then\n  extra_gen_snapshot_options_or_none="--extra-gen-snapshot-options=$EXTRA_GEN_SNAPSHOT_OPTIONS"\nfi\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git commit -am "Enable obfuscation on iOS"\nflutter\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Step 3 - Modify the release config\nIn "),e("code",[this._v("<ProjectRoot>/ios/Flutter/Release.xcconfig")]),this._v(", add the following line:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("EXTRA_GEN_SNAPSHOT_OPTIONS=--obfuscate\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);a.options.__file="obfuscation.md";e.default=a.exports}}]);