const styles = [
	{
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#444444',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{
				color: '#f2f2f2',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				saturation: '-23',
			},
			{
				lightness: '27',
			},
			{
				visibility: 'on',
			},
			{
				gamma: '1',
			},
			{
				hue: '#d32f2f',
			},
			{
				weight: '0.75',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'geometry.fill',
		stylers: [
			{
				visibility: 'on',
			},
			{
				color: '#ff6659',
			},
			{
				saturation: '-59',
			},
			{
				lightness: '30',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'all',
		stylers: [
			{
				visibility: 'on',
			},
			{
				hue: '#d32f2f',
			},
			{
				saturation: '2',
			},
			{
				lightness: '2',
			},
			{
				weight: '0.75',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{
				visibility: 'on',
			},
			{
				saturation: '-51',
			},
			{
				color: '#cbcbcb',
			},
		],
	},
	{
		featureType: 'transit.station',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{
				color: '#304567',
			},
			{
				visibility: 'on',
			},
		],
	},
];

// const styles = [
// 	{
// 		featureType: 'administrative',
// 		elementType: 'labels.text.fill',
// 		stylers: [
// 			{
// 				color: '#444444',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'landscape',
// 		elementType: 'all',
// 		stylers: [
// 			{
// 				color: '#e7e7e7',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'poi',
// 		elementType: 'all',
// 		stylers: [
// 			{
// 				visibility: 'off',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'road',
// 		elementType: 'all',
// 		stylers: [
// 			{
// 				saturation: -100,
// 			},
// 			{
// 				lightness: 45,
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'road.highway',
// 		elementType: 'all',
// 		stylers: [
// 			{
// 				visibility: 'simplified',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'road.highway',
// 		elementType: 'geometry.fill',
// 		stylers: [
// 			{
// 				color: '#d32f2f',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'road.arterial',
// 		elementType: 'geometry.fill',
// 		stylers: [
// 			{
// 				color: '#ff6659',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'road.arterial',
// 		elementType: 'labels.icon',
// 		stylers: [
// 			{
// 				visibility: 'off',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'road.local',
// 		elementType: 'geometry.fill',
// 		stylers: [
// 			{
// 				color: '#4a4c4f',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'transit',
// 		elementType: 'all',
// 		stylers: [
// 			{
// 				visibility: 'off',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'transit',
// 		elementType: 'geometry.fill',
// 		stylers: [
// 			{
// 				color: '#6aaf5c',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'water',
// 		elementType: 'all',
// 		stylers: [
// 			{
// 				color: '#001e3c',
// 			},
// 			{
// 				visibility: 'on',
// 			},
// 		],
// 	},
// ];

// const styles = [
// 	{
// 		stylers: [
// 			{
// 				hue: '#304567',
// 			},
// 			{
// 				saturation: 89,
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'water',
// 		stylers: [
// 			{
// 				color: '#ffffff',
// 			},
// 		],
// 	},
// 	{
// 		featureType: 'administrative.country',
// 		elementType: 'labels',
// 		stylers: [
// 			{
// 				visibility: 'off',
// 			},
// 		],
// 	},
// ];

export default styles;
