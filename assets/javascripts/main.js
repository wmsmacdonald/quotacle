var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

var SearchInput = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    console.log('change');
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
      />
    );
  }
});

ReactDOM.render(
  <SearchInput />,
  document.getElementById('example')
);

serverConnection = new WebSocket('ws://localhost:3333');
serverConnection.onmessage = gotMessageFromServer;

serverConnection.onopen = function sendMessage() {
  serverConnection.send(JSON.stringify({ controller: 'quotes', method: 'getMany' }));
};

function gotMessageFromServer(message) {
  var data = JSON.parse(message.data);

  if (data.err) {
    throw data.err;
  }
  console.log(data);

  console.log(data.success);

}