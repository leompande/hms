/* global angular */

'use strict';

/* Controllers */
var hospitalControllers = angular.module('hospitalControllers', [])
	.controller('MenuController',['$scope','$window','$location',function($scope,$window,$location
	){
          var menu = this;
			menu.menus = [
				{name:'Home',alias:'home',url:'#/home',state:'active'},
				{name:'Reception',alias:'reception',url:'#/reception/reception-patient-registration',state:''},
				{name:'Laboratory',alias:'laboratory',url:'#/laboratory/laboratory-assigned-patients',state:''},
				{name:'Doctor',alias:'doctor',url:'#doctor/doctor-assigned-patients',state:''},
				{name:'Cashier',alias:'cashier',url:'#/cashier/cashier-patients-list',state:''},
				{name:'Pharmacy',alias:'pharmacy',url:'#/pharmacy/pharmacy-prescriptions-list',state:''},
				{name:'Report',alias:'report',url:'#/report',state:''}
			];

			menu.settings = {state:''};

			menu.changeState = function(path){

				angular.forEach(menu.menus,function(menuItem,menuIndex){
					menu.menus[menuIndex].state = "";
					menu.settings.state = "";
					if (path.indexOf(menu.menus[menuIndex].alias)>=0)
					{
						menu.menus[menuIndex].state = "active";
					}

					if ( path.indexOf('settings')>=0 )
					{
						menu.settings.state = "active";
					}
				})
			}
			menu.changeState($location.path());

		  return menu;
	}])
	.controller('ReceptionController',['$scope','$cookieStore','$location',function($scope,$cookieStore,$location)
	{
		var reception = this;
		reception.menus = [
			{name:'Patients Registration',template:'views/partials/patient-registration-form.html',alias:'patient-registration',url:'#/reception/reception-patient-registration/basic-information',state:'active',icon:'fa fa-edit'},
			{name:'Patients Search',template:'views/partials/patient-search.html',alias:'patient-search',url:'#/reception/reception-patient-search',state:'',icon:'fa fa-search'},
			{name:'Patients List',template:'views/partials/patient-list.html',alias:'patient-list',url:'#/reception/reception-patient-list',state:'',icon:'fa fa-list'},
		];

		reception.templateUrl = reception.menus[0].template;
		reception.changeState = function(path){
			angular.forEach(reception.menus,function(menuItem,menuIndex){
				reception.menus[menuIndex].state = "";
				if (path.indexOf(reception.menus[menuIndex].alias)>=0)
				{
					reception.menus[menuIndex].state = "active";
					reception.templateUrl = reception.menus[menuIndex].template;
				}
			})
		}
		reception.changeState($location.path());



		reception.patients = [];

		reception.wizard  = [
			{name:'Basic Information',alias:'basic-information',status:'active',templateUrl:'views/forms/patient-basic-information.html'}  ,
			{name:'Address',alias:'address',status:'',templateUrl:'views/forms/patient-address-information.html'}  ,
			{name:'Employment',alias:'employment',status:'',templateUrl:'views/forms/patient-employment-information.html'}  ,
			{name:'Insurance Information',alias:'insurance-information',status:'',templateUrl:'views/forms/patient-insurance-information.html'}  ,
			{name:'Emergency Contact',alias:'emergency-contact',status:'',templateUrl:'views/forms/patient-emergency-contact.html'}
		];



		return reception;
	}])
	.controller('DoctorController',['$scope','$cookieStore','$location',function($scope,$cookieStore,$location)
	{
		var doctor = this;
		doctor.menus = [
			{name:'Assigned Patients',template:'views/partials/doctor-assigned-patients.html',alias:'doctor-assigned-patients',url:'#/doctor/doctor-assigned-patients',state:'active',icon:'fa fa-users'},
			{name:'Patients Search',template:'views/partials/patient-search.html',alias:'doctor-patient-search',url:'#/doctor/doctor-patient-search',state:'',icon:'fa fa-search'},
			{name:'Lab Results',template:'views/partials/doctor-lab-results.html',alias:'doctor-lab-results',url:'#/doctor/doctor-lab-results',state:'',icon:'fa fa-flask'},
		];

		doctor.templateUrl = doctor.menus[0].template;
		doctor.changeState = function(path){
			angular.forEach(doctor.menus,function(menuItem,menuIndex){
				doctor.menus[menuIndex].state = "";
				if (path.indexOf(doctor.menus[menuIndex].alias)>=0)
				{
					doctor.menus[menuIndex].state = "active";
					doctor.templateUrl = doctor.menus[menuIndex].template;
				}
			})
		}
		doctor.changeState($location.path());

		doctor.patients = [];

		return doctor;
	}])
	.controller('LaboratoryController',['$scope','$cookieStore','$location',function($scope,$cookieStore,$location)
	{
		var laboratory = this;
		laboratory.menus = [
			{name:'Assigned Patients',template:'views/partials/laboratory-assigned-patients.html',alias:'laboratory-assigned-patients',url:'#/laboratory/laboratory-assigned-patients',state:'active',icon:'fa fa-users'},
			{name:'Patients Search',template:'views/partials/patient-search.html',alias:'laboratory-patient-search',url:'#/laboratory/laboratory-patient-search',state:'',icon:'fa fa-search'},
			];

		laboratory.templateUrl = laboratory.menus[0].template;
		laboratory.changeState = function(path){
			angular.forEach(laboratory.menus,function(menuItem,menuIndex){
				laboratory.menus[menuIndex].state = "";
				if (path.indexOf(laboratory.menus[menuIndex].alias)>=0)
				{
					laboratory.menus[menuIndex].state = "active";
					laboratory.templateUrl = laboratory.menus[menuIndex].template;
				}
			})
		}

		laboratory.changeState($location.path());

		laboratory.patients = [];

		return laboratory;
	}])
	.controller('CashierController',['$scope','$cookieStore','$location',function($scope,$cookieStore,$location)
	{
		var cashier = this;
		cashier.menus = [
			{name:'Assigned Patients',template:'views/partials/cashier-patients-list.html',alias:'cashier-patients-list',url:'#/cashier/cashier-patients-list',state:'active',icon:'fa fa-users'},
			{name:'Patients Search',template:'views/partials/patient-search.html',alias:'cashier-patient-search',url:'#/cashier/cashier-patient-search',state:'',icon:'fa fa-search'},
			];

		cashier.templateUrl = cashier.menus[0].template;
		cashier.changeState = function(path){
			angular.forEach(cashier.menus,function(menuItem,menuIndex){
				cashier.menus[menuIndex].state = "";
				if (path.indexOf(cashier.menus[menuIndex].alias)>=0)
				{
					cashier.menus[menuIndex].state = "active";
					cashier.templateUrl = cashier.menus[menuIndex].template;
				}
			})
		}

		cashier.changeState($location.path());

		cashier.patients = [];

		return cashier;
	}])
	.controller('PharmacyController',['$scope','$cookieStore','$location',function($scope,$cookieStore,$location)
	{
		var pharmacy = this;
		pharmacy.menus = [
			{name:'Assigned Prescriptions',template:'views/partials/pharmacy-prescriptions-list.html',alias:'pharmacy-prescriptions-list',url:'#/pharmacy/pharmacy-prescriptions-list',state:'active',icon:'fa fa-users'},
			{name:'Patients Search',template:'views/partials/patient-search.html',alias:'pharmacy-patient-search',url:'#/pharmacy/pharmacy-patient-search',state:'',icon:'fa fa-search'},
			{name:'Stock',template:'views/partials/pharmacy-stock.html',alias:'pharmacy-stock',url:'#/pharmacy/pharmacy-stock',state:'',icon:'fa fa-cubes'},
			];

		pharmacy.templateUrl = pharmacy.menus[0].template;
		pharmacy.changeState = function(path){
			angular.forEach(pharmacy.menus,function(menuItem,menuIndex){
				pharmacy.menus[menuIndex].state = "";
				if (path.indexOf(pharmacy.menus[menuIndex].alias)>=0)
				{
					pharmacy.menus[menuIndex].state = "active";
					pharmacy.templateUrl = pharmacy.menus[menuIndex].template;
				}
			})
		}

		pharmacy.changeState($location.path());

		pharmacy.patients = [];

		return pharmacy;
	}])
	.controller('ReportController',['$scope','$cookieStore','$location',function($scope,$cookieStore,$location)
	{
		var report = this;
		report.menus = [
			{name:'Patients Reports',template:'views/partials/report-patients-reports.html',alias:'report-patients-reports',url:'#/report/report-patients-reports',state:'active',icon:'fa fa-users'},
			{name:'Pharmacy Reports',template:'views/partials/report-pharmacy-reports.html',alias:'report-pharmac-reports',url:'#/report/report-pharmac-reports',state:'',icon:'fa fa-medkit'},
			{name:'Staff Reports',template:'views/partials/report-staff-reports.html',alias:'report-staff-reports',url:'#/report/report-staff-reports',state:'',icon:'fa fa-user-md'},
			{name:'Laboratory Reports',template:'views/partials/report-laboratory-reports.html',alias:'report-laboratory-reports',url:'#/report/report-laboratory-reports',state:'',icon:'fa fa-flask'},
			{name:'Cashier Reports',template:'views/partials/report-cashier-reports.html',alias:'report-cash-reports',url:'#/report/report-cash-reports',state:'',icon:'fa fa-money'},
			{name:'Stock Reports',template:'views/partials/report-stock-reports.html',alias:'report-stock-reports',url:'#/report/report-stock-reports',state:'',icon:'fa fa-cubes'},
		];

		report.templateUrl = report.menus[0].template;
		report.changeState = function(path){
			angular.forEach(report.menus,function(menuItem,menuIndex){
				report.menus[menuIndex].state = "";
				if (path.indexOf(report.menus[menuIndex].alias)>=0)
				{
					report.menus[menuIndex].state = "active";
					report.templateUrl = report.menus[menuIndex].template;
				}
			})
		}

		report.changeState($location.path());

		report.patients = [];

		return report;
	}])
	.controller('SettingsController',['$scope','$cookieStore','$location','authorityManager','roleManager','utilityService',function($scope,$cookieStore,$location,authorityManager,roleManager,utilityService)
	{
		var settings = this;
		settings.currentState = "";
		settings.menus = [
			{name:'System Settings',template:'views/partials/settings-system-setting.html',alias:'settings-system-setting',url:'#/settings/settings-system-setting',state:'active',icon:'fa fa-cog'},
			{name:'User Settings',template:'views/partials/settings-user-setting.html',alias:'settings-user-setting',url:'#/settings/settings-user-setting',state:'',icon:'fa fa-cogs'},
			{name:'User Group',template:'views/partials/settings-user-group.html',alias:'settings-user-group',url:'#/settings/settings-user-group',state:'',icon:'fa fa-users'},
			{name:'User Role',template:'views/partials/settings-user-role.html',alias:'settings-user-role',url:'#/settings/settings-user-role',state:'',icon:'fa fa-id-card-o'},
			];

		settings.authorities = [];

		settings.templateUrl = settings.menus[0].template;
		settings.changeState = function(path){
			angular.forEach(settings.menus,function(menuItem,menuIndex){
				settings.menus[menuIndex].state = "";
				if (path.indexOf(settings.menus[menuIndex].alias)>=0)
				{
					settings.menus[menuIndex].state = "active";
					settings.templateUrl = settings.menus[menuIndex].template;
					settings.currentState = settings.menus[menuIndex].alias;

				}
			})
		}
		settings.changeState($location.path());


		// checking if user role menu is clicked
		settings.loadUserRoles = false;
		settings.loadUserAuthorities = false;

		if ( settings.currentState == 'settings-user-role' )
		{

			authorityManager.getAuthorities().then(function(data){
				settings.authorities = data.data.data;
				settings.loadUserAuthorities = true;
			});

			roleManager.getRoles().then(function(data){
				settings.roles = data.data.data;
				settings.loadUserRoles = true;
			});

			// checking for subroute conditioning
			var linkAction = utilityService.getMenuAction($location.path());

			if ( linkAction == 'add-user-role' )
			{
				settings.roleObject = {};
				settings.templateUrl = 'views/forms/'+linkAction+'.html';

				settings.createRole = function(roleObject)
				{
					var selected = eval('('+localStorage.getItem('selectedRoles')+')');

					settings.roleObject['selectedRoles'] = selected;

					console.log(settings.roleObject);
				}

			}



		}


		if ( settings.currentState == 'settings-user-group' )
		{



			// checking for subroute conditioning
			var linkAction = utilityService.getMenuAction($location.path());



			if ( linkAction == 'add-user-group' )
			{
				settings.groupObject = {};
				settings.templateUrl = 'views/forms/'+linkAction+'.html';
				console.log(linkAction);
				settings.createRole = function(groupObject)
				{
					//var selected = eval('('+localStorage.getItem('selectedRoles')+')');
					//
					//settings.roleObject['selectedRoles'] = selected;
					//
					//console.log(settings.roleObject);
				}

			}


		}



		if ( settings.currentState == 'settings-user-setting' )
		{



			// checking for subroute conditioning
			var linkAction = utilityService.getMenuAction($location.path());



			if ( linkAction == 'add-user' )
			{
				settings.groupObject = {};
				settings.templateUrl = 'views/forms/'+linkAction+'.html';
				console.log(linkAction);
				settings.createRole = function(groupObject)
				{
					//var selected = eval('('+localStorage.getItem('selectedRoles')+')');
					//
					//settings.roleObject['selectedRoles'] = selected;
					//
					//console.log(settings.roleObject);
				}

			}


		}


		settings.positioning = {x:0,y:0};
		settings.popUpContextMenu = function(ev){
			settings.positioning = utilityService.getPosition(ev);
		}


		settings.patients = [];

		return settings;
	}])
	.controller('MainController',['$scope','$cookieStore',function($scope,$cookieStore)
	{

	}]);


