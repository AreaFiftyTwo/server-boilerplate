const router = require('express').Router();

router.use((req, res, next) => {
  const err = new Error('Oops! Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
