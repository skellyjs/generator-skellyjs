module.exports = function(skelly, req, res) {
  // the view file in /views
  var viewFile = "index.html";

  // data that you want to pass into the view
  var Index = require(path.join(skelly.appRoot,skelly.modelsRoot,'index'))(skelly);

  // find any single entry in the database
  Index.findOne({}, function(err, index) {
    if (err) {
      skelly.log.error(err);
      res.end(err);
    } else {

      // if no entry, just pass a static title
      if (!index) {
        skelly.render(req, res, viewFile, {title:"Hello, my name is Shelby!"});

      // if there's an entry, pass it to use as the title
      } else {
        skelly.render(req, res, viewFile, index);
      }
    }
  });
};