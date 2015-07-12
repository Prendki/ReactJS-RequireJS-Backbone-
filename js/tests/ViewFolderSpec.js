define([
  'jquery',
  'backbone',
  'underscore',
  '../views/viewFile'
],function($,backbone,_,ViewFile)
{
  beforeEach(function()
  {
    this.model = new Backbone.Model({
      name:'dokument',
      extension:'txt'
    });
    this.view = new ViewFile({model:this.model});
  });
  describe("Check view", function() {
    it("Tag Name", function() {
      expect(this.view.el.tagName).toEqual("TR");
    });
    it("Model", function() {
      expect(this.view.fileModel.get('name')).toEqual('dokument');
      expect(this.view.fileModel.get('extension')).toEqual('txt');
    });
  });
});
