define([
  'underscore',
  'backbone',
  'jquery',
  'models/modelNavi',
  'collections/collectionFiles'
],function(_,Backbone,$,Navi,FileCollection){
  var NaviView = Backbone.View.extend({
    tagName: "tr",
    template: _.template(
      "<th>"+
        "<input id='checkforAll' type='checkbox'>"+
      "</th>"+
      "<th>"+
        "<a id='butDelete'>Delete</a>"+
        "<a id='butAdd'>"+
          "<input type='text' id='nameFile'>"+
        "</a>"+
     "</th>"
    ),
    initialize: function(){
      this.naviModel = new Navi();
    },
    render : function(){
      this.$el.html(this.template(this.naviModel.toJSON()));
      return this.$el;
    }
  });
  return NaviView;
});
