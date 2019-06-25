import React from 'react';
import { connect } from 'react-redux';
import { buy, deleter, add, update, search, back } from '../../store/actions';
import 'react-animated-slider/build/horizontal.css';
import styled from 'styled-components';
import { Link,  NavLink } from 'react-router-dom';
import Draggable from './DragDrop/Draggable';
import Droppable from './DragDrop/Droppable';

const StyledDiv = styled.div`

.functionality {
height: 3rem;
background: #0f0c29; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.navLink {
  text-decoration: none;
  /* font-size: ; */
}

.topButton {
background-color: red;
border-radius: 50%;
width: 15%;
height: 3rem;
box-shadow: 1rem .5rem .5rem black;
}

.topInput {
border-radius: 3rem;
/* margin-top: .5rem; */
box-shadow: 1rem .5rem .5rem black;
width: 25%;
height: 2rem;
text-align: center;
font-size: 1.5rem;
}

.techList {
display: flex;
flex-wrap: wrap;
justify-content: center;
background: #0f0c29; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.techItem {
background: #bdc3c7; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 22%;
border: .08rem solid black;
margin: .5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
box-shadow: 1rem .5rem .5rem black;
}
 
a {
text-decoration: none;
/* margin-top: 1rem; */
}
 
p {
color: black;
margin: 0;
}
 
.off {
display:none;
}

.hiddenInput2 {
position: fixed;
top: 0;
right: 0%;
}

.hiddenInput {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 4rem;
margin-bottom: 3rem;
display: flex;
flex-wrap: wrap;
 
.on {
width: 100%;
display: flex;
justify-content: space-around;
}

input {
border-radius: 3rem;
margin-top: .5rem;
box-shadow: 1rem .5rem .5rem black;
width: 10%;
}
 
button {
margin-top: .5rem;
background-color: red;
border-radius: 50%;
width: 15%;
height: 3rem;
box-shadow: 1rem .5rem .5rem black;
}
}
 
img {
width: 10rem;
height: 6rem;
box-shadow: 1rem .5rem .5rem black;
}

.draggable {
font-size: 3rem;
color: black;
height: 6rem;
}

#dr1 {
height: 6rem;
display: flex;
justify-content: center;
}

 
.itemButton {
border-radius: 50%;
margin: .3rem;
width: 50%;
height: 2.5rem;
background: #00b09b; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #96c93d, #00b09b); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #96c93d, #00b09b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
box-shadow: 1rem .5rem .5rem black;
font-weight: bold;
}

.sold {
font-size: 5rem;
color: red;
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
        to="/login"
        className="navLink">
          Logout
            </Link>
          </button>
          <button
          className="topButton"
            onClick={this.props.back}>
            Back
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
            Search
</button>
          <button
          className="topButton"
            onClick={this.showAddInput}>
            Add
          </button>
        </div>
        <div
          className="techList">
          {this.props.techItems.map(techItem => {
            return <div
              className={techItem.imgURL !== "" ? "techItem" : 'off'}
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
              <p>{techItem.type}</p>
              <p>{techItem.model}</p>
              <p className={techItem.availability ? null : 'sold'}>{techItem.availability ? 'still to have' : 'SOLD'}</p>
              <p>{techItem.description}</p>
              <p>{techItem.price}$</p>
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
            </div>
          })}
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