import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addRating } from '../../store/actions'

class List extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        rating: ''
                }
        }

        handleChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                });
        };

        addRating = (id) => {
                this.props.addRating(id, this.state.rating);

                this.setState({
                        rating: ''
                });
        };

        render() {
                return (
                        <div>
                                <h1>{this.props.friend.name}</h1>
                                <p>{this.props.friend.age}</p>
                                <p>{this.props.friend.email}</p>
                                {this.props.friend.messages.map(message =>
                                        <div className="ratings">
                                                <p>{message.message}</p>
                                        </div>)}
                                <button onClick={() => this.addRating(this.props.friend.id)} >Add</button>
                                <input value={this.state.rating}
                                onChange={this.handleChange}
                                name="rating" />
                                <Link to="/protected">Back</Link>
                        </div>
                );
        }
}

export default connect(null, { addRating })(List);