define([
  'react',
  'jsx!components/compTop/list'
],function(React,List)
{
    var CompTop = React.createClass({
      render: function() {
        return (
          <div id="top_part_api">
            <div id="img_api"></div>
            <List model = {this.props.model} />
          </div>
        );
      }
    });
   return CompTop;
});
