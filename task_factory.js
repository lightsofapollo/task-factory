var Factory = require('object-factory');
var uuid = require('uuid');

// internal machine factory
var Machine = new Factory({
  properties: {
  }
});

var Task = new Factory({
  properties: {
    command: null,
    machine: Machine
  },

  onbuild: function(props) {
    props.id = uuid.v1();
  }
});

module.exports = Task;
