var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AGATHONISI_EDIFICI1risultato_valido_1 = new ol.format.GeoJSON();
var features_AGATHONISI_EDIFICI1risultato_valido_1 = format_AGATHONISI_EDIFICI1risultato_valido_1.readFeatures(json_AGATHONISI_EDIFICI1risultato_valido_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGATHONISI_EDIFICI1risultato_valido_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGATHONISI_EDIFICI1risultato_valido_1.addFeatures(features_AGATHONISI_EDIFICI1risultato_valido_1);
var lyr_AGATHONISI_EDIFICI1risultato_valido_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGATHONISI_EDIFICI1risultato_valido_1, 
                style: style_AGATHONISI_EDIFICI1risultato_valido_1,
                popuplayertitle: 'AGATHONISI_EDIFICI1 — risultato_valido',
                interactive: true,
                title: '<img src="styles/legend/AGATHONISI_EDIFICI1risultato_valido_1.png" /> AGATHONISI_EDIFICI1 — risultato_valido'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AGATHONISI_EDIFICI1risultato_valido_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AGATHONISI_EDIFICI1risultato_valido_1];
lyr_AGATHONISI_EDIFICI1risultato_valido_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Function': 'Function', 'ROOF TYPE': 'ROOF TYPE', 'FLOOR': 'FLOOR', 'Characteristic': 'Characteristic', 'PV': 'PV', });
lyr_AGATHONISI_EDIFICI1risultato_valido_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Function': 'TextEdit', 'ROOF TYPE': 'TextEdit', 'FLOOR': 'TextEdit', 'Characteristic': 'TextEdit', 'PV': 'TextEdit', });
lyr_AGATHONISI_EDIFICI1risultato_valido_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'Function': 'no label', 'ROOF TYPE': 'no label', 'FLOOR': 'no label', 'Characteristic': 'no label', 'PV': 'no label', });
lyr_AGATHONISI_EDIFICI1risultato_valido_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});