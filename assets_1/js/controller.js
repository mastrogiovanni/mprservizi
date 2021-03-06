var home = angular.module('home', []);

home.controller('Home', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

	$scope.renderHtml = function(html_code) {
    		return $sce.trustAsHtml(html_code);
	};

	$scope.interests = [
		{	
			'title': 'Big Data',
			'url': 'http://en.wikipedia.org/wiki/Big_data',
			'content': 'I like to improve my knowledge about algorithms, strategies and architectures around one of the greater problem in Computer Science of today: management of huge amount of data. I found very exciting the course <a href="https://www.coursera.org/course/mmds">Mining Massive Datasets</a> at Stanford University and the one about MongoDB (one of the most popular NoSQL database) at MongoDB University: <a href="https://university.mongodb.com/courses/M101JS/about">M101JS - MongoDB for node.js developers</a>.',
			'image': 'assets_1/images/bigdata/big_data_office.jpg'
		},

		{	
			'title': 'Arduino',
			'url': 'http://www.arduino.cc/',
			'content': 'I feel myself a <a href="http://en.wikipedia.org/wiki/Maker">Maker</a> and I like to work with <a href="http://www.arduino.cc/">Arduino</a> (such cheap device!), soldiering cables and running small sketches. Always looking for the killer app of tomorrow!',
			'image': 'assets_1/images/embedded/arduino.jpeg'
		},

		/*
		{	
			'title': 'Wereable / E-textile',
			'url': 'http://www.arduino.cc/',
			'content': 'TODO',
			'image': 'assets_1/images/projects/e-textile.jpg'
		},
		*/

		{	
			'title': 'Sensor Networks',
			'url': 'http://senseslab.di.uniroma1.it/',
			'content': 'Sensor Networks was the main subject of my PhD. I liked so much spent my time in developing protocols and software for small embedded device (like ancient <a href="http://capsil.org/capsilwiki/index.php/EyesIFXv2">eyesIFVv2</a> and <a href="http://www.snm.ethz.ch/Projects/TmoteSky">Tmote</a>) that I continued to play with code and projects at home. I following the works of <a href="http://senseslab.di.uniroma1.it/">Senses Lab</a> and I developed my own solution for structural monitoring based on <a href="http://en.wikipedia.org/wiki/Data_mule">Data Mule</a> paradigm. The network is able to collect data and route them on destination thanks to mobile phones carried by workers. The project is pre-alpha and developed in spare time.',
			'image': 'assets_1/images/projects/sensors.jpeg'
		},
		
		/*
		{	
			'title': 'Drones',
			'url': 'http://www.arduino.cc/',
			'content': 'TODO',
			'image': 'assets_1/images/projects/quadcopter.jpg'
		},
		*/

		{	
			'title': 'Leap Motion',
			'url': 'https://www.leapmotion.com/',
			'content': '<a href="https://www.leapmotion.com/">Leap Motion</a> is the device I bought (on its very first appeareance on the market) to explore new ways to interact with computers. It\'s very precise and its SDK is very simple to use. In the spare time I\'m investigating its capability in the field of Business Intelligence and Big Data to visualize and navigate complex data structures. I\'m always open to partnership.',
			'image': 'assets_1/images/projects/leap.jpeg'
		},

	];

	/*
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
*/
}]);


