define([
  'react',
  'jsx!components/compBot/compBotCont'
],function(React,BotCont)
{
    var CompBot = React.createClass({
      render: function() {
        return (
        <div id = 'both_part_api' >
            <div id = 'float_both_content'>
            <BotCont field = "Zainteresowania" />
            <BotCont field = "Język" />
            </div>
        </div>
        );
      }
    });
   return CompBot;
});
