import React from 'react';
import { render } from 'react-dom';

import './styles.scss';

const App = () => {
    return (
        <div>
            <h3>Basic Application</h3>
            <p>This will be updated later!</p>
        </div>
    );
}

render(<App />, document.getElementById('app'));