'use strict';
juke
.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    template: '' +
      '<div ng-show="showMe">' +
        '<h3>Albums</h3>' +
        '<div class="row">' +
          '<div ng-repeat="album in albums" class="col-xs-4">' +
            '<a class="thumbnail" ui-sref="listOneAlbum({id: album._id})" >' +
                '<img ng-src="{{ album.imageUrl }}">' +
                '<div class="caption">' +
                  '<h5>' +
                    '<span>{{ album.name }}</span>' +
                  '</h5>' +
                  '<small>{{ album.songs.length }} songs</small>' +
                '</div>' +
              '</a>' +
          '</div>' +
        '</div>' +
      '</div>',
      controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('listOneAlbum', {
    url: '/:id',
    template: '' +
      '<div class="album" ng-show="showMe">' +
          '<p>' +
            '<h3>{{ album.name }}</h3>' +
            '<img ng-src="{{ album.imageUrl }}" class="img-thumbnail">' +
          '</p>' +
          '<table class="table">' +
            '<thead>' +
              '<tr>' +
                '<th></th>' +
                '<th>Name</th>' +
                '<th>Artists</th>' +
                '<th>Genres</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' +
              '<tr ng-repeat="song in album.songs" ng-class="{active: song === getCurrentSong() }">' +
                '<td>' +
                  '<button class="btn btn-default btn-xs" ng-click="toggle(song)">' +
                    '<span class="glyphicon" ng-class="{ \'glyphicon-pause\': isPlaying(song), \'glyphicon-play\': !isPlaying(song) }"></span>' +
                  '</button>' +
                '</td>' +
                '<td>{{ song.name }}</td>' +
                '<td><span ng-repeat="artist in song.artists">{{ artist.name }}{{ $last ? "" : ", " }}</span></td>' +
                '<td>{{ song.genres.join(", ") }}</td>' +
              '</tr>' +
            '</tbody>' +
          '</table>' +
        '</div>',
    controller: 'AlbumCtrl'
  });
});