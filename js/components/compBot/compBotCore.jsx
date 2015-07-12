define(['react'],function(React)
{
    var BotCore  = React.createClass({
      unMount : function() {
            this.getDOMNode().remove();
      },
      render: function() {
        return (
                <div className = 'module_content'>
                  <div className = 'element_module'>
                    <div className = 'element_module_name'>
                      {this.props.data}
                    </div>
                    <button onClick = {this.unMount}>x</button>
                  </div>
                </div>
        );
      }
    });
   return BotCore;
});
