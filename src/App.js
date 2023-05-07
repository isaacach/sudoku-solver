import { useState } from "react";
import './App.css'

const App = () => {
    const [grid, setGrid] = useState(
        [0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 
         0, 0, 0, 0, 0, 0, 0, 0, 0, 
         0, 0, 0, 0, 0, 0, 0, 0, 0, 
         0, 0, 0, 0, 0, 0, 0, 0, 0, 
         0, 0, 0, 0, 0, 0, 0, 0, 0]);
    

    const setGridValue = (index, value) => {
        const newGrid = [...grid];
        newGrid[index] = value;
        setGrid(newGrid);
    }

    const solveSudoku = async () => {
        const response = await fetch('http://0.0.0.0:9090/http://127.0.0.1:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sudoku: [
                    '9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254',
                ]
            })
        });
        const json = await response.json();
        console.log(json);
    }

    return (
        <div className="wrapper">
            <h1>Sudoku Puzzle Solver</h1>
            <div className="grid-wrapper">
                {grid.map((el, i) => {
                    return (
                        <input 
                            inputMode="numeric"
                            className = "cell" 
                            key = {i}                      
                            value = {el || 0}
                            onChange={(e) => setGridValue(i, e.target.value)}f
                        />   
                    )
                })}
            </div>
        <button onClick={solveSudoku}>Solve</button>
        </div>
    )
    
}

export default App;