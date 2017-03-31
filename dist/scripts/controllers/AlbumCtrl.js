(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = album.albumPicasso;
    };

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();