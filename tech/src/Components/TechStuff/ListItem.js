import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addRating } from '../../store/actions'
import '../../App.css'
import uuid from 'uuid';
import StripeCheckout from 'react-stripe-checkout';

const StyledDiv = styled.div`

.article {
        display: flex;
        width:100%;
        justify-content: space-around;

        img {
        width: 50%;      
        }
        
        p {
                font-size: 2rem;
                font-weight: bold;
        }
}

.ratings {
        display: flex;
        margin: 1rem;
        justify-content: space-around;
}

.rating-pic {
        width: 10%;
        height: 4rem;
        border-radius: 50%
}

.checked {
  color: orange;
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
                e.preventDefault();

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

        handleToken(token, adresses) {
                console.log({ token, adresses })
        };

        render() {
                return (
                        <StyledDiv>
                                <div className="article">

                                        <img src={this.props.techItem.imgURL}
                                                alt={this.props.model} />

                                        <div className="text">
                                                <h1>Owner: {this.props.techItem.owner}</h1>
                                                <h1>Title: {this.props.techItem.title}</h1>
                                                <p>Type: {this.props.techItem.type}</p>
                                                <p>Price: {this.props.techItem.price}</p>
                                                <p>Brand: {this.props.techItem.brand}</p>
                                                <p>Model: {this.props.techItem.model}</p>
                                                <p>Renter: {this.props.techItem.renter}</p>
                                                <StripeCheckout
                                                stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa'
                                                token={this.handleToken}
                                                billingAddress
                                                shippingAddress
                                                amount={this.props.techItem.price * 100}
                                                name={this.props.techItem.title}
                                                />
                                        </div>
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
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                        </div>)}
                                <button onClick={() =>
                                        this.addRating(this.props.techItem.id)} >
                                        Add
                                                </button>
                                <input
                                        value={this.state.rating}
                                        onChange={this.handleChange}
                                        name="rating" />
                                <Link to="/protected">Back</Link>
                        </StyledDiv>
                );
        }
}

export default connect(null, { addRating })(List);