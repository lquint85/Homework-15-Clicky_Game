import React from 'react';

function Header(props) {
    return <>
            <header>
            <div className="title">Clicky-Game</div>
            <div className="message">{props.message}</div>
            <div className="score">Score {props.score} of {props.total}</div>
            <div className="topscore">TopScore {props.topscore}  {props.score}</div>
            </header>
            <br/>
        </>
  }
  
  export default Header;

  