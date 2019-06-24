import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addRating } from '../../store/actions'
import '../../App.css'
import uuid from 'uuid';

const StyledDiv = styled.div`

.ratings {
        display: flex;     
}

.rating-pic {
        width: 10%;
        height: 4rem;
        border-radius: 50%
}
`;

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
                        <StyledDiv>
                                <div className="">
                                <h1>{this.props.techItem.title}</h1>
                                <p>{this.props.techItem.type}</p>
                                <p>{this.props.techItem.description}</p>
                                </div>
                                {this.props.techItem.messages.map(message =>
                                        <div
                                         key={uuid()}
                                         className="ratings">
                                                <img 
                                                src={message.img}
                                                 alt={this.props.id}
                                                 className="rating-pic" />
                                                <p>{message.message}</p>
                                        </div>)}
                                <button onClick={() => this.addRating(this.props.techItem.id)} >Add</button>
                                <input value={this.state.rating}
                                onChange={this.handleChange}
                                name="rating" />
                                <Link to="/protected">Back</Link>
                        </StyledDiv>
                );
        }
}

export default connect(null, { addRating })(List);