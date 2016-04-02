'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, $log, $rootScope, artists) {


  $scope.$on('viewSwap', function (event, data) {
    if (data.name !== 'allArtists') return $scope.showMe = false;
    $scope.showMe = true;
  });

  $scope.viewOneArtist = function (artist) {
    // $rootScope.$broadcast('viewSwap', { name: 'oneArtist', id: artist._id });
  };

  if (artists.length > 0) {
    $scope.artists = artists;
  }
});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, $log, PlayerFactory, $rootScope, $state, $stateParams, artist) {

  $scope.showMe = true;
  // console.log($stateParams.id);
  // if ($stateParams.id.length > 0) {
  //   ArtistFactory.fetchById($stateParams.id)
  //   .then(function (artist) {
  //     console.log(artist);
  //     $scope.artist = artist;
  //   })
  //   .catch($log.error);
  // }
  $scope.artist = artist;
  
  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.viewOneAlbum = function (album) {
    // $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  };

});
