if ((typeof window == 'object' && !window.zhue) || (typeof global == 'object' && !global.zhue)) window ? window.zhue = {} : global.zhue = {}
zhue.moveImage = function(t, e, f, o) {
  var l = t, s = e;
  1 === o ? s.style.top = "-" + s.offsetHeight + "px" : 2 === o ? s.style.bottom = "-" + s.offsetHeight + "px" : 3 === o ? s.style.left = "-" + s.offsetWidth + "px" : 4 === o && (s.style.right = "-" + s.offsetWidth + "px"), 
  s.style.zIndex = "2", l.style.zIndex = "1";
  var i = 0, c = 5, a = setInterval(function() {
    return i >= 100 ? (clearInterval(a), void t.remove()) : (1 === o ? s.style.top = "calc(-" + s.offsetHeight + "px + " + i + "%)" : 2 === o ? s.style.bottom = "calc(-" + s.offsetHeight + "px + " + i + "%)" : 3 === o ? s.style.left = "calc(-" + s.offsetWidth + "px + " + i + "%)" : 4 === o && (s.style.right = "calc(-" + s.offsetWidth + "px + " + i + "%)"), 
    void (i += c));
  }, f);
}
