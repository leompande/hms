
'use strict';

/* App Module */

var hospital = angular.module('hospital',
    ['ngRoute',
        'ui.router',
        'ngCookies',
        'ngSanitize',
        'hospitalDirectives',
        'hospitalControllers',
        'hospitalServices',
        'hospitalFilters',
        'mgcrea.ngStrap',
        'ivh.treeview',
        'ngAnimate',
        'datatables',
        'datatables.bootstrap',
        'highcharts-ng',
        'angular-spinkit', 'angularjs-dropdown-multiselect',
        'ngTable','multi-select-tree'])
              
.value('DHIS2URL', '../../..')
.config(function($routeProvider,ivhTreeviewOptionsProvider) {
	ivhTreeviewOptionsProvider.set({
		   defaultSelectedState: false,
		   validate: false,
		   twistieCollapsedTpl: '<span class="glyphicon glyphicon-plus"></span>',
		   twistieExpandedTpl: '<span class="glyphicon glyphicon-minus"></span>',
		   twistieLeafTpl: '&#9679;'
		 });
	$routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    }).when('/reception', {
            templateUrl: 'views/reception.html'
    }).when('/reception/reception-patient-registration', {
        templateUrl: 'views/reception.html'
    }).when('/reception/reception-patient-registration/:currentWizard', {
        templateUrl: 'views/reception.html'
    }).when('/reception/reception-patient-search', {
        templateUrl: 'views/reception.html'
    }).when('/reception/reception-patient-list', {
        templateUrl: 'views/reception.html'
    }).when('/laboratory', {
            templateUrl: 'views/laboratory.html'
    }).when('/laboratory/laboratory-assigned-patients', {
            templateUrl: 'views/laboratory.html'
    }).when('/laboratory/laboratory-patient-search', {
            templateUrl: 'views/laboratory.html'
    }).when('/doctor', {
            templateUrl: 'views/doctor.html'
    }).when('/doctor/doctor-assigned-patients', {
            templateUrl: 'views/doctor.html'
    }).when('/doctor/doctor-patient-search', {
            templateUrl: 'views/doctor.html'
    }).when('/doctor/doctor-lab-results', {
            templateUrl: 'views/doctor.html'
    }).when('/cashier', {
        templateUrl: 'views/cashier.html'
    }).when('/cashier/cashier-patients-list', {
        templateUrl: 'views/cashier.html'
    }).when('/cashier/cashier-patient-search', {
        templateUrl: 'views/cashier.html'
    }).when('/pharmacy', {
        templateUrl: 'views/pharmacy.html'
    }).when('/pharmacy/pharmacy-prescriptions-list', {
        templateUrl: 'views/pharmacy.html'
    }).when('/pharmacy/pharmacy-patient-search', {
        templateUrl: 'views/pharmacy.html'
    }).when('/pharmacy/pharmacy-stock', {
        templateUrl: 'views/pharmacy.html'
    }).when('/report', {
        templateUrl: 'views/report.html'
    }).when('/report/report-patients-reports', {
        templateUrl: 'views/report.html'
    }).when('/report/report-pharmac-reports', {
        templateUrl: 'views/report.html'
    }).when('/report/report-staff-reports', {
        templateUrl: 'views/report.html'
    }).when('/report/report-laboratory-reports', {
        templateUrl: 'views/report.html'
    }).when('/report/report-cash-reports', {
        templateUrl: 'views/report.html'
    }).when('/report/report-stock-reports', {
        templateUrl: 'views/report.html'
    }).when('/settings', {
        templateUrl: 'views/settings.html'
    }).when('/settings', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-system-setting', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-user-setting', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-user-setting/add-user', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-user-group', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-user-group/add-user-group', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-user-role', {
        templateUrl: 'views/settings.html'
    }).when('/settings/settings-user-role/add-user-role', {
        templateUrl: 'views/settings.html'
    }).when('/login', {
            templateUrl: 'views/login.html'
    }).otherwise({
        redirectTo : '/home'
    });

});
