
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');




   

closer.onclick = function() {
    container.style.display = 'none';
    closer.blur();
    return false;
};
var overlayPopup = new ol.Overlay({
    element: container
});

var expandedAttribution = new ol.control.Attribution({
    collapsible: true
});


	  
var map = new ol.Map({
    controls: ol.control.defaults({attribution:true}).extend([
        expandedAttribution,new ol.control.ScaleLine({}),new ol.control.LayerSwitcher({tipLabel: "Layers"}),
		new ol.control.MousePosition({projection: 'EPSG:4326'})
    ]),
    target: document.getElementById('map'),
    renderer: 'canvas',
    overlays: [overlayPopup],
    layers: layersList,
    view: new ol.View({
         center : ol.proj.transform([112.6300,-7.9722],'EPSG:4326','EPSG:3857'),
				zoom:12
    
	
})
	
	
});

		//zoom sesuai kelurahan

			$(document).ready (function(){$("#Overview").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.6300,-7.9722], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(12);
				
				})});

			$(document).ready (function(){$("#Balearjosari").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.649,-7.92257], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Bandulan").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.60351,-7.98090], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Bandungrejosari").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61542,-8.00204], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Bareng").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61859,-7.97922], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Blimbing").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.64575,-7.94354], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Ciptomulyo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.62949,-7.99719], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Dinoyo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.60762,-7.94486], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Gadingkasri").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61721,-7.97091], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Jatimulyo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61855,-7.94583], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Jodipan").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.64107,-7.98945], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Kasin").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.62629,-7.98928], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Kauman").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.62741,-7.97949], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Kiduldalem").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.63420,-7.98078], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Kotalama").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.63898,-7.99282], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Lowokwaru").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.63222,-7.95694], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Mergosono").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.63407,-7.99982], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				$(document).ready (function(){$("#Merjosari").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.59106,-7.94364], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Oro-oroDowo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.62492,-7.96855], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Pandanwangi").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.65766,-7.95203], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
			
				$(document).ready (function(){$("#Penanggungan ").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.62152,-7.95707], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});

				$(document).ready (function(){$("#Polehan").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.64760,-7.98353], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Purwantoro").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.64467,-7.95452], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Samaan").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.62932,-7.96424], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Sukoharjo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.63286,-7.98784], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Sukun").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61990,-7.99278], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Sumbersari").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61415,-7.95899], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Tanjungrejo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.61438,-7.98770], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Tlogomas").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.59769,-7.930056], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				$(document).ready (function(){$("#Tulusrejo").click(function(){
				
				map.getView().setCenter(ol.proj.transform([112.63027,-7.94577], 'EPSG:4326', 'EPSG:3857'));
				
				map.getView().setZoom(15);
				
				})});
				
				
			
			
var NO_POPUP = 0
var ALL_FIELDS = 1

/**
 * Returns either NO_POPUP, ALL_FIELDS or the name of a single field to use for
 * a given layer
 * @param layerList {Array} List of ol.Layer instances
 * @param layer {ol.Layer} Layer to find field info about
 */
function getPopupFields(layerList, layer) {
    popupLayers = [1,1,0,1,1,1];
    // Determine the index that the layer will have in the popupLayers Array,
    // if the layersList contains more items than popupLayers then we need to
    // adjust the index to take into account the base maps group
    var idx = layersList.indexOf(layer) - (layersList.length - popupLayers.length);
    return popupLayers[idx];
}


var collection = new ol.Collection();
var featureOverlay = new ol.layer.Vector({
    map: map,
    source: new ol.source.Vector({
        features: collection,
        useSpatialIndex: false // optional, might improve performance
    }),
    style: [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#f00',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.1)'
        }),
    })],
    updateWhileAnimating: true, // optional, for instant visual feedback
    updateWhileInteracting: true // optional, for instant visual feedback
});

var doHighlight = true;
var doHover = false;

var highlight;
var onPointerMove = function(evt) {
    if (!doHover && !doHighlight) {
        return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    var coord = evt.coordinate;
    var popupField;
    var popupText = '';
    var currentFeature;
    var currentLayer;
    var currentFeatureKeys;
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        currentFeature = feature;
        currentLayer = layer;
        currentFeatureKeys = currentFeature.getKeys();
        var field = getPopupFields(layersList, layer);
        if (field == NO_POPUP) {
        } else if (field == ALL_FIELDS) {
            popupText = '<table>';
            for (var i=0; i<currentFeatureKeys.length; i++) {
                if (currentFeatureKeys[i] != 'geometry') {
                    popupField = '<th>' + currentFeatureKeys[i] + ':</th>'
                    popupField += '<td>'+ currentFeature.get(currentFeatureKeys[i]) + '</td>';
                    popupText = popupText + '<tr>' + popupField + '</tr>';
                }
            }
            popupText = popupText + '</table>';
        } else {
            var value = feature.get(field);
            if (value) {
                popupText = '<strong>' + field + ':</strong> ' + value;
            }  
        }
                  
    });

    if (doHighlight) {
        if (currentFeature !== highlight) {
            if (highlight) {
                featureOverlay.getSource().removeFeature(highlight);
            }
            if (currentFeature) {
                var styleDefinition = currentLayer.getStyle().toString();

                if (currentFeature.getGeometry().getType() == 'Point') {
                    var radius = styleDefinition.split('radius')[1].split(' ')[1];

                    highlightStyle = new ol.style.Style({
                        image: new ol.style.Circle({
                            fill: new ol.style.Fill({
                                color: '#ffff00'
                            }),
                            radius: radius
                        })
                    })
                } else if (currentFeature.getGeometry().getType() == 'LineString') {

                    var featureWidth = styleDefinition.split('width')[1].split(' ')[1].replace('})','');

                    highlightStyle = new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: '#ff0000',
                            lineDash: null,
                            width: featureWidth
                        })
                    });

                } else {
                    highlightStyle = new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: '#ff0000'
                        })
                    })
                }
                featureOverlay.getSource().addFeature(currentFeature);
                featureOverlay.setStyle(highlightStyle);
            }
            highlight = currentFeature;
        }
    }

    if (doHover) {
        if (popupText) {
            overlayPopup.setPosition(coord);
            content.innerHTML = popupText;
            container.style.display = 'block';        
        } else {
            container.style.display = 'none';
            closer.blur();
        }
    }
};

var onSingleClick = function(evt) {
    if (doHover) {
        return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    var coord = evt.coordinate;
    var popupField;
    var popupText = '';
    var currentFeature;
    var currentFeatureKeys;
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        currentFeature = feature;
        currentFeatureKeys = currentFeature.getKeys();
        var field = getPopupFields(layersList, layer);
        if (field == NO_POPUP) {
        } else if (field == ALL_FIELDS) {
            popupText = '<table>';
            for (var i=0; i<currentFeatureKeys.length; i++) {
                if (currentFeatureKeys[i] != 'geometry') {
                    popupField = '<th>' + currentFeatureKeys[i] + ':</th><td>'
                    popupField += (currentFeature.get(currentFeatureKeys[i]) != null ? Autolinker.link(String(currentFeature.get(currentFeatureKeys[i]))) + '</td>' : '');
                    popupText = popupText + '<tr>' + popupField + '</tr>';
                }
            }
            popupText = popupText + '</table>';
        } else {
            var value = feature.get(field);
            if (value) {
                popupText = '<strong>' + field + ':</strong> '+ value;
            }  
        }          
    });

    if (popupText) {
        overlayPopup.setPosition(coord);
        content.innerHTML = popupText;
        container.style.display = 'block';        
    } else {
        container.style.display = 'none';
        closer.blur();
    }
};

map.on('pointermove', function(evt) {
    onPointerMove(evt);
});
map.on('singleclick', function(evt) {
    onSingleClick(evt);
});

var geocoder = new Geocoder('nominatim', {
  provider: 'osm',
  lang: 'en-US',
  placeholder: 'Search for ...',
  limit: 5,
  keepOpen: true
});
map.addControl(geocoder);

var attribution = document.getElementsByClassName('ol-attribution')[0];
var attributionList = attribution.getElementsByTagName('ul')[0];
var firstLayerAttribution = attributionList.getElementsByTagName('li')[0];
var qgis2webAttribution = document.createElement('li');
qgis2webAttribution.innerHTML = '<a href="https://github.com/tomchadwin/qgis2web">qgis2web</a>';
attributionList.insertBefore(qgis2webAttribution, firstLayerAttribution);



