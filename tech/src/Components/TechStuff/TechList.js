import React from 'react';
import { connect } from 'react-redux';
import { buy, deleter, add, update, search, back } from '../../store/actions';
import 'react-animated-slider/build/horizontal.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Draggable from './DragDrop/Draggable';
import Droppable from './DragDrop/Droppable';
import { Animated } from "react-animated-css";

const StyledDiv = styled.div`

.functionality {
height: 3rem;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding-bottom: 2rem;

@media (max-width:610px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 10rem;
}
}

.topButton {
background-color: white;
border-radius: 20%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
cursor: pointer;

@media (max-width:610px) {
        width: 90%;
        margin: .5rem;
}
}

.pButton {
font-size: 1.5rem;
font-weight: bold;

@media (max-width:610px) {
font-size: 2.5rem
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

.techList {
display: flex;
flex-wrap: wrap;
justify-content: center;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.techItem {
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 29%;
border: .08rem solid black;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
box-shadow: 1rem .5rem .5rem black;

@media (max-width:1000px) {
        width: 40%;
}

@media (max-width:800px) {
        width: 80%;
}
}
 
a {
text-decoration: none;
}
 
p {
color: black;
font-size: 1.5rem;
margin: 0;
}
 
.off {
display:none;
top          : 50%;
left         : 50%;
position     : fixed;
transform    : translate(-250%, -50%);
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
 
img {
width: 20rem;
height: 12rem;
box-shadow: 1rem .5rem .5rem black;

@media (max-width:1200px) {
        width: 17rem; 
}

@media (max-width:1100px) {
        width: 15rem;
}

@media (max-width:1000px) {
        width: 17rem;
}

@media(max-width:800px) {
        width : 23rem;
} 


@media(max-width:550px) {
        width : 20rem;
}

@media(max-width:480px) {
        width : 17rem;
}

@media(max-width:400px) {
        width : 14rem;
}

@media(max-width:330px) {
        width : 11rem;
}
}

.draggable {
font-size: 3rem;
color: black;
height: 12rem;
}

#dr1 {
height: 12rem;
display: flex;
justify-content: center;
}

 
.itemButton {
border-radius: 20%;
margin: .3rem;
width: 85%;
height: 4rem;
background-color: white;
box-shadow: 1rem .5rem .5rem black;
font-size: 1.5rem;
font-weight: bold;
cursor: pointer;
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
  justify-content: flex-start;
  text-align: left;
  width: 80%;
}

span {
  font-weight: bold;
}

`;

class TechList extends React.Component {
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
        <div className="functionality">
          <button
            className="topButton"
            onClick={this.logout}>
            <Link
              to="/"
              className="navLink">
              <p
                className="pButton">
                Logout
                </p>
            </Link>
          </button>
          <button
            className="topButton"
            onClick={this.props.back}>
            <p
              className="pButton">
              Back
             </p>
          </button>
          <input
            placeholder="Search"
            className="topInput"
            name="searchBrand"
            onChange={this.handleChange}
            value={this.state.searchBrand}
            type="text"
          />
          <button
            onClick={this.searchIt}
            className="topButton">
            <p
              className="pButton">
              Search
              </p>
          </button>
          <button
            className="topButton"
            onClick={this.showAddInput}>
            <p
              className="pButton">
              Add
              </p>
          </button>
        </div>
        <div
          className="techList">
          {this.props.techItems.map(techItem => {
            return <Animated
              animationIn="rollIn"
              animationOut="slideOutDown"
              animationInDuration={1800}
              animationOutDuration={1800}
              isVisible={true}
              className={techItem.availability ? 'techItem' : 'soldItem techItem'}
              key={techItem.id}>
              <Droppable id="dr1">
                <Draggable id={techItem.id}
                  className="draggable">
                  <Link
                    id={techItem.id} to={`/protected/${techItem.title}`}>
                    <img
                      id={techItem.model}
                      src={techItem.imgURL}
                      alt={techItem.id} />
                  </Link>
                </Draggable>
              </Droppable>
              <Link
                id={techItem.id}
                to={`/protected/${techItem.title}`}>
                <h1>Title: {techItem.brand}</h1>
              </Link>
              <div className="text">
              <p><span>Type:</span> {techItem.type}</p>
              <p><span>Model:</span> {techItem.model}</p>
              <p className={techItem.availability ? null : 'sold'}>{techItem.availability ? null : 'SOLD'}</p>
              <p><span>Description:</span> {techItem.description}</p>
              <p><span>Price:</span> {techItem.price}$</p>
              </div>
              <button
                className="itemButton"
                onClick={() =>
                  this.props.deleter(techItem.id)}>
                Delete
</button>
              <button
                className="itemButton"
                onClick={() => this.showInput(techItem.id)}>
                Update
</button>
              <button
                className="itemButton"
                onClick={() => this.props.buy(techItem.id)} >
                Buy
  </button>

            </Animated>
          })}
        </div>
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

export default connect(mapStateToProps, { deleter, add, update, search, back, buy })(TechList);