define(function(require) {
   var widget = require("widgets/js/widget");

   var MG = require("/nbextensions/metricsgraphics/metricsgraphics.js");

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

           this.model.on('change:title', this._redraw, this);
           this.model.on('change:description', this._redraw, this);

           this.model.on('change:x_accessor', this._redraw, this);
           this.model.on('change:y_accessor', this._redraw, this);

           this.model.on('change:markers', this._redraw, this);


           this._redraw();
       },

       _redraw: function() {
          var data = this.model.get('data');

          var width = this.model.get('width');
          var height = this.model.get('height');

          this.$frame.width(width);
          this.$frame.height(height);

          MG.data_graphic({
            title: "UFO Sightings",
            description: "Yearly UFO sightings from the year 1945 to 2010.",
            data: data,
            width: width,
            height: height,
            target: this.$frame,
            x_accessor: 'year',
            y_accessor: 'sightings',
            markers: [{'year': 1964, 'label': '"The Creeping Terror" released'}]
          });
       }

   });

   return {
       MetricsGraphicsView: MetricsGraphicsView
   };
});
