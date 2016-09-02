var baseLayer = new ol.layer.Group({layers: [new ol.layer.Tile({source: new ol.source.OSM()})]});

var format_geojson_POINT = new ol.format.GeoJSON();
var features_geojson_POINT = format_geojson_POINT.readFeatures(geojson_POINT, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geojson_POINT = new ol.source.Vector();
jsonSource_geojson_POINT.addFeatures(features_geojson_POINT);var lyr_geojson_POINT = new ol.layer.Vector({
                source:jsonSource_geojson_POINT, 
                style: style_POINT,
                title: "Hasil Pendataan Rumah Tangga"
            });	

var format_RTatributntapOGRGeoJSONMultiPolygon = new ol.format.GeoJSON();
var features_RTatributntapOGRGeoJSONMultiPolygon = format_RTatributntapOGRGeoJSONMultiPolygon.readFeatures(geojson_RTatributntapOGRGeoJSONMultiPolygon, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTatributntapOGRGeoJSONMultiPolygon = new ol.source.Vector();
jsonSource_RTatributntapOGRGeoJSONMultiPolygon.addFeatures(features_RTatributntapOGRGeoJSONMultiPolygon);
var lyr_RTatributntapOGRGeoJSONMultiPolygon = new ol.layer.Vector({
                source:jsonSource_RTatributntapOGRGeoJSONMultiPolygon, 
                style: style_RTatributntapOGRGeoJSONMultiPolygon,
                title: "RT"
            });
			
/**
var format_Tidakkumuh = new ol.format.GeoJSON();
var features_Tidakkumuh = format_Tidakkumuh.readFeatures(geojson_Tidakkumuh, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tidakkumuh = new ol.source.Vector();
jsonSource_Tidakkumuh.addFeatures(features_Tidakkumuh);
var lyr_geojson_Tidakkumuh = new ol.layer.Vector({
                source:jsonSource_Tidakkumuh, 
                style: style_geojson_Tidakkumuh,
                title: "Tidakkumuh"
            }); 
			
*/
			

var format_kelurahanlengkapOGRGeoJSONPolygon = new ol.format.GeoJSON();
var features_kelurahanlengkapOGRGeoJSONPolygon = format_kelurahanlengkapOGRGeoJSONPolygon.readFeatures(geojson_kelurahanlengkapOGRGeoJSONPolygon, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahanlengkapOGRGeoJSONPolygon = new ol.source.Vector();
jsonSource_kelurahanlengkapOGRGeoJSONPolygon.addFeatures(features_kelurahanlengkapOGRGeoJSONPolygon);
var lyr_kelurahanlengkapOGRGeoJSONPolygon = new ol.layer.Vector({
                source:jsonSource_kelurahanlengkapOGRGeoJSONPolygon, 
                style: style_kelurahanlengkapOGRGeoJSONPolygon,
                title: "Kelurahan"
            });
			
var format_kelurahanlineOGRGeoJSONLineString = new ol.format.GeoJSON();
var features_kelurahanlineOGRGeoJSONLineString = format_kelurahanlineOGRGeoJSONLineString.readFeatures(geojson_kelurahanlineOGRGeoJSONLineString, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahanlineOGRGeoJSONLineString = new ol.source.Vector();
jsonSource_kelurahanlineOGRGeoJSONLineString.addFeatures(features_kelurahanlineOGRGeoJSONLineString);var lyr_kelurahanlineOGRGeoJSONLineString = new ol.layer.Vector({
                source:jsonSource_kelurahanlineOGRGeoJSONLineString, 
                style: style_kelurahanlineOGRGeoJSONLineString,
                title: "Kelurahan (polyline)"
            });
			
				
lyr_RTatributntapOGRGeoJSONMultiPolygon.setVisible(false);
//lyr_geojson_Tidakkumuh.setVisible(true);
lyr_kelurahanlengkapOGRGeoJSONPolygon.setVisible(true);
lyr_kelurahanlineOGRGeoJSONLineString.setVisible(true);
lyr_geojson_POINT.setVisible(true);


var layersList = [baseLayer,lyr_RTatributntapOGRGeoJSONMultiPolygon,lyr_kelurahanlengkapOGRGeoJSONPolygon,lyr_kelurahanlineOGRGeoJSONLineString,lyr_geojson_POINT];


