import React, { useState } from 'react'
import './style.css';
import Box from './Box'
const board = [[],[],[]]
const Game = () => {
    const [turn, setTurn] = useState('X')
    function changeTurn() {
        // board[row][col] = turn
        setTurn(turn => turn === 'X' ? 'O' : 'X')

        // win()
    }

    // function win(){
    //     for(let i=0; i<board.length; i++){
    //         const row = board[i]
    //         if(row[0] === row[1] && row[1] === row[2] && row[0]){
    //             return true
    //         }
    //     }

    //     for(let i=0; i<board.length; i++){
    //         const el1 = board[0][i]
    //         const el2 = board[1][i]
    //         const el3 = board[2][i]
    //     }
    // }
    function refresh() {
        window.location.reload()
    }



    return (
        <div id="game">
            <div className="row">
                <Box row={0} col={0} turn={turn} changeTurn={changeTurn} />
                <Box row={0} col={1} turn={turn} changeTurn={changeTurn} />
                <Box row={0} col={2} turn={turn} changeTurn={changeTurn} />
            </div>

            <div className="row">
                <Box row={0} col={0} turn={turn} changeTurn={changeTurn} />
                <Box row={0} col={1} turn={turn} changeTurn={changeTurn} />
                <Box row={0} col={2} turn={turn} changeTurn={changeTurn} />
            </div>

            <div className="row">
                <Box row={0} col={0} turn={turn} changeTurn={changeTurn} />
                <Box row={0} col={1} turn={turn} changeTurn={changeTurn} />
                <Box row={0} col={2} turn={turn} changeTurn={changeTurn} />
            </div>
            <br />
            <button onClick={refresh}>Refresh</button>
        </div>
    )
}
export default Game