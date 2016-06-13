import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';

class App extends Component {
    render() {
        return (
            <div>
                <h1>hello react</h1>
                <h2>hello hp</h2>
                <h3>hello gudong</h3>
            </div>
        )
    }
}
let root = document.getElementById('app');
// ReactDOM.render(<App />,root);
ReactDOM.render( <Button />, root );