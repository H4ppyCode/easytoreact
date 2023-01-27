import './App.css';
import './index'
function Welcome({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

function Welcomes (){
    return <div>
    <Welcome name="DORO"/>
    <Welcome name="TQT"/>
    </div>
}

function App() {
    return (

        <div className="App">
            <Welcome name='Pacôme'>Bonjour tout le monde</Welcome>
            <p>Hello</p>
            <Welcomes/>
        </div>
    );
}

export default App;
