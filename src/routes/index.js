const coursesRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');
function route(app) {
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;