module.exports = function () {
    const $ = require('../../_config.js')

    $.updateFile('bower.json', {
        name: this.config.get('project'),
        private: true,

        dependencies: {
        }
    })
}