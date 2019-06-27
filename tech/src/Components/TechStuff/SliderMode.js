import React from 'react';
import { connect } from 'react-redux';
import { buy, deleter, add, update, search, back } from '../../store/actions';
import 'react-animated-slider/build/horizontal.css';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Animated } from "react-animated-css";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const StyledDiv = styled.div`

nav {
  display: flex;
  justify-content: space-around;

  @media (max-width:500px) {
flex-direction: column;
}
}

.navLink {
text-decoration: none;


p {
font-size: 2.5rem;
  font-weight: bold;
 transition: .8s;
 color: #bdc3c7;

  &:hover {
color: black;
filter: brightness(150%);
text-decoration: underline;
}
}
}

.functionality {
height: 3rem;
display: flex;
width: 100%;
justify-content: space-around;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
box-shadow: 2rem 2rem 2rem black;
padding: 2rem 0;

@media (max-width:610px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 15rem;

}

.fa {
cursor: pointer;
color: white;
font-size: 4rem;
font-weight: bold;
transition: 0.8s;

@media (max-width:610px) {
font-size: 6;
}

&:hover {
color: black;
}
}
}

.topInput {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 25%;
height: 100%;
text-align: center;
font-size: 1.5rem;

@media (max-width:610px) {
        width: 90%;
        margin: .5rem;
        font-size: 2.5rem
}
}

.slider {
height: 55rem;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

@media (max-width:800px) {
        height: 70rem;
}
}

.techItem {
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: 55rem;

@media (max-width:800px) {
        height: 70rem;
}

h1 {
font-size: 2.5rem;
}

p {
color: black;
font-size: 2.5rem;
margin: 0;
}

span {
font-size: 3;
font-weight: bold;
}
}
 
a {
text-decoration: none;
}
 
 
.off {
display:none;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-250%, -50%);
}

.pictureWrapper {
border: .3rem solid black;
width: 60%;
height: 25rem;
object-fit: cover;

@media (max-width:610px) {
width: 80%;
}

img {
width: 100%;
height: 100%;
box-shadow: 1rem .5rem .5rem black;
}
}

.icons {
display: flex;
width: 100%;
height: 6.5rem;
justify-content: space-around;
margin: 1rem;

@media (max-width:800px) {
flex-direction: column;
height: 20rem;
margin: 1rem;
align-items: center;
}

.buttonIcon {
box-shadow: 1rem .5rem .5rem black;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
font-size: 2rem;
border-radius: 2rem;
width: 25%;
display: flex;
justify-content: center;
align-items: center;
transition: .8s;
border: .3rem solid black;
height: 8rem;

@media (max-width:800px) {
width: 70%;
margin: .2rem;
}

&:hover {
border: .3rem solid white;
color: white;
}
}

.fa {
color: black;
font-size: 6rem;
font-weight: bold;
cursor: pointer;
transition: 0.8s;
height: 6rem;
}

.fa:hover {
color: white;
}
}

.soldItem {
background: red;
}

.sold {
font-size: 3rem;
color: black;
}

.text {
display: flex;
flex-direction: column;
align-items: baseline;
text-align: center;
width: 80%;
}



.hiddenInput {
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 100%;
height: 4rem;
transition: all 1s ease-in;

.on {
width: 100%;
display: flex;
flex-direction: column;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-20%, -50%);
}

input {
border-radius: 3rem;
margin: .5rem 0 0 0;
box-shadow: 1rem .5rem .5rem black;
width: 40%;
height: 4rem;
text-align: center;
font-size: 3rem;
}

button {
background-color: white;
border-radius: 20%;
width: 40%;
height: 6rem;
box-shadow: 1rem .5rem .5rem black;
font-size: 2.5rem;
cursor: pointer;
}
}
`;

class SliderMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techItems: '',
      data: '',
      owner: '',
      title: '',
      type: '',
      description: '',
      price: '',
      availability: true,
      brand: '',
      model: '',
      imgURL: 'https://www.flatpanelshd.com/pictures/samsungf8000-1l.jpg',
      renter: '',
      input: 'off',
      showInput: 'off',
      searchBrand: '',
      idForUpdate: '',
      inputAdd: 'off',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showInput = (id) => {
    this.setState({
      showInput: "on",
      input: 'on',
      idForUpdate: id
    });
  };

  showAddInput = () => {
    this.setState({
      showInput: 'on',
    });
  };

  updateIt = () => {
    this.props.update(this.state.idForUpdate, this.state.owner, this.state.title,
      this.state.type, this.state.description, this.state.price, this.state.availability, this.state.brand,
      this.state.model,
      this.state.imgURL, this.state.renter);

    this.setState({
      owner: '',
      title: '',
      type: '',
      description: '',
      price: '',
      // availability: true,
      brand: '',
      model: '',
      // imgURL: 'https://www.flatpanelshd.com/pictures/samsungf8000-1l.jpg',
      renter: '',
      input: 'off',
      idForUpdate: '',
      showInput: "off",
    });
  };

  adder = () => {
    this.props.add(this.state.owner, this.state.title,
      this.state.type, this.state.description, this.state.price, this.state.availability, this.state.brand,
      this.state.model,
      this.state.imgURL, this.state.renter);

    this.setState({
      owner: '',
      title: '',
      description: '',
      // availability: '',
      type: '',
      price: '',
      brand: '',
      model: '',
      // imgURL: '',
      renter: '',
      showInput: 'off',

    });
  };

  searchIt = () => {
    this.props.search(this.state.searchBrand);

    this.setState({
      searchBrand: '',
    });
  };

  logout = () => {
    localStorage.removeItem('token');
  };

  render() {
    return (
      <StyledDiv>
        <nav>
          <NavLink
            to="/"
            className="navLink">
            <p
              onClick={this.logout}>
              Logout
                </p>
          </NavLink>
          <NavLink
            to="/protected"
            className="navLink">
            <p> Normal View </p>
          </NavLink>
          <NavLink
            className="navLink"
            to="/protected/user" >
            <p>User</p>
          </NavLink>
        </nav>
        <div className="functionality">
            <i className="fa fa-backward"
            onClick={this.props.back} />
          <input
            placeholder="Search"
            className="topInput"
            name="searchBrand"
            onChange={this.handleChange}
            value={this.state.searchBrand}
            type="text"
          />
      <i className="fa fa-search"
      onClick={this.searchIt}
      />
            <i 
             onClick={this.showAddInput}
            className="fa fa-plus-circle"/>
        </div>
          <Slider
            className="slider">
            {this.props.techItems.map(techItem => {
              return <Animated
                animationIn="rollIn"
                animationOut="slideOutDown"
                animationInDuration={1800}
                animationOutDuration={1800}
                isVisible={true}
                className={techItem.availability ? 'techItem' : 'soldItem techItem'}
                key={techItem.id}>
                <Link
                className="pictureWrapper"
                  id={techItem.id} to={`/protected/${techItem.title}`}>
                  <img
                    id={techItem.model}
                    src={techItem.imgURL}
                    alt={techItem.id} />
                </Link>
                <Link
                  id={techItem.id}
                  to={`/protected/${techItem.title}`}>
                  <h1>Title: {techItem.brand}</h1>
                </Link>
                <div className="text">
                  <p><span>Type:</span> {techItem.type}</p>
                  <p><span>Model:</span> {techItem.model}</p>
                  <p className={techItem.availability ? null : 'sold'}>{techItem.availability ? null : 'SOLD'}</p>
                  <p><span>Price:</span> {techItem.price}$</p>
                </div>
                <div
                className="icons">
                  <button 
                  className="buttonIcon"
                  onClick={() =>
                    this.props.deleter(techItem.id)}>
              <i className="fa fa-user-times"/> &nbsp; Delete 
               </button>
                 <button
                   className="buttonIcon"
                   onClick={() => this.showInput(techItem.id)}>
                 <i
                 className="fa fa-wrench" /> &nbsp; Update</button>
                 <button  
                 className="buttonIcon"
                 onClick={() => this.props.buy(techItem.id)}>
                 <i 
                 className="fa fa-shopping-cart" /> &nbsp; Buy </button>
                 </div>
              </Animated>
            })}
          </Slider>
        <div className="hiddenInput">
          <div
            className={this.state.showInput === 'off' ? 'off' : 'on'}
          >
            <input
              onChange={this.handleChange}
              name="owner"
              type="number"
              value={this.state.owner}
              placeholder="owner" />
            <input
              onChange={this.handleChange}
              name="title"
              type="text"
              value={this.state.title}
              placeholder="title" />
            <input
              onChange={this.handleChange}
              name="type"
              type="text"
              value={this.state.type}
              placeholder="type" />
            <input
              onChange={this.handleChange}
              name="price"
              type="number"
              value={this.state.price}
              placeholder="price" />
            <input
              onChange={this.handleChange}
              name="description"
              type="text"
              value={this.state.description}
              placeholder="description" />
            <input
              onChange={this.handleChange}
              name="brand"
              type="text"
              value={this.state.brand}
              placeholder="brand" />
            <input
              onChange={this.handleChange}
              name="model"
              type="text"
              value={this.state.model}
              placeholder="model" />
            <input
              onChange={this.handleChange}
              name="imgURL"
              type="text"
              value={this.state.imgURL}
              placeholder="image url" />
            <input
              onChange={this.handleChange}
              name="renter"
              type="number"
              value={this.state.renter}
              placeholder="renter" />
            <button onClick={
              this.state.input === 'on' ? this.updateIt : this.adder
            }>
              {this.state.input === 'on' ? 'update' : 'add'}
            </button>
          </div>
        </div>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    techItems: state.techItems,
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps, { deleter, add, update, search, back, buy })(SliderMode);