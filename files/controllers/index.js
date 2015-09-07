module.exports = function(skelly, req, res) {
  var viewFile = "index.html";

  var data = {
    
  };

  skelly.render(req, res, viewFile, data);
};