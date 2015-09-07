module.exports = function(skelly, req, res) {
  var viewFile = "404.html";

  var data = {
    path : req.requrl.path
  };

  skelly.render(req, res, viewFile, data);
};