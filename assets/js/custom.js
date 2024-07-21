(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          	itemSelector: ".all",
          	percentPosition: true,
          	masonry: {
            columnWidth: ".all"
        }
    })

	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-cites-town').owlCarousel({
		items:4,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:4
			}
		}
	})

	$('.owl-weekly-offers').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:15,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			}
		}
	})

	
	
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('.scroll-to-section a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 79
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }

})(window.jQuery);

function openTab(tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("active");
	}
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.classList.add("active");
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
var ScrollReveal = function () { "use strict"; var r = { delay: 0, distance: "0", duration: 600, easing: "cubic-bezier(0.5, 0, 0, 1)", interval: 0, opacity: 0, origin: "bottom", rotate: { x: 0, y: 0, z: 0 }, scale: 1, cleanup: !1, container: document.documentElement, desktop: !0, mobile: !0, reset: !1, useDelay: "always", viewFactor: 0, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReset: function () { }, afterReveal: function () { }, beforeReset: function () { }, beforeReveal: function () { } }; var n = { success: function () { document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function () { document.body.style.height = "100%" }) }, failure: function () { return document.documentElement.classList.remove("sr"), { clean: function () { }, destroy: function () { }, reveal: function () { }, sync: function () { }, get noop() { return !0 } } } }; function o(e) { return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName } function u(e, t) { if (void 0 === t && (t = document), e instanceof Array) return e.filter(o); if (o(e)) return [e]; if (n = e, i = Object.prototype.toString.call(n), "object" == typeof window.NodeList ? n instanceof window.NodeList : null !== n && "object" == typeof n && "number" == typeof n.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) && (0 === n.length || o(n[0]))) return Array.prototype.slice.call(e); var n, i; if ("string" == typeof e) try { var r = t.querySelectorAll(e); return Array.prototype.slice.call(r) } catch (e) { return [] } return [] } function s(e) { return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e)) } function f(n, i) { if (s(n)) return Object.keys(n).forEach(function (e) { return i(n[e], e, n) }); if (n instanceof Array) return n.forEach(function (e, t) { return i(e, t, n) }); throw new TypeError("Expected either an array or object literal.") } function h(e) { for (var t = [], n = arguments.length - 1; 0 < n--;)t[n] = arguments[n + 1]; if (this.constructor.debug && console) { var i = "%cScrollReveal: " + e; t.forEach(function (e) { return i += "\n — " + e }), console.log(i, "color: #ea654b;") } } function t() { var n = this, i = { active: [], stale: [] }, t = { active: [], stale: [] }, r = { active: [], stale: [] }; try { f(u("[data-sr-id]"), function (e) { var t = parseInt(e.getAttribute("data-sr-id")); i.active.push(t) }) } catch (e) { throw e } f(this.store.elements, function (e) { -1 === i.active.indexOf(e.id) && i.stale.push(e.id) }), f(i.stale, function (e) { return delete n.store.elements[e] }), f(this.store.elements, function (e) { -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === t.active.indexOf(e.sequence.id) && t.active.push(e.sequence.id) }), f(this.store.containers, function (e) { -1 === r.active.indexOf(e.id) && r.stale.push(e.id) }), f(r.stale, function (e) { var t = n.store.containers[e].node; t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate), delete n.store.containers[e] }), f(this.store.sequences, function (e) { -1 === t.active.indexOf(e.id) && t.stale.push(e.id) }), f(t.stale, function (e) { return delete n.store.sequences[e] }) } function N(e) { if (e.constructor !== Array) throw new TypeError("Expected array."); if (16 === e.length) return e; if (6 !== e.length) throw new RangeError("Expected array with either 6 or 16 values."); var t = z(); return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t } function z() { for (var e = [], t = 0; t < 16; t++)t % 5 == 0 ? e.push(1) : e.push(0); return e } function F(e, t) { for (var n = N(e), i = N(t), r = [], o = 0; o < 4; o++)for (var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0; a < 4; a++) { var c = 4 * a, l = [i[c], i[c + 1], i[c + 2], i[c + 3]], d = s[0] * l[0] + s[1] * l[1] + s[2] * l[2] + s[3] * l[3]; r[o + c] = d } return r } function D(e, t) { var n = z(); return n[0] = e, n[5] = "number" == typeof t ? t : e, n } var S = function () { var n = {}, i = document.documentElement.style; function e(e, t) { if (void 0 === t && (t = i), e && "string" == typeof e) { if (n[e]) return n[e]; if ("string" == typeof t[e]) return n[e] = e; if ("string" == typeof t["-webkit-" + e]) return n[e] = "-webkit-" + e; throw new RangeError('Unable to find "' + e + '" style property.') } throw new TypeError("Expected a string.") } return e.clearCache = function () { return n = {} }, e }(); function p(e) { var t = window.getComputedStyle(e.node), n = t.position, i = e.config, r = {}, o = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || []; r.computed = o ? o.map(function (e) { return e.trim() }).join("; ") + ";" : "", r.generated = o.some(function (e) { return e.match(/visibility\s?:\s?visible/i) }) ? r.computed : o.concat(["visibility: visible"]).map(function (e) { return e.trim() }).join("; ") + ";"; var s, a, c, l, d, u, f, h, p, m, y, v, g, b = parseFloat(t.opacity), w = isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity), E = { computed: b !== w ? "opacity: " + b + ";" : "", generated: b !== w ? "opacity: " + w + ";" : "" }, j = []; if (parseFloat(i.distance)) { var T = "top" === i.origin || "bottom" === i.origin ? "Y" : "X", k = i.distance; "top" !== i.origin && "left" !== i.origin || (k = /^-/.test(k) ? k.substr(1) : "-" + k); var O = k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g), x = O[0]; switch (O[1]) { case "em": k = parseInt(t.fontSize) * x; break; case "px": k = x; break; case "%": k = "Y" === T ? e.node.getBoundingClientRect().height * x / 100 : e.node.getBoundingClientRect().width * x / 100; break; default: throw new RangeError("Unrecognized or missing distance unit.") }"Y" === T ? j.push((c = k, (l = z())[13] = c, l)) : j.push((s = k, (a = z())[12] = s, a)) } i.rotate.x && j.push((d = i.rotate.x, u = Math.PI / 180 * d, (f = z())[5] = f[10] = Math.cos(u), f[6] = f[9] = Math.sin(u), f[9] *= -1, f)), i.rotate.y && j.push((h = i.rotate.y, p = Math.PI / 180 * h, (m = z())[0] = m[10] = Math.cos(p), m[2] = m[8] = Math.sin(p), m[2] *= -1, m)), i.rotate.z && j.push((y = i.rotate.z, v = Math.PI / 180 * y, (g = z())[0] = g[5] = Math.cos(v), g[1] = g[4] = Math.sin(v), g[4] *= -1, g)), 1 !== i.scale && (0 === i.scale ? j.push(D(2e-4)) : j.push(D(i.scale))); var R = {}; if (j.length) { R.property = S("transform"), R.computed = { raw: t[R.property], matrix: function (e) { if ("string" == typeof e) { var t = e.match(/matrix(3d)?\(([^)]+)\)/); if (t) return N(t[2].split(", ").map(parseFloat)) } return z() }(t[R.property]) }, j.unshift(R.computed.matrix); var q = j.reduce(F); R.generated = { initial: R.property + ": matrix3d(" + q.join(", ") + ");", final: R.property + ": matrix3d(" + R.computed.matrix.join(", ") + ");" } } else R.generated = { initial: "", final: "" }; var A = {}; if (E.generated || R.generated.initial) { A.property = S("transition"), A.computed = t[A.property], A.fragments = []; var P = i.delay, L = i.duration, M = i.easing; E.generated && A.fragments.push({ delayed: "opacity " + L / 1e3 + "s " + M + " " + P / 1e3 + "s", instant: "opacity " + L / 1e3 + "s " + M + " 0s" }), R.generated.initial && A.fragments.push({ delayed: R.property + " " + L / 1e3 + "s " + M + " " + P / 1e3 + "s", instant: R.property + " " + L / 1e3 + "s " + M + " 0s" }), A.computed && !A.computed.match(/all 0s|none 0s/) && A.fragments.unshift({ delayed: A.computed, instant: A.computed }); var I = A.fragments.reduce(function (e, t, n) { return e.delayed += 0 === n ? t.delayed : ", " + t.delayed, e.instant += 0 === n ? t.instant : ", " + t.instant, e }, { delayed: "", instant: "" }); A.generated = { delayed: A.property + ": " + I.delayed + ";", instant: A.property + ": " + I.instant + ";" } } else A.generated = { delayed: "", instant: "" }; return { inline: r, opacity: E, position: n, transform: R, transition: A } } function m(r, e) { e.split(";").forEach(function (e) { var t = e.split(":"), n = t[0], i = t.slice(1); n && i && (r.style[n.trim()] = i.join(":")) }) } function y(e) { var i, r = this; try { f(u(e), function (e) { var t = e.getAttribute("data-sr-id"); if (null !== t) { i = !0; var n = r.store.elements[t]; n.callbackTimer && window.clearTimeout(n.callbackTimer.clock), m(n.node, n.styles.inline.generated), e.removeAttribute("data-sr-id"), delete r.store.elements[t] } }) } catch (e) { return h.call(this, "Clean failed.", e.message) } if (i) try { t.call(this) } catch (e) { return h.call(this, "Clean failed.", e.message) } } function v(n) { for (var e = [], t = arguments.length - 1; 0 < t--;)e[t] = arguments[t + 1]; if (s(n)) return f(e, function (e) { f(e, function (e, t) { s(e) ? (n[t] && s(n[t]) || (n[t] = {}), v(n[t], e)) : n[t] = e }) }), n; throw new TypeError("Target must be an object literal.") } function g(e) { return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e) } var e, b = (e = 0, function () { return e++ }); function w() { var n = this; t.call(this), f(this.store.elements, function (e) { var t = [e.styles.inline.generated]; e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final), e.revealed = !0) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial), e.revealed = !1), m(e.node, t.filter(function (e) { return "" !== e }).join(" ")) }), f(this.store.containers, function (e) { var t = e.node === document.documentElement ? window : e.node; t.addEventListener("scroll", n.delegate), t.addEventListener("resize", n.delegate) }), this.delegate(), this.initTimeout = null } function c(e, t) { void 0 === t && (t = {}); var n = t.pristine || this.pristine, i = "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen, r = e.visible && !e.revealed, o = !e.visible && e.revealed && e.config.reset; return t.reveal || r ? function (e, t) { var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final]; t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant); e.revealed = e.seen = !0, m(e.node, n.filter(function (e) { return "" !== e }).join(" ")), a.call(this, e, t) }.call(this, e, i) : t.reset || o ? function (e) { var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant]; e.revealed = !1, m(e.node, t.filter(function (e) { return "" !== e }).join(" ")), a.call(this, e) }.call(this, e) : void 0 } function a(e, t) { var n = this, i = t ? e.config.duration + e.config.delay : e.config.duration, r = e.revealed ? e.config.beforeReveal : e.config.beforeReset, o = e.revealed ? e.config.afterReveal : e.config.afterReset, s = 0; e.callbackTimer && (s = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = { start: Date.now(), clock: window.setTimeout(function () { o(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && y.call(n, e.node) }, i - s) } } function l(e, t) { if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset) return c.call(this, e, { reset: !0 }); var n = this.store.sequences[e.sequence.id], i = e.sequence.index; if (n) { var r = new d(n, "visible", this.store), o = new d(n, "revealed", this.store); if (n.models = { visible: r, revealed: o }, !o.body.length) { var s = n.members[r.body[0]], a = this.store.elements[s]; if (a) return j.call(this, n, r.body[0], -1, t), j.call(this, n, r.body[0], 1, t), c.call(this, a, { reveal: !0, pristine: t }) } if (!n.blocked.head && i === [].concat(o.head).pop() && i >= [].concat(r.body).shift()) return j.call(this, n, i, -1, t), c.call(this, e, { reveal: !0, pristine: t }); if (!n.blocked.foot && i === [].concat(o.foot).shift() && i <= [].concat(r.body).pop()) return j.call(this, n, i, 1, t), c.call(this, e, { reveal: !0, pristine: t }) } } function E(e) { var t = Math.abs(e); if (isNaN(t)) throw new RangeError("Invalid sequence interval."); this.id = b(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = { head: !1, foot: !1 } } function d(e, i, r) { var o = this; this.head = [], this.body = [], this.foot = [], f(e.members, function (e, t) { var n = r.elements[e]; n && n[i] && o.body.push(t) }), this.body.length && f(e.members, function (e, t) { var n = r.elements[e]; n && !n[i] && (t < o.body[0] ? o.head.push(t) : o.foot.push(t)) }) } function j(e, t, n, i) { var r = this, o = ["head", null, "foot"][1 + n], s = e.members[t + n], a = this.store.elements[s]; e.blocked[o] = !0, setTimeout(function () { e.blocked[o] = !1, a && l.call(r, a, i) }, e.interval) } function i(e, a, t) { var c = this; void 0 === a && (a = {}), void 0 === t && (t = !1); var l, d = [], n = a.interval || r.interval; try { n && (l = new E(n)); var i = u(e); if (!i.length) throw new Error("Invalid reveal target."); f(i.reduce(function (e, t) { var n = {}, i = t.getAttribute("data-sr-id"); i ? (v(n, c.store.elements[i]), m(n.node, n.styles.inline.computed)) : (n.id = b(), n.node = t, n.seen = !1, n.revealed = !1, n.visible = !1); var r = v({}, n.config || c.defaults, a); if (!r.mobile && g() || !r.desktop && !g()) return i && y.call(c, n), e; var o, s = u(r.container)[0]; if (!s) throw new Error("Invalid container."); return s.contains(t) && (null === (o = function (t) { var e = [], n = arguments.length - 1; for (; 0 < n--;)e[n] = arguments[n + 1]; var i = null; return f(e, function (e) { f(e, function (e) { null === i && e.node === t && (i = e.id) }) }), i }(s, d, c.store.containers)) && (o = b(), d.push({ id: o, node: s })), n.config = r, n.containerId = o, n.styles = p(n), l && (n.sequence = { id: l.id, index: l.members.length }, l.members.push(n.id)), e.push(n)), e }, []), function (e) { (c.store.elements[e.id] = e).node.setAttribute("data-sr-id", e.id) }) } catch (e) { return h.call(this, "Reveal failed.", e.message) } f(d, function (e) { c.store.containers[e.id] = { id: e.id, node: e.node } }), l && (this.store.sequences[l.id] = l), !0 !== t && (this.store.history.push({ target: e, options: a }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(w.bind(this), 0)) } var T, k = Math.sign || function (e) { return (0 < e) - (e < 0) || +e }, O = (T = Date.now(), function (e) { var t = Date.now(); 16 < t - T ? e(T = t) : setTimeout(function () { return O(e) }, 0) }), x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || O; function R(e, t) { for (var n = t ? e.node.clientHeight : e.node.offsetHeight, i = t ? e.node.clientWidth : e.node.offsetWidth, r = 0, o = 0, s = e.node; isNaN(s.offsetTop) || (r += s.offsetTop), isNaN(s.offsetLeft) || (o += s.offsetLeft), s = s.offsetParent;); return { bounds: { top: r, right: o + i, bottom: r + n, left: o }, height: n, width: i } } function q(e, t) { var i = this; void 0 === e && (e = { type: "init" }), void 0 === t && (t = this.store.elements), x(function () { var n = "init" === e.type || "resize" === e.type; f(i.store.containers, function (e) { n && (e.geometry = R.call(i, e, !0)); var t = function (e) { var t, n; return n = e.node === document.documentElement ? (t = window.pageYOffset, window.pageXOffset) : (t = e.node.scrollTop, e.node.scrollLeft), { top: t, left: n } }.call(i, e); e.scroll && (e.direction = { x: k(t.left - e.scroll.left), y: k(t.top - e.scroll.top) }), e.scroll = t }), f(t, function (e) { (n || void 0 === e.geometry) && (e.geometry = R.call(i, e)), e.visible = function (e) { void 0 === e && (e = {}); var t = this.store.containers[e.containerId]; if (t) { var n = Math.max(0, Math.min(1, e.config.viewFactor)), i = e.config.viewOffset, r = e.geometry.bounds.top + e.geometry.height * n, o = e.geometry.bounds.right - e.geometry.width * n, s = e.geometry.bounds.bottom - e.geometry.height * n, a = e.geometry.bounds.left + e.geometry.width * n, c = t.geometry.bounds.top + t.scroll.top + i.top, l = t.geometry.bounds.right + t.scroll.left - i.right, d = t.geometry.bounds.bottom + t.scroll.top - i.bottom, u = t.geometry.bounds.left + t.scroll.left + i.left; return r < d && u < o && c < s && a < l || "fixed" === e.styles.position } }.call(i, e) }), f(t, function (e) { e.sequence ? l.call(i, e) : c.call(i, e) }), i.pristine = !1 }) } var A, P, L, M, I, C, W, Y, $ = "4.0.9"; function H(e) { var t; if (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== H.prototype) return new H(e); if (!H.isSupported()) return h.call(this, "Instantiation failed.", "This browser is not supported."), n.failure(); try { t = v({}, C || r, e) } catch (e) { return h.call(this, "Invalid configuration.", e.message), n.failure() } try { if (!u(t.container)[0]) throw new Error("Invalid container.") } catch (e) { return h.call(this, e.message), n.failure() } return !(C = t).mobile && g() || !C.desktop && !g() ? (h.call(this, "This device is disabled.", "desktop: " + C.desktop, "mobile: " + C.mobile), n.failure()) : (n.success(), this.store = { containers: {}, elements: {}, history: [], sequences: {} }, this.pristine = !0, A = A || q.bind(this), P = P || function () { var n = this; f(this.store.elements, function (e) { m(e.node, e.styles.inline.generated), e.node.removeAttribute("data-sr-id") }), f(this.store.containers, function (e) { var t = e.node === document.documentElement ? window : e.node; t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate) }), this.store = { containers: {}, elements: {}, history: [], sequences: {} } }.bind(this), L = L || i.bind(this), M = M || y.bind(this), I = I || function () { var t = this; f(this.store.history, function (e) { i.call(t, e.target, e.options, !0) }), w.call(this) }.bind(this), Object.defineProperty(this, "delegate", { get: function () { return A } }), Object.defineProperty(this, "destroy", { get: function () { return P } }), Object.defineProperty(this, "reveal", { get: function () { return L } }), Object.defineProperty(this, "clean", { get: function () { return M } }), Object.defineProperty(this, "sync", { get: function () { return I } }), Object.defineProperty(this, "defaults", { get: function () { return C } }), Object.defineProperty(this, "version", { get: function () { return $ } }), Object.defineProperty(this, "noop", { get: function () { return !1 } }), Y || (Y = this)) } return H.isSupported = function () { return ("transform" in (t = document.documentElement.style) || "WebkitTransform" in t) && ("transition" in (e = document.documentElement.style) || "WebkitTransition" in e); var e, t }, Object.defineProperty(H, "debug", { get: function () { return W || !1 }, set: function (e) { return W = "boolean" == typeof e ? e : W } }), H(), H }();

const sr = ScrollReveal({
	distance: '60px',
	duration: 2800,
	reset: true,
})


sr.reveal(`.cities-town,h2,h1,h3,h5`, {
	origin: 'top',
	interval: 100,
})

sr.reveal(`.video__description,.subscribe__description,p`, {
	origin: 'bottom',
})

sr.reveal(`.video__content,
           .subscribe__form`, {
	origin: 'right',
	interval: 100,
})
