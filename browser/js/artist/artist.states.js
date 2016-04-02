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
  });
});
