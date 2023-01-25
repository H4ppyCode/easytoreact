import './App.css';

function Welcome(props) {
    return <h1>Bonjour {props.name}</h1>
}

function App() {
    return (

        <div className="App">
            <Welcome name='Pacôme'/>
            <p>Hello</p>
        </div>
    );
}

export default App;
