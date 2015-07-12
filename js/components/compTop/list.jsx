define([
  'react',
  'jsx!components/compTop/listObject'
],function(React,ListObject)
{
    var List = React.createClass({
      render: function() {
        return (
          <div id="float_content">
            <ListObject model = {this.props.model} field="name" />
            <ListObject model = {this.props.model} field = "lastName" />
            <ListObject model = {this.props.model} field = "adres" />
          </div>
        );
      }
    });
   return List;
});
