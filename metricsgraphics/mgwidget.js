define(function(require) {
   var widget = require("widgets/js/widget");

   // TODO: Define target

   var MetricsGraphicsModel = widget.WidgetModel.extend({
     initialize: function() {
       this.on('change:data', this._decode, this);
     },

     _decode: function() {
       // noop, reserved for later
     }
   });

   var MetricsGraphicsView = widget.DOMWidgetView.extend({
       render: function() {

           // Create the viewing frame.
           this.$frame = $('<div/>')
               .css({
                   overflow: 'hidden'
               }).appendTo(this.$el);

           this.model.on('change:data', this._redraw, this);

           this.model.on('change:width', this._redraw, this);
           this.model.on('change:height', this._redraw, this);

           this._redraw();
       },

       _redraw: function() {
          var data = this.model.get('data');

          var width = this.model.get('width');
          var height = this.model.get('height');

          this.$frame.width(width);
          this.$frame.height(height);
       }

   });

   return {
       MetricsGraphicsView: MetricsGraphicsView,
       MetricsGraphicsModel: MetricsGraphicsModel
   };
});
