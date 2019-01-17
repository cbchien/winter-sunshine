/* eslint-disable no-unused-vars */
const path = require('path');
const paths = require('./../../../paths');
const router = require('express').Router();

router
    .get('/*', (req, res, next) => {
        const routePath = path.join(paths.dist + 'index.html');
        res.sendFile(routePath);
    }
)

module.exports = router;