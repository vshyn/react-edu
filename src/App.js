import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

class App extends Component {
    state = {
        isChecked: false,
        isEditMode: false,
        title: 'Caption',
        tempTitle: '',
        info: 'additional text',
        tempInfo: ''
    }

    editHandler = () => {
        this.setState({
            isEditMode: !this.state.isEditMode,
            isChecked: false
        });
    };

    undoHandler = () => {
        this.setState({
            isEditMode: !this.state.isEditMode,
            title: this.state.tempTitle || this.state.title,
            info: this.state.tempInfo || this.state.info,
        });
    }

    saveHandler = () => {
        this.setState({
            isEditMode: !this.state.isEditMode,
            tempTitle: '',
            tempInfo: ''
        });
    }

    changeStyleHandler = () => {
        this.setState({isChecked: !this.state.isChecked})
    };

    changeTitleHandle = (event) => {
        if (this.state.tempTitle === '') {
            this.setState({tempTitle: this.state.title})
        }
        this.setState({title: event.target.value});
    }

    changeInfoHandle = (event) => {
        if (this.state.tempInfo === '') {
            this.setState({tempInfo: this.state.info})
        }
        this.setState({info: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <Header title="Header"/>
                <div style={{margin: '1rem'}}>
                    <Card
                        title={this.state.title}
                        info={this.state.info}
                        isChecked={this.state.isChecked}
                        isEditMode={this.state.isEditMode}
                        save={this.saveHandler}
                        undo={this.undoHandler}
                        edit={this.editHandler}
                        check={this.changeStyleHandler}
                        changeTitle={this.changeTitleHandle}
                        changeInfo={this.changeInfoHandle}
                    />
                </div>
            </div>
        );
    }
}

export default App;
