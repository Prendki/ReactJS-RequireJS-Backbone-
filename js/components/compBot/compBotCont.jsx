define([
  'react',
  'jsx!components/compBot/compBotNavi',
  'jsx!components/compBot/compBotCore'
],function(React,BotNavi,BotCore)
{
    var BotCont  = React.createClass({
      getInitialState: function() {
        return {data: [],item:''};
      },
      newItem: function(newItem) {
        var array = this.state.data.slice();
        array.push(newItem);
        this.setState({data:array});
      },
      render: function() {
        var details = this.state.data.map(function(i){
          return <BotCore data={i} key={i.id}/>;
        });
       return (
             <div className = 'content_both_module'>
               <BotNavi prp={this} field = {this.props.field} />
               {details}
              </div>
        );
      }
    });
   return BotCont;
});
