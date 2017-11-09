/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
;(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

function setEqualHeight(columns){
  var tallestcolumn = 0;
  columns.each(function(){
    var currentHeight = $(this).height();
    console.log(currentHeight);
    if(currentHeight > tallestcolumn){
      tallestcolumn = currentHeight;
    }});
  columns.height(tallestcolumn);
}

function scrollLinks(links) {
  links.click(function () {
    if ($(this).attr("href") == "" || $(this).attr("href") == "#" || $(this).attr("href") == "javascript:void(0)") {
      return false;
    }
    var elementClick = $(this).attr("href");
    $('html,body').stop().animate({scrollTop: $(elementClick).offset().top}, 1000);
    return false;
  });
}

function addVoidForLinks(links) {
  $.each(links, function () {
    if ($(this).attr("href") == "" || $(this).attr("href") == "#") {
      $(this).attr("href", "javascript:void(0)");
    }
  });
}

(function(global) {
	(function() {
		var lastTime = 0;
		var vendors = ["ms", "moz", "webkit", "o"];
		for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame =
				window[vendors[x] + "RequestAnimationFrame"];
			window.cancelAnimationFrame =
				window[vendors[x] + "CancelAnimationFrame"] ||
				window[vendors[x] + "CancelRequestAnimationFrame"];
		}
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		}
	})();

	var createElement = function(mainCls, cls, parent) {
		var obj = document.createElement("div");
		obj.classList.add(mainCls + cls);

		if (parent) {
			parent.appendChild(obj);
		}

		return obj;
	};

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return (
				navigator.userAgent.match(/IEMobile/i) ||
				navigator.userAgent.match(/WPDesktop/i)
			);
		},
		any: function() {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		}
	};

	var events = isMobile.any() ? "touchend" : "mouseup";

	var GalleryTouch = function() {
		return this;
	};

	GalleryTouch.prototype = {
		constructor: GalleryTouch,

		init: function(opts) {
			this.defaults = this.extend(
				{
					element: "",
					mainClass: "gallery-touch",
					repeat: false,
					arrow: true,
					nav: true
				},
				opts
			);

			this.tags = {};
			this.values = {};
			this.values.resizeLength = undefined;
			this.values.triggerEnable = false;
			this.values.timer = undefined;

			this.tags.element = this.defaults.element;

			if (!this.tags.element) {
				return false;
			}

			this.tags.parent = this.tags.element.parentNode.parentNode;
			this.tags.scrollSection = this.tags.element.parentNode;

			this.createDOM(this.defaults);
			this.getSize();
			this.resize();
		},

		extend: function(destination, source) {
			for (var property in source) {
				if (source.hasOwnProperty(property)) {
					destination[property] = source[property];
				}
			}
			return destination;
		},

		createDOM: function(opts) {
			this.tags.arrow = createElement(
				opts.mainClass,
				"__arrow",
				this.tags.parent
			);
			this.tags.prev = createElement(opts.mainClass, "__prev", this.tags.arrow);
			this.tags.next = createElement(opts.mainClass, "__next", this.tags.arrow);
			this.tags.nav = createElement(opts.mainClass, "__nav", this.tags.parent);

			this.tags.prev.innerHTML = "<span><i></i></span>";
			this.tags.next.innerHTML = "<span><i></i></span>";

			this.tags.thumbs = [];
		},

		getSize: function() {
			this.values.step = 0;
			this.values.longTouch = false;
			this.values.triggerEvent = true;
			this.tags.parent.classList.add("enable");
			this.values.width_parent = this.tags.scrollSection.offsetWidth;
			this.values.width = this.tags.element.scrollWidth;
		},

		arrowShow: function() {
			if (this.values.width > this.values.width_parent) {
				if (this.defaults.arrow) {
					this.tags.arrow.classList.add("active");
				}
				if (this.defaults.nav) {
					this.tags.nav.classList.add("active");
				}
			} else {
				this.tags.arrow.classList.remove("active");
				this.tags.nav.classList.remove("active");
			}
		},

		resize: function() {
			var obj = this;

			window.addEventListener(
				"resize",
				function() {
					obj.values.triggerEvent = true;
					obj.getSize();

					if (obj.tags.thumbs.length) {
						obj.tags.thumbs[0].classList.add("active");
					}

					obj.eventNavs();
					obj.arrowShow(obj.defaults);
					obj.cssTransform(obj.tags.element, 0);
				},
				false
			);
		},

		eventsTouch: function() {
			var obj = this;
			var eventsStart = events == "touchend" ? "touchstart" : "mousedown";
			var eventsMove = events == "touchend" ? "touchmove" : "mousemove";
			var eventsEnd = events;
			var shiftX;
			var moveX;
			var startX;
			var startFn;
			var moveFn;
			var endFn;
			var trigger = false;
			var triggerClass = false;

			var translate = function() {
				if (shiftX > 0) {
					obj.values.step = obj.values.step - obj.values.width_parent;

					if (obj.values.step <= 0) {
						obj.values.step = 0;
					}
				} else {
					obj.values.step = obj.values.step + obj.values.width_parent;

					if (obj.values.step >= obj.values.width - obj.values.width_parent) {
						if (obj.defaults.repeat) {
							obj.values.step = 0;
						} else {
							obj.values.step = obj.values.width - obj.values.width_parent;
						}
					}
				}

				if (obj.tags.thumbs.length) {
					obj.tags.thumbs.forEach(function(node) {
						node.classList.remove("active");
					});

					obj.tags.thumbs[
						Math.ceil(obj.values.step / obj.values.width_parent)
						].classList.add("active");
				}

				obj.cssTransform(obj.tags.element, obj.values.step * -1);
			};

			startFn = function(e) {
				shiftX = 0;

				if (!obj.values.triggerEvent) {
					return false;
				}

				obj.values.longTouch = false;

				setTimeout(function() {
					obj.values.longTouch = true;
				}, 250);

				startX = events == "touchend" ? e.touches[0].pageX : e.pageX;
				trigger = true;
			};

			moveFn = function(e) {
				if (!trigger) {
					return false;
				}
				e.preventDefault();
				if (!triggerClass) {
					obj.tags.parent.classList.add("move");
					triggerClass = true;
				}

				var x = events == "touchend" ? e.touches[0].pageX : e.pageX;

				shiftX = x - startX;

				if (
					shiftX - obj.values.step < 0 &&
					shiftX - obj.values.step >
					(obj.values.width - obj.values.width_parent) * -1
				) {
					obj.cssTransform(obj.tags.element, shiftX - obj.values.step);
				}
			};

			endFn = function(e) {
				if (!trigger) {
					return false;
				}

				trigger = false;
				triggerClass = false;
				obj.tags.parent.classList.remove("move");

				if (Math.abs(shiftX) < obj.values.width_parent / 6) {
					obj.cssTransform(obj.tags.element, obj.values.step * -1);
					return false;
				}

				if (!obj.values.longTouch) {
					translate();
				} else if (obj.values.longTouch) {
					if (Math.abs(shiftX) < obj.values.width_parent / 2) {
						obj.cssTransform(obj.tags.element, obj.values.step * -1);
					} else {
						translate();
					}
				}
			};

			this.tags.scrollSection.addEventListener(eventsStart, startFn);
			this.tags.scrollSection.addEventListener(eventsMove, moveFn);
			document.addEventListener(eventsEnd, endFn);
		},

		eventArrows: function() {
			var obj = this;

			var rotate = function() {
				if (obj.tags.thumbs.length) {
					obj.tags.thumbs.forEach(function(node) {
						node.classList.remove("active");
					});

					obj.tags.thumbs[
						Math.ceil(obj.values.step / obj.values.width_parent)
						].classList.add("active");
				}

				obj.cssTransform(obj.tags.element, obj.values.step * -1);
			};

			this.tags.prev.addEventListener(
				events,
				function(e) {
					e.stopPropagation();

					obj.values.step = obj.values.step - obj.values.width_parent;

					if (obj.values.step <= 0) {
						obj.values.step = 0;
					}

					rotate();
				},
				false
			);

			this.tags.next.addEventListener(
				events,
				function(e) {
					e.stopPropagation();

					obj.values.step = obj.values.step + obj.values.width_parent;

					if (obj.values.step >= obj.values.width - obj.values.width_parent) {
						if (obj.defaults.repeat) {
							obj.values.step = 0;
						} else {
							obj.values.step = obj.values.width - obj.values.width_parent;
						}
					}

					rotate();
				},
				false
			);
		},

		eventNavs: function() {
			var obj = this;
			var length = Math.ceil(this.values.width / this.values.width_parent);

			if (this.values.resizeLength == length) {
				return false;
			}

			this.values.resizeLength = length;

			this.tags.nav.innerHTML = "";
			this.tags.thumbs = [];

			for (var i = 0; i < length; i += 1) {
				this.tags.thumbs.push(
					createElement(this.defaults.mainClass, "__thumb", this.tags.nav)
				);
			}

			this.tags.thumbs.forEach(function(node, index) {
				if (index == 0) {
					node.classList.add("active");
				}

				node.addEventListener(
					events,
					function(e) {
						e.stopPropagation();

						obj.tags.thumbs.forEach(function(node) {
							node.classList.remove("active");
						});

						this.classList.add("active");
						obj.values.step = obj.values.width_parent * index;
						if (obj.values.step >= obj.values.width - obj.values.width_parent) {
							obj.values.step = obj.values.width - obj.values.width_parent;
						}

						obj.cssTransform(obj.tags.element, obj.values.step * -1);
					},
					false
				);
			});
		},

		cssTransform: function(obj, x) {
			obj.style["-webkit-transform"] = "translate3D(" + x + "px, 0, 0)";
			obj.style["-moz-transform"] = "translate3D(" + x + "px, 0, 0)";
			obj.style["-o-transform"] = "translate3D(" + x + "px, 0, 0)";
			obj.style["-ms-transform"] = "translate3D(" + x + "px, 0, 0)";
			obj.style["transform"] = "translate3D(" + x + "px, 0, 0)";
		},

		forcedNavigation: function(index) {
			if (this.tags.thumbs.length) {
				this.tags.thumbs.forEach(function(node) {
					node.classList.remove("active");
				});

				this.tags.thumbs[index].classList.add("active");
			}

			this.values.step = this.values.width_parent * index;

			if (obj.values.step >= obj.values.width - obj.values.width_parent) {
				obj.values.step = obj.values.width - obj.values.width_parent;
			}

			this.cssTransform(this.tags.element, this.values.step * -1);

			return this;
		},

		disable: function() {
			if (this.tags.thumbs.length) {
				this.tags.thumbs.forEach(function(node) {
					node.classList.remove("active");
				});
			}

			this.tags.element.style = "";
			this.tags.parent.classList.remove("enable");
			this.tags.arrow.classList.remove("active");
			this.tags.nav.classList.remove("active");
			this.cssTransform(this.tags.element, 0);
			this.values.triggerEvent = false;
			return this;
		},

		enable: function() {
			this.values.triggerEvent = true;
			this.getSize();

			if (!this.values.triggerEnable) {
				this.eventArrows();
				this.eventsTouch();
			}

			if (this.tags.thumbs.length) {
				this.tags.thumbs[0].classList.add("active");
			}

			this.eventNavs();
			this.arrowShow(this.defaults);
			this.values.triggerEnable = true;
			return this;
		}
	};

	global.GalleryTouch = GalleryTouch;
})(window);


