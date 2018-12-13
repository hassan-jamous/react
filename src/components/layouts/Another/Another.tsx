import * as React from 'react';

interface Props {
    mainComponent: JSX.Element;
    anotherComponent: JSX.Element;
}

const AnotherLayout: React.FunctionComponent<Props> = (props) => (
    <div>
        <h1>Another Layout</h1>
        {props.mainComponent}
        <h1>Another Section</h1>
        {props.anotherComponent}
    </div>
);
export default AnotherLayout;
