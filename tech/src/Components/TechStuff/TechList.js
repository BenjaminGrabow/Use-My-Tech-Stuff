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
display: flex;
width: 100%;
justify-content: space-around;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
padding: 2rem 0;

@media (max-width:610px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 7rem 0 6rem 0;
        height: 10rem;
}

.fa {
cursor: pointer;
color: white;
font-size: 4.5rem;
font-weight: bold;
transition: 0.8s;
padding-right: 1.5rem;

@media (max-width:610px) {
font-size: 6rem;
padding: 0;
}

&:hover {
color: red;
}
}


.topInput {
border-radius: 3rem;
box-shadow: 1rem .5rem .5rem black;
width: 40%;
height: 4rem;
text-align: center;
font-size: 1.5rem;

@media (max-width:610px) {
        width: 90%;
        margin: .5rem;
        font-size: 3rem
}
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
width: 45%;
border: .08rem solid black;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
box-shadow: 1rem .5rem .5rem black;
border-radius: .5rem;


@media (max-width:800px) {
        width: 80%;
}
}
 
a {
text-decoration: none;
}

h1 {
font-size: 3rem;
}

p {
color: black;
font-size: 2rem;
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


.icons {
height: 6rem;
width: 95%;
background-color: white;
display: flex;
margin: 1rem 1rem 1rem 0;

@media(max-width:610px) {
        flex-direction: column;
        align-items: center;
        height: 15rem;
        background: none;
} 

.buttonIcon {
border: .2rem solid black;
transition: .8s;
border-radius: .5rem;
width: 33%;
font-size: 1.5rem;
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

@media(max-width:610px) {
width: 70%;      
} 

&:hover {
  border: .2rem solid red;
}

.fa {
font-size: 3rem;
font-weight: bold;
cursor: pointer;
color: black;

&:hover {
  color: red;
}
}
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
justify-content: flex-start;
text-align: left;
width: 80%;
}

span {
  font-weight: bold;
  font-size: 2rem;
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

  render() {
    return (
      <StyledDiv>
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
                <h1>{techItem.brand}</h1>
              </Link>
              <div className="text">
                <p><span>Type:</span> {techItem.type}</p>
                <p><span>Model:</span> {techItem.model}</p>
                <p className={techItem.availability ? null : 'sold'}>{techItem.availability ? null : 'SOLD'}</p>
                <p><span>Description:</span> {techItem.description}</p>
                <p><span>Price:</span> {techItem.price}$</p>
              </div>
              <div
                className="icons">
              <button 
                  className="buttonIcon"
                  onClick={() =>
                    this.props.deleter(techItem.id)}>
              <i className="fa fa-user-times"/>
               Delete 
               </button>
                 <button
                   className="buttonIcon"
                   onClick={() => this.showInput(techItem.id)}>
                 <i
                 className="fa fa-wrench" /> Update </button>
                 <button  
                 className="buttonIcon"
                 onClick={() => this.props.buy(techItem.id)}>
                 <i 
                 className="fa fa-shopping-cart" /> Buy </button>
                 </div>
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