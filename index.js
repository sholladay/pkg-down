'use strict';

const findDown = require('find-down');

const pkdDown = (cwd) => {
    return findDown('package.json', { cwd });
};

module.exports = pkdDown;
