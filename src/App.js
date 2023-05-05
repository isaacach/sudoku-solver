import { useEffect, useState } from "react";
import SearchIcon from './search.svg';
import './App.css'

const App = () => {
    const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [value, setValue] = useState(0);
    return (
        <div className="wrapper">
            <h1>Sudoku Puzzle Solver</h1>
            <div className="grid-wrapper">
                {grid.map((el) => <input onChange={(e) =>  setValue(e.target.value)} className = "cell" value = { el }></input>)}
        <button>Submit</button>
        </div>
    )
    
}

export default App;