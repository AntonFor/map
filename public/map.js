document.addEventListener('DOMContentLoaded', function() {
	
	const getData = (obj) => {
		switch (obj.house) {
			case 'Targaryen':
				{targaryenMarker.setLatLng([obj.y, obj.x]);
				targaryenMarker.setPopupContent(obj.hero)}
				break;
			case 'Greyjoy':
				{greyjoyMarker.setLatLng([obj.y, obj.x]);
				greyjoyMarker.setPopupContent(obj.hero)}
				break;
			case 'Lannister':
				{lanisterMarker.setLatLng([obj.y, obj.x]);
				lanisterMarker.setPopupContent(obj.hero)}
				break;
			case 'Martell':
				{martellMarker.setLatLng([obj.y, obj.x]);
				martellMarker.setPopupContent(obj.hero)}
				break;
			case 'Martell':
				{martellMarker.setLatLng([obj.y, obj.x]);
				martellMarker.setPopupContent(obj.hero)}
				break;
			case 'Tarly':
				{tarlyMarker.setLatLng([obj.y, obj.x]);
				tarlyMarker.setPopupContent(obj.hero)}
				break;
			case 'Tyrell':
				{tyrellMarker.setLatLng([obj.y, obj.x]);
				tyrellMarker.setPopupContent(obj.hero)}
				break;
				default: return;
		}
	}
	
	const socket = new WebSocket('ws://localhost:8081');
	
	socket.onopen = () => {
		console.log('open');
	}

	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		getData(data);
	}

	socket.onclose = () => {
		console.log('Socket закрыт');
	}
	
	socket.onerror = () => {
		console.log('Socket произошла ошибка');
	}
	
	const map = L.map('mapid', {
		crs: L.CRS.Simple
	});

	const bounds = [[0,0], [700,1200]];
	L.imageOverlay('./images/map/map.png', bounds).addTo(map);
	map.fitBounds(bounds);
	
	const targaryen = L.icon({
    iconUrl: './images/coat-of-arms/Targaryen.png',
    iconSize: [40, 40],
		iconAnchor: [0, 0],
    popupAnchor: [0, 0]
	});
	const targaryenMarker = L.marker([ 400, 500 ], {icon: targaryen}).addTo(map).bindPopup('');

	const greyjoy = L.icon({
    iconUrl: './images/coat-of-arms/Greyjoy.png',
    iconSize: [40, 40],
		iconAnchor: [0, 0],
    popupAnchor: [0, 0]
	});
	const greyjoyMarker = L.marker([ 660, 260 ], {icon: greyjoy}).addTo(map).bindPopup('');

	const lanister = L.icon({
    iconUrl: './images/coat-of-arms/Lannister.png',
    iconSize: [40, 40],
		iconAnchor: [0, 0],
    popupAnchor: [0, 0]
	});
	const lanisterMarker = L.marker([ 500, 260 ], {icon: lanister}).addTo(map).bindPopup('');

	const martell = L.icon({
    iconUrl: './images/coat-of-arms/Martell.png',
    iconSize: [40, 40],
		iconAnchor: [0, 0],
    popupAnchor: [0, 0]
	});
	const martellMarker = L.marker([ 250, 320 ], {icon: martell}).addTo(map).bindPopup('');

	const tarly = L.icon({
    iconUrl: './images/coat-of-arms/Tarly.png',
    iconSize: [40, 40],
		iconAnchor: [0, 0],
    popupAnchor: [0, 0]
	});
	const tarlyMarker = L.marker([ 720, 300 ], {icon: tarly}).addTo(map).bindPopup('');

	const tyrell = L.icon({
    iconUrl: './images/coat-of-arms/Tyrell.png',
    iconSize: [40, 40],
		iconAnchor: [0, 0],
    popupAnchor: [0, 0]
	});
	const tyrellMarker = L.marker([ 310, 360 ], {icon: tyrell}).addTo(map).bindPopup('');
})