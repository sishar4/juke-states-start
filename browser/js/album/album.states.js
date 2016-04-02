'use strict';
juke
.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: './allAlbums.html',
      controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('listOneAlbum', {
    url: '/:id',
    templateUrl: './oneAlbum.html',
    controller: 'AlbumCtrl'
  });
});