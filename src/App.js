import React from 'react';
import Puzzle from './components/Puzzle';
import SelectMenu from './components/SelectMenu';
import TailwindContainer from './components/TailwindContainer';

class App extends React.Component {
    constructor() {
        super();
        this.levelList = [{
            value: 2,
            label: 'Łatwy',
        },
        {
            value: 3,
            label: 'Średni',
        },
        {
            value: 5,
            label: 'Trudny',
        },
        ]
        this.state = {
            value: 2
        }
    }

    handleChange = (newValue) => {
        this.setState({ value: newValue })
        console.log(this.state.value)
    }

    render() {
        return (
            <div>
                <TailwindContainer>
                    <Puzzle tiles={this.state.value} />
                    <SelectMenu
                        levelList={this.levelList}
                        parentCallback={this.handleChange}/>
                </TailwindContainer>
            </div>
        )
    };
};

export default App;