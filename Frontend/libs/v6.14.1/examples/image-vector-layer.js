"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6220],{65009:function(e,n,t){var r,o=t(91118),a=t(41376),i=t(58758),c=t(41372),u=t(95783),l=t(54354),s=t(69039),g=t(77975),f=t(720),w=new s.ZP({fill:new g.Z({color:"#eeeeee"})}),v=new i.Z({background:"#1a2b39",imageRatio:2,source:new u.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.Z}),style:function(e){var n=e.get("COLOR")||"#eeeeee";return w.getFill().setColor(n),w}}),Z=new a.Z({layers:[v],target:"map",view:new l.ZP({center:[0,0],zoom:1})}),p=new c.Z({source:new u.Z,map:Z,style:new s.ZP({stroke:new f.Z({color:"rgba(255, 255, 255, 0.7)",width:2})})}),m=function(e){var n=Z.forEachFeatureAtPixel(e,(function(e){return e})),t=document.getElementById("info");t.innerHTML=n&&n.get("ECO_NAME")||"&nbsp;",n!==r&&(r&&p.getSource().removeFeature(r),n&&p.getSource().addFeature(n),r=n)};Z.on("pointermove",(function(e){if(!e.dragging){var n=Z.getEventPixel(e.originalEvent);m(n)}})),Z.on("click",(function(e){m(e.pixel)}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(65009)}]);
//# sourceMappingURL=image-vector-layer.js.map