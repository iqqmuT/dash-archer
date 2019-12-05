# AUTO GENERATED FILE - DO NOT EDIT

dashArcherElement <- function(children=NULL, id=NULL, relations=NULL) {
    
    props <- list(children=children, id=id, relations=relations)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashArcherElement',
        namespace = 'dash_archer',
        propNames = c('children', 'id', 'relations'),
        package = 'dashArcher'
        )

    structure(component, class = c('dash_component', 'list'))
}
