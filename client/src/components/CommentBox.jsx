var React = require('react');
var CommentForm = require('./CommentForm.jsx');
var CommentList = require('./CommentList.jsx');

var sampleData = [{id: 1, author: "Rick (͡ ͡° ͜ つ ͡͡°)", text: "Cool."}, {id: 2, author: "Val (☞ﾟ∀ﾟ)☞", text: "THIS GUY"}, {id: 3, author: "Tony (ノಠ益ಠ)ノ彡┻━┻", text: "The fire alarm will commence in 1 minute"}];

var CommentBox = React.createClass({

  getInitialState: function() {
    return { data: sampleData }
  },

  handleCommentSubmit: function(comment) {
    comment.id = Date.now();

    var newComments = this.state.data.concat([comment]);

    this.setState({data: newComments});
  },

  render: function() {
    return (
      <div className="CommentBox">
      <h2>add a comment ʕ•ᴥ•ʔ</h2>

        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList data={this.state.data}/>
      </div>
    )
  }
});

module.exports = CommentBox;