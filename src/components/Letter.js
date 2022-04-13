import React from 'react';
import '../styles/letter.css';

const Letter = () => {
  return (
	<div className="grid-input flex h-screen justify-center items-center">
		<input className=" border-4 border-black border-color: rgb(0, 0, 0)" type="text" maxLength="1" />
	</div>
  );
};

export default Letter;
