import React from 'react';
import StyledDiv from './StyledDiv';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRating } from '../../../store/actions';
import '../../../App.css'
import StripeCheckout from 'react-stripe-checkout';

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

    if (this.state.ratingStar !== '' && this.state.rating !== '' && this.props.userData) {

      this.props.addRating(this.props.techItem.id, this.state.rating, this.state.ratingStar, this.props.userData[0].picture);

      this.setState({
        rating: '',
        ratingStar: '',
      });
    }

    if (this.state.ratingStar !== '' && this.state.rating !== '' && !this.props.userData) {

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
            <button>
              <Link to="/protected">
                <i className="fa fa-backward" />
            </Link>
            </button>
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
              <i
                className="fa fa-plus-circle" />
            </button>
          </form>
        </div>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
};

export default connect(mapStateToProps, { addRating })(List);