var wms_layers = [];

var lyr_PhnomPenh_LULC_2026_RF_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PhnomPenh_LULC_2026_RF<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_0_0.png" /> 1<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_0_1.png" /> 2<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_0_2.png" /> 3<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_0_3.png" /> 4<br />\
    <img src="styles/legend/PhnomPenh_LULC_2026_RF_0_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PhnomPenh_LULC_2026_RF_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11657410.000000, 1279731.100345, 11693440.000000, 1315682.657970]
        })
    });
var format_Commune_PP_1 = new ol.format.GeoJSON();
var features_Commune_PP_1 = format_Commune_PP_1.readFeatures(json_Commune_PP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_PP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_PP_1.addFeatures(features_Commune_PP_1);
var lyr_Commune_PP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_PP_1, 
                style: style_Commune_PP_1,
                popuplayertitle: 'Commune_PP',
                interactive: true,
                title: '<img src="styles/legend/Commune_PP_1.png" /> Commune_PP'
            });
var format_Point_District_2 = new ol.format.GeoJSON();
var features_Point_District_2 = format_Point_District_2.readFeatures(json_Point_District_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_District_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_District_2.addFeatures(features_Point_District_2);
var lyr_Point_District_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_District_2, 
                style: style_Point_District_2,
                popuplayertitle: 'Point_District',
                interactive: true,
                title: '<img src="styles/legend/Point_District_2.png" /> Point_District'
            });
var format_Point_Province_3 = new ol.format.GeoJSON();
var features_Point_Province_3 = format_Point_Province_3.readFeatures(json_Point_Province_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Province_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Province_3.addFeatures(features_Point_Province_3);
var lyr_Point_Province_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_Province_3, 
                style: style_Point_Province_3,
                popuplayertitle: 'Point_Province',
                interactive: true,
                title: '<img src="styles/legend/Point_Province_3.png" /> Point_Province'
            });
var format_PP_Commune_4 = new ol.format.GeoJSON();
var features_PP_Commune_4 = format_PP_Commune_4.readFeatures(json_PP_Commune_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PP_Commune_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP_Commune_4.addFeatures(features_PP_Commune_4);
var lyr_PP_Commune_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PP_Commune_4, 
                style: style_PP_Commune_4,
                popuplayertitle: 'PP_Commune',
                interactive: true,
                title: '<img src="styles/legend/PP_Commune_4.png" /> PP_Commune'
            });
var format_District_PP_5 = new ol.format.GeoJSON();
var features_District_PP_5 = format_District_PP_5.readFeatures(json_District_PP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_PP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_PP_5.addFeatures(features_District_PP_5);
var lyr_District_PP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_PP_5, 
                style: style_District_PP_5,
                popuplayertitle: 'District_PP',
                interactive: true,
                title: '<img src="styles/legend/District_PP_5.png" /> District_PP'
            });
var format_PhnomPenh_6 = new ol.format.GeoJSON();
var features_PhnomPenh_6 = format_PhnomPenh_6.readFeatures(json_PhnomPenh_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhnomPenh_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhnomPenh_6.addFeatures(features_PhnomPenh_6);
var lyr_PhnomPenh_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhnomPenh_6, 
                style: style_PhnomPenh_6,
                popuplayertitle: 'PhnomPenh',
                interactive: true,
                title: '<img src="styles/legend/PhnomPenh_6.png" /> PhnomPenh'
            });

lyr_PhnomPenh_LULC_2026_RF_0.setVisible(true);lyr_Commune_PP_1.setVisible(true);lyr_Point_District_2.setVisible(true);lyr_Point_Province_3.setVisible(true);lyr_PP_Commune_4.setVisible(true);lyr_District_PP_5.setVisible(true);lyr_PhnomPenh_6.setVisible(true);
var layersList = [lyr_PhnomPenh_LULC_2026_RF_0,lyr_Commune_PP_1,lyr_Point_District_2,lyr_Point_Province_3,lyr_PP_Commune_4,lyr_District_PP_5,lyr_PhnomPenh_6];
lyr_Commune_PP_1.set('fieldAliases', {'Code': 'Code', 'Class': 'Class', 'Name_LM': 'Name_LM', 'Name_UNC': 'Name_UNC', 'Name': 'Name', 'Reference': 'Reference', 'GlobalID': 'GlobalID', 'Code_txt': 'Code_txt', });
lyr_Point_District_2.set('fieldAliases', {'Code': 'Code', 'Class': 'Class', 'Name_LM': 'Name_LM', 'Name_UNC': 'Name_UNC', 'Name': 'Name', 'Reference': 'Reference', 'GlobalID': 'GlobalID', 'Code_txt': 'Code_txt', });
lyr_Point_Province_3.set('fieldAliases', {'Code': 'Code', 'Class': 'Class', 'Name_LM': 'Name_LM', 'Name_UNC': 'Name_UNC', 'Name': 'Name', 'Reference': 'Reference', 'GlobalID': 'GlobalID', 'Code_txt': 'Code_txt', });
lyr_PP_Commune_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'COMM_CODE': 'COMM_CODE', 'DIST_CODE': 'DIST_CODE', 'PROV_CODE': 'PROV_CODE', 'COMM_UTF8': 'COMM_UTF8', 'COMM_NAME': 'COMM_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_District_PP_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DIST_CODE': 'DIST_CODE', 'PROV_CODE': 'PROV_CODE', 'DIST_UTF8': 'DIST_UTF8', 'DIST_NAME': 'DIST_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PhnomPenh_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'PROV_CODE': 'PROV_CODE', 'PROV_UTF8': 'PROV_UTF8', 'PROV_NAME': 'PROV_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Commune_PP_1.set('fieldImages', {'Code': 'TextEdit', 'Class': 'TextEdit', 'Name_LM': 'TextEdit', 'Name_UNC': 'TextEdit', 'Name': 'TextEdit', 'Reference': 'TextEdit', 'GlobalID': 'TextEdit', 'Code_txt': 'TextEdit', });
lyr_Point_District_2.set('fieldImages', {'Code': 'TextEdit', 'Class': 'TextEdit', 'Name_LM': 'TextEdit', 'Name_UNC': 'TextEdit', 'Name': 'TextEdit', 'Reference': 'TextEdit', 'GlobalID': 'TextEdit', 'Code_txt': 'TextEdit', });
lyr_Point_Province_3.set('fieldImages', {'Code': 'TextEdit', 'Class': 'TextEdit', 'Name_LM': 'TextEdit', 'Name_UNC': 'TextEdit', 'Name': 'TextEdit', 'Reference': 'TextEdit', 'GlobalID': 'TextEdit', 'Code_txt': 'TextEdit', });
lyr_PP_Commune_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'COMM_CODE': 'TextEdit', 'DIST_CODE': 'TextEdit', 'PROV_CODE': 'TextEdit', 'COMM_UTF8': 'TextEdit', 'COMM_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_District_PP_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'DIST_CODE': 'TextEdit', 'PROV_CODE': 'TextEdit', 'DIST_UTF8': 'TextEdit', 'DIST_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PhnomPenh_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'PROV_CODE': 'Range', 'PROV_UTF8': 'TextEdit', 'PROV_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Commune_PP_1.set('fieldLabels', {'Code': 'no label', 'Class': 'no label', 'Name_LM': 'no label', 'Name_UNC': 'no label', 'Name': 'no label', 'Reference': 'no label', 'GlobalID': 'no label', 'Code_txt': 'no label', });
lyr_Point_District_2.set('fieldLabels', {'Code': 'no label', 'Class': 'no label', 'Name_LM': 'no label', 'Name_UNC': 'no label', 'Name': 'no label', 'Reference': 'no label', 'GlobalID': 'no label', 'Code_txt': 'no label', });
lyr_Point_Province_3.set('fieldLabels', {'Code': 'no label', 'Class': 'no label', 'Name_LM': 'no label', 'Name_UNC': 'no label', 'Name': 'no label', 'Reference': 'no label', 'GlobalID': 'no label', 'Code_txt': 'no label', });
lyr_PP_Commune_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'COMM_CODE': 'no label', 'DIST_CODE': 'no label', 'PROV_CODE': 'no label', 'COMM_UTF8': 'no label', 'COMM_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_District_PP_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'DIST_CODE': 'no label', 'PROV_CODE': 'no label', 'DIST_UTF8': 'no label', 'DIST_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PhnomPenh_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'PROV_CODE': 'no label', 'PROV_UTF8': 'no label', 'PROV_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PhnomPenh_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});