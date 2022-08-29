import React from 'react';
import { useState } from 'react';
import notes from '../../quotes.json';
import Body from './Body';

const Note = ({ button }) => {
	const [index, setIndex] = useState(0);

	const random = Math.floor(Math.random() * notes.length);
	const randomNote = () => {
		setIndex(random);
	};

	return (
		<div>
			<div className="note-main">
				<p className="text"> {notes[index].quote}</p>
				<h2>{notes[index].author}</h2>
				<button className="button" onClick={randomNote} button={button}>
					next
				</button>
				<Body />
			</div>
		</div>
	);
};

export default Note;
