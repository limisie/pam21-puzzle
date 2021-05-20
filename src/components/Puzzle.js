import React from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';

const Puzzle = () => {
    return (

        <JigsawPuzzle imageSrc='https://picsum.photos/600'
            rows={2}
            columns={2}
            onSolved={() => alert('Solved!')}
        />

    );
};

export default Puzzle;
