import * as React from 'react';

const MainLayout: React.FunctionComponent = (props) => (
    <div>
        <h1>Main</h1>
        {props.children}
    </div>
);
export default MainLayout;
