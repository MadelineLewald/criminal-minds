const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  this.name = null;
  this.conviction = null;
  this.sentence = null;
  this.image = null;

  const controller = this;

  this.createJailbird = function(){
    $http({
      method: 'POST',
      url: '/jailbirds',
      data: {
        name: this.name,
        conviction: this.conviction,
        sentence: this.sentence,
        image: this.image
      }
    }).then(
      function(response){
        controller.name = null;
        controller.conviction = null;
        controller.sentence = null;
        controller.image = null;
        controller.getJailbirds();
      },
      function(error){
        console.log(error);
      }
    )
  }

  this.deleteJailbird = function(jailbird){
    $http({
      method: 'DELETE',
      url: '/jailbirds/' + jailbird._id
    }).then(
      function(){
        controller.getJailbirds();
      },
      function(error){

      }
    )
  }

  this.editJailbird = function(jailbird){
    $http({
      method: 'PUT',
      url: '/jailbirds/' + jailbird._id,
      data: {
        name: this.updatedName,
        conviction: this.updatedConviction,
        sentence: this.updatedSentence,
        image: this.updatedImage
      }
    }).then(
      function(response){
        controller.getJailbirds();
      },
      function(error){
        console.log(error);
      }
    )
  }
}]);
