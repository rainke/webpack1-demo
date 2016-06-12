import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <h2>hello react</h2>
            </div>
        )
    }
}
let root = document.getElementById('app');
ReactDOM.render(<App />,root);