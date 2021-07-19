"use strict";

var canvas = {
  c: null,
  canvas: null,
  init: function init() {
    this.c = document.getElementById('canvas').getContext('2d');
  },
  render: function render() {},
  run: function run() {
    var _this = this;

    window.requestAnimationFrame(function () {
      _this.render();

      _this.run();
    });
  },
  start: function start() {
    this.init();
    this.render();
  }
};
window.addEventListener('load', function () {
  canvas.start();
});