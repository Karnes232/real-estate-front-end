import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;
const MapBox = () => {
    
    useEffect(() => {
        let zoom = 7.3
        if (window.innerWidth < 1200) {
            zoom = 7
        }
        if (window.innerWidth < 1000) {
            zoom = 6.8
        }
        if (window.innerWidth < 700) {
            zoom = 6.3
        }
        if (window.innerWidth < 500) {
            zoom = 5.8
        }
        
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FybmVzMjMyIiwiYSI6ImNrcHZveno1djEzZTIyb280ZzJyeHB5bHYifQ.0CSJHHE0DL1VO90DOHM1CA';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-70.20, 18.95], // starting position [lng, lat]
            zoom: zoom // starting zoom
        });
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

        map.on('load', () => {
            // Add a new source from our GeoJSON data and
            // set the 'cluster' option to true. GL-JS will
            // add the point_count property to your source data.
            map.addSource('homes', {
            type: 'geojson',
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data: `${process.env.REACT_APP_URL}/mapbox`,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            });
            
            map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'homes',
            filter: ['has', 'point_count'],
            paint: {
            'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            5,
            '#f1f075',
            20,
            '#f28cb1'
            ],
            'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            5,
            30,
            20,
            40
            ]
            }
            });
             
            map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'homes',
            filter: ['has', 'point_count'],
            layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
            }
            });
             
            map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'homes',
            filter: ['!', ['has', 'point_count']],
            paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
            }
            });
             
            // inspect a cluster on click
            map.on('click', 'clusters', (e) => {
            const features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters']
            });
            const clusterId = features[0].properties.cluster_id;
            map.getSource('homes').getClusterExpansionZoom(
            clusterId,
            (err, zoom) => {
            if (err) return;
             
            map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom
            });
            }
            );
            });
             
            // When a click event occurs on a feature in
            // the unclustered-point layer, open a popup at
            // the location of the feature, with
            // description HTML from its properties.
            map.on('click', 'unclustered-point', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            console.log(e.features)
            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
             
            new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(
            ``
            )
            .addTo(map);
            });
             
            map.on('mouseenter', 'clusters', () => {
            map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'clusters', () => {
            map.getCanvas().style.cursor = '';
            });
            });
    }, [])

    

    return (
        <div id="map"></div>
        
    )
}

export default MapBox
