"use strict";

function
updateCoords(e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingC
  lientRect().left, pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingCl
  ientRect().top
}

function setParticuleDirection(e) {
  var
    t = anime.random(0, 360) * Math.PI / 180,
    a = anime.random(50, 180),
    n = [-1, 1][anime.random(0, 1)] * a;
  return {
    x: e.x + n * Math.cos(t),
    y: e.y + n * Math.sin(t)
  }
}

function
createParticule(e, t) {
  var a = {};
  return
  a.x = e, a.y = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = anime.rando
  m(16, 32), a.endPos = setParticuleDirection(a), a.draw = function () {
    ctx.beginPath(), ctx
      .arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
  }, a
}
functi
on createCircle(e, t) {
  var a = {};
  return
  a.x = e, a.y = t, a.color = "#F00", a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = functio
  n() {
    ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAl
    pha = 1
  }, a
}

function renderParticule(e) {
  for (var
      t = 0; t < e.animatables.length; t++) {
    e.animatables[t].target.draw()
  }
}

function
animateParticules(e, t) {
  for (var
      a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
    n.push(createParticule(e,
      t))
  }
  anime.timeline().add({
    targets: n,
    x: function (e) {
      return
      e.endPos.x
    },
    y: function (e) {
      return
      e.endPos.y
    },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    upd
    ate: renderParticule
  }).add({
    targets: a,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alp
    ha: {
      value: 0,
      easing: "linear",
      duration: anime.random(600, 800)
    },
    duration: anime.rando
    m(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    offset: 0
  })
}

function
debounce(e, t) {
  var a;
  return function () {
    var
      n = this,
      i = arguments;
    clearTimeout(a), a = setTimeout(function () {
      e.apply(n, i)
    }, t)
  }
}
var
  canvasEl = document.querySelector(".fireworks");
if (canvasEl) {
  var
    ctx = canvasEl.getContext("2d"),
    numberOfParticules = 30,
    pointerX = 0,
    pointerY = 0,
    tap = "m
  ousedown ",colors=["#
  FF1461 ","
  #18FF92","# 5 A87FF ","#
  FBF38C "],setCanvasSize=debounc
  e(function () {
    canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHe
    ight, canvasEl.style.width = window.innerWidth + "px", canvasEl.style.height = window.in
    nerHeight + "px", canvasEl.getContext("2d").scale(2, 2)
  }, 500), render = anime({
    duration: 1 / 0,
    update: function () {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    }
  });
  docu
  ment.addEventListener(tap, function (e) {
    "sidebar" !== e.target.id && "toggle-sidebar"!
      ==
      e.target.id && "A" !== e.target.nodeName && "IMG" !== e.target.nodeName && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
  }, !1), setCanvasSize(), win
  dow.addEventListener("resize", setCanvasSize, !1)
}
"use strict";

function
updateCoords(e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingC
  lientRect().left, pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingCl
  ientRect().top
}

function setParticuleDirection(e) {
  var
    t = anime.random(0, 360) * Math.PI / 180,
    a = anime.random(50, 180),
    n = [-1, 1][anime.random(0, 1)] * a;
  return {
    x: e.x + n * Math.cos(t),
    y: e.y + n * Math.sin(t)
  }
}

function
createParticule(e, t) {
  var a = {};
  return
  a.x = e, a.y = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = anime.rando
  m(16, 32), a.endPos = setParticuleDirection(a), a.draw = function () {
    ctx.beginPath(), ctx
      .arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
  }, a
}
functi
on createCircle(e, t) {
  var a = {};
  return
  a.x = e, a.y = t, a.color = "#F00", a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = functio
  n() {
    ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAl
    pha = 1
  }, a
}

function renderParticule(e) {
  for (var
      t = 0; t < e.animatables.length; t++) {
    e.animatables[t].target.draw()
  }
}

function
animateParticules(e, t) {
  for (var
      a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
    n.push(createParticule(e,
      t))
  }
  anime.timeline().add({
    targets: n,
    x: function (e) {
      return
      e.endPos.x
    },
    y: function (e) {
      return
      e.endPos.y
    },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    upd
    ate: renderParticule
  }).add({
    targets: a,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alp
    ha: {
      value: 0,
      easing: "linear",
      duration: anime.random(600, 800)
    },
    duration: anime.rando
    m(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    offset: 0
  })
}

function
debounce(e, t) {
  var a;
  return function () {
    var
      n = this,
      i = arguments;
    clearTimeout(a), a = setTimeout(function () {
      e.apply(n, i)
    }, t)
  }
}
var
  canvasEl = document.querySelector(".fireworks");
if (canvasEl) {
  var
    ctx = canvasEl.getContext("2d"),
    numberOfParticules = 30,
    pointerX = 0,
    pointerY = 0,
    tap = "m
  ousedown ",colors=["#
  FF1461 ","
  #18FF92","# 5 A87FF ","#
  FBF38C "],setCanvasSize=debounc
  e(function () {
    canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHe
    ight, canvasEl.style.width = window.innerWidth + "px", canvasEl.style.height = window.in
    nerHeight + "px", canvasEl.getContext("2d").scale(2, 2)
  }, 500), render = anime({
    duration: 1 / 0,
    update: function () {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    }
  });
  docu
  ment.addEventListener(tap, function (e) {
    "sidebar" !== e.target.id && "toggle-sidebar"!
      ==
      e.target.id && "A" !== e.target.nodeName && "IMG" !== e.target.nodeName && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
  }, !1), setCanvasSize(), win
  dow.addEventListener("resize", setCanvasSize, !1)
};
