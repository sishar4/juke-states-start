'use strict';
juke
.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: './allAlbums.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('listOneAlbum', {
    url: '/albums/:id',
    templateUrl: './oneAlbum.html',
    resolve: {
      album: function(AlbumFactory) {
        return AlbumFactory.fetchById('56eb34f6e9f5b4c278fa7a3b');
      }
    },
    controller: 'AlbumCtrl'
  });
});