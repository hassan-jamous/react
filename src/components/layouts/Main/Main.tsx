import * as React from 'react';

interface Props {
    mainComponent: JSX.Element;
}

const MainLayout: React.FunctionComponent<Props> = (props) => (
    <div>
        <h1>Main Layout</h1>
        {props.mainComponent}
    </div>
);
export default MainLayout;
