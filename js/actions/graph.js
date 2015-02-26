'use strict';

var Reflux = require('reflux');
var request = require('superagent');

var GraphActions = Reflux.createActions([
    'addNode',
    'renameNode',
    'setStartNode',
    'setEndNode',
    'removeNode',
    'addEdge',
    'renameEdge',
    'flipEdge',
    'removeEdge'
]);

GraphActions.addNode.preEmit = node => request.post('/node/', {node: node}, function() {});
GraphActions.renameNode.preEmit = (id, name) => request.put('/node/' + id + '/name/', {name: name}, function() {});
GraphActions.setStartNode.preEmit = (id, start) => request.put('/node/' + id + '/start/', {start: start}, function() {});
GraphActions.setEndNode.preEmit = (id, end) => request.put('/node/' + id + '/end/', {end: end}, function() {});
GraphActions.removeNode.preEmit = id => request.remove('/node/' + id + '/', function() {});
GraphActions.addEdge.preEmit = edge => request.post('/edge/', {edge: edge}, function() {});
GraphActions.renameEdge.preEmit = (id, name) => request.put('/edge/' + id + '/name/', {name: name}, function() {});
GraphActions.flipEdge.preEmit = id => request.post('/edge/' + id + '/flip/', function() {});
GraphActions.removeEdge.preEmit = id => request.remove('/edge/' + id + '/', function() {});

module.exports = GraphActions;
