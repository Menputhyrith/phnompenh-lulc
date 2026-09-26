var wms_layers = [];

var format_Province_0 = new ol.format.GeoJSON();
var features_Province_0 = format_Province_0.readFeatures(json_Province_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_0.addFeatures(features_Province_0);
var lyr_Province_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_0, 
                style: style_Province_0,
                popuplayertitle: 'Province',
                interactive: true,
                title: '<img src="styles/legend/Province_0.png" /> Province'
            });
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_1, 
                style: style_District_1,
                popuplayertitle: 'District',
                interactive: true,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_Commune_2 = new ol.format.GeoJSON();
var features_Commune_2 = format_Commune_2.readFeatures(json_Commune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_2.addFeatures(features_Commune_2);
var lyr_Commune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_2, 
                style: style_Commune_2,
                popuplayertitle: 'Commune',
                interactive: true,
                title: '<img src="styles/legend/Commune_2.png" /> Commune'
            });
var lyr_PhnomPenh_LULC_2026_RF_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PhnomPenh_LULC_2026_RF<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_3_0.png" /> 1<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_3_1.png" /> 2<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_3_2.png" /> 3<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_3_3.png" /> 4<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_3_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PhnomPenh_LULC_2026_RF_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11657410.000000, 1279731.100345, 11693440.000000, 1315682.657970]
        })
    });

lyr_Province_0.setVisible(true);lyr_District_1.setVisible(true);lyr_Commune_2.setVisible(true);lyr_PhnomPenh_LULC_2026_RF_3.setVisible(true);
var layersList = [lyr_Province_0,lyr_District_1,lyr_Commune_2,lyr_PhnomPenh_LULC_2026_RF_3];
lyr_Province_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'PROV_CODE': 'PROV_CODE', 'PROV_UTF8': 'PROV_UTF8', 'PROV_NAME': 'PROV_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_District_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DIST_CODE': 'DIST_CODE', 'PROV_CODE': 'PROV_CODE', 'DIST_UTF8': 'DIST_UTF8', 'DIST_NAME': 'DIST_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Commune_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'COMM_CODE': 'COMM_CODE', 'DIST_CODE': 'DIST_CODE', 'PROV_CODE': 'PROV_CODE', 'COMM_UTF8': 'COMM_UTF8', 'COMM_NAME': 'COMM_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Province_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'PROV_CODE': 'Range', 'PROV_UTF8': 'TextEdit', 'PROV_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_District_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'DIST_CODE': 'TextEdit', 'PROV_CODE': 'TextEdit', 'DIST_UTF8': 'TextEdit', 'DIST_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Commune_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'COMM_CODE': 'TextEdit', 'DIST_CODE': 'TextEdit', 'PROV_CODE': 'TextEdit', 'COMM_UTF8': 'TextEdit', 'COMM_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Province_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'PROV_CODE': 'no label', 'PROV_UTF8': 'no label', 'PROV_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_District_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'DIST_CODE': 'no label', 'PROV_CODE': 'no label', 'DIST_UTF8': 'no label', 'DIST_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Commune_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'COMM_CODE': 'no label', 'DIST_CODE': 'no label', 'PROV_CODE': 'no label', 'COMM_UTF8': 'no label', 'COMM_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Commune_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});