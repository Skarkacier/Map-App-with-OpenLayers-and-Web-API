"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7642],{13727:function(e,n,t){var s=t(86291),a=t(95883),o=t(41376),r=t(62314),i=t(54354),p=t(74739),c=t(45830),l=t(81769),m=t(12810),h=t(15421);p.Z.defs("EPSG:21781","+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs"),(0,h.z)(p.Z);var w=new r.Z({code:"EPSG:21781",extent:[485869.5728,76443.1884,837076.5648,299941.7864]}),u=[42e4,3e4,9e5,35e4],d=[new s.Z({extent:u,source:new a.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})}),new s.Z({extent:u,source:new a.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://www.hydrodaten.admin.ch/en/notes-on-the-flood-alert-maps.html"target="_blank">Flood Alert / geo.admin.ch</a>',params:{LAYERS:"ch.bafu.hydroweb-warnkarte_national"},serverType:"mapserver"})})];new o.Z({controls:(0,c.ce)().extend([new l.Z]),layers:d,target:"map",view:new i.ZP({projection:w,center:(0,m.mi)([8.23,46.86],w),extent:u,zoom:2})})}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(13727)}]);
//# sourceMappingURL=wms-image-custom-proj.js.map