webpackJsonp([2],Array(57).concat([
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(58)
	__vue_script__ = __webpack_require__(61)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2db6aac2/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".view.add > .page {\n  margin-top: 0;\n}\n.view.add .canvas {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background: #01bbba;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.view.add .canvas svg {\n  display: block;\n}\n.view.add .canvas .editor .editor-item {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  border: solid 1px #fff;\n}\n", "", {"version":3,"sources":["/./public/app/page/add/style.less"],"names":[],"mappings":"AAAA;EACE,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,OAAO;EACP,QAAQ;CACT;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,qCAAqC;EACrC,uBAAuB;CACxB","file":"style.less","sourcesContent":[".view.add > .page {\n  margin-top: 0;\n}\n.view.add .canvas {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  background: #01bbba;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.view.add .canvas svg {\n  display: block;\n}\n.view.add .canvas .editor .editor-item {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  border: solid 1px #fff;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 60 */,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _add = __webpack_require__(62);
	
	var _dialog = __webpack_require__(64);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _win = __webpack_require__(164);
	
	var _win2 = _interopRequireDefault(_win);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        },
	        actions: {
	            stateChangeInit: _add.stateChangeInit, stateChangeAdd: _add.stateChangeAdd, itemEditor: _add.itemEditor
	        }
	    },
	    components: {
	        dialog: _dialog2.default, win: _win2.default
	    },
	    methods: {
	        rightMenu: function rightMenu() {
	            this.stateChangeAdd();
	        },
	        canvasClick: function canvasClick() {
	            this.stateChangeInit();
	        },
	        editor: function editor(item) {
	            this.itemEditor(item);
	        },
	        touchStart: function touchStart(item, e) {
	            item.touchStart(e);
	        },
	        touchMove: function touchMove(item, e) {
	            item.touchMove(e);
	        },
	        touchEnd: function touchEnd(item, e) {
	            item.touchEnd(e);
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <style lang="less" src="./style.less"></style>
	// <template>
	//     <div class="canvas" @click="canvasClick">
	//         <svg width="100%" height="100%">
	//             <template v-for="item in add.page.itemList">
	//                 <image v-if="item.type=='image'" xlink:href="{{item.data}}" :x="item.x" :y="item.y" :height="item.height" :width="item.height" @click.stop="editor(item)"/>
	//             </template>
	//         </svg>
	//         <div class="editor">
	//             <div class="editor-item" v-for="item in add.page.itemList" v-if="item.editor" :style="{'left':item.x+'px','top':item.y+'px','width':item.width+'px','height':item.height+'px'}"
	//                  @click.stop="editor(item)" @touchstart="touchStart(item,$event)" @touchmove="touchMove(item,$event)" @touchcancel="touchEnd(item,$event)" @touchend="touchEnd(item,$event)"></div>
	//         </div>
	//     </div>
	//     <dialog></dialog>
	//     <win></win>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.multChange = exports.animationAdd = exports.animationChange = exports.itemEditor = exports.itemDownIndex = exports.itemUpIndex = exports.itemDel = exports.itemCopy = exports.itemAdd = exports.stateChangeInit = exports.stateChangeAnimAdd = exports.stateChangeAnimList = exports.stateChangeAttr = exports.stateChangeAdd = undefined;
	
	var _makeAction = __webpack_require__(63);
	
	var _makeAction2 = _interopRequireDefault(_makeAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//STATE
	var stateChangeAdd = exports.stateChangeAdd = (0, _makeAction2.default)('STATE_CHANGE_ADD'); /**
	                                                                                              * Created by ifchangetoclzp on 2016/7/25.
	                                                                                              */
	
	var stateChangeAttr = exports.stateChangeAttr = (0, _makeAction2.default)('STATE_CHANGE_ATTR');
	var stateChangeAnimList = exports.stateChangeAnimList = (0, _makeAction2.default)('STATE_CHANGE_ANIM_LIST');
	var stateChangeAnimAdd = exports.stateChangeAnimAdd = (0, _makeAction2.default)('STATE_CHANGE_ANIM_ADD');
	var stateChangeInit = exports.stateChangeInit = (0, _makeAction2.default)('STATE_CHANGE_INIT');
	
	//ITEM
	var itemAdd = exports.itemAdd = (0, _makeAction2.default)('ITEM_ADD');
	var itemCopy = exports.itemCopy = (0, _makeAction2.default)('ITEM_COPY');
	var itemDel = exports.itemDel = function itemDel(_ref) {
	    var dispatch = _ref.dispatch;
	    var state = _ref.state;
	
	    dispatch('ITEM_DEL');
	    if (!state.add.page.getLength()) {
	        dispatch('STATE_CHANGE_INIT');
	    }
	};
	var itemUpIndex = exports.itemUpIndex = (0, _makeAction2.default)('ITEM_UP_INDEX');
	var itemDownIndex = exports.itemDownIndex = (0, _makeAction2.default)('ITEM_DOWN_INDEX');
	var itemEditor = exports.itemEditor = function itemEditor(_ref2) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }
	
	    var dispatch = _ref2.dispatch;
	    var state = _ref2.state;
	
	
	    dispatch.apply(undefined, ['ITEM_EDITOR'].concat(args));
	    if (state.add.page.hasEditorItem()) {
	        dispatch('STATE_CHANGE_ATTR');
	    } else {
	        dispatch('STATE_CHANGE_INIT');
	    }
	};
	
	//ANIMATION
	var animationChange = exports.animationChange = (0, _makeAction2.default)('ANIMATION_CHANGE');
	var animationAdd = exports.animationAdd = function animationAdd(_ref3) {
	    var dispatch = _ref3.dispatch;
	    var state = _ref3.state;
	
	    dispatch('ANIMATION_ADD');
	    dispatch('STATE_CHANGE_ANIM_LIST');
	};
	
	//MULT
	
	var multChange = exports.multChange = (0, _makeAction2.default)('MULT_CHANGE');

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (type) {
	  return function (_ref) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var dispatch = _ref.dispatch;
	    return dispatch.apply(undefined, [type].concat(args));
	  };
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(65)
	__vue_script__ = __webpack_require__(67)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\dialog\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(163)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2cc38f01/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".outer-dialog {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  background-color: rgba(247, 247, 248, 0.85);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding-top: 10px;\n}\n.outer-dialog ul {\n  margin: 0 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n.outer-dialog li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  width: 55px;\n}\n.outer-dialog li:before {\n  font-size: 25px;\n}\n.outer-dialog li:after {\n  font-size: 14px;\n  margin-top: 4px;\n}\n.outer-dialog.add li.pic {\n  position: relative;\n}\n.outer-dialog.add li.pic input {\n  left: 12px;\n  top: 0;\n  width: 30px;\n  height: 45px;\n  position: absolute;\n  opacity: 0;\n  overflow: hidden;\n}\n.outer-dialog.add li.pic:before {\n  content: '\\E604';\n}\n.outer-dialog.add li.pic:after {\n  content: '\\7167\\7247';\n}\n.outer-dialog.add li.text:before {\n  content: '\\E603';\n}\n.outer-dialog.add li.text:after {\n  content: '\\6587\\672C';\n}\n.outer-dialog.add li.page:before {\n  content: '\\E607';\n}\n.outer-dialog.add li.page:after {\n  content: '\\9875\\9762';\n}\n.outer-dialog.add li.mult:before {\n  content: '\\E60C';\n}\n.outer-dialog.add li.mult:after {\n  content: '\\591A\\9009\\5F00';\n}\n.outer-dialog.add li.mult.close:before {\n  content: '\\E60E';\n}\n.outer-dialog.add li.mult.close:after {\n  content: '\\591A\\9009\\5173';\n}\n.outer-dialog.attribute li.copy:before {\n  content: '\\E609';\n}\n.outer-dialog.attribute li.copy:after {\n  content: '\\590D\\5236';\n}\n.outer-dialog.attribute li.del:before {\n  content: '\\E608';\n}\n.outer-dialog.attribute li.del:after {\n  content: '\\5220\\9664';\n}\n.outer-dialog.attribute li.up-index:before {\n  content: '\\E60B';\n}\n.outer-dialog.attribute li.up-index:after {\n  content: '\\5C42\\7EA7\\52A0';\n}\n.outer-dialog.attribute li.down-index:before {\n  content: '\\E60B';\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1);\n}\n.outer-dialog.attribute li.down-index:after {\n  content: '\\5C42\\7EA7\\51CF';\n}\n.outer-dialog.attribute li.animation:before {\n  content: '\\E60D';\n}\n.outer-dialog.attribute li.animation:after {\n  content: '\\52A8\\753B';\n}\n.outer-dialog.animation-list li.back:before {\n  content: '\\E60F';\n}\n.outer-dialog.animation-list li.back:after {\n  content: '\\8FD4\\56DE';\n}\n.outer-dialog.animation-list li.add:before {\n  content: '\\E610';\n}\n.outer-dialog.animation-list li.add:after {\n  content: '\\6DFB\\52A0';\n}\n.outer-dialog.animation-list li.del:before {\n  content: '\\E608';\n}\n.outer-dialog.animation-list li.del:after {\n  content: '\\5220\\9664';\n}\n.outer-dialog.animation-add li.back:before {\n  content: '\\E60F';\n}\n.outer-dialog.animation-add li.back:after {\n  content: '\\8FD4\\56DE';\n}\n.outer-dialog.animation-add li.confirm:before {\n  content: '\\E612';\n}\n.outer-dialog.animation-add li.confirm:after {\n  content: '\\786E\\5B9A';\n}\n.outer-dialog.animation-add li.preview:before {\n  content: '\\E611';\n}\n.outer-dialog.animation-add li.preview:after {\n  content: '\\9884\\89C8';\n}\n", "", {"version":3,"sources":["/./public/app/page/add/dialog/style.less"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,4BAA4B;EAC5B,6BAA6B;EAC7B,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,OAAO;EACP,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,2BAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,2BAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,2BAAe;CAChB;AACD;EACE,iBAAiB;EACjB,8BAAsB;UAAtB,sBAAsB;CACvB;AACD;EACE,2BAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAc;CACf","file":"style.less","sourcesContent":[".outer-dialog {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  background-color: rgba(247, 247, 248, 0.85);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding-top: 10px;\n}\n.outer-dialog ul {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.outer-dialog li {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 55px;\n}\n.outer-dialog li:before {\n  font-size: 25px;\n}\n.outer-dialog li:after {\n  font-size: 14px;\n  margin-top: 4px;\n}\n.outer-dialog.add li.pic {\n  position: relative;\n}\n.outer-dialog.add li.pic input {\n  left: 12px;\n  top: 0;\n  width: 30px;\n  height: 45px;\n  position: absolute;\n  opacity: 0;\n  overflow: hidden;\n}\n.outer-dialog.add li.pic:before {\n  content: '\\e604';\n}\n.outer-dialog.add li.pic:after {\n  content: '照片';\n}\n.outer-dialog.add li.text:before {\n  content: '\\e603';\n}\n.outer-dialog.add li.text:after {\n  content: '文本';\n}\n.outer-dialog.add li.page:before {\n  content: '\\e607';\n}\n.outer-dialog.add li.page:after {\n  content: '页面';\n}\n.outer-dialog.add li.mult:before {\n  content: '\\e60c';\n}\n.outer-dialog.add li.mult:after {\n  content: '多选开';\n}\n.outer-dialog.add li.mult.close:before {\n  content: '\\e60e';\n}\n.outer-dialog.add li.mult.close:after {\n  content: '多选关';\n}\n.outer-dialog.attribute li.copy:before {\n  content: '\\e609';\n}\n.outer-dialog.attribute li.copy:after {\n  content: '复制';\n}\n.outer-dialog.attribute li.del:before {\n  content: '\\e608';\n}\n.outer-dialog.attribute li.del:after {\n  content: '删除';\n}\n.outer-dialog.attribute li.up-index:before {\n  content: '\\e60b';\n}\n.outer-dialog.attribute li.up-index:after {\n  content: '层级加';\n}\n.outer-dialog.attribute li.down-index:before {\n  content: '\\e60b';\n  transform: scaleY(-1);\n}\n.outer-dialog.attribute li.down-index:after {\n  content: '层级减';\n}\n.outer-dialog.attribute li.animation:before {\n  content: '\\e60d';\n}\n.outer-dialog.attribute li.animation:after {\n  content: '动画';\n}\n.outer-dialog.animation-list li.back:before {\n  content: '\\e60f';\n}\n.outer-dialog.animation-list li.back:after {\n  content: '返回';\n}\n.outer-dialog.animation-list li.add:before {\n  content: '\\e610';\n}\n.outer-dialog.animation-list li.add:after {\n  content: '添加';\n}\n.outer-dialog.animation-list li.del:before {\n  content: '\\e608';\n}\n.outer-dialog.animation-list li.del:after {\n  content: '删除';\n}\n.outer-dialog.animation-add li.back:before {\n  content: '\\e60f';\n}\n.outer-dialog.animation-add li.back:after {\n  content: '返回';\n}\n.outer-dialog.animation-add li.confirm:before {\n  content: '\\e612';\n}\n.outer-dialog.animation-add li.confirm:after {\n  content: '确定';\n}\n.outer-dialog.animation-add li.preview:before {\n  content: '\\e611';\n}\n.outer-dialog.animation-add li.preview:after {\n  content: '预览';\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Add = __webpack_require__(68);
	
	var _Add2 = _interopRequireDefault(_Add);
	
	var _Attribute = __webpack_require__(154);
	
	var _Attribute2 = _interopRequireDefault(_Attribute);
	
	var _AnimationList = __webpack_require__(157);
	
	var _AnimationList2 = _interopRequireDefault(_AnimationList);
	
	var _AddAnimation = __webpack_require__(160);
	
	var _AddAnimation2 = _interopRequireDefault(_AddAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang="less" src="./style.less"></style>
	// <template>
	//     <component :is="componentName"></component>
	// </template>
	// <script type="text/ecmascript-6">
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        }
	    },
	    computed: {
	        componentName: function componentName() {
	            var map = {
	                'add': 'Add',
	                'attr': 'Attribute',
	                'anim-list': 'AnimationList',
	                'anim-add': 'AddAnimation'
	            };
	            return map[this.add.stateType];
	        }
	    },
	    components: {
	        Add: _Add2.default, Attribute: _Attribute2.default, AnimationList: _AnimationList2.default, AddAnimation: _AddAnimation2.default
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\dialog\\Add.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(153)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-62b830f0/Add.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _upload = __webpack_require__(70);
	
	var _upload2 = _interopRequireDefault(_upload);
	
	var _add = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div class="outer-dialog add">
	//         <ul>
	//             <li class="pic iconfont"><input type="file" @change="selected"/></li>
	//             <li class="text iconfont"></li>
	//             <li class="page iconfont"></li>
	//             <!--<li class="mult iconfont" :class="{'close':!add.setting.multSelect}" @click="multChange"></li>-->
	//         </ul>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        },
	        actions: {
	            itemAdd: _add.itemAdd, multChange: _add.multChange
	        }
	    },
	    methods: {
	        selected: function selected(e) {
	            var _this = this;
	
	            (0, _upload2.default)(event.target.files[0]).then(function (data) {
	                _this.itemAdd({
	                    type: 'image',
	                    data: data
	                });
	            });
	        },
	        multChange: function multChange() {
	            this.multChange();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(71);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(74);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(108);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _exif = __webpack_require__(109);
	
	var _exif2 = _interopRequireDefault(_exif);
	
	var _zip = __webpack_require__(127);
	
	var _zip2 = _interopRequireDefault(_zip);
	
	var _fetch = __webpack_require__(128);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var fetch = (0, _fetch2.default)({
	  baseUrl: '/api/object/upload'
	});
	var url = '/api/object/upload';
	
	exports.default = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file, item, errHandler) {
	    var orientation;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return new _promise2.default(function (resolve, reject) {
	              if (!file) {
	                reject('您没有选择任何照片');
	              }
	              if (file.type != '') {
	                if (!/image\/*/.test(file.type)) {
	                  reject('只允许上传jpg,,jpeg,gif,png格式的图片');
	                  return;
	                }
	              } else {
	                if (!/\.(jpg|jpeg|gif|png)$/.test(file.name)) {
	                  reject('只允许上传jpg,,jpeg,gif,png格式的图片');
	                  return;
	                }
	              }
	              if (file.size > 5 * 1024 * 1024) {
	                reject('只允许上传5M以内的图片');
	                return;
	              }
	              resolve();
	            });
	
	          case 2:
	            orientation = new _promise2.default(function (resolve, reject) {
	              _exif2.default.getData(file, function () {
	                _exif2.default.getAllTags(this);
	                resolve(file, _exif2.default.getTag(this, 'Orientation'));
	              });
	            });
	            _context.prev = 3;
	            _context.next = 6;
	            return (0, _zip2.default)(file, orientation);
	
	          case 6:
	            file = _context.sent;
	            _context.next = 11;
	            break;
	
	          case 9:
	            _context.prev = 9;
	            _context.t0 = _context['catch'](3);
	
	          case 11:
	            return _context.abrupt('return', fetch.upload('?orientation=' + orientation, { photo: file }));
	
	          case 12:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined, [[3, 9]]);
	  }));
	
	  return function (_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof2 = __webpack_require__(110);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	
	    var debug = false;
	
	    var root = this;
	
	    var EXIF = function EXIF(obj) {
	        if (obj instanceof EXIF) return obj;
	        if (!(this instanceof EXIF)) return new EXIF(obj);
	        this.EXIFwrapped = obj;
	    };
	
	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = EXIF;
	        }
	        exports.EXIF = EXIF;
	    } else {
	        root.EXIF = EXIF;
	    }
	
	    var ExifTags = EXIF.Tags = {
	
	        // version tags
	        0x9000: "ExifVersion", // EXIF version
	        0xA000: "FlashpixVersion", // Flashpix format version
	
	        // colorspace tags
	        0xA001: "ColorSpace", // Color space information tag
	
	        // image configuration
	        0xA002: "PixelXDimension", // Valid width of meaningful image
	        0xA003: "PixelYDimension", // Valid height of meaningful image
	        0x9101: "ComponentsConfiguration", // Information about channels
	        0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel
	
	        // user information
	        0x927C: "MakerNote", // Any desired information written by the manufacturer
	        0x9286: "UserComment", // Comments by user
	
	        // related file
	        0xA004: "RelatedSoundFile", // Name of related sound file
	
	        // date and time
	        0x9003: "DateTimeOriginal", // Date and time when the original image was generated
	        0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
	        0x9290: "SubsecTime", // Fractions of seconds for DateTime
	        0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
	        0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized
	
	        // picture-taking conditions
	        0x829A: "ExposureTime", // Exposure time (in seconds)
	        0x829D: "FNumber", // F number
	        0x8822: "ExposureProgram", // Exposure program
	        0x8824: "SpectralSensitivity", // Spectral sensitivity
	        0x8827: "ISOSpeedRatings", // ISO speed rating
	        0x8828: "OECF", // Optoelectric conversion factor
	        0x9201: "ShutterSpeedValue", // Shutter speed
	        0x9202: "ApertureValue", // Lens aperture
	        0x9203: "BrightnessValue", // Value of brightness
	        0x9204: "ExposureBias", // Exposure bias
	        0x9205: "MaxApertureValue", // Smallest F number of lens
	        0x9206: "SubjectDistance", // Distance to subject in meters
	        0x9207: "MeteringMode", // Metering mode
	        0x9208: "LightSource", // Kind of light source
	        0x9209: "Flash", // Flash status
	        0x9214: "SubjectArea", // Location and area of main subject
	        0x920A: "FocalLength", // Focal length of the lens in mm
	        0xA20B: "FlashEnergy", // Strobe energy in BCPS
	        0xA20C: "SpatialFrequencyResponse", //
	        0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
	        0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
	        0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
	        0xA214: "SubjectLocation", // Location of subject in image
	        0xA215: "ExposureIndex", // Exposure index selected on camera
	        0xA217: "SensingMethod", // Image sensor type
	        0xA300: "FileSource", // Image source (3 == DSC)
	        0xA301: "SceneType", // Scene type (1 == directly photographed)
	        0xA302: "CFAPattern", // Color filter array geometric pattern
	        0xA401: "CustomRendered", // Special processing
	        0xA402: "ExposureMode", // Exposure mode
	        0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
	        0xA404: "DigitalZoomRation", // Digital zoom ratio
	        0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
	        0xA406: "SceneCaptureType", // Type of scene
	        0xA407: "GainControl", // Degree of overall image gain adjustment
	        0xA408: "Contrast", // Direction of contrast processing applied by camera
	        0xA409: "Saturation", // Direction of saturation processing applied by camera
	        0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
	        0xA40B: "DeviceSettingDescription", //
	        0xA40C: "SubjectDistanceRange", // Distance to subject
	
	        // other tags
	        0xA005: "InteroperabilityIFDPointer",
	        0xA420: "ImageUniqueID" // Identifier assigned uniquely to each image
	    };
	
	    var TiffTags = EXIF.TiffTags = {
	        0x0100: "ImageWidth",
	        0x0101: "ImageHeight",
	        0x8769: "ExifIFDPointer",
	        0x8825: "GPSInfoIFDPointer",
	        0xA005: "InteroperabilityIFDPointer",
	        0x0102: "BitsPerSample",
	        0x0103: "Compression",
	        0x0106: "PhotometricInterpretation",
	        0x0112: "Orientation",
	        0x0115: "SamplesPerPixel",
	        0x011C: "PlanarConfiguration",
	        0x0212: "YCbCrSubSampling",
	        0x0213: "YCbCrPositioning",
	        0x011A: "XResolution",
	        0x011B: "YResolution",
	        0x0128: "ResolutionUnit",
	        0x0111: "StripOffsets",
	        0x0116: "RowsPerStrip",
	        0x0117: "StripByteCounts",
	        0x0201: "JPEGInterchangeFormat",
	        0x0202: "JPEGInterchangeFormatLength",
	        0x012D: "TransferFunction",
	        0x013E: "WhitePoint",
	        0x013F: "PrimaryChromaticities",
	        0x0211: "YCbCrCoefficients",
	        0x0214: "ReferenceBlackWhite",
	        0x0132: "DateTime",
	        0x010E: "ImageDescription",
	        0x010F: "Make",
	        0x0110: "Model",
	        0x0131: "Software",
	        0x013B: "Artist",
	        0x8298: "Copyright"
	    };
	
	    var GPSTags = EXIF.GPSTags = {
	        0x0000: "GPSVersionID",
	        0x0001: "GPSLatitudeRef",
	        0x0002: "GPSLatitude",
	        0x0003: "GPSLongitudeRef",
	        0x0004: "GPSLongitude",
	        0x0005: "GPSAltitudeRef",
	        0x0006: "GPSAltitude",
	        0x0007: "GPSTimeStamp",
	        0x0008: "GPSSatellites",
	        0x0009: "GPSStatus",
	        0x000A: "GPSMeasureMode",
	        0x000B: "GPSDOP",
	        0x000C: "GPSSpeedRef",
	        0x000D: "GPSSpeed",
	        0x000E: "GPSTrackRef",
	        0x000F: "GPSTrack",
	        0x0010: "GPSImgDirectionRef",
	        0x0011: "GPSImgDirection",
	        0x0012: "GPSMapDatum",
	        0x0013: "GPSDestLatitudeRef",
	        0x0014: "GPSDestLatitude",
	        0x0015: "GPSDestLongitudeRef",
	        0x0016: "GPSDestLongitude",
	        0x0017: "GPSDestBearingRef",
	        0x0018: "GPSDestBearing",
	        0x0019: "GPSDestDistanceRef",
	        0x001A: "GPSDestDistance",
	        0x001B: "GPSProcessingMethod",
	        0x001C: "GPSAreaInformation",
	        0x001D: "GPSDateStamp",
	        0x001E: "GPSDifferential"
	    };
	
	    var StringValues = EXIF.StringValues = {
	        ExposureProgram: {
	            0: "Not defined",
	            1: "Manual",
	            2: "Normal program",
	            3: "Aperture priority",
	            4: "Shutter priority",
	            5: "Creative program",
	            6: "Action program",
	            7: "Portrait mode",
	            8: "Landscape mode"
	        },
	        MeteringMode: {
	            0: "Unknown",
	            1: "Average",
	            2: "CenterWeightedAverage",
	            3: "Spot",
	            4: "MultiSpot",
	            5: "Pattern",
	            6: "Partial",
	            255: "Other"
	        },
	        LightSource: {
	            0: "Unknown",
	            1: "Daylight",
	            2: "Fluorescent",
	            3: "Tungsten (incandescent light)",
	            4: "Flash",
	            9: "Fine weather",
	            10: "Cloudy weather",
	            11: "Shade",
	            12: "Daylight fluorescent (D 5700 - 7100K)",
	            13: "Day white fluorescent (N 4600 - 5400K)",
	            14: "Cool white fluorescent (W 3900 - 4500K)",
	            15: "White fluorescent (WW 3200 - 3700K)",
	            17: "Standard light A",
	            18: "Standard light B",
	            19: "Standard light C",
	            20: "D55",
	            21: "D65",
	            22: "D75",
	            23: "D50",
	            24: "ISO studio tungsten",
	            255: "Other"
	        },
	        Flash: {
	            0x0000: "Flash did not fire",
	            0x0001: "Flash fired",
	            0x0005: "Strobe return light not detected",
	            0x0007: "Strobe return light detected",
	            0x0009: "Flash fired, compulsory flash mode",
	            0x000D: "Flash fired, compulsory flash mode, return light not detected",
	            0x000F: "Flash fired, compulsory flash mode, return light detected",
	            0x0010: "Flash did not fire, compulsory flash mode",
	            0x0018: "Flash did not fire, auto mode",
	            0x0019: "Flash fired, auto mode",
	            0x001D: "Flash fired, auto mode, return light not detected",
	            0x001F: "Flash fired, auto mode, return light detected",
	            0x0020: "No flash function",
	            0x0041: "Flash fired, red-eye reduction mode",
	            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
	            0x0047: "Flash fired, red-eye reduction mode, return light detected",
	            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
	            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
	            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
	            0x0059: "Flash fired, auto mode, red-eye reduction mode",
	            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
	            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
	        },
	        SensingMethod: {
	            1: "Not defined",
	            2: "One-chip color area sensor",
	            3: "Two-chip color area sensor",
	            4: "Three-chip color area sensor",
	            5: "Color sequential area sensor",
	            7: "Trilinear sensor",
	            8: "Color sequential linear sensor"
	        },
	        SceneCaptureType: {
	            0: "Standard",
	            1: "Landscape",
	            2: "Portrait",
	            3: "Night scene"
	        },
	        SceneType: {
	            1: "Directly photographed"
	        },
	        CustomRendered: {
	            0: "Normal process",
	            1: "Custom process"
	        },
	        WhiteBalance: {
	            0: "Auto white balance",
	            1: "Manual white balance"
	        },
	        GainControl: {
	            0: "None",
	            1: "Low gain up",
	            2: "High gain up",
	            3: "Low gain down",
	            4: "High gain down"
	        },
	        Contrast: {
	            0: "Normal",
	            1: "Soft",
	            2: "Hard"
	        },
	        Saturation: {
	            0: "Normal",
	            1: "Low saturation",
	            2: "High saturation"
	        },
	        Sharpness: {
	            0: "Normal",
	            1: "Soft",
	            2: "Hard"
	        },
	        SubjectDistanceRange: {
	            0: "Unknown",
	            1: "Macro",
	            2: "Close view",
	            3: "Distant view"
	        },
	        FileSource: {
	            3: "DSC"
	        },
	
	        Components: {
	            0: "",
	            1: "Y",
	            2: "Cb",
	            3: "Cr",
	            4: "R",
	            5: "G",
	            6: "B"
	        }
	    };
	
	    function addEvent(element, event, handler) {
	        if (element.addEventListener) {
	            element.addEventListener(event, handler, false);
	        } else if (element.attachEvent) {
	            element.attachEvent("on" + event, handler);
	        }
	    }
	
	    function imageHasData(img) {
	        return !!img.exifdata;
	    }
	
	    function base64ToArrayBuffer(base64, contentType) {
	        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
	        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
	        var binary = atob(base64);
	        var len = binary.length;
	        var buffer = new ArrayBuffer(len);
	        var view = new Uint8Array(buffer);
	        for (var i = 0; i < len; i++) {
	            view[i] = binary.charCodeAt(i);
	        }
	        return buffer;
	    }
	
	    function objectURLToBlob(url, callback) {
	        var http = new XMLHttpRequest();
	        http.open("GET", url, true);
	        http.responseType = "blob";
	        http.onload = function (e) {
	            if (this.status == 200 || this.status === 0) {
	                callback(this.response);
	            }
	        };
	        http.send();
	    }
	
	    function getImageData(img, callback) {
	        function handleBinaryFile(binFile) {
	            var data = findEXIFinJPEG(binFile);
	            var iptcdata = findIPTCinJPEG(binFile);
	            img.exifdata = data || {};
	            img.iptcdata = iptcdata || {};
	            if (callback) {
	                callback.call(img);
	            }
	        }
	
	        if (img.src) {
	            if (/^data\:/i.test(img.src)) {
	                // Data URI
	                var arrayBuffer = base64ToArrayBuffer(img.src);
	                handleBinaryFile(arrayBuffer);
	            } else if (/^blob\:/i.test(img.src)) {
	                // Object URL
	                var fileReader = new FileReader();
	                fileReader.onload = function (e) {
	                    handleBinaryFile(e.target.result);
	                };
	                objectURLToBlob(img.src, function (blob) {
	                    fileReader.readAsArrayBuffer(blob);
	                });
	            } else {
	                var http = new XMLHttpRequest();
	                http.onload = function () {
	                    if (this.status == 200 || this.status === 0) {
	                        handleBinaryFile(http.response);
	                    } else {
	                        throw "Could not load image";
	                    }
	                    http = null;
	                };
	                http.open("GET", img.src, true);
	                http.responseType = "arraybuffer";
	                http.send(null);
	            }
	        } else if (window.FileReader && (img instanceof window.Blob || img instanceof window.File)) {
	            var fileReader = new FileReader();
	            fileReader.onload = function (e) {
	                if (debug) console.log("Got file of length " + e.target.result.byteLength);
	                handleBinaryFile(e.target.result);
	            };
	
	            fileReader.readAsArrayBuffer(img);
	        }
	    }
	
	    function findEXIFinJPEG(file) {
	        var dataView = new DataView(file);
	
	        if (debug) console.log("Got file of length " + file.byteLength);
	        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
	            if (debug) console.log("Not a valid JPEG");
	            return false; // not a valid jpeg
	        }
	
	        var offset = 2,
	            length = file.byteLength,
	            marker;
	
	        while (offset < length) {
	            if (dataView.getUint8(offset) != 0xFF) {
	                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
	                return false; // not a valid marker, something is wrong
	            }
	
	            marker = dataView.getUint8(offset + 1);
	            if (debug) console.log(marker);
	
	            // we could implement handling for other markers here,
	            // but we're only looking for 0xFFE1 for EXIF data
	
	            if (marker == 225) {
	                if (debug) console.log("Found 0xFFE1 marker");
	
	                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);
	
	                // offset += 2 + file.getShortAt(offset+2, true);
	            } else {
	                offset += 2 + dataView.getUint16(offset + 2);
	            }
	        }
	    }
	
	    function findIPTCinJPEG(file) {
	        var dataView = new DataView(file);
	
	        if (debug) console.log("Got file of length " + file.byteLength);
	        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
	            if (debug) console.log("Not a valid JPEG");
	            return false; // not a valid jpeg
	        }
	
	        var offset = 2,
	            length = file.byteLength;
	
	        var isFieldSegmentStart = function isFieldSegmentStart(dataView, offset) {
	            return dataView.getUint8(offset) === 0x38 && dataView.getUint8(offset + 1) === 0x42 && dataView.getUint8(offset + 2) === 0x49 && dataView.getUint8(offset + 3) === 0x4D && dataView.getUint8(offset + 4) === 0x04 && dataView.getUint8(offset + 5) === 0x04;
	        };
	
	        while (offset < length) {
	
	            if (isFieldSegmentStart(dataView, offset)) {
	
	                // Get the length of the name header (which is padded to an even number of bytes)
	                var nameHeaderLength = dataView.getUint8(offset + 7);
	                if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
	                // Check for pre photoshop 6 format
	                if (nameHeaderLength === 0) {
	                    // Always 4
	                    nameHeaderLength = 4;
	                }
	
	                var startOffset = offset + 8 + nameHeaderLength;
	                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
	
	                return readIPTCData(file, startOffset, sectionLength);
	
	                break;
	            }
	
	            // Not the marker, continue searching
	            offset++;
	        }
	    }
	    var IptcFieldMap = {
	        0x78: 'caption',
	        0x6E: 'credit',
	        0x19: 'keywords',
	        0x37: 'dateCreated',
	        0x50: 'byline',
	        0x55: 'bylineTitle',
	        0x7A: 'captionWriter',
	        0x69: 'headline',
	        0x74: 'copyright',
	        0x0F: 'category'
	    };
	    function readIPTCData(file, startOffset, sectionLength) {
	        var dataView = new DataView(file);
	        var data = {};
	        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
	        var segmentStartPos = startOffset;
	        while (segmentStartPos < startOffset + sectionLength) {
	            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
	                segmentType = dataView.getUint8(segmentStartPos + 2);
	                if (segmentType in IptcFieldMap) {
	                    dataSize = dataView.getInt16(segmentStartPos + 3);
	                    segmentSize = dataSize + 5;
	                    fieldName = IptcFieldMap[segmentType];
	                    fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
	                    // Check if we already stored a value with this name
	                    if (data.hasOwnProperty(fieldName)) {
	                        // Value already stored with this name, create multivalue field
	                        if (data[fieldName] instanceof Array) {
	                            data[fieldName].push(fieldValue);
	                        } else {
	                            data[fieldName] = [data[fieldName], fieldValue];
	                        }
	                    } else {
	                        data[fieldName] = fieldValue;
	                    }
	                }
	            }
	            segmentStartPos++;
	        }
	        return data;
	    }
	
	    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
	        var entries = file.getUint16(dirStart, !bigEnd),
	            tags = {},
	            entryOffset,
	            tag,
	            i;
	
	        for (i = 0; i < entries; i++) {
	            entryOffset = dirStart + i * 12 + 2;
	            tag = strings[file.getUint16(entryOffset, !bigEnd)];
	            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
	            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
	        }
	        return tags;
	    }
	
	    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
	        var type = file.getUint16(entryOffset + 2, !bigEnd),
	            numValues = file.getUint32(entryOffset + 4, !bigEnd),
	            valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
	            offset,
	            vals,
	            val,
	            n,
	            numerator,
	            denominator;
	
	        switch (type) {
	            case 1: // byte, 8-bit unsigned int
	            case 7:
	                // undefined, 8-bit byte, value depending on field
	                if (numValues == 1) {
	                    return file.getUint8(entryOffset + 8, !bigEnd);
	                } else {
	                    offset = numValues > 4 ? valueOffset : entryOffset + 8;
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint8(offset + n);
	                    }
	                    return vals;
	                }
	
	            case 2:
	                // ascii, 8-bit byte
	                offset = numValues > 4 ? valueOffset : entryOffset + 8;
	                return getStringFromDB(file, offset, numValues - 1);
	
	            case 3:
	                // short, 16 bit int
	                if (numValues == 1) {
	                    return file.getUint16(entryOffset + 8, !bigEnd);
	                } else {
	                    offset = numValues > 2 ? valueOffset : entryOffset + 8;
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
	                    }
	                    return vals;
	                }
	
	            case 4:
	                // long, 32 bit int
	                if (numValues == 1) {
	                    return file.getUint32(entryOffset + 8, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
	                    }
	                    return vals;
	                }
	
	            case 5:
	                // rational = two long values, first is numerator, second is denominator
	                if (numValues == 1) {
	                    numerator = file.getUint32(valueOffset, !bigEnd);
	                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
	                    val = new Number(numerator / denominator);
	                    val.numerator = numerator;
	                    val.denominator = denominator;
	                    return val;
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
	                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
	                        vals[n] = new Number(numerator / denominator);
	                        vals[n].numerator = numerator;
	                        vals[n].denominator = denominator;
	                    }
	                    return vals;
	                }
	
	            case 9:
	                // slong, 32 bit signed int
	                if (numValues == 1) {
	                    return file.getInt32(entryOffset + 8, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
	                    }
	                    return vals;
	                }
	
	            case 10:
	                // signed rational, two slongs, first is numerator, second is denominator
	                if (numValues == 1) {
	                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
	                    }
	                    return vals;
	                }
	        }
	    }
	
	    function getStringFromDB(buffer, start, length) {
	        var outstr = "";
	        for (n = start; n < start + length; n++) {
	            outstr += String.fromCharCode(buffer.getUint8(n));
	        }
	        return outstr;
	    }
	
	    function readEXIFData(file, start) {
	        if (getStringFromDB(file, start, 4) != "Exif") {
	            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
	            return false;
	        }
	
	        var bigEnd,
	            tags,
	            tag,
	            exifData,
	            gpsData,
	            tiffOffset = start + 6;
	
	        // test for TIFF validity and endianness
	        if (file.getUint16(tiffOffset) == 0x4949) {
	            bigEnd = false;
	        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
	            bigEnd = true;
	        } else {
	            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
	            return false;
	        }
	
	        if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
	            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
	            return false;
	        }
	
	        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
	
	        if (firstIFDOffset < 0x00000008) {
	            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
	            return false;
	        }
	
	        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);
	
	        if (tags.ExifIFDPointer) {
	            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
	            for (tag in exifData) {
	                switch (tag) {
	                    case "LightSource":
	                    case "Flash":
	                    case "MeteringMode":
	                    case "ExposureProgram":
	                    case "SensingMethod":
	                    case "SceneCaptureType":
	                    case "SceneType":
	                    case "CustomRendered":
	                    case "WhiteBalance":
	                    case "GainControl":
	                    case "Contrast":
	                    case "Saturation":
	                    case "Sharpness":
	                    case "SubjectDistanceRange":
	                    case "FileSource":
	                        exifData[tag] = StringValues[tag][exifData[tag]];
	                        break;
	
	                    case "ExifVersion":
	                    case "FlashpixVersion":
	                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
	                        break;
	
	                    case "ComponentsConfiguration":
	                        exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
	                        break;
	                }
	                tags[tag] = exifData[tag];
	            }
	        }
	
	        if (tags.GPSInfoIFDPointer) {
	            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
	            for (tag in gpsData) {
	                switch (tag) {
	                    case "GPSVersionID":
	                        gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
	                        break;
	                }
	                tags[tag] = gpsData[tag];
	            }
	        }
	
	        return tags;
	    }
	
	    EXIF.getData = function (img, callback) {
	        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) return false;
	
	        if (!imageHasData(img)) {
	            getImageData(img, callback);
	        } else {
	            if (callback) {
	                callback.call(img);
	            }
	        }
	        return true;
	    };
	
	    EXIF.getTag = function (img, tag) {
	        if (!imageHasData(img)) return;
	        return img.exifdata[tag];
	    };
	
	    EXIF.getAllTags = function (img) {
	        if (!imageHasData(img)) return {};
	        var a,
	            data = img.exifdata,
	            tags = {};
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                tags[a] = data[a];
	            }
	        }
	        return tags;
	    };
	
	    EXIF.pretty = function (img) {
	        if (!imageHasData(img)) return "";
	        var a,
	            data = img.exifdata,
	            strPretty = "";
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                if ((0, _typeof3.default)(data[a]) == "object") {
	                    if (data[a] instanceof Number) {
	                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
	                    } else {
	                        strPretty += a + " : [" + data[a].length + " values]\r\n";
	                    }
	                } else {
	                    strPretty += a + " : " + data[a] + "\r\n";
	                }
	            }
	        }
	        return strPretty;
	    };
	
	    EXIF.readFromBinaryFile = function (file) {
	        return findEXIFinJPEG(file);
	    };
	
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return EXIF;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(undefined);

/***/ },
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(71);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(74);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _assign = __webpack_require__(8);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _asyncToGenerator2 = __webpack_require__(108);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Administrator on 2016/3/14 0014.
	 */
	var defaults = {
	    maxWidth: 828,
	    maxHeight: 1472
	};
	
	function dataURItoBlob(dataURI) {
	    // convert base64 to raw binary data held in a string
	    var byteString, mimestring;
	    if (dataURI.split(',')[0].indexOf('base64') !== -1) {
	        byteString = atob(dataURI.split(',')[1]);
	    } else {
	        byteString = decodeURI(dataURI.split(',')[1]);
	    }
	    mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0];
	
	    var content = new Array();
	    for (var i = 0; i < byteString.length; i++) {
	        content[i] = byteString.charCodeAt(i);
	    }
	    try {
	        return new Blob([new Uint8Array(content)], { type: mimestring });
	    } catch (e) {
	        return e;
	    }
	}
	
	exports.default = function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file, options) {
	        var res;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        options = (0, _assign2.default)({}, defaults, options);
	                        _context.next = 3;
	                        return new _promise2.default(function (resolve, reject) {
	                            var fileReader = new FileReader();
	                            fileReader.readAsDataURL(file);
	                            fileReader.onload = function (e) {
	                                resolve(e.target.result);
	                            };
	                        });
	
	                    case 3:
	                        res = _context.sent;
	                        _context.next = 6;
	                        return new _promise2.default(function (resolve, reject) {
	                            var canvas = document.createElement('canvas'),
	                                ctx = canvas.getContext('2d');
	                            var img = new Image();
	                            img.src = res;
	                            img.onload = function () {
	                                var degreeW = options.maxWidth / img.width,
	                                    degreeH = options.maxHeight / img.height,
	                                    degree = degreeW > degreeH ? degreeH : degreeW;
	                                if (degree < 1) {
	                                    canvas.width = img.width * degree;
	                                    canvas.height = img.height * degree;
	                                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	                                    setTimeout(function () {
	                                        var res = dataURItoBlob(canvas.toDataURL('image/jpeg'), file.name);
	                                        if (res instanceof Error) {
	                                            reject(res);
	                                        } else {
	                                            resolve(res);
	                                        }
	                                    }, 0);
	                                } else {
	                                    resolve(file);
	                                }
	                            };
	                        });
	
	                    case 6:
	                        return _context.abrupt('return', _context.sent);
	
	                    case 7:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    return function (_x, _x2) {
	        return _ref.apply(this, arguments);
	    };
	}();

/***/ },
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"outer-dialog add\">\n    <ul>\n        <li class=\"pic iconfont\"><input type=\"file\" @change=\"selected\"/></li>\n        <li class=\"text iconfont\"></li>\n        <li class=\"page iconfont\"></li>\n        <!--<li class=\"mult iconfont\" :class=\"{'close':!add.setting.multSelect}\" @click=\"multChange\"></li>-->\n    </ul>\n</div>\n";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(155)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\dialog\\Attribute.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(156)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7541afaa/Attribute.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _add = __webpack_require__(62);
	
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        },
	        actions: {
	            itemCopy: _add.itemCopy, itemDel: _add.itemDel, itemUpIndex: _add.itemUpIndex, itemDownIndex: _add.itemDownIndex, stateChangeInit: _add.stateChangeInit, stateChangeAnimList: _add.stateChangeAnimList
	        }
	    },
	    methods: {
	        copy: function copy() {
	            this.itemCopy();
	        },
	        del: function del() {
	            this.itemDel();
	        },
	        upIndex: function upIndex() {
	            this.itemUpIndex();
	        },
	        downIndex: function downIndex() {
	            this.itemDownIndex();
	        },
	        animation: function animation() {
	            this.stateChangeAnimList();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div class="outer-dialog attribute">
	//         <ul>
	//             <li class="copy iconfont" @click="copy"></li>
	//             <li class="del iconfont" @click="del"></li>
	//             <li class="up-index iconfont" @click="upIndex"></li>
	//             <li class="down-index iconfont" @click="downIndex"></li>
	//             <li class="animation iconfont" @click="animation"></li>
	//         </ul>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"outer-dialog attribute\">\n    <ul>\n        <li class=\"copy iconfont\" @click=\"copy\"></li>\n        <li class=\"del iconfont\" @click=\"del\"></li>\n        <li class=\"up-index iconfont\" @click=\"upIndex\"></li>\n        <li class=\"down-index iconfont\" @click=\"downIndex\"></li>\n        <li class=\"animation iconfont\" @click=\"animation\"></li>\n    </ul>\n</div>\n";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\dialog\\AnimationList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a8d8755e/AnimationList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _add = __webpack_require__(62);
	
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        },
	        actions: {
	            stateChangeAttr: _add.stateChangeAttr, stateChangeAnimAdd: _add.stateChangeAnimAdd
	        }
	    },
	    methods: {
	        back: function back() {
	            this.stateChangeAttr();
	        },
	        addAnimation: function addAnimation() {
	            this.stateChangeAnimAdd();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div class="outer-dialog animation-list">
	//         <ul>
	//             <li class="back iconfont" @click="back"></li>
	//             <li class="add iconfont" @click="addAnimation"></li>
	//             <li class="del iconfont"></li>
	//         </ul>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"outer-dialog animation-list\">\n    <ul>\n        <li class=\"back iconfont\" @click=\"back\"></li>\n        <li class=\"add iconfont\" @click=\"addAnimation\"></li>\n        <li class=\"del iconfont\"></li>\n    </ul>\n</div>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(161)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\dialog\\AddAnimation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(162)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6bea7eb8/AddAnimation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _add = __webpack_require__(62);
	
	exports.default = {
	    vuex: {
	        actions: {
	            stateChangeAnimList: _add.stateChangeAnimList, animationAdd: _add.animationAdd
	        }
	    },
	    methods: {
	        back: function back() {
	            this.stateChangeAnimList();
	        },
	        confirm: function confirm() {
	            this.animationAdd();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div class="outer-dialog animation-add">
	//         <ul>
	//             <li class="back iconfont" @click="back"></li>
	//             <li class="confirm iconfont" @click="confirm"></li>
	//             <li class="preview iconfont"></li>
	//         </ul>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"outer-dialog animation-add\">\n    <ul>\n        <li class=\"back iconfont\" @click=\"back\"></li>\n        <li class=\"confirm iconfont\" @click=\"confirm\"></li>\n        <li class=\"preview iconfont\"></li>\n    </ul>\n</div>\n";

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n\n<component :is=\"componentName\"></component>\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(167)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\win\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(187)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9f0c4fc2/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".window-outer {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: rgba(247, 247, 248, 0.85);\n  border-radius: 8px;\n  padding: 8px;\n}\n.window-outer.animation-list svg {\n  width: 300px;\n  height: 300px;\n}\n.window-outer.animation-list svg .axes {\n  stroke: #000;\n  stroke-width: 0.4;\n}\n.window-outer.animation-list svg .refer {\n  stroke: #ccc;\n  stroke-width: 0.2;\n}\n.window-outer.animation-list svg .referLabel {\n  font-size: 8px;\n  -webkit-transform: translate(-8px, 10px);\n          transform: translate(-8px, 10px);\n}\n.window-outer.add-animation {\n  overflow: auto;\n  font-size: 12px;\n  width: 80%;\n  height: 50%;\n}\n.window-outer.add-animation .group {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.window-outer.add-animation .group.title {\n  margin-bottom: 15px;\n}\n.window-outer.add-animation .group .label {\n  text-align: left;\n}\n", "", {"version":3,"sources":["/./public/app/page/add/win/style.less"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,yCAAiC;UAAjC,iCAAiC;EACjC,4CAA4C;EAC5C,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,aAAa;EACb,cAAc;CACf;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,yCAAiC;UAAjC,iCAAiC;CAClC;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB","file":"style.less","sourcesContent":[".window-outer {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(247, 247, 248, 0.85);\n  border-radius: 8px;\n  padding: 8px;\n}\n.window-outer.animation-list svg {\n  width: 300px;\n  height: 300px;\n}\n.window-outer.animation-list svg .axes {\n  stroke: #000;\n  stroke-width: 0.4;\n}\n.window-outer.animation-list svg .refer {\n  stroke: #ccc;\n  stroke-width: 0.2;\n}\n.window-outer.animation-list svg .referLabel {\n  font-size: 8px;\n  transform: translate(-8px, 10px);\n}\n.window-outer.add-animation {\n  overflow: auto;\n  font-size: 12px;\n  width: 80%;\n  height: 50%;\n}\n.window-outer.add-animation .group {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.window-outer.add-animation .group.title {\n  margin-bottom: 15px;\n}\n.window-outer.add-animation .group .label {\n  text-align: left;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _AnimationList = __webpack_require__(168);
	
	var _AnimationList2 = _interopRequireDefault(_AnimationList);
	
	var _AddAnimation = __webpack_require__(174);
	
	var _AddAnimation2 = _interopRequireDefault(_AddAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang="less" src="./style.less"></style>
	// <template>
	//     <component :is="componentName"></component>
	// </template>
	// <script type="text/ecmascript-6">
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        }
	    },
	    computed: {
	        componentName: function componentName() {
	            var map = {
	                'anim-list': 'AnimationList',
	                'anim-add': 'AddAnimation'
	            };
	            return map[this.add.stateType];
	        }
	    },
	    components: {
	        AnimationList: _AnimationList2.default, AddAnimation: _AddAnimation2.default
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(169)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\win\\AnimationList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(173)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0613df22/AnimationList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _TimeLine = __webpack_require__(170);
	
	var _TimeLine2 = _interopRequireDefault(_TimeLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    vuex: {
	        getters: {
	            add: function add(state) {
	                return state.add;
	            }
	        }
	    },
	    filters: {
	        timeFormat: function timeFormat(n) {
	            if (n > 1000) {
	                return n / 1000 + 's';
	            }
	            return n + 'ms';
	        }
	    },
	    computed: {
	        animation: function animation() {
	            return this.add.page.getFirstEditorItem().animations;
	        }
	    },
	    data: function data() {
	        return {
	            x: 0,
	            y: 0,
	            scale: 1
	        };
	    },
	
	    components: {
	        TimeLine: _TimeLine2.default
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div class="window-outer animation-list" @touchstart.prevent="">
	//         <svg viewBox="-1 810 200 200">
	//             <g :style="{transform:`translateX(${(1+n)*30}px)`}" v-for="n in 34">
	//                 <line x1="0" y1="0" x2="0" y2="1000" class="refer"/>
	//                 <text x="0" y="1000" class="referLabel">{{(1+n)*60|timeFormat}}</text>
	//             </g>
	//             <g :style="{transform:`translateY(-${(1+n)*20}px)`}" v-for="n in 49">
	//                 <line x1="0" y1="1000" x2="1000" y2="1000" class="refer"/>
	//             </g>
	//             <g class="animate-item" style="transform: translateY(1000px)">
	//                 <time-line :item="item" v-for="item in animation.timeLine" :style="{transform:`translateY(-${($index+1)*20}px)`}"></time-line>
	//             </g>
	//             <g>
	//                 <line x1="0" y1="0" x2="0" y2="1000" class="axes"/>
	//                 <text x="0" y="1000" class="referLabel" style="transform: translate(0,10px)">0ms</text>
	//             </g>
	//             <line x1="0" y1="1000" x2="1000" y2="1000" class="axes"/>
	//         </svg>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(171)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\win\\TimeLine.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(172)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-076ca8c4/TimeLine.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <g>
	//         <rect
	//                 @touchstart.prevent='touchStart($index,$event)'
	//                 @touchmove='touchMove($index,$event)'
	//                 @touchend='touchEnd($index,$event)'
	//                 @touchcancel='touchEnd($index,$event)'
	//               :x="getX($index)" y="0" :width="getWidth($index)" height="20" ry="10"
	//                 :style="getStyle($index)" v-for="point in item"></rect>
	//     </g>
	// </template>
	// <script type="text/ecmascript-6">
	exports.default = {
	    props: {
	        item: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        }
	    },
	    methods: {
	        getX: function getX(index) {
	            var x = 0;
	            for (var start = 0; start < index; start++) {
	                x += parseInt(this.item[start].delay);
	                x += parseInt(this.item[start].last);
	            }
	            x += parseInt(this.item[index].delay);
	            return x;
	        },
	        getWidth: function getWidth(index) {
	            return parseInt(this.item[index].last);
	        },
	        getStyle: function getStyle(index) {
	            var colors = ['#66cc99', '#ff99cc', '#99cc33', '#ccccff', '#99ccff'];
	            return {
	                fill: colors[this.item[index].type],
	                transform: 'translate(' + this.item[index].x + 'px,' + this.item[index].y + 'px)'
	            };
	        },
	        touchStart: function touchStart(index, e) {
	            this.item[index].touchStart(e);
	        },
	        touchMove: function touchMove(index, e) {
	            this.item[index].touchMove(e);
	        },
	        touchEnd: function touchEnd(index, e) {
	            this.item[index].touchEnd(e);
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "\n<g>\n    <rect\n            @touchstart.prevent='touchStart($index,$event)'\n            @touchmove='touchMove($index,$event)'\n            @touchend='touchEnd($index,$event)'\n            @touchcancel='touchEnd($index,$event)'\n          :x=\"getX($index)\" y=\"0\" :width=\"getWidth($index)\" height=\"20\" ry=\"10\"\n            :style=\"getStyle($index)\" v-for=\"point in item\"></rect>\n</g>\n";

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"window-outer animation-list\" @touchstart.prevent=\"\">\n    <svg viewBox=\"-1 810 200 200\">\n        <g :style=\"{transform:`translateX(${(1+n)*30}px)`}\" v-for=\"n in 34\">\n            <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1000\" class=\"refer\"/>\n            <text x=\"0\" y=\"1000\" class=\"referLabel\">{{(1+n)*60|timeFormat}}</text>\n        </g>\n        <g :style=\"{transform:`translateY(-${(1+n)*20}px)`}\" v-for=\"n in 49\">\n            <line x1=\"0\" y1=\"1000\" x2=\"1000\" y2=\"1000\" class=\"refer\"/>\n        </g>\n        <g class=\"animate-item\" style=\"transform: translateY(1000px)\">\n            <time-line :item=\"item\" v-for=\"item in animation.timeLine\" :style=\"{transform:`translateY(-${($index+1)*20}px)`}\"></time-line>\n        </g>\n        <g>\n            <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1000\" class=\"axes\"/>\n            <text x=\"0\" y=\"1000\" class=\"referLabel\" style=\"transform: translate(0,10px)\">0ms</text>\n        </g>\n        <line x1=\"0\" y1=\"1000\" x2=\"1000\" y2=\"1000\" class=\"axes\"/>\n    </svg>\n</div>\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(175)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\page\\add\\win\\AddAnimation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(186)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2fc399c6/AddAnimation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _add = __webpack_require__(62);
	
	var _buttonGroup = __webpack_require__(176);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _slider = __webpack_require__(181);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    vuex: {
	        actions: {
	            animationChange: _add.animationChange
	        },
	        getters: {
	            animation: function animation(state) {
	                return state.add.animation;
	            }
	        }
	    },
	    typeMap: [{
	        type: 'opacity',
	        text: '透明度'
	    }, {
	        type: 'translate',
	        text: '位移'
	    }, {
	        type: 'scale',
	        text: '缩放'
	    }, {
	        type: 'rotate',
	        text: '旋转'
	    }, {
	        type: 'skew',
	        text: '倾斜'
	    }],
	    data: function data() {
	        return {
	            animationType: 0,
	            animationTypeList: this.$options.typeMap.map(function (n) {
	                return n.text;
	            }),
	            data: {
	                type: 'opacity',
	                delay: 0,
	                last: 0,
	                repeat: 0
	            }
	        };
	    },
	
	    methods: {
	        setType: function setType(value) {
	            this.animationChange({
	                key: 'type', value: value
	            });
	            console.log(this.animation);
	        },
	        setDelay: function setDelay(value) {
	            this.animationChange({
	                key: 'delay', value: value
	            });
	        },
	        setLast: function setLast(value) {
	            this.animationChange({
	                key: 'last', value: value
	            });
	        },
	        setRepeat: function setRepeat(value) {
	            this.animationChange({
	                key: 'repeat', value: value
	            });
	        }
	    },
	    components: {
	        slider: _slider2.default, ButtonGroup: _buttonGroup2.default
	    }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <div class="window-outer add-animation">
	//         <div class="group title">
	//             <button-group :active="animation.type" :list="animationTypeList" v-on:value="setType"></button-group>
	//         </div>
	//         <div class="group">
	//             <div class="label">延迟</div>
	//             <slider :value="animation.delay" v-on:value="setDelay"></slider>
	//         </div>
	//         <div class="group">
	//             <div class="label">时长</div>
	//             <slider :value="animation.last" v-on:value="setLast"></slider>
	//         </div>
	//         <div class="group">
	//             <div class="label">重复次数</div>
	//             <slider :value="animation.repeat" v-on:value="setRepeat"></slider>
	//         </div>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(177)
	__vue_script__ = __webpack_require__(179)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\modules\\buttonGroup\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(180)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6adf58c9/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".button-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.button-group > .group-item {\n  background-color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 6px;\n}\n.button-group > .group-item:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-right: 8px;\n}\n.button-group > .group-item:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  padding-left: 8px;\n}\n.button-group > .group-item:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.button-group > .group-item.on {\n  color: #fff;\n  background-color: #21c2c0;\n  border-color: #21c2c0;\n}\n", "", {"version":3,"sources":["/./public/app/modules/buttonGroup/style.less"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,uBAAuB;EACvB,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,+BAA2B;MAA3B,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;EACE,6BAA6B;EAC7B,0BAA0B;EAC1B,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB","file":"style.less","sourcesContent":[".button-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.button-group > .group-item {\n  background-color: #fff;\n  display: inline-block;\n  font-weight: 500;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 6px;\n}\n.button-group > .group-item:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-right: 8px;\n}\n.button-group > .group-item:last-child:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  padding-left: 8px;\n}\n.button-group > .group-item:not(:first-child):not(:last-child) {\n  border-radius: 0;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.button-group > .group-item.on {\n  color: #fff;\n  background-color: #21c2c0;\n  border-color: #21c2c0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less" src="./style.less"></style>
	// <template>
	//     <div class="button-group">
	//         <a class="group-item" v-for="item in list" :class="{'on':active==$index}" @click="setValue($index)">{{item}}</a>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">
	exports.default = {
	    props: {
	        active: {
	            type: Number,
	            default: 0
	        },
	        list: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        }
	    },
	    methods: {
	        setValue: function setValue(index) {
	            this.active = index;
	            this.$dispatch('value', index);
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"button-group\">\n    <a class=\"group-item\" v-for=\"item in list\" :class=\"{'on':active==$index}\" @click=\"setValue($index)\">{{item}}</a>\n</div>\n";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(182)
	__vue_script__ = __webpack_require__(184)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] public\\app\\modules\\slider\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(185)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a63cf13e/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".slider {\n  position: relative;\n  margin: 10px 8px;\n  height: 4px;\n  cursor: pointer;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.slider .slider-background {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  border-radius: 5px;\n  background-color: #6f6f6f;\n}\n.slider .slider-line {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #21c2c0;\n  z-index: 1;\n  -webkit-transition: background-color 0.3s ease;\n  transition: background-color 0.3s ease;\n}\n.slider .slider-item {\n  position: absolute;\n  margin-left: -9px;\n  margin-top: -7px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #21c2c0;\n  background-color: #fff;\n  z-index: 2;\n  -webkit-transition: border-color 0.3s ease;\n  transition: border-color 0.3s ease;\n}\n.slider .slider-item.on {\n  border-color: #44d7d5;\n}\n.slider .slider-line.on {\n  background-color: #44d7d5;\n}\n.slider .slider-event {\n  position: absolute;\n  margin-left: -15px;\n  margin-top: -11px;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  z-index: 3;\n}\n", "", {"version":3,"sources":["/./public/app/modules/slider/style.less"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,WAAW;EACX,+CAAuC;EAAvC,uCAAuC;CACxC;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,uBAAuB;EACvB,WAAW;EACX,2CAAmC;EAAnC,mCAAmC;CACpC;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,WAAW;CACZ","file":"style.less","sourcesContent":[".slider {\n  position: relative;\n  margin: 10px 8px;\n  height: 4px;\n  cursor: pointer;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.slider .slider-background {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  border-radius: 5px;\n  background-color: #6f6f6f;\n}\n.slider .slider-line {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #21c2c0;\n  z-index: 1;\n  transition: background-color 0.3s ease;\n}\n.slider .slider-item {\n  position: absolute;\n  margin-left: -9px;\n  margin-top: -7px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #21c2c0;\n  background-color: #fff;\n  z-index: 2;\n  transition: border-color 0.3s ease;\n}\n.slider .slider-item.on {\n  border-color: #44d7d5;\n}\n.slider .slider-line.on {\n  background-color: #44d7d5;\n}\n.slider .slider-event {\n  position: absolute;\n  margin-left: -15px;\n  margin-top: -11px;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  z-index: 3;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less" src="./style.less"></style>
	// <template>
	//     <div class="slider" @click="clickHandler">
	//         <div class="slider-background"></div>
	//         <div class="slider-line" :style="{'width':value+'%'}" :class="{'on':active}"></div>
	//         <div class="slider-item" :style="{'left':value+'%'}" :class="{'on':active}"></div>
	//         <div class="slider-event" :style="{'left':value+'%'}" @touchstart.prevent="touchStart" @touchmove.prevent="touchMove" @touchcancel="cancel" @touchend="cancel" @click.stop=""></div>
	//     </div>
	// </template>
	// <script type="text/ecmascript-6">
	exports.default = {
	    props: {
	        value: {
	            type: Number,
	            default: 0
	        }
	    },
	    eventStart: 0,
	    valueStart: 0,
	    data: function data() {
	        return {
	            active: false
	        };
	    },
	
	    methods: {
	        touchStart: function touchStart(e) {
	            this.$options.eventStart = e.touches[0].clientX;
	            this.$options.valueStart = this.value;
	            this.active = true;
	        },
	        touchMove: function touchMove(e) {
	            var offset = 100 * (e.touches[0].clientX - this.$options.eventStart) / this.$el.offsetWidth + this.$options.valueStart;
	            if (offset < 0) {
	                offset = 0;
	            } else if (offset > 100) {
	                offset = 100;
	            }
	            this.setValue(offset);
	        },
	        cancel: function cancel() {
	            this.active = false;
	        },
	        clickHandler: function clickHandler(e) {
	            this.setValue(100 * e.offsetX / this.$el.offsetWidth);
	        },
	        setValue: function setValue(value) {
	            this.value = value;
	            this.$dispatch('value', value);
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"slider\" @click=\"clickHandler\">\n    <div class=\"slider-background\"></div>\n    <div class=\"slider-line\" :style=\"{'width':value+'%'}\" :class=\"{'on':active}\"></div>\n    <div class=\"slider-item\" :style=\"{'left':value+'%'}\" :class=\"{'on':active}\"></div>\n    <div class=\"slider-event\" :style=\"{'left':value+'%'}\" @touchstart.prevent=\"touchStart\" @touchmove.prevent=\"touchMove\" @touchcancel=\"cancel\" @touchend=\"cancel\" @click.stop=\"\"></div>\n</div>\n";

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"window-outer add-animation\">\n    <div class=\"group title\">\n        <button-group :active=\"animation.type\" :list=\"animationTypeList\" v-on:value=\"setType\"></button-group>\n    </div>\n    <div class=\"group\">\n        <div class=\"label\">延迟</div>\n        <slider :value=\"animation.delay\" v-on:value=\"setDelay\"></slider>\n    </div>\n    <div class=\"group\">\n        <div class=\"label\">时长</div>\n        <slider :value=\"animation.last\" v-on:value=\"setLast\"></slider>\n    </div>\n    <div class=\"group\">\n        <div class=\"label\">重复次数</div>\n        <slider :value=\"animation.repeat\" v-on:value=\"setRepeat\"></slider>\n    </div>\n</div>\n";

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "\n\n<component :is=\"componentName\"></component>\n";

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"canvas\" @click=\"canvasClick\">\n    <svg width=\"100%\" height=\"100%\">\n        <template v-for=\"item in add.page.itemList\">\n            <image v-if=\"item.type=='image'\" xlink:href=\"{{item.data}}\" :x=\"item.x\" :y=\"item.y\" :height=\"item.height\" :width=\"item.height\" @click.stop=\"editor(item)\"/>\n        </template>\n    </svg>\n    <div class=\"editor\">\n        <div class=\"editor-item\" v-for=\"item in add.page.itemList\" v-if=\"item.editor\" :style=\"{'left':item.x+'px','top':item.y+'px','width':item.width+'px','height':item.height+'px'}\"\n             @click.stop=\"editor(item)\" @touchstart=\"touchStart(item,$event)\" @touchmove=\"touchMove(item,$event)\" @touchcancel=\"touchEnd(item,$event)\" @touchend=\"touchEnd(item,$event)\"></div>\n    </div>\n</div>\n<dialog></dialog>\n<win></win>\n";

/***/ }
]));
//# sourceMappingURL=2.2.js.map