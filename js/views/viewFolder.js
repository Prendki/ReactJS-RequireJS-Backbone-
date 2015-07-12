define(
[
  'underscore',
  'backbone',
  'jquery',
  'collections/collectionFiles',
  'views/viewFile',
  'views/viewNavi'
],function(_,Backbone,$,FileCollection,FileView,NaviView){
  var ViewFolder = Backbone.View.extend(
    {
      tagName : 'table',
      events : {
        'click #checkforAll' : 'showAll',
        'click #butDelete' : 'deleteItems',
        'keypress #nameFile' : 'createOnEnter'
      },
      showAll : function(e)
      {
        this.fileCollection.each(function(m){
          var isChecked = e.currentTarget.checked;
          m.set('checked', isChecked);
          $('td input').prop('checked', isChecked);
        });
      },
      createOnEnter : function(e)
      {
        if (e.keyCode == 13 && this.input.val().indexOf('.'))
        {
          var tab_name =this.input.val().split('.');
          this.fileCollection.add({
            'name':tab_name[0] ,
            'extension' : tab_name[1]
          });
          this.input.val('');
          this.render();
        }
      },
      deleteItems : function()
      {
        for (var i = this.fileCollection.length - 1; i >= 0; i--)
        {
          if(this.fileCollection.at(i).get('checked') === true)
          {
            this.fileCollection.at(i).destroy();
          }
        }
        this.render();
      },
      initialize: function()
      {
        this.fileCollection = new FileCollection([
          {name:'dokument', extension:'txt'},
          {name:'image', extension:'jpg'}
        ]);
      },
      render: function()
      {
        this.$el.html('');
        this.$el.append(this.renderNavi());
        this.$el.append(this.renderApi());
        this.input = this.$('#nameFile');
        return this.$el;
      },
      renderNavi: function()
      {
        var naviView= new NaviView();
        return naviView.render();
      },
      renderApi:function()
      {
        var _this = this;
        this.fileCollection.each(function(m)
            {
              _this.$el.append(new FileView({model: m}).render());
            });
        return _this.$el;
      }
    });
  return ViewFolder;
});
