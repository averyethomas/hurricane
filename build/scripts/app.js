var app = angular.module('angularApp', []);

app.controller('2017stormCtrl', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout){
    $scope.source = 'http://weather.unisys.com/hurricane/atlantic/2017/index.php';
    $scope.stormsList = [
        {
            storm: 'Arlene',
            startDate: '04-19-2017',
            endDate: '04-21-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    time: '04/19/12Z',
                    lat: 31.90,
                    lng: -40.90,
                    wind: 30
                },
                {
                    time: '04/19/18Z',
                    lat: 32.40,
                    lng: -40.00,
                    wind: 30
                },
                {
                    time: '04/20/00Z',
                    lat: 33.20,
                    lng: -39.30,
                    wind: 30
                },
                {
                    time: '04/20/06Z',
                    lat: 34.40,
                    lng: -39.30,
                    wind: 30
                },
                {
                    time: '04/20/12Z',
                    lat: 36.10,
                    lng: -40.00,
                    wind: 30
                },
                {
                    time: '04/20/18Z',
                    lat: 37.70,
                    lng: -42.00,
                    wind: 40
                },
                {
                    time: '04/21/00Z',
                    lat: 39.40,
                    lng: -44.20,
                    wind: 45
                },
                {
                    time: '04/21/06Z',
                    lat: 40.00,
                    lng: -48.00,
                    wind: 45
                }
            ]
        },
        {
            storm: 'Bret',
            startDate: '06-19-2017',
            endDate: '06-20-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    time: '06/19/18Z',
                    lat: 9.40,
                    lng: -59.80,
                    wind: 35
                },
                {
                    time: '06/20/00Z',
                    lat: 10.00,
                    lng: -61.30,
                    wind: 35
                },
                {
                    time: '06/20/06Z',
                    lat: 10.60,
                    lng: -62.90,
                    wind: 35
                },
                {
                    time: '06/20/12Z',
                    lat: 11.60,
                    lng:  -64.40,
                    wind: 40
                }
            ]
        },
        {
            storm: 'Cindy',
            startDate: '06-20-2017',
            endDate: '06-23-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    lat: 25.70,
                    lng: -90.60,
                    wind: 40
                },
                {
                    lat: 26.40,
                    lng: -91.00,
                    wind: 50
                },
                {
                    lat: 27.30,
                    lng: -91.90,
                    wind: 50
                },
                {
                    lat: 27.60,
                    lng:  -92.60,
                    wind: 45
                },
                {
                    lat: 28.20,
                    lng: -93.20,
                    wind: 45
                },
                {
                    lat:  28.60,
                    lng: -93.40,
                    wind: 45
                },
                {
                    lat: 29.90,
                    lng: -93.60,
                    wind: 35
                },
                {
                    lat: 31.00,
                    lng: -93.50,
                    wind: 30
                },
                {
                    lat: 31.90,
                    lng: -93.70,
                    wind: 20
                },
                {
                    lat: 33.10,
                    lng: -93.50,
                    wind: 15
                },
                {
                    lat: 34.50,
                    lng: -92.00,
                    wind: 15
                },
                {
                    lat: 36.10,
                    lng:  -89.60,
                    wind: 30
                }
            ]
        },
        {
            storm: 'Don',
            startDate: '07-17-2017',
            endDate: '07-18-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    lat: 11.20,
                    lng: -52.60,
                    wind: 35
                },
                {
                    lat: 11.30,
                    lng: -54.00,
                    wind: 40
                },
                {
                    lat: 11.50,
                    lng: -56.20,
                    wind: 45
                },
                {
                    lat: 11.50,
                    lng:  -58.00,
                    wind: 35
                },
                {
                    lat: 11.70,
                    lng: -60.00,
                    wind: 35
                }
            ]
        },
        {
            storm: 'Emily',
            startDate: '07-31-2017',
            endDate: '07-31-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    lat: 27.70,
                    lng: -83.50,
                    wind: 30
                },
                {
                    lat: 27.70,
                    lng: -83.20,
                    wind: 40
                }
            ]
        },
        {
            storm: 'Franklin',
            startDate: '08-07-2017',
            endDate: '08-10-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 16.40,
                    lng: -83.00,
                    wind: 35
                },
                {
                    lat: 17.10,
                    lng: -84.20,
                    wind: 40
                },
                {
                    lat: 17.70,
                    lng: -85.10,
                    wind: 50
                },
                {
                    lat: 18.60,
                    lng:  -85.90,
                    wind: 50
                },
                {
                    lat: 19.10,
                    lng: -87.30,
                    wind: 50
                },
                {
                    lat:  19.30,
                    lng: -88.50,
                    wind: 45
                },
                {
                    lat:  19.60,
                    lng: -89.60,
                    wind: 40
                },
                {
                    lat: 20.20,
                    lng: -90.30,
                    wind: 35
                },
                {
                    lat: 20.30,
                    lng: -91.30,
                    wind: 45
                },
                {
                    lat: 20.40,
                    lng: -92.70,
                    wind: 55
                },
                {
                    lat: 20.20,
                    lng: -93.90,
                    wind: 60
                },
                {
                    lat: 20.10,
                    lng: -94.90,
                    wind: 65
                },
                {
                    lat: 20.200,
                    lng:  -96.10,
                    wind: 75
                },
                {
                    lat: 20.200,
                    lng:  -96.10,
                    wind: 60
                }
            ]
        },
        {
            storm: 'Gert',
            startDate: '08-13-2017',
            endDate: '08-17-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 25.30,
                    lng: -70.30,
                    wind: 30
                },
                {
                    lat: 26.50,
                    lng: -70.90,
                    wind: 30
                },
                {
                    lat: 27.40,
                    lng: -71.50,
                    wind: 30
                },
                {
                    lat: 28.10,
                    lng:  -71.70,
                    wind: 35
                },
                {
                    lat: 28.80,
                    lng: -71.90,
                    wind: 40
                },
                {
                    lat:  29.70,
                    lng: -72.20,
                    wind: 40
                },
                {
                    lat: 30.30,
                    lng: -72.20,
                    wind: 50
                },
                {
                    lat: 30.60,
                    lng: -72.30,
                    wind: 60
                },
                {
                    lat: 31.20,
                    lng: -72.30,
                    wind: 65
                },
                {
                    lat: 31.80,
                    lng: -72.50,
                    wind: 65
                },
                {
                    lat: 32.80,
                    lng: -72.00,
                    wind: 65
                },
                {
                    lat: 33.70,
                    lng:  -71.20,
                    wind: 70
                },
                {
                    lat: 34.80,
                    lng:  -70.30,
                    wind: 75
                },
                {
                    lat: 36.00,
                    lng:  -68.40,
                    wind: 80
                },
                {
                    lat: 37.40,
                    lng:  -65.70,
                    wind: 80
                },
                {
                    lat: 38.70,
                    lng: -62.40,
                    wind: 85
                },
                {
                    lat: 40.10,
                    lng: -58.40,
                    wind: 90
                },
                {
                    lat: 41.70,
                    lng: -54.0,
                    wind: 85
                },
                {
                    lat: 43.20,
                    lng: -50.0,
                    wind: 70
                }
            ]
        },
        {
            storm: 'Harvey',
            startDate: '08-17-2017',
            endDate: '09-01-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 13.00,
                    lng: -55.80,
                    wind: 35
                },
                {
                    lat: 13.00,
                    lng: -57.40,
                    wind: 35
                },
                {
                    lat: 13.10,
                    lng: -59.10,
                    wind: 35
                },
                {
                    lat: 13.10,
                    lng:  -61.30,
                    wind: 35
                },
                {
                    lat: 13.40,
                    lng: -62.90,
                    wind: 35
                },
                {
                    lat:  13.70,
                    lng: -64.10,
                    wind: 35
                },
                {
                    lat: 13.80,
                    lng: -65.90,
                    wind: 35
                },
                {
                    lat: 13.90,
                    lng: -68.10,
                    wind: 35
                },
                {
                    lat: 14.10,
                    lng: -70.00,
                    wind: 30
                },
                {
                    lat: 21.50,
                    lng: -92.50,
                    wind: 30
                },
                {
                    lat: 21.60,
                    lng: -92.60,
                    wind: 30
                },
                {
                    lat: 21.90,
                    lng: -92.60,
                    wind: 30
                },
                {
                    lat: 21.50,
                    lng: -92.50,
                    wind: 30
                },
                {
                    lat: 21.60,
                    lng: -92.60,
                    wind: 30
                },
                {
                    lat: 21.90,
                    lng: -92.60,
                    wind: 30
                },
                {
                    lat: 23.20,
                    lng: -92.80,
                    wind: 40
                },
                {
                    lat: 24.00,
                    lng: -93.30,
                    wind: 55
                },
                {
                    lat: 24.40,
                    lng: -93.60,
                    wind: 75
                },
                {
                    lat: 25.20,
                    lng: -94.60,
                    wind: 75
                },
                {
                    lat: 25.90,
                    lng: -95.40,
                    wind: 90
                },
                {
                    lat: 26.70,
                    lng: -96.00,
                    wind: 95
                },
                {
                    lat: 27.50,
                    lng: -96.50,
                    wind: 110
                },
                {
                    lat: 28.00,
                    lng: -97.00,
                    wind: 115
                },
                {
                    lat: 28.50,
                    lng: -97.20,
                    wind: 85
                },
                {
                    lat: 28.90,
                    lng: -97.30,
                    wind: 65
                },
                {
                    lat: 29.10,
                    lng: -97.60,
                    wind: 55
                },
                {
                    lat: 29.30,
                    lng: -97.30,
                    wind: 45
                },
                {
                    lat: 29.20,
                    lng: -97.70,
                    wind: 40
                },
                {
                    lat: 29.00,
                    lng: -97.40,
                    wind: 35
                },
                {
                    lat: 29.00,
                    lng: -97.00,
                    wind: 35
                },
                {
                    lat: 28.80,
                    lng: -96.60,
                    wind: 35
                },
                {
                    lat: 28.60,
                    lng: -96.30,
                    wind: 35
                },
                {
                    lat: 28.50,
                    lng: -96.00,
                    wind: 35
                },
                {
                    lat: 28.50,
                    lng: -95.70,
                    wind: 40
                },
                {
                    lat: 28.20,
                    lng: -95.30,
                    wind: 40
                },
                {
                    lat: 28.10,
                    lng: -94.80,
                    wind: 40
                },
                {
                    lat: 28.40,
                    lng: -94.30,
                    wind: 40
                },
                {
                    lat: 29.20,
                    lng: -94.30,
                    wind: 45
                },
                {
                    lat: 29.00,
                    lng: -93.60,
                    wind: 45
                },
                {
                    lat: 29.80,
                    lng: -93.40,
                    wind: 40
                },
                {
                    lat: 30.50,
                    lng: -93.30,
                    wind: 40
                },
                {
                    lat: 30.80,
                    lng: -93.10,
                    wind: 35
                },
                {
                    lat: 31.70,
                    lng: -92.30,
                    wind: 30
                },
                {
                    lat: 32.30,
                    lng: -92.00,
                    wind: 25
                },
                {
                    lat: 32.50,
                    lng: -91.40,
                    wind: 15
                },
                {
                    lat: 33.80,
                    lng: -90.50,
                    wind: 15
                },
                {
                    lat: 34.30,
                    lng: -89.00,
                    wind: 25
                },
                {
                    lat: 35.70,
                    lng: -87.20,
                    wind: 25
                }
            ]
        },
        {
            storm: 'Irma',
            startDate: '08-30-2017',
            endDate: '09-12-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 16.40,
                    lng: -30.30,
                    wind: 45
                },
                {
                    lat: 16.40,
                    lng: -31.20,
                    wind: 50
                },
                {
                    lat: 16.40,
                    lng: -32.20,
                    wind: 55
                },
                {
                    lat: 16.50,
                    lng:  -32.90,
                    wind: 60
                },
                {
                    lat: 16.90,
                    lng: -33.80,
                    wind: 85
                },
                {
                    lat: 17.30,
                    lng: -34.80,
                    wind: 100
                },
                {
                    lat: 17.80,
                    lng: -35.60,
                    wind: 100
                },
                {
                    lat: 18.20,
                    lng: -36.50,
                    wind: 100
                },
                {
                    lat: 18.50,
                    lng: -37.80,
                    wind: 95
                },
                {
                    lat: 18.80,
                    lng: -39.10,
                    wind: 105
                },
                {
                    lat: 19.10,
                    lng: -40.50,
                    wind: 100
                },
                {
                    lat: 19.000,
                    lng:  -41.80,
                    wind: 95
                },
                {
                    lat: 18.80,
                    lng: -43.300,
                    wind: 95
                },
                {
                    lat: 18.50,
                    lng: -44.60,
                    wind: 95
                },
                {
                    lat: 18.30,
                    lng: -46.20,
                    wind: 95
                },
                {
                    lat: 18.00,
                    lng:  -47.50,
                    wind: 100
                },
                {
                    lat: 17.70,
                    lng: -48.40,
                    wind: 100
                },
                {
                    lat: 17.60,
                    lng: -49.80,
                    wind: 100
                },
                {
                    lat: 17.20,
                    lng: -51.00,
                    wind: 100
                },
                {
                    lat: 16.90,
                    lng: -52.30,
                    wind: 100
                },
                {
                    lat: 16.80,
                    lng: -53.30,
                    wind: 105
                },
                {
                    lat: 16.70,
                    lng: -54.40,
                    wind: 115
                },
                {
                    lat: 16.70,
                    lng: -55.60,
                    wind: 120
                },
                {
                    lat: 16.60,
                    lng:  -57.00,
                    wind: 130
                },
                {
                    lat: 16.70,
                    lng:  -57.00,
                    wind: 150
                },
                {
                    lat: 16.80,
                    lng: -58.40,
                    wind: 155
                },
                {
                    lat: 17.10,
                    lng: -59.80,
                    wind: 160
                },
                {
                    lat: 17.40,
                    lng: -61.10,
                    wind: 160
                },
                {
                    lat: 17.90,
                    lng: -62.60,
                    wind: 160
                },
                {
                    lat: 18.20,
                    lng: -64.00,
                    wind: 160
                },
                {
                    lat: 18.80,
                    lng: -65.40,
                    wind: 160
                },
                {
                    lat: 19.40,
                    lng: -66.80,
                    wind: 160
                },
                {
                    lat: 20.00,
                    lng:  -68.30,
                    wind: 155
                },
                {
                    lat: 20.40,
                    lng:  -69.70,
                    wind: 150
                },
                {
                    lat: 20.90,
                    lng:  -71.10,
                    wind: 150
                },
                {
                    lat: 21.30,
                    lng:  -72.40,
                    wind: 145
                },
                {
                    lat: 21.70,
                    lng:  -73.80,
                    wind: 135
                },
                {
                    lat: 22.00,
                    lng:  -75.30,
                    wind: 130
                },
                {
                    lat: 22.10,
                    lng:  -76.50,
                    wind: 135
                },
                {
                    lat: 22.10,
                    lng:  -77.70,
                    wind: 140
                },
                {
                    lat: 22.50,
                    lng:  -78.80,
                    wind: 135
                },
                {
                    lat: 22.80,
                    lng:  -79.80,
                    wind: 110
                },
                {
                    lat: 23.40,
                    lng:  -80.50,
                    wind: 110
                },
                {
                    lat: 23.50,
                    lng:  -81.00,
                    wind: 105
                },
                {
                    lat: 24.10,
                    lng:  -81.50,
                    wind: 115
                },
                {
                    lat: 25.00,
                    lng:  -81.50,
                    wind: 115
                },
                {
                    lat: 26.20,
                    lng:  -81.80,
                    wind: 95
                },
                {
                    lat: 27.50,
                    lng:  -81.90,
                    wind: 85
                },
                {
                    lat: 28.90,
                    lng:  -82.60,
                    wind: 65
                },
                {
                    lat: 30.30,
                    lng:  -83.10,
                    wind: 55
                },
                {
                    lat: 31.50,
                    lng:  -84.00,
                    wind: 45
                },
                {
                    lat: 32.40,
                    lng:  -84.90,
                    wind: 30
                }
            ]
        },
        {
            storm: 'Jose',
            startDate: '09-05-2017',
            endDate: '09-21-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 12.30,
                    lng: -39.10,
                    wind: 35
                },
                {
                    lat: 12.50,
                    lng: -40.60,
                    wind: 40
                },
                {
                    lat: 12.30,
                    lng: -41.70,
                    wind: 45
                },
                {
                    lat: 12.50,
                    lng:  -42.80,
                    wind: 50
                },
                {
                    lat: 13.10,
                    lng: -44.50,
                    wind: 60
                },
                {
                    lat:  13.90,
                    lng: -45.80,
                    wind: 65
                },
                {
                    lat: 14.40,
                    lng: -47.50,
                    wind: 75
                },
                {
                    lat: 14.80,
                    lng: -49.10,
                    wind: 80
                },
                {
                    lat: 14.90,
                    lng: -50.60,
                    wind: 80
                },
                {
                    lat: 15.50,
                    lng: -52.40,
                    wind: 105
                },
                {
                    lat: 15.60,
                    lng: -53.90,
                    wind: 105
                },
                {
                    lat: 16.00,
                    lng:  -55.30,
                    wind: 110
                },
                {
                    lat: 16.30,
                    lng: -57.10,
                    wind: 130
                },
                {
                    lat: 16.60,
                    lng: -58.30,
                    wind: 130
                },
                {
                    lat: 16.90,
                    lng: -59.30,
                    wind: 135
                },
                {
                    lat: 17.50,
                    lng:  -60.30,
                    wind: 130
                },
                {
                    lat: 18.30,
                    lng: -61.30,
                    wind: 125
                },
                {
                    lat:  19.20,
                    lng: -62.40,
                    wind: 125
                },
                {
                    lat: 19.80,
                    lng: -63.40,
                    wind: 115
                },
                {
                    lat: 20.80,
                    lng: -64.50,
                    wind: 115
                },
                {
                    lat: 21.70,
                    lng: -65.80,
                    wind: 115
                },
                {
                    lat: 22.80,
                    lng: -66.90,
                    wind: 105
                },
                {
                    lat: 23.70,
                    lng: -68.10,
                    wind: 100
                },
                {
                    lat: 24.40,
                    lng:  -68.60,
                    wind: 90
                },
                {
                    lat: 25.50,
                    lng: -69.10,
                    wind: 90
                },
                {
                    lat: 26.40,
                    lng: -69.20,
                    wind: 85
                },
                {
                    lat: 27.10,
                    lng: -69.50,
                    wind: 75
                },
                {
                    lat: 27.50,
                    lng:  -69.00,
                    wind: 65
                },
                {
                    lat: 27.50,
                    lng: -68.30,
                    wind: 65
                },
                {
                    lat: 27.60,
                    lng: -67.40,
                    wind: 65
                },
                {
                    lat: 26.50,
                    lng: -66.40,
                    wind: 65
                },
                {
                    lat: 26.10,
                    lng: -66.00,
                    wind: 65
                },
                {
                    lat: 25.50,
                    lng: -65.60,
                    wind: 65
                },
                {
                    lat: 25.30,
                    lng: -65.60,
                    wind: 65
                },
                {
                    lat: 25.20,
                    lng: -66.00,
                    wind: 70
                },
                {
                    lat: 25.10,
                    lng:  -66.50,
                    wind: 65
                },
                {
                    lat: 24.90,
                    lng: -66.60,
                    wind: 60
                },
                {
                    lat: 25.20,
                    lng: -67.30,
                    wind: 60
                },
                {
                    lat: 25.50,
                    lng: -68.00,
                    wind: 60
                },
                {
                    lat: 25.90,
                    lng:  -68.70,
                    wind: 60
                },
                {
                    lat: 26.50,
                    lng: -69.40,
                    wind: 60
                },
                {
                    lat:  27.10,
                    lng: -70.30,
                    wind: 65
                },
                {
                    lat: 27.40,
                    lng: -71.00,
                    wind: 70
                },
                {
                    lat: 27.90,
                    lng: -71.80,
                    wind: 70
                },
                {
                    lat: 28.80,
                    lng: -72.20,
                    wind: 70
                },
                {
                    lat: 28.90,
                    lng: -71.90,
                    wind: 70
                },
                {
                    lat: 29.20,
                    lng: -71.80,
                    wind: 70
                },
                {
                    lat: 30.00,
                    lng:  -71.70,
                    wind: 70
                },
                {
                    lat: 31.00,
                    lng:  -71.90,
                    wind: 80
                },
                {
                    lat: 31.50,
                    lng: -71.80,
                    wind: 80
                },
                {
                    lat: 32.20,
                    lng: -71.60,
                    wind: 80
                },
                {
                    lat: 33.00,
                    lng: -71.40,
                    wind: 75
                },
                {
                    lat: 33.90,
                    lng: -71.10,
                    wind: 65
                },
                {
                    lat: 34.80,
                    lng: -71.10,
                    wind: 65
                },
                {
                    lat: 35.20,
                    lng: -71.30,
                    wind: 65
                },
                {
                    lat: 36.00,
                    lng: -71.30,
                    wind: 70
                },
                {
                    lat: 36.50,
                    lng:  -71.70,
                    wind: 65
                },
                {
                    lat: 37.20,
                    lng: -71.30,
                    wind: 65
                },
                {
                    lat: 37.90,
                    lng: -70.80,
                    wind: 60
                },
                {
                    lat: 38.40,
                    lng:  -70.30,
                    wind: 55
                },
                {
                    lat: 39.00,
                    lng: -70.00,
                    wind: 60
                },
                {
                    lat: 39.20,
                    lng: -69.10,
                    wind: 60
                },
                {
                    lat: 39.50,
                    lng:  -68.20,
                    wind: 50
                },
                {
                    lat: 39.80,
                    lng: -67.80,
                    wind: 50
                },
                {
                    lat: 39.60,
                    lng: -68.20,
                    wind: 50
                },
                {
                    lat: 39.60,
                    lng:  -67.90,
                    wind: 45
                }
            ]
        },
        {
            storm: 'Katia',
            startDate: '09-05-2017',
            endDate: '09-09-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 22.40,
                    lng: -96.70,
                    wind: 30
                },
                {
                    lat: 22.20,
                    lng: -96.40,
                    wind: 30
                },
                {
                    lat: 22.10,
                    lng: -96.30,
                    wind: 35
                },
                {
                    lat: 21.70,
                    lng:  -95.90,
                    wind: 40
                },
                {
                    lat: 21.70,
                    lng: -95.10,
                    wind: 65
                },
                {
                    lat:  21.70,
                    lng: -94.80,
                    wind: 70
                },
                {
                    lat: 21.50,
                    lng: -94.50,
                    wind: 70
                },
                {
                    lat: 21.60,
                    lng: -94.60,
                    wind: 70
                },
                {
                    lat: 21.60,
                    lng: -94.60,
                    wind: 70
                },
                {
                    lat: 21.50,
                    lng: -95.10,
                    wind: 75
                },
                {
                    lat: 21.30,
                    lng: -95.40,
                    wind: 80
                },
                {
                    lat: 21.00,
                    lng:  -95.80,
                    wind: 85
                },
                {
                    lat: 21.00,
                    lng: -96.50,
                    wind: 90
                },
                {
                    lat: 20.60,
                    lng: -97.20,
                    wind: 65
                },
                {
                    lat: 20.30,
                    lng:  -97.50,
                    wind: 35
                }
            ]
        },
        {
            storm: 'Lee',
            startDate: '09-15-2017',
            endDate: '09-29-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 10.70,
                    lng: -25.40,
                    wind: 30
                },
                {
                    lat: 10.60,
                    lng: -27.30,
                    wind: 30
                },
                {
                    lat: 11.40,
                    lng: -28.30,
                    wind: 30
                },
                {
                    lat: 12.60,
                    lng:  -29.70,
                    wind: 30
                },
                {
                    lat: 12.80,
                    lng: -30.70,
                    wind: 30
                },
                {
                    lat:  12.60,
                    lng: -32.10,
                    wind: 30
                },
                {
                    lat: 12.50,
                    lng: -33.10,
                    wind: 35
                },
                {
                    lat: 12.60,
                    lng: -34.20,
                    wind: 35
                },
                {
                    lat: 12.80,
                    lng: -34.90,
                    wind: 35
                },
                {
                    lat: 13.00,
                    lng: -35.40,
                    wind: 35
                },
                {
                    lat: 13.00,
                    lng: -36.70,
                    wind: 30
                },
                {
                    lat: 13.20,
                    lng:  -37.30,
                    wind: 30
                },
                {
                    lat: 13.60,
                    lng: -38.50,
                    wind: 30
                },
                {
                    lat: 14.10,
                    lng:  -39.80,
                    wind: 30
                },
                {
                    lat: 15.00,
                    lng: -40.60,
                    wind: 30
                },
                {
                    lat:  15.10,
                    lng: -43.00,
                    wind: 25
                },
                {
                    lat: 30.80,
                    lng: -48.90,
                    wind: 30
                },
                {
                    lat: 31.50,
                    lng: -49.00,
                    wind: 35
                },
                {
                    lat: 31.90,
                    lng: -49.20,
                    wind: 35
                },
                {
                    lat: 31.90,
                    lng: -49.40,
                    wind: 40
                },
                {
                    lat: 32.10,
                    lng: -49.80,
                    wind: 40
                },
                {
                    lat: 31.90,
                    lng: -50.10,
                    wind: 45
                },
                {
                    lat: 31.90,
                    lng:  -50.10,
                    wind: 65
                },
                {
                    lat: 31.80,
                    lng: -50.10,
                    wind: 75
                },
                {
                    lat: 31.40,
                    lng:  -49.90,
                    wind: 80
                },
                {
                    lat: 31.30,
                    lng: -49.70,
                    wind: 80
                },
                {
                    lat:  31.10,
                    lng: -49.50,
                    wind: 80
                },
                {
                    lat:  31.10,
                    lng: -49.40,
                    wind: 80
                },
                {
                    lat: 30.80,
                    lng: -49.00,
                    wind: 80
                },
                {
                    lat: 30.50,
                    lng: -50.60,
                    wind: 75
                },
                {
                    lat: 30.20,
                    lng: -51.50,
                    wind: 80
                },
                {
                    lat: 30.00,
                    lng: -52.50,
                    wind: 85
                },
                {
                    lat: 29.90,
                    lng: -53.70,
                    wind: 90
                },
                {
                    lat: 29.90,
                    lng: -54.60,
                    wind: 95
                },
                {
                    lat: 30.00,
                    lng:  -55.50,
                    wind: 95
                },
                {
                    lat: 30.20,
                    lng:  -56.30,
                    wind: 95
                },
                {
                    lat: 30.60,
                    lng: -56.80,
                    wind: 100
                },
                {
                    lat:  31.20,
                    lng: -57.10,
                    wind: 100
                },
                {
                    lat:  31.70,
                    lng: -57.30,
                    wind: 95
                },
                {
                    lat: 32.50,
                    lng: -57.20,
                    wind: 95
                },
                {
                    lat: 33.70,
                    lng: -57.00,
                    wind: 85
                },
                {
                    lat: 35.10,
                    lng: -55.80,
                    wind: 80
                },
                {
                    lat: 36.30,
                    lng: -54.60,
                    wind: 70
                },
                {
                    lat: 38.30,
                    lng: -52.40,
                    wind: 65
                },
                {
                    lat: 40.10,
                    lng: -49.50,
                    wind: 60
                },
                {
                    lat: 42.20,
                    lng:  -46.00,
                    wind: 55
                }
            ]
        },
        {
            storm: 'Maria',
            startDate: '09-16-2017',
            endDate: '09-30-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 12.30,
                    lng: -52.60,
                    wind: 45
                },
                {
                    lat: 12.50,
                    lng: -53.70,
                    wind: 45
                },
                {
                    lat: 13.00,
                    lng: -54.90,
                    wind: 55
                },
                {
                    lat: 13.50,
                    lng:  -56.20,
                    wind: 55
                },
                {
                    lat: 13.80,
                    lng: -57.50,
                    wind: 65
                },
                {
                    lat:  14.20,
                    lng: -58.40,
                    wind: 75
                },
                {
                    lat: 14.60,
                    lng: -59.50,
                    wind: 80
                },
                {
                    lat: 14.70,
                    lng: -60.10,
                    wind: 105
                },
                {
                    lat: 15.10,
                    lng: -60.70,
                    wind: 115
                },
                {
                    lat: 15.30,
                    lng: -61.10,
                    wind: 140
                },
                {
                    lat: 15.50,
                    lng: -61.40,
                    wind: 140
                },
                {
                    lat: 16.00,
                    lng:  -62.30,
                    wind: 135
                },
                {
                    lat: 16.30,
                    lng: -63.10,
                    wind: 140
                },
                {
                    lat: 16.80,
                    lng: -64.00,
                    wind: 145
                },
                {
                    lat: 17.30,
                    lng: -64.70,
                    wind: 150
                },
                {
                    lat: 17.90,
                    lng:  -65.60,
                    wind: 135
                },
                {
                    lat: 18.40,
                    lng: -66.50,
                    wind: 120
                },
                {
                    lat:  18.80,
                    lng: -67.30,
                    wind: 95
                },
                {
                    lat: 19.20,
                    lng: -67.90,
                    wind: 95
                },
                {
                    lat: 19.60,
                    lng: -68.40,
                    wind: 100
                },
                {
                    lat: 20.20,
                    lng: -69.10,
                    wind: 100
                },
                {
                    lat: 20.80,
                    lng: -69.80,
                    wind: 105
                },
                {
                    lat: 21.00,
                    lng: -70.20,
                    wind: 110
                },
                {
                    lat: 21.60,
                    lng:  -70.60,
                    wind: 110
                },
                {
                    lat: 22.30,
                    lng: -71.00,
                    wind: 110
                },
                {
                    lat: 23.30,
                    lng: -71.40,
                    wind: 110
                },
                {
                    lat: 24.10,
                    lng: -71.70,
                    wind: 110
                },
                {
                    lat: 24.80,
                    lng:  -72.00,
                    wind: 105
                },
                {
                    lat: 25.40,
                    lng: -72.30,
                    wind: 100
                },
                {
                    lat:  26.30,
                    lng: -72.50,
                    wind: 100
                },
                {
                    lat: 27.00,
                    lng: -72.50,
                    wind: 100
                },
                {
                    lat: 27.90,
                    lng: -72.70,
                    wind: 95
                },
                {
                    lat: 28.70,
                    lng: -72.90,
                    wind: 90
                },
                {
                    lat: 29.40,
                    lng: -73.00,
                    wind: 90
                },
                {
                    lat: 30.00,
                    lng: -73.00,
                    wind: 80
                },
                {
                    lat: 30.60,
                    lng:  -73.00,
                    wind: 70
                },
                {
                    lat: 31.20,
                    lng: -73.10,
                    wind: 70
                },
                {
                    lat: 32.30,
                    lng:  -73.10,
                    wind: 70
                },
                {
                    lat: 32.90,
                    lng: -73.10,
                    wind: 65
                },
                {
                    lat:  33.60,
                    lng: -73.10,
                    wind: 65
                },
                {
                    lat: 34.10,
                    lng: -73.00,
                    wind: 60
                },
                {
                    lat: 34.90,
                    lng: -72.90,
                    wind: 60
                },
                {
                    lat: 35.10,
                    lng: -72.90,
                    wind: 60
                },
                {
                    lat: 35.60,
                    lng: -72.60,
                    wind: 65
                },
                {
                    lat: 36.20,
                    lng: -72.10,
                    wind: 65
                },
                {
                    lat: 36.80,
                    lng:  -71.50,
                    wind: 65
                },
                {
                    lat: 36.80,
                    lng: -71.00,
                    wind: 60
                },
                {
                    lat: 36.80,
                    lng:  -69.30,
                    wind: 60
                },
                {
                    lat: 36.80,
                    lng: -67.80,
                    wind: 55
                },
                {
                    lat:  37.10,
                    lng: -65.50,
                    wind: 55
                },
                {
                    lat: 37.20,
                    lng: -63.30,
                    wind: 50
                },
                {
                    lat: 37.50,
                    lng: -60.10,
                    wind: 50
                },
                {
                    lat: 37.80,
                    lng: -57.40,
                    wind: 50
                },
                {
                    lat: 38.60,
                    lng: -53.90,
                    wind: 50
                },
                {
                    lat: 39.60,
                    lng: -50.50,
                    wind: 50
                },
                {
                    lat: 40.70,
                    lng:  -47.20,
                    wind: 50
                }
            ]
        },
        {
            storm: 'Nate',
            startDate: '10-04-2017',
            endDate: '10-09-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 12.20,
                    lng: -81.90,
                    wind: 30
                },
                {
                    lat: 12.50,
                    lng: -82.50,
                    wind: 30
                },
                {
                    lat: 12.80,
                    lng: -82.70,
                    wind: 30
                },
                {
                    lat: 13.30,
                    lng:  -83.30,
                    wind: 30
                },
                {
                    lat: 14.30,
                    lng: -83.70,
                    wind: 35
                },
                {
                    lat:  14.90,
                    lng: -84.30,
                    wind: 35
                },
                {
                    lat: 15.80,
                    lng: -84.70,
                    wind: 35
                },
                {
                    lat: 16.90,
                    lng: -85.10,
                    wind: 40
                },
                {
                    lat: 18.70,
                    lng: -85.00,
                    wind: 45
                },
                {
                    lat: 20.30,
                    lng: -85.70,
                    wind: 50
                },
                {
                    lat: 22.30,
                    lng: -86.40,
                    wind: 60
                },
                {
                    lat:  24.50,
                    lng:  -87.00,
                    wind: 70
                },
                {
                    lat:  26.60,
                    lng:  -88.40,
                    wind: 80
                },
                {
                    lat:  28.40,
                    lng:  -89.10,
                    wind: 80
                },
                {
                    lat:  29.90,
                    lng:  -89.10,
                    wind: 75
                },
                {
                    lat:  31.50,
                    lng:  -88.40,
                    wind: 60
                },
                {
                    lat:  33.10,
                    lng:  -87.30,
                    wind: 30
                },
                {
                    lat:  35.00,
                    lng:  -86.50,
                    wind: 30
                },
                {
                    lat:  36.40,
                    lng:  -85.50,
                    wind: 30
                }
            ]
        },
        {
            storm: 'Ophelia',
            startDate: '10-09-2017',
            endDate: '10-15-2017',
            class: 'Hurricane',
            locations: [
                {
                    lat: 31.10,
                    lng: -39.90,
                    wind: 30
                },
                {
                    lat: 31.40,
                    lng: -39.90,
                    wind: 35
                },
                {
                    lat: 31.50,
                    lng: -39.60,
                    wind: 40
                },
                {
                    lat: 32.30,
                    lng:  -39.00,
                    wind: 45
                },
                {
                    lat: 31.90,
                    lng: -38.80,
                    wind: 45
                },
                {
                    lat:  31.50,
                    lng: -38.30,
                    wind: 45
                },
                {
                    lat: 31.10,
                    lng: -38.00,
                    wind: 50
                },
                {
                    lat: 30.70,
                    lng: -37.60,
                    wind: 45
                },
                {
                    lat: 30.20,
                    lng: -37.00,
                    wind: 55
                },
                {
                    lat: 30.00,
                    lng: -36.50,
                    wind: 60
                },
                {
                    lat: 30.00,
                    lng: -36.10,
                    wind: 65
                },
                {
                    lat:  30.00,
                    lng:  -35.70,
                    wind: 75
                },
                {
                    lat:  30.30,
                    lng:  -35.60,
                    wind: 75
                },
                {
                    lat:  30.50,
                    lng:  -35.60,
                    wind: 80
                },
                {
                    lat:  30.40,
                    lng:  -35.50,
                    wind: 85
                },
                {
                    lat:  30.70,
                    lng:  -34.70,
                    wind: 90
                },
                {
                    lat:  31.10,
                    lng:  -33.90,
                    wind: 90
                },
                {
                    lat:  31.80,
                    lng:  -32.90,
                    wind: 85
                },
                {
                    lat:  32.30,
                    lng:  -31.80,
                    wind: 85
                },
                {
                    lat:  33.00,
                    lng:  -30.60,
                    wind: 85
                },
                {
                    lat:  33.90,
                    lng:  -28.60,
                    wind: 85
                },
                {
                    lat:  34.80,
                    lng:  -26.60,
                    wind: 100
                },
                {
                    lat:  35.90,
                    lng:  -23.70,
                    wind: 100
                },
                {
                    lat:  37.30,
                    lng:  -21.50,
                    wind: 100
                },
                {
                    lat:  39.00,
                    lng:  -18.30,
                    wind: 90
                },
                {
                    lat:  41.60,
                    lng:  -16.00,
                    wind: 80
                },
                {
                    lat:  44.60,
                    lng:  -13.30,
                    wind: 75
                }
            ]
        },
        {
            storm: 'Philippe',
            startDate: '10-28-2017',
            endDate: '10-29-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    lat: 20.80,
                    lng: -82.90,
                    wind: 30
                },
                {
                    lat: 23.00,
                    lng: -82.60,
                    wind: 35
                },
                {
                    lat: 24.80,
                    lng: -82.10,
                    wind: 35
                },
                {
                    lat: 25.00,
                    lng:  -81.00,
                    wind: 40
                },
                {
                    lat: 27.80,
                    lng: -77.50,
                    wind: 45
                }
            ]
        },
        {
            storm: 'Rina',
            startDate: '11-06-2017',
            endDate: '11-09-2017',
            class: 'Tropical Storm',
            locations: [
                {
                    lat: 28.90,
                    lng: -50.20,
                    wind: 30
                },
                {
                    lat: 29.50,
                    lng: -50.40,
                    wind: 30
                },
                {
                    lat: 29.90,
                    lng: -50.00,
                    wind: 30
                },
                {
                    lat: 30.40,
                    lng:  -49.90,
                    wind: 35
                },
                {
                    lat: 31.40,
                    lng: -49.80,
                    wind: 35
                },
                {
                    lat:  32.40,
                    lng: -49.30,
                    wind: 35
                },
                {
                    lat: 33.80,
                    lng: -48.90,
                    wind: 40
                },
                {
                    lat: 35.40,
                    lng: -48.50,
                    wind: 45
                },
                {
                    lat: 37.10,
                    lng: -48.40,
                    wind: 50
                },
                {
                    lat: 39.40,
                    lng: -48.70,
                    wind: 50
                },
                {
                    lat: 40.90,
                    lng: -48.60,
                    wind: 45
                },
                {
                    lat: 42.50,
                    lng:  -48.30,
                    wind: 45
                },
                {
                    lat: 44.50,
                    lng:  -47.00,
                    wind: 40
                }
            ]
        }
    ];

    $window.initMap = function(){

        var map = new google.maps.Map(document.getElementById('stormMap'), {
            zoom: 4,
            center: {lat: 25, lng: -60},
            styles:[
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d3d3d3"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d3d3d3"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "saturation": 40
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#89b1c9"
                        },
                        {
                            "saturation": -70
                        },
                        {
                            "lightness": 10
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "saturation": 100
                        },
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
        });

        angular.forEach($scope.stormsList, function(value){

            var hurricanePathCoordinates = value.locations;

            var hurricanePath = new google.maps.Polyline({
                path: hurricanePathCoordinates,
                geodesic: true,
                strokeColor: '#556A73',
                strokeOpacity: 0.5,
                strokeWeight: 3.75,
                message: '<span style="font-weight: bold">' + value.class + ' ' + value.storm + '</span><br />' + value.startDate + ' - ' + value.endDate
            });

            var infowindow = new google.maps.InfoWindow({
                content: ''
            });


            google.maps.event.addListener(hurricanePath, 'mouseover', function(event) {
                this.setOptions({ strokeColor: '#517373', strokeOpacity: 1 });
                infowindow.setContent(this.message);
                infowindow.setPosition(event.latLng);
                infowindow.open(map);
            });
            google.maps.event.addListener(hurricanePath, 'mouseout', function(event){
                this.setOptions({ strokeColor: '#556A73', strokeOpacity:0.5 });
                var closeInfoWindow = infowindow.close(map);
                $timeout(closeInfoWindow, 5000);
            });
            google.maps.event.addListener(hurricanePath, 'click', function(event) {
                infowindow.setContent(this.message);
                infowindow.setPosition(event.latLng);
                infowindow.open(map);
            });

            hurricanePath.setMap(map);
        });
    };

}]);

app.controller('namedStormCtrl', ['$scope', function ($scope) {

    $scope.namedStormsByYear = [
        { year: 2008, total: 16, major: 5 },
        { year: 2009, total: 9, major: 2 },
        { year: 2010, total: 19, major: 5 },
        { year: 2011, total: 19, major: 4 },
        { year: 2012, total: 19, major: 2 },
        { year: 2013, total: 14, major: 0 },
        { year: 2014, total: 8, major: 2 },
        { year: 2015, total: 11, major: 2 },
        { year: 2016, total: 15, major: 4 },
        { year: 2017, total: 17, major: 6 }
    ];

    $scope.years = [];
    $scope.seriesData = [{
        name: 'Major Storms',
        data: [ ]
    }, {
        name: 'Total Storms',
        data: [ ]
    }];

    angular.forEach($scope.namedStormsByYear, function(value, index){
        $scope.years.push(value.year);
        $scope.seriesData[0].data.push(value.major);
        $scope.seriesData[1].data.push(value.total);
    });

    Highcharts.chart('namedStorms', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Named Storms By Year'
        },
        colors: ['#153959', '#556A73'],
        xAxis: {
            categories: $scope.years,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Named Storms'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: $scope.seriesData
    });

}]);

app.controller('costsCtrl', ['$scope', function($scope){

    $scope.data = [
        { year: 1980, eventNames: ['Allen'], costs: [1.9] },
        { year: 1981, eventNames: [], costs: [0] },
        { year: 1982, eventNames: [], costs: [0] },
        { year: 1983, eventNames: ['Alicia'], costs: [7.5] },
        { year: 1984, eventNames: [], costs: [0] },
        { year: 1985, eventNames: ['Elena', 'Gloria', 'Juan'], costs: [3, 2, 3.5] },
        { year: 1986, eventNames: [], costs: [0] },
        { year: 1987, eventNames: [], costs: [0] },
        { year: 1988, eventNames: [], costs: [0] },
        { year: 1989, eventNames: ['Hugo'], costs: [18.3] },
        { year: 1990, eventNames: [], costs: [0] },
        { year: 1991, eventNames: ['Bob'], costs: [2.7] },
        { year: 1992, eventNames: ['Andrew', 'Iniki'], costs: [48.1, 5.5] },
        { year: 1993, eventNames: [], costs: [0] },
        { year: 1994, eventNames: ['TS Alberto'], costs: [1.7] },
        { year: 1995, eventNames: ['Marilyn', 'Opal'], costs: [3.4, 7.6] },
        { year: 1996, eventNames: ['Fran'], costs: [8] },
        { year: 1997, eventNames: [], costs: [0] },
        { year: 1998, eventNames: ['Bonnie', 'Georges'], costs: [1.5, 9.1] },
        { year: 1999, eventNames: ['Floyd'], costs: [9.7] },
        { year: 2000, eventNames: [], costs: [0] },
        { year: 2001, eventNames: ['TS Allison'], costs: [11.9] },
        { year: 2002, eventNames: ['Lili'], costs: [1.5] },
        { year: 2003, eventNames: ['Isabel'], costs: [7.4] },
        { year: 2004, eventNames: ['Charley', 'Frances', 'Ivan','Jeanne'], costs: [21.3, 13, 27.3, 10] },
        { year: 2005, eventNames: ['Dennis', 'Katrina', 'Rita', 'Wilma'], costs: [3.2, 161.3, 23.9, 24.5] },
        { year: 2006, eventNames: [], costs: [0] },
        { year: 2007, eventNames: [], costs: [0] },
        { year: 2008, eventNames: ['Dolly', 'Gustav', 'Ike'], costs: [1.5, 7, 34.8] },
        { year: 2009, eventNames: [], costs: [0] },
        { year: 2010, eventNames: [], costs: [0] },
        { year: 2011, eventNames: ['Irene', 'TS Lee'], costs: [15, 2.8] },
        { year: 2012, eventNames: ['Isaac', 'Sandy'], costs: [3, 70.2] },
        { year: 2013, eventNames: [], costs: [0] },
        { year: 2014, eventNames: [], costs: [0] },
        { year: 2015, eventNames: [], costs: [0] },
        { year: 2016, eventNames: ['Matthew'], costs: [10.4] },
        { year: '2017*', eventNames: ['Harvey', 'Irma', 'Maria'], costs: [200, 0, 0] }
    ];
    $scope.years = [];
    $scope.stormNumber = [];
    $scope.stormCosts = [];

    angular.forEach($scope.data, function(value, index){
        //Push Each Year
        $scope.years.push(value.year);
        //Push Total Number of Storms
        $scope.stormNumber.push(value.eventNames.length);
        //Find Total Based on Costs Array
        $scope.total = value.costs.reduce((x, y) => x + y);
        $scope.stormCosts.push($scope.total);
    });

    Highcharts.chart('costs', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Billion Dollar Storms By Year'
        },
        colors: ['#7C9BA8', '#153959'],
        xAxis: [{
            categories: $scope.years,
            crosshair: true
        }],
        yAxis: [{
            labels: {
                format: '${value} B',
                style: {
                    color: '#153959'
                }
            },
            title: {
                text: 'Costs (In Billions)',
                style: {
                    color: '#153959'
                }
            }
        }, {
            title: {
                text: 'Number of Storms',
                style: {
                    color: '#556A73'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#556A73'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true,
            formatter: function () {
                var points = this.points;
                var pointsLength = points.length;
                var tooltipMarkup = pointsLength ? '<span style="font-size: 10px">' + points[0].key + '</span><br/>' : '';
                $scope.year = this.x;
                $scope.storms = points[0];
                $scope.costs = points[1];
                $scope.stormsList = [];

                angular.forEach($scope.data, function(value){
                    if($scope.year == value.year){
                        $scope.stormsList.push(value.eventNames);
                    }
                });

                tooltipMarkup += '<span style="color:' +$scope.storms.series.color + '">\u25CF</span> ' + $scope.storms.series.name + ': <b>' + $scope.storms.y  + '</b><br/>';
                tooltipMarkup += '<span style="color:' + $scope.costs.series.color + '">\u25CF</span> ' + $scope.costs.series.name + ': <b> $' + $scope.costs.y  + ' B</b><br/>';

                if( $scope.stormsList[0].length > 1 ){
                    tooltipMarkup += 'Storms:<br />';
                    angular.forEach($scope.stormsList[0], function(value){
                        tooltipMarkup += value + '<br />';
                    });
                }
                else if( $scope.stormsList[0].length == 1  ){
                    tooltipMarkup += 'Storm:<br />';
                    tooltipMarkup += $scope.stormsList[0];
                }

                return tooltipMarkup;
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true
        },
        series: [{
            name: 'Total Storms',
            type: 'column',
            yAxis: 1,
            data: $scope.stormNumber

        }, {
            name: 'Total Costs',
            type: 'spline',
            data: $scope.stormCosts,
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' B'
            }
        }]
    });
 }]);

app.controller('namedStormCtrlD3', ['$scope', function ($scope) {

    $scope.namedStormsByYear = [
        { year: 2008, total: 16, major: 5 },
        { year: 2009, total: 9, major: 2 },
        { year: 2010, total: 19, major: 5 },
        { year: 2011, total: 19, major: 4 },
        { year: 2012, total: 19, major: 2 },
        { year: 2013, total: 14, major: 0 },
        { year: 2014, total: 8, major: 2 },
        { year: 2015, total: 11, major: 2 },
        { year: 2016, total: 15, major: 4 },
        { year: 2017, total: 17, major: 6 }
    ];

    $scope.years = [];
    $scope.seriesData = [{
        name: 'Major Storms',
        data: [ ]
    }, {
        name: 'Total Storms',
        data: [ ]
    }];

    angular.forEach($scope.namedStormsByYear, function(value, index){
        $scope.years.push(value.year);
        $scope.seriesData[0].data.push(value.major);
        $scope.seriesData[1].data.push(value.total);
    });


}]);
