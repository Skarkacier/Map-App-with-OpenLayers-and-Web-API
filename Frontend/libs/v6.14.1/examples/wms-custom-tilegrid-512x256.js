"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4803],{91832:function(e,r,t){for(var n=t(41376),s=t(79847),o=t(15492),a=t(42010),w=t(35673),u=t(54354),c=t(12810),i=t(86923),p=(0,c.U2)("EPSG:3857").getExtent(),l=(0,i.dz)(p)/256,v=new Array(22),h=0,Z=v.length;h<Z;++h)v[h]=l/Math.pow(2,h);var f=new o.Z({extent:[-13884991,2870341,-7455066,6338219],resolutions:v,tileSize:[512,256]}),g=[new a.Z({source:new s.Z}),new a.Z({source:new w.Z({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states",TILED:!0},serverType:"geoserver",tileGrid:f})})];new n.Z({layers:g,target:"map",view:new u.ZP({center:[-10997148,4569099],zoom:4})})}},function(e){var r=function(r){return e(e.s=r)};r(9877),r(91832)}]);
//# sourceMappingURL=wms-custom-tilegrid-512x256.js.map