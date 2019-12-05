import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ArcherContainer} from 'react-archer';

/**
 * DashArcherContainer component is a wrapper for ArcherContainer component
 * from react-archer module. See usage: https://github.com/pierpo/react-archer
 */
export default class DashArcherContainer extends Component {
    render() {
        const {
            arrowLength,
            arrowThickness,
            children,
            id,
            noCurves,
            offset,
            strokeColor,
            strokeDasharray,
            strokeWidth,
        } = this.props;

        return (
            <ArcherContainer
                arrowLength={arrowLength}
                arrowThickness={arrowThickness}
                id={id}
                noCurves={noCurves}
                offset={offset}
                strokeColor={strokeColor}
                strokeDasharray={strokeDasharray}
                strokeWidth={strokeWidth}
            >
                {children}
            </ArcherContainer>
        );
    }
}

DashArcherContainer.defaultProps = {};

DashArcherContainer.propTypes = {
    /**
     * A size in px.
     */
    arrowLength: PropTypes.number,

    /**
     * A size in px.
     */
    arrowThickness: PropTypes.number,
    children: PropTypes.node,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Set this to true if you want angles instead of curves.
     */
    noCurves: PropTypes.bool,

    /**
     * Optional number for space between element and start/end of stroke.
     */
    offset: PropTypes.number,

    /**
     * A color string '#ff0000'.
     */
    strokeColor: PropTypes.string,

    /**
     * Adds dashes to the stroke. It has to be a string representing an array
     * of sizes. See https://www.w3schools.com/graphics/svg_stroking.asp
     */
    strokeDasharray: PropTypes.string,

    /**
     * A size in px.
     */
    strokeWidth: PropTypes.number,
};
