import * as React from 'react';

const AnotherLayout: React.FunctionComponent = (props) => (
    <div>
        <h1>Another Layout</h1>
        {props.children}
    </div>
);
export default AnotherLayout;
