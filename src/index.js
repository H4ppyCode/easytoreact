import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class WelcomeClass extends React.Component {
    render() {
        return <h1>Bonjour class</h1>
    }
}

class DateClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount() {

        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {

        return <div>
            il est {this.state.date.toLocaleString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: this.props.start}
        this.timer = null

    }


    componentDidMount() {
        this.timer= window.setInterval(this.increment.bind(this), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    increment() {
        this.setState((state, props) => ({n: state.n + props.step}))
        if(this.state.n === 50){
            this.setState(this.state.n = 0)
        }

    }

    render() {
        return <div>{this.state.n}</div>
    }
}
Incrementer.defaultProps = {start: 0 , step: 1}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <WelcomeClass/>
        <DateClass/>
        <Incrementer start={10}/>
        <Incrementer start={10} step={10}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();