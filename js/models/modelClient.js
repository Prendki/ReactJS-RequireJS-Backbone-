define(['underscore','backbone'],function (_,Backbone)
{
  var Client = Backbone.Model.extend(
  {
    defaults:
    {
      name : 'Imie',
      lastName : 'Nazwisko',
      adres : 'Adres'
    }
  });
  return Client;
});
