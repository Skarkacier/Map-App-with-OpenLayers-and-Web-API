"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2990],{41050:function(t,e,o){var i=o(41376),n=o(42010),a=o(54354),r=o(31998);function d(t){this.el=t,this.loading=0,this.loaded=0}d.prototype.addLoading=function(){++this.loading,this.update()},d.prototype.addLoaded=function(){++this.loaded,this.update()},d.prototype.update=function(){var t=(this.loaded/this.loading*100).toFixed(1)+"%";this.el.style.width=t},d.prototype.show=function(){this.el.style.visibility="visible"},d.prototype.hide=function(){var t=this.el.style;setTimeout((function(){t.visibility="hidden",t.width=0}),250)};var s=new d(document.getElementById("progress")),l=new r.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512});l.on("tileloadstart",(function(){s.addLoading()})),l.on(["tileloadend","tileloaderror"],(function(){s.addLoaded()}));var p=new i.Z({layers:[new n.Z({source:l})],target:"map",view:new a.ZP({center:[0,0],zoom:2})});p.on("loadstart",(function(){s.show()})),p.on("loadend",(function(){s.hide()}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(41050)}]);
//# sourceMappingURL=tile-load-events.js.map