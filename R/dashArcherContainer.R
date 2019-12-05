# AUTO GENERATED FILE - DO NOT EDIT

dashArcherContainer <- function(children=NULL, arrowLength=NULL, arrowThickness=NULL, id=NULL, noCurves=NULL, offset=NULL, strokeColor=NULL, strokeDasharray=NULL, strokeWidth=NULL) {
    
    props <- list(children=children, arrowLength=arrowLength, arrowThickness=arrowThickness, id=id, noCurves=noCurves, offset=offset, strokeColor=strokeColor, strokeDasharray=strokeDasharray, strokeWidth=strokeWidth)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashArcherContainer',
        namespace = 'dash_archer',
        propNames = c('children', 'arrowLength', 'arrowThickness', 'id', 'noCurves', 'offset', 'strokeColor', 'strokeDasharray', 'strokeWidth'),
        package = 'dashArcher'
        )

    structure(component, class = c('dash_component', 'list'))
}
