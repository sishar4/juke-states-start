'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, album) {

  // if ($stateParams.id.length > 0) {
  //   AlbumFactory.fetchById($stateParams.id)
  //   .then(function (album) {
  //     $scope.album = album;
  //     console.log($scope.album);
  //   })
  //   .catch($log.error);
  // }
  $scope.album = album;
  
  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, albums) {

  $scope.albums = albums;
});
