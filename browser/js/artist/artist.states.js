'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/albums/artists',
    templateUrl: './allArtists.html',
    controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('listOneArtist', {
    url: '/artists/:id',
    templateUrl: './oneArtist.html',
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
