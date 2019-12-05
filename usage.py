import dash_archer
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

root_style = {
    'display': 'flex',
    'justifyContent': 'center',
}

row_style = {
    'margin': '200px 0',
    'display': 'flex',
    'justifyContent': 'space-between',
}

box_style = {
    'padding': '10px',
    'border': '1px solid black',
}

app.layout = html.Div([
    dash_archer.DashArcherContainer(
        [
            html.Div([
                dash_archer.DashArcherElement(
                    [
                        html.Div('Root', style=box_style),
                    ],
                    id='root',
                    relations=[{
                        'targetId': 'element2',
                        'targetAnchor': 'top',
                        'sourceAnchor': 'bottom',
                    }],
                ),
            ], style=root_style),

            html.Div([
                dash_archer.DashArcherElement(
                    [
                        html.Div('Element 2', style=box_style),
                    ],
                    id='element2',
                    relations=[{
                        'targetId': 'element3',
                        'targetAnchor': 'left',
                        'sourceAnchor': 'right',
                        'style': { 'strokeColor': 'blue', 'strokeWidth': 1 },
                        # note: giving html.Div as label does not work
                        'label': 'Arrow 2',
                    }],
                ),

                dash_archer.DashArcherElement(
                    [
                        html.Div('Element 3', style=box_style),
                    ],
                    id='element3',
                ),

                dash_archer.DashArcherElement(
                    [
                        html.Div('Element 4', style=box_style),
                    ],
                    id='element4',
                    relations=[{
                        'targetId': 'root',
                        'targetAnchor': 'right',
                        'sourceAnchor': 'left',
                        'label': 'Arrow 3',
                    }],
                ),
            ], style=row_style),
        ],
        id='container',
        strokeColor='red',
    ),
])


if __name__ == '__main__':
    app.run_server(debug=True)
