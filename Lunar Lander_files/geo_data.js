
var com = com||{};
com.unitedCoders = com.unitedCoders||{};
com.unitedCoders.geo = { ll: [{"lat": 41.83710, "country": "UNITED STATES", "name": "hostip", "long": -87.68500, "city": "Chicago, IL"}, {"lat": 41.93730, "country": "United States", "name": "geoplugin", "long": -87.65510, "city": "Chicago"}] };
if (!("calcLL" in com.unitedCoders.geo)) {
  if (location.host.indexOf("ip-geo.appspot.com")!=-1 || location.host==='localhost:8080') {
    document.write('<script type="text/javascript" src="/geo_func.js"></script>');
  } else {
    document.write('<script type="text/javascript" src="//ip-geo.appspot.com/geo_func.js"></script>'); 
  }
}
