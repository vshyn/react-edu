import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Card from './card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Caption',
            info: 'additional text',
        };
    }

    saveHandler = (title, info) => {
        this.setState({
            title,
            info,
        });
    };

    render() {
        const { title, info } = this.state;
        return (
            <div className="App">
                <Header title="Header" />
                <div style={{ margin: '1rem' }}>
                    <Card title={title} info={info} onSave={this.saveHandler} />
                </div>
            </div>
        );
    }
}

export default App;
