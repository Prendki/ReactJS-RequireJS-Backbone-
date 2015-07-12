define(['underscore','backbone','jquery'],function(_,Backbone,$)
{
  var ViewFile = Backbone.View.extend(
  {
    tagName: 'tr',
    template: _.template(
      "<td>"+
      "<input type='checkbox' id='1'>"+
      "</td>"+
      "<td>"+
       "<label for='1'>"+
       "<%=name %>.<strong><%= extension %></strong>"+
      "</td>"
    ),
    initialize: function(option)
    {
      this.fileModel = option.model;
    },
    events :
    {
      'click input' : 'chngState'
    },
    chngState : function()
    {
      var that = this.fileModel;
      that.set('checked',true);
    },
    render: function()
    {
      this.$el.html(this.template(this.fileModel.toJSON()));
      return this.$el;
    },
  });
  return ViewFile;
});
