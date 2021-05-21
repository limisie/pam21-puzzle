import React from 'react';

class SelectMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.levelList = props.levelList;
        this.state = { value: 2 };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        this.props.parentCallback(event.target.value);
        event.preventDefault();
    }

    render() {
        const value = this.props.value;

        return (
            <div>
                <label className="block text-3xl lg:text-sm font-medium text-gray-700 my-2">Poziom</label>
                <select id="level-selector"
                    onChange={this.handleChange}
                    value={value}
                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3  py-2 text-left focus:outline-none focus:ring-1 text-2xl lg:text-sm"
                    name="level">
                    {this.levelList.map(item => {
                        return (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        )
                    })};
            </select>
            </div>
        )
    }
};

export default SelectMenu;