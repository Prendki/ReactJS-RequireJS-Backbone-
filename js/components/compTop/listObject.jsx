define(['react'],function(React)
{
  var ListObject = React.createClass({
    getInitialState: function() {
      return {toInput: false};
    },
    componentDidUpdate: function(){
      if(this.state.toInput)
        this.refs.focused.getDOMNode().focus();
    },
    toInput : function()
    {
      this.setState({toInput: true})
    },
    toDiv : function()
    {
      this.setState({toInput:false})
    },
    updateValue: function(value) {
     if(value != undefined && value != "")
     {
      this.props.model.set(this.props.field,value)
      this.toDiv();
     }
    },
    handleKeyDown: function(e) {
      var ENTER = 13;
      if( e.keyCode == ENTER ) {
        this.updateValue(e.target.value);
      }
    },
    render: function()
    {
      if(!this.state.toInput)
      {
        render = <div className='data_txt' onClick={this.toInput}>
         {this.props.model.get(this.props.field)}
        </div>
      }
      else
      {
        render = <input onKeyDown={this.handleKeyDown} onBlur={this.toDiv} type='text' ref='focused' placeholder= {this.props.model.get(this.props.field)} />
      }
      return (render);
    }
  });
  return ListObject;
});
