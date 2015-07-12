define([
  'react',
],function(React)
{
   var BotNavi = React.createClass({
      getInitialState: function() {
        return {inputOn : false,buttonVal : "+",inputVal :""};
      },
      resetVal : function(e)
      {
        e.target.value= '';
      },
      getData : function(e) {
        var ENTER = 13;
        if( e.keyCode == ENTER ) {
        this.props.prp.newItem(e.target.value);
         console.log(e.target.value);
         this.resetVal(e);
        }
      },
      eventInput : function() {
        if(!this.state.inputOn)
        {
          this.addInput();
        }
        else
        {
          this.delInput();
        }
      },
      addInput: function() {
        this.setState({inputOn:true,buttonVal : "-"})
      },
      delInput : function()
      {
       this.setState({inputOn:false,buttonVal : "+"})
      },
      render: function() {
        if(this.state.inputOn)
        {
         input = <input onBlur = {this.resetVal} onKeyDown = {this.getData} type='text' className = 'module_input' placeholder="Type" />
        }
        else {input = ""}
        render = <div className = 'module_navi'>
          <div className = 'module_name'>{this.props.field}</div>
          <div className = 'module_separator' >|</div>
          {input}
          <button onClick = {this.eventInput}>
            {this.state.buttonVal}
          </button>
        </div>
        return(render);
      }
    });
   return BotNavi;
});
