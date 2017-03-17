'use strict';

angular.module('macamenApp')
  .service('validacionService',function(){

    this.showErrors = function (formulario){
	  for(var errorField in formulario.$error){
	    for(var j = 0; j < formulario.$error[errorField].length; j++){
	      formulario.$error[errorField][j].$dirty = true;
	      formulario.$error[errorField][j].$invalid = true;
	    }
	  }
	};

	this.clearErrors = function (formulario){
	  formulario.$setPristine();
	};

});

