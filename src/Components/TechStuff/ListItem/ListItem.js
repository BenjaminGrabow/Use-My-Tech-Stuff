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
      startDate: '',
      endDate: '',
      price: '',
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

  calculatePrice = () => {
    var oneDay = 24 * 60 * 60 * 1000;

    var firstDate = new Date(this.state.startDate);

    var secondDate = new Date(this.state.endDate);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

    const daysMultiplyPrice = diffDays * this.props.techItem.price;

    this.setState({
      price: daysMultiplyPrice
    })
  };

  handleToken(token, adresses) {
    console.log({ token, adresses })
  };

  render() {
    return (
      <StyledDiv>
        <img
          src={this.props.techItem.imgURL}
          alt={this.props.model}
          className="pic" />
        <div className="row">
          <div
            className="column">
            <h1>{this.props.techItem.title}</h1>
            {/* <p>Price: {this.props.techItem.price}</p> */}
            <p>{this.props.techItem.description}</p>
            {/* <p>Model: {this.props.techItem.model}</p>
            <p>Renter: {this.props.techItem.renter}</p> */}
            <div
              className='ratingScroll'>
              {this.props.techItem.messages.map((message, index) =>
                <div
                  key={index}
                  className="ratings">
                  <img
                    src={message.img}
                    alt={message.star5}
                    id="rating-pic" />
                  <div className="messageContainer">
                    <p
                      className="message">
                      {message.message}</p>
                  </div>
                  <div className="star">
                    <i className={message.star1}></i>
                    <i className={message.star2}></i>
                    <i className={message.star3}></i>
                    <i className={message.star4}></i>
                    <i className={message.star5}></i>
                  </div>
                </div>
              )}
              <div
                className="adder">
                <form onSubmit={this.submit}>
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
            </div>
          </div>
          <div
            className="columnRight">
            <div className="oneLine">
              <p>{this.props.techItem.price}$ per Day </p>
              <div className="star" >
                <i className={this.props.techItem.ratingForUser[0].star1}></i>
                <i className={this.props.techItem.ratingForUser[0].star2}></i>
                <i className={this.props.techItem.ratingForUser[0].star3}></i>
                <i className={this.props.techItem.ratingForUser[0].star4}></i>
                <i className={this.props.techItem.ratingForUser[0].star5}></i>
              </div>
            </div>
            <div className="oneLine">
              <p>Start Date</p>
              <input type="date" onChange={this.handleChange} name="startDate" value={this.state.startDate} />
            </div>
            <div className="oneLine">
              <p>End Date</p>
              <input type="date" onChange={this.handleChange} name="endDate" value={this.state.endDate} />
            </div>
            <div className="oneLine">
              <p>{this.state.price} $</p>
              <button
               onClick={this.calculatePrice}>Calculate</button>
            </div>
            <div className="payment">
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
        </div>
        <div
          className="adder">
          <button>
            <Link to="/protected">
              <i className="fa fa-backward" />
            </Link>
          </button>
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