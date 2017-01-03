'use strict';

/* Directives */

var hospitalDirectives = angular.module('hospitalDirectives', []);
hospitalDirectives.directive('hospitalLeftMenu',function() {
    var controller = ['$scope',function ($scope) {



    }];


    return {
        scope: {
            menus: '='
        },
        controller: controller,
        templateUrl: 'views/directives/hospital-left-menu.html',
        link: function(scope, elem, attrs) {
            //scope.menuConfig = function(menu)
            //{
            //    angular.forEach(scope.settingsMenus,function(value,index){
            //        scope.settingsMenus[index].status = "";
            //        if ( scope.settingsMenus[index].name == menu.name)
            //        {
            //            scope.settingsMenus[index].status = "active";
            //        }
            //    })
            //}

        }

    };
});
hospitalDirectives.directive('hospitalFormWizard',function($location) {
    var controller = ['$scope',function ($scope) {



    }];


    return {
        scope: {
            wizards: '='
        },
        controller: controller,
        templateUrl: 'views/directives/hospital-form-wizard.html',
        link: function(scope, elem, attrs) {

            var locationArray = $location.path().split('/');

            var currentTab = locationArray[locationArray.length - 1];
            scope.previous = "";
            scope.percentage = 0;
            angular.forEach(scope.wizards,function(wizard,wizardIndex){
                scope.wizards[wizardIndex].status = '';
                if (wizard.alias == currentTab)
                {
                    scope.wizards[wizardIndex].status = 'active';
                    scope.percentage = (wizardIndex)/scope.wizards.length*100;
                    if ( wizardIndex-1>=0 )
                    {
                        scope.previous = scope.wizards[wizardIndex-1].alias
                    }else{
                        scope.previous = scope.wizards[0].alias
                    }

                    if ( wizardIndex+1<scope.wizards.length )
                    {
                        scope.next = scope.wizards[wizardIndex+1].alias
                    } else{
                        scope.next = scope.wizards[scope.wizards.length-1].alias
                    }

                }
            });

            scope.togglePatientForm = function(indexTab)
            {

                angular.forEach(scope.wizards,function(wizard,wizardIndex){
                    scope.wizards[wizardIndex].status = '';
                    if (wizardIndex == indexTab)
                    {
                        scope.wizards[wizardIndex].status = 'active';
                    }
                });
            }



        }

    };
});
hospitalDirectives.directive('hospitalContextMenu',function($location) {
    var controller = ['$scope',function ($scope) {



    }];


    return {
        scope: {
            currentPosition: '='
        },
        controller: controller,
        templateUrl: 'views/directives/hospital-context-menu.html',
        link: function(scope, elem, attrs) {

        }
    };
});

hospitalDirectives.directive('hospitalTwosidedMultiselect',function($location) {
    var controller = ['$scope',function ($scope) {



    }];


    return {
        scope: {
            data: '='
        },
        controller: controller,
        templateUrl: 'views/directives/hospital-twosided-multiselect.html',
        link: function(scope, elem, attrs) {
            scope.availableAuthorities = scope.data;
            scope.selectedAuthorities = [];


            scope.modelAvalableAuthorities = [];
            scope.modelSelectedAuthorities = [];

            function storeSelectedToLocalStorage(){
                localStorage.setItem('selectedRoles',JSON.stringify(scope.modelSelectedAuthorities));
            }

            scope.doubleClickAvailableAuthority = function(index)
            {

                scope.selectedAuthorities.push(scope.availableAuthorities[index]);
                scope.modelAvalableAuthorities.splice(index,1);
                scope.availableAuthorities.splice(index,1);
                storeSelectedToLocalStorage();

            }

            scope.doubleClickSelectedAuthority = function(index)
            {

                scope.availableAuthorities.push(scope.selectedAuthorities[index]);
                scope.modelSelectedAuthorities.splice(index,1);
                scope.selectedAuthorities.splice(index,1);
                storeSelectedToLocalStorage();


            }

            scope.shiftAllToTheRight = function()
            {

                if ( scope.availableAuthorities.length>0 )
                {
                    scope.selectedAuthorities = scope.availableAuthorities;
                    scope.modelSelectedAuthorities = scope.availableAuthorities;
                    scope.availableAuthorities = [];
                    storeSelectedToLocalStorage();
                }



            }

            scope.shiftAllToTheLeft = function()
            {

                if ( scope.selectedAuthorities.length>0 )
                {
                    scope.availableAuthorities = scope.selectedAuthorities;
                    scope.modelAvalableAuthorities = scope.selectedAuthorities;
                    scope.selectedAuthorities = [];
                    storeSelectedToLocalStorage();
                }



            }

            scope.moveOneRight = function(selected){

                var tobeMoved = eval('('+selected+')');
                console.log(scope.availableAuthorities.indexOf(tobeMoved));
                //scope.selectedAuthorities.push(scope.availableAuthorities[index]);
                //scope.modelAvalableAuthorities.splice(index,1);
                //scope.availableAuthorities.splice(index,1);
                storeSelectedToLocalStorage();
            }



        }
    };
});
