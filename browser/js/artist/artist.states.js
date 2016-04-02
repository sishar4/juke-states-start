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
      artist: function(ArtistFactory, $state, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
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
