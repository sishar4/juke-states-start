'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: './allArtists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('listOneArtist', {
    url: '/artists/:id',
    templateUrl: './oneArtist.html',
    resolve: {
      artist: function(ArtistFactory) {
        return ArtistFactory.fetchById('56eb34f5e9f5b4c278fa7a3a');
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('listOneArtist.albums', {
    url: '/albums',
    templateUrl: '/oneArtistAlbums.html'
  })
  .state('listOneArtist.songs', {
    url: '/songs',
    templateUrl: '/oneArtistSongs.html'
  });
});
