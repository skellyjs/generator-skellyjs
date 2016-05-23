module.exports = function(skelly, req, res) {
  // the view file in /views
  var viewFile = 'index.html';

  // include the index model
  var Index = skelly.models.index;

  // find any single entry in the index model
  Index.findOne({}, function(err, index) {
    if (err) {
      skelly.log.error(err);
      res.end(err);
    } else {

      // if no entry, just pass a static title
      if (!index) {
        skelly.render(req, res, viewFile, {title:'Hello, my name is Shelby!'});

      // if there's an entry, pass it to use as the title
      } else {
        skelly.render(req, res, viewFile, index);
      }
    }
  });
};