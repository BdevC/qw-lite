import React, { MouseEvent } from 'react';

export default function App() {
  return (
    <Board />
  );
}

interface Props{
  value: string;
}

const Square = ({ text }: { text: string }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Square clicked:', text);
  };
  return <button onClick={handleClick} className='square'>{text}</button>;
};

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square text="1" />
        <Square text="2" />
        <Square text="3" />
      </div>
      <div className="board-row">
        <Square text="4" />
        <Square text="5" />
        <Square text="6" />
      </div>
      <div className="board-row">
        <Square text="7" />
        <Square text="8" />
        <Square text="9" />
      </div>
    </>
  )
}







