// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'textAngular','btford.socket-io', 'satellizer'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'loginController'
      })

      .state('app.blogs', {
        url: '/blogs',
        views: {
          'menuContent': {
            templateUrl: 'templates/blogs.html',
            controller: 'blogsController'
          }
        }
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
          }
        }
      })


      .state('app.specificblog', {
        url: '/blogs/:blogId',
        views: {
          'menuContent': {
            templateUrl: 'templates/specificBlog.html',
            controller: 'specificBlogController'
          }
        }
      })

      .state('app.treks', {
        url: '/treks',
        views: {
          'menuContent': {
            templateUrl: 'templates/treks.html',
            controller: 'treksController'
          }
        }
      })
      .state('app.pasttreks', {
        url: '/pasttreks',
        views: {
          'menuContent': {
            templateUrl: 'templates/pastTreks.html',
            controller: 'pastTreksController'
          }
        }
      })

      .state('app.specifictrek', {
        url: '/treks/:blogId',
        views: {
          'menuContent': {
            templateUrl: 'templates/specificBlog.html',
            controller: 'specificBlogController'
          }
        }
      })

      .state('app.chats', {
        url: '/chats',
        views: {
          'menuContent': {
            templateUrl: 'templates/chats.html',
            controller: 'chatsController'
          }
        }
      })
      .state('app.specificChat', {
        url: '/chats/trip/:tripId',
        views: {
          'menuContent': {
            templateUrl: 'templates/specificChat.html',
            controller: 'specificChatController'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');

    // Google
    $authProvider.google({
      clientId: '930983681431-o1gr6t3ubvjefoi45ehijih08p6g95ma',
      scope: ['profile', 'email'],
      url: 'http://trekkingtoads.com/auth/google',
    });

  });
