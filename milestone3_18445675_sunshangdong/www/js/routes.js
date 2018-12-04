angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.highlighted'
      2) Using $state.go programatically:
        $state.go('tabsController.highlighted');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/highlighted
      /page1/tab4/highlighted
  */
      .state('tabsController.highlighted', {
        url: '/highlighted',
        views: {
          'tab1': {
            templateUrl: 'templates/highlighted.html',
            controller: 'highlightedCtrl'
          },
          'tab4': {
            templateUrl: 'templates/highlighted.html',
            controller: 'highlightedCtrl'
          }
        }
      })

      .state('tabsController.organizers', {
        url: '/organizers',
        views: {
          'tab4': {
            templateUrl: 'templates/organizers.html',
            controller: 'organizersCtrl'
          }
        }
      })

      .state('tabsController.venue', {
        url: '/venue',
        views: {
          'tab2': {
            templateUrl: 'templates/venue.html',
            controller: 'venueCtrl'
          }
        }
      })

      .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('tabsController.login', {
        url: '/login',
        views: {
          'tab3': {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.events'
          2) Using $state.go programatically:
            $state.go('tabsController.events');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab4/events
          /page1/tab2/events
      */
      // 这个是organizer的event2
      .state('tabsController.events', {
        url: '/events/:organizer',
        views: {
          'tab4': {
            templateUrl: 'templates/events.html',
            controller: 'eventsCtrl'
          },
          'tab2': {
            templateUrl: 'templates/events.html',
            controller: 'eventsCtrl'
          }
        }
      })
      // 这个是venue的event2
      .state('tabsController.venueevents', {
        url: '/events/:venue',
        views: {
          'tab4': {
            templateUrl: 'templates/venueevents.html',
            controller: 'events2Ctrl'
          },
          'tab2': {
            templateUrl: 'templates/venueevents.html',
            controller: 'events2Ctrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.details'
          2) Using $state.go programatically:
            $state.go('tabsController.details');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab1/details
          /page1/tab4/details
          /page1/tab2/details
      */
      .state('tabsController.details', {
        url: '/details/:id',
        views: {
          'tab1': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          },
          'tab4': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          },
          'tab2': {
            templateUrl: 'templates/details.html',
            controller: 'detailsCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.map'
          2) Using $state.go programatically:
            $state.go('tabsController.map');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab1/map
          /page1/tab4/map
          /page1/tab2/map
      */
      .state('tabsController.map', {
        url: '/map',
        views: {
          'tab1': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          },
          'tab4': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          },
          'tab2': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          }
        }
      })

      .state('Account', {
        url: '/Account',
        templateUrl: 'templates/Account.html',
        controller: 'accountCtrl'
      })

    $urlRouterProvider.otherwise('/page1/tab1/highlighted')


  });