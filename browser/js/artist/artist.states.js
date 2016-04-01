'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/albums/artists',
    template: '' +
      '<div>' +
          '<h3>Artists</h3>' +
            '<div class="list-group">' +
              '<div class="list-group-item" ng-repeat="artist in artists">' +
              '<a ui-sref="listOneArtist({id: artist._id})">{{ artist.name }}</a>' +
            '</div>' +
          '</div>' +
        '</div>',
      controller: 'ArtistsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('listOneArtist', {
    url: '/artists/:id',
    template: '' +
      '<div>' +
            '<h3>{{ artist.name }}</h3>' +
            '<h3>Albums</h3>' +
            '<div class="row">' +
              '<div class="col-xs-4" ng-repeat="album in artist.albums">' +
                '<a class="thumbnail" href="#" ng-click="viewOneAlbum(album)">' +
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
                '<tr ng-repeat="song in artist.songs" ng-class="{active: song === getCurrentSong() }">' +
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
      controller: 'ArtistCtrl'
  });
});
