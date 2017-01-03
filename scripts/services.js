/* global angular */

'use strict';

/* Services */

var hospitalServices = angular.module('hospitalServices', [ 'ngResource' ])
		.value('API_BASE_URL', 'http://localhost/api/public/index.php/api/')
		.value('projectName','Hospital Management System');

hospitalServices.factory('utilityService',function(){
	var utility = {
	getPosition:function(el) {
		console.log(el.clientX);
		var clientX = el.clientX;
		var clientY = el.clientY;

		var screenX =  el.pageX;
		var screenY =  el.pageY;

		return {
			x: screenX,
			y: screenY
		};
	},
		getMenuAction:function(url){
			var arrayFromUrl = url.split('/');
			return arrayFromUrl[arrayFromUrl.length-1];
		}
	}
	return utility;
})

hospitalServices.factory('dataBaseLinkLayer',function($http, API_BASE_URL, $q){

	var linkLayer = {
			list:function(url){
				var deferred = $q.defer();
				$http.get(API_BASE_URL + url).then(function (result) {
					deferred.resolve(result);
				}, function (error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			add:function(url,data){
				var defer = $q.defer();

				$http.post(DHIS2URL + url, data).then(function (result) {
					defer.resolve(result);
				}, function (error) {
					defer.reject(error);
				});
				return defer.promise;
			},
			update:function(url,data){
				var defer = $q.defer();

				$http.put(DHIS2URL + url, data).then(function (result) {
					defer.resolve(result);
				}, function (error) {
					defer.reject(error);
				});
				return defer.promise;
			},
			delete:function(url){
				var deferred = $q.defer();
				$http.delete(API_BASE_URL +url).then(function (result) {
					deferred.resolve(result);
				}, function (error) {
					deferred.reject(error);
				});
				return deferred.promise;
			}
	}

	return linkLayer;
})

hospitalServices.factory('authorityManager',['dataBaseLinkLayer',function(dataBaseLinkLayer){

	var linkLayer = {
		url:'authorities',
		getAuthorities:function(){
			return dataBaseLinkLayer.list(this.url);
		},
		add:function(url,data){
			var defer = $q.defer();

			$http.post(DHIS2URL + url, data).then(function (result) {
				defer.resolve(result);
			}, function (error) {
				defer.reject(error);
			});
			return defer.promise;
		},
		update:function(url,data){
			var defer = $q.defer();

			$http.put(DHIS2URL + url, data).then(function (result) {
				defer.resolve(result);
			}, function (error) {
				defer.reject(error);
			});
			return defer.promise;
		},
		delete:function(url){
			var deferred = $q.defer();
			$http.delete(API_BASE_URL +url).then(function (result) {
				deferred.resolve(result);
			}, function (error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	return linkLayer;
}]);


hospitalServices.factory('roleManager',['dataBaseLinkLayer',function(dataBaseLinkLayer){

	var linkLayer = {
		url:'roles',
		getRoles:function(){
			return dataBaseLinkLayer.list(this.url);
		},
		add:function(url,data){
			var defer = $q.defer();

			$http.post(DHIS2URL + url, data).then(function (result) {
				defer.resolve(result);
			}, function (error) {
				defer.reject(error);
			});
			return defer.promise;
		},
		update:function(url,data){
			var defer = $q.defer();

			$http.put(DHIS2URL + url, data).then(function (result) {
				defer.resolve(result);
			}, function (error) {
				defer.reject(error);
			});
			return defer.promise;
		},
		delete:function(url){
			var deferred = $q.defer();
			$http.delete(API_BASE_URL +url).then(function (result) {
				deferred.resolve(result);
			}, function (error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	return linkLayer;
}]);

