let funModule = (function(obj) {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        console.log("Gliding on the water");
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
}) ();