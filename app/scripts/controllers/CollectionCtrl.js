 (function() {
     function CollectionCtrl() {
         this.albums = [];
     for (var i=0; i < 12; i++) {
         this.albums.push(angular.copy(albumPicasso));
     }
<<<<<<< HEAD
    }
=======
     }
>>>>>>> checkpoint-5-controllers
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();


//update//