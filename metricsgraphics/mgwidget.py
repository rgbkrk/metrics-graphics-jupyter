from IPython.html.widgets import DOMWidget
from IPython.utils.traitlets import Int, Unicode, Dict, List

class MetricsGraphicsView(DOMWidget):
    _view_module = Unicode('nbextensions/metricsgraphics/mgwidget', sync=True)
    _view_name = Unicode('MetricsGraphicsView', sync=True)

    title = Unicode(sync=True)
    description = Unicode(sync=True)

    height = Int(600, sync=True)
    width = Int(600, sync=True)

    y_accessor = Unicode(sync=True)
    x_accessor = Unicode(sync=True)

    markers = List(Dict(sync=True), sync=True)

    data = Dict(sync=True)
