const controllers = require('../controllers/controller.js');
const router = require('express').Router();


router.route("/hello").get(controllers.hello);
router.route("/hello/:name").get(controllers.hello_name);
router.route("/enter_order").post(controllers.enter_order);
router.route("/get_orders_length").get(controllers.get_orders_length);

module.exports = router;