import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addRating } from '../../store/actions'
import '../../App.css'
import StripeCheckout from 'react-stripe-checkout';

const StyledDiv = styled.div`

.article {
display: flex;
width:100%;
justify-content: space-around;

@media(max-width:750px) {
flex-direction: column;
}

img {
width: 100%;
height: 50rem; 

@media(max-width:750px) {
height: 40rem;
}
}        
}

p {
font-size: 1.5rem;
font-weight: bold;
}

.text {
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100%;
}

.ratings {
display: flex;
justify-content: space-around;
align-items: center;
border: .5rem solid #f7ff56;

@media(max-width:650px) {
flex-direction: column;
}
}

.rating-pic {
width: 20%;
height: 9rem;
border-radius: 50%;

@media(max-width:1100px) {
width : 20%;
} 

@media(max-width:650px) {
width: 35%;
}

@media(max-width:650px) {
width: 45%;
}
}

.message {
@media(max-width:650px) {
order: 2;
}
}

.checked {
color: orange;
} 

span {
font-size: 1.5rem;
}

.star {
@media(max-width:650px) {
display: flex;
order: 1;
margin: 1rem;
}
}

.adder {
height: 3rem;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 1.5rem 0 5rem 0;;
}

button {
background-color: white;
border-radius: 20%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
font-weight: bold;
font-size: 1.5rem;
border: .1rem solid #3498db;
color: black;
transition: 0.8s;
cursor: pointer;
}

button:hover {
color: red;
}

Input {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 25%;
height: 4rem;
text-align: center;
font-size: 1.5rem;
}

.buy {
width: 50%;
height: 5rem;
}

a {
text-decoration: none;
}

`;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      ratingStar: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = (event) => {
    event.preventDefault();

    if (this.state.ratingStar !== '' && this.state.rating !== '') {

      this.props.addRating(this.props.techItem.id, this.state.rating, this.state.ratingStar);

      this.setState({
        rating: '',
        ratingStar: '',
      });
    }

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
              className="buy"
              stripeKey='pk_test_Grqfk8uqKNCJYpAQS2t89UB700wHJklrMa'
              token={this.handleToken}
              billingAddress
              shippingAddress
              amount={this.props.techItem.price * 100}
              name={this.props.techItem.title}
            />
          </div>
        </div>
        {this.props.techItem.messages.map((message, index) =>
          <div
            key={index}
            className="ratings">
            <img
              src={message.img}
              alt={message.star5}
              className="rating-pic" />
            <p
              className="message">
              {message.message}</p>
            <div className="star">
              <span className={message.star1}></span>
              <span className={message.star2}></span>
              <span className={message.star3}></span>
              <span className={message.star4}></span>
              <span className={message.star5}></span>
            </div>
          </div>
        )}
        <div
          className="adder">
          <form onSubmit={this.submit}>
            <button><Link to="/protected">Back</Link></button>
            <input
              type="text"
              value={this.state.rating}
              onChange={this.handleChange}
              placeholder="message"
              name="rating" />
            <input
              max="5"
              min="1"
              type="number"
              value={this.state.ratingStar}
              onChange={this.handleChange}
              placeholder="stars 1 - 5"
              name="ratingStar" />
            <button
              type="submit" >
              Add
                                                </button>
          </form>
        </div>
      </StyledDiv>
    );
  }
}

export default connect(null, { addRating })(List);