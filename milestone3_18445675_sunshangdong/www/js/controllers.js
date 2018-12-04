angular.module('app.controllers', [])

    .controller('highlightedCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {
            $http.get("http://localhost:1337/")
                .then(function (response) {
                    $scope.feeds = response.data;
                });

        }])

    .controller('organizersCtrl', ['$scope', '$stateParams', '$http',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {

            // $http.get("http://localhost:1337/person/organizer/:organizer")
            //     .then(function (response) {
            //         $scope.feeds = response.data;
            //         console.log($scope.feed);
            //     });


        }])

    .controller('venueCtrl', ['$scope', '$stateParams', 'Venues',
        function ($scope, $stateParams, Venues) {

            $scope.venues = Venues.getVenues();

        }])

    .controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup', 'User',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup, User) {

            $scope.data = {};

            $scope.login = function () {

                $http.post("http://localhost:1337/user/appLogin", $scope.data)
                    .then(function (response) {


                        User.setuser(response.data);
                        // A confirm dialog
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Welcome back!',
                            template: 'Go back to previous page?'
                        });

                        confirmPopup.then(function (res) {
                            if (res) {
                                $ionicHistory.goBack();
                            } else {
                                console.log('granted');
                            }
                        });

                    }, function (response) {

                        var alertPopup = $ionicPopup.alert({
                            title: response.data,
                            template: 'Login failed. Please try again.'
                        });
                    });

            }

        }])

    .controller('eventsCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {

            $http.post("http://localhost:1337/person/organizer/" + $stateParams.organizer)
                .then(function (response) {

                    $scope.feeds = response.data;
                });

        }])

    .controller('events2Ctrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http) {
console.log("venue"+$stateParams.venue);
            $http.post("http://localhost:1337/person/venue/" + $stateParams.venue)
                .then(function (response) {
                    console.log(response.data);
                    $scope.events = response.data;
                });



        }])

    .controller('detailsCtrl', ['$scope', '$stateParams', '$http','$ionicPopup','User',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $http,$ionicPopup,User) {
            
            var id = $stateParams.id;
            $http.get("http://localhost:1337/person/detail/" + id)
                .then(function (response) {
                    $scope.feed = response.data;
                });

                $scope.register = function () {
                    var confirm = $ionicPopup.confirm({
                        title: 'Register this event?',
                    });
                    confirm.then(function (res) {
                        if (res) {
                            var user = User.getuser();
                            console.log(JSON.stringify(user));
                            $http.post("http://localhost:1337/person/appregister/" + $stateParams.id + "/" + user.id)
                                .then(function (response) {
                                    // if (response.data == 'noquota') {
                                    //     $ionicPopup.alert({
                                    //         template: 'No quota!'
                                    //     });
                                    // } else {
                                        console.log(response.data);
                                        $ionicPopup.alert({
                                            template: 'Registered Sucessfully!'
                                        });
                                    // }
                                });
                        }
                    })
                }




        }])

    .controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {
            
            var map = L.map('map').setView([22.337827, 114.181962], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([22.341072, 114.179645]).addTo(map)
                .bindPopup('AC Hall');

        }])




    .controller('accountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('registerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
