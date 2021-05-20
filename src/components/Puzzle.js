import React from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';

const Puzzle = (props) => {
    return (

        <JigsawPuzzle imageSrc='https://picsum.photos/600'
            rows={ props.tiles }
            columns={ props.tiles }
            onSolved={() => alert('Solved!')}
        />

    );
};

export default Puzzle;
