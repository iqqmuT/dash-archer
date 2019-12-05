% Auto-generated: do not edit by hand
\name{dashArcherElement}

\alias{dashArcherElement}

\title{DashArcherElement component}

\description{
DashArcherElement component is a wrapper for ArcherElement component from react-archer module. See usage: https://github.com/pierpo/react-archer
}

\usage{
dashArcherElement(children=NULL, id=NULL, relations=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. }

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{relations}{List of lists containing elements 'targetid', 'targetanchor', 'sourceanchor', 'label', 'style'.
those elements have the following types:
  - targetid (character; optional)
  - targetanchor (a value equal to: 'top', 'bottom', 'left', 'right'; optional)
  - sourceanchor (a value equal to: 'top', 'bottom', 'left', 'right'; optional)
  - label (a list of or a singular dash component, string or number; optional)
  - style (optional): . style has the following type: lists containing elements 'arrowlength', 'arrowthickness', 'nocurves', 'strokecolor', 'strokewidth', 'strokedasharray'.
those elements have the following types:
  - arrowlength (numeric; optional)
  - arrowthickness (numeric; optional)
  - nocurves (logical; optional)
  - strokecolor (character; optional)
  - strokewidth (numeric; optional)
  - strokedasharray (numeric; optional)s. The relations specify where arrows are drawn.}
}
