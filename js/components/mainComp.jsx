define([
'react',
'jsx!components/compTop/compTop',
'jsx!components/compBot/compBot'
],function(React,CompTop,CompBot)
{
  var Card = React.createClass({
    render : function() {
     return (
     <div id = 'api_block' >
       <CompTop model = {this.props.model} />
       <CompBot />
     </div>
      );
    }
  });
  return Card;
});
