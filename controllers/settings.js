// const router = require("express").Router();
// const sequelize = require("../config/connection");
// const { Post, User, Comment, Votes } = require("../models");
// const deleteUserEvent = require('../public/javascript/delete-account');

// // GET /api/users
// router.get("/", (req, res) => {
//   // Access our User model and run .findAll() method)
//   User.findAll({
//     attributes: { exclude: ["password"], include: ["id", "username"] },
//   })
//     .then((dbPostData) => {
//       console.log("User dbPostData");
//       console.log(dbPostData[0].dataValues.id);
      
//       res.render("settings", { loggedIn: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // GET /api/users/1
// router.get("/settings/:id", (req, res) => {
//   User.findOne({
//     attributes: { exclude: ["password"], include: ["id", "username"] },
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbPostData) => {
//       console.log("User dbPostData");
//       console.log(dbPostData[0].dataValues.id);

//       if (dbPostData) {
//         res.render("settings", {
//           loggedIn: true,
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// // router.get('/settings/:id', function(req, res, next) {
// //   var sessionData = req.session;
// //   client.query('SELECT * from users where username = ?', [req.query.username], function(err, rows) {
// //       if(err) throw err;
// //       if (rows.length) {
// //           var user = rows[0]
// //           req.session.username = user.username;
// //           req.session.user_id = user.id
// //           res.render("settings", {
// //             loggedIn: true
// //           })
// //       } else {
// //         res.status(404).end();
// //       }
// //   })
// //   .catch((err) => {
// //     res.status(500).json(err);
// //   });
// // })

// module.exports = router;
