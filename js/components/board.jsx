'use strict';

var React = require('react');
var Reflux = require('reflux');
var GraphStore = require('../stores/graph.js');
var GraphActions = require('../actions/graph.js');

var Board = React.createClass({
    mixins: [Reflux.connect(GraphStore, 'graph')],
    render: function() {
        var fooNodes = this.state.graph.nodes.map(v => (<div key={v} onClick={this.onClick}> node nr { v }</div>)); // TODO: got no key here, or move logic here or move whole thing to a new component
        return (<div id="board">{ fooNodes }</div>);
    },
    onClick: function(e) {
        console.log(e.dispatchMarker); // TODO: not a real key, but anyway..
        GraphActions.renameNode(e.dispatchMarker);
    }
});

module.exports = Board;
