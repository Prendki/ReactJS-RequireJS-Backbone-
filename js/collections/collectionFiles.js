define(['underscore','backbone','models/modelFile'],function(_,Backbone,File)
{
  var FileCollection = Backbone.Collection.extend(
  {
      model: File
  });
  return FileCollection;
});
