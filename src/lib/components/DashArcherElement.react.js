import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ArcherElement} from 'react-archer';

/**
 * DashArcherElement component is a wrapper for ArcherElement component
 * from react-archer module. See usage: https://github.com/pierpo/react-archer
 */
export default class DashArcherElement extends Component {
    render() {
        const {children, id, relations} = this.props;
        return (
            <ArcherElement id={id} relations={relations}>
                {children}
            </ArcherElement>
        );
    }
}

DashArcherElement.defaultProps = {};

// PropTypes from react-archer

const styleShape = {
    arrowLength: PropTypes.number,
    arrowThickness: PropTypes.number,
    noCurves: PropTypes.bool,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.number,
};

const relationShape = {
    targetId: PropTypes.string,
    targetAnchor: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    sourceAnchor: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    label: PropTypes.node,
    style: PropTypes.shape(styleShape),
};

DashArcherElement.propTypes = {
    children: PropTypes.node,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The relations specify where arrows are drawn.
     */
    relations: PropTypes.arrayOf(PropTypes.shape(relationShape)),
};
