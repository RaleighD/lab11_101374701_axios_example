import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div>
                <h2>Person List</h2>
                <ul>
                    {this.state.persons.map(person => (
                        <li key={person.login.uuid}>
                            {person.name.first} {person.name.last}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
