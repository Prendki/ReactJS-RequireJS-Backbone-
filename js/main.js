require.config({
  paths : {
    jquery:"../node_modules/jquery/dist/jquery",
    backbone:"../node_modules/backbone/backbone",
    underscore:[
      "../node_modules/backbone/node_modules/underscore/underscore"
    ],
    react : '../node_modules/react/dist/react',
    JSXTransformer : '../node_modules/react/dist/JSXTransformer',
    jsx : '../node_modules/requirejs-react-jsx/jsx',
    text : '../node_modules/requirejs-text/text'
  },
  jsx : {
    transformOptions : {
      harmony : true
    }
  }
});
require([
    "react",
    "backbone",
    "underscore",
    "models/modelClient",
    "jsx!components/mainComp"
],function(React,Backbone,_,Client, CardClass) {
    var client = new Client();
    var Card = React.createFactory(CardClass);
    React.render(new Card({model:client}), document.getElementById("content"));
 });
