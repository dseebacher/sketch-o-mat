'use strict';

var Reflux = require('reflux');
var request = require('superagent');
var GraphActions = require('../actions/graph');

// testdata
var graph = {
    title: 'No Title',
    description: 'no description',
    nodes: [ // TODO: change node structure
        1, 2, 3
    ]
};

var graphStore = Reflux.createStore({
    // listenables: GraphActions,
    init: function() { // TODO: get rid of this block..
        this.listenTo(GraphActions.addNode, this.reload);
        this.listenTo(GraphActions.renameNode, this.reload);
        this.listenTo(GraphActions.setStartNode, this.reload);
        this.listenTo(GraphActions.setEndNode, this.reload);
        this.listenTo(GraphActions.removeNode, this.reload);
        this.listenTo(GraphActions.addEdge, this.reload);
        this.listenTo(GraphActions.renameEdge, this.reload);
        this.listenTo(GraphActions.flipEdge, this.reload);
        this.listenTo(GraphActions.removeEdge, this.reload);
    },
    getInitialState: function() {
        this.graph = graph;
        return this.graph;
    },
    reload: function(id) {
        request.get('/node/' + id + '/', r => this.trigger(r));
    }
});

module.exports = graphStore;
