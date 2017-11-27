var app = angular.module('angularApp', []);

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

    console.log('test');

}]);

