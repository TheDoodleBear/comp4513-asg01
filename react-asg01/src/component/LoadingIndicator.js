import React from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './LoadingIndicator.css';

const LoadingIndicator = props => {

    return (
        <div className="center-screen">
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading data...
            </Button>
        </div>
    )
}


export default LoadingIndicator;