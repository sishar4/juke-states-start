'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/js/artist/allArtists.html',
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
    templateUrl: '/js/artist/oneArtist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    },
    controller: 'ArtistCtrl'
  })
  .state('listOneArtist.albums', {
    url: '/albums',
    templateUrl: '/js/artist/oneArtistAlbums.html'
  })
  .state('listOneArtist.songs', {
    url: '/songs',
    templateUrl: '/js/artist/oneArtistSongs.html'
  });
});
