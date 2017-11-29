var app = angular.module('angularApp', []);

app.controller('2017stormCtrl', ['$scope', function ($scope){
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
                    long: -40.90,
                    wind: 30
                },
                {
                    time: '04/19/12Z',
                    lat: 31.90,
                    long: -40.90,
                    wind: 30
                }
            ]
        }
    ];

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
        { year: 2017, total: 16, major: 6 }
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

app.controller('mapCtrl', ['$scope', function($scope){

    $scope.apiKey = 'AIzaSyDMFwELhIzYsoRFQbX143HdGA2G4ZKENY4';

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
        { year: 2017, eventNames: ['Harvey', 'Irma', 'Maria'], costs: [0, 0, 0] }
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
        colors: ['#556A73', '#153959'],
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
