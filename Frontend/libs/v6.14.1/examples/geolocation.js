"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5507],{81403:function(e,n,t){var c=t(12739),r=t(78284),i=t(41376),a=t(75469),o=t(54354),u=t(69039),s=t(77138),g=t(77975),d=t(720),l=t(79847),w=t(95783),f=t(42010),m=t(41372),y=new o.ZP({center:[0,0],zoom:2}),Z=new i.Z({layers:[new f.Z({source:new l.Z})],target:"map",view:y}),h=new r.Z({trackingOptions:{enableHighAccuracy:!0},projection:y.getProjection()});function p(e){return document.getElementById(e)}p("track").addEventListener("change",(function(){h.setTracking(this.checked)})),h.on("change",(function(){p("accuracy").innerText=h.getAccuracy()+" [m]",p("altitude").innerText=h.getAltitude()+" [m]",p("altitudeAccuracy").innerText=h.getAltitudeAccuracy()+" [m]",p("heading").innerText=h.getHeading()+" [rad]",p("speed").innerText=h.getSpeed()+" [m/s]"})),h.on("error",(function(e){var n=document.getElementById("info");n.innerHTML=e.message,n.style.display=""}));var k=new c.Z;h.on("change:accuracyGeometry",(function(){k.setGeometry(h.getAccuracyGeometry())}));var v=new c.Z;v.setStyle(new u.ZP({image:new s.Z({radius:6,fill:new g.Z({color:"#3399CC"}),stroke:new d.Z({color:"#fff",width:2})})})),h.on("change:position",(function(){var e=h.getPosition();v.setGeometry(e?new a.Z(e):null)})),new m.Z({map:Z,source:new w.Z({features:[k,v]})})}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(81403)}]);
//# sourceMappingURL=geolocation.js.map