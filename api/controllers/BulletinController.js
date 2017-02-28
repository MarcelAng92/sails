/**
 * BulletinController
 *
 * @description :: Server-side logic for managing bulletins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Bulletin.query('SELECT * FROM Bulletin WHERE is_deleted = 0 ORDER BY id DESC', ['title', 'content'], function(err, result) {
      res.render('bulletin', {
        bulletin: result
      });
    });
  },
  insert: function(req, res) {
    Bulletin.create(req.params.all()).exec(function(err, result) {
      console.log('Insert ID : ' + result.id);
      
      res.redirect('/bulletin/index');
    });
  },
  delete: function(req, res) {
    var params = req.params.all();

    if (params.hard) {
      Bulletin.destroy({id: params.id}).exec(function(err, result) {
        console.log('Delete ID : ' + result[0].id);

        res.redirect('/bulletin/index');
      });
    } else {
      Bulletin.update({id: params.id}, {is_deleted: '1'}).exec(function(err, result) {
        console.log('Update ID : ' + result[0].id);
        
        res.redirect('/bulletin/index');
      });
    }
  }
};

