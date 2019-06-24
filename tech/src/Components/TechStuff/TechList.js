import React from 'react';
import { connect } from 'react-redux';
import { fetch, deleter, add, update, search, back } from '../../store/actions';
import 'react-animated-slider/build/horizontal.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Draggable from './DragDrop/Draggable';
import Droppable from './DragDrop/Droppable';

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background: #0f0c29; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 
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
box-shadow: 1rem .5rem .5rem black;
}
 
a {
text-decoration: none;
margin-top: 1rem;
}
 
p {
color: black;
}
 
.off {
display:none;
}
 
.hiddenInput {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 4rem;
margin-bottom: 3rem;
 
.on {
width: 100%;
display: flex;
justify-content: space-around;
}
input {
border-radius: 3rem;
margin-top: .5rem;
box-shadow: 1rem .5rem .5rem black;
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
 
`;

class TechList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      title: '',
      desciption: '',
      type: '',
      price: '',
      availability: '',
      brand: '',
      model: '',
      imageURL: '',
      renter: '',
      input: 'off',
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: '',
      searchBrand: '',
      idForUpdate: '',
    }
  }

  componentDidMount() {
    this.props.fetch();//call it in extra function
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showInput = (id) => {
    this.setState({
      input: 'on',
      idForUpdate: id
    });
  };

  updateIt = () => {
    this.props.update(this.state.idForUpdate, this.state.nameUpdate, this.state.ageUpdate, this.state.emailUpdate);

    this.setState({
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: '',
      input: 'off',
      idForUpdate: ''
    });
  };

  adder = () => {
    this.props.add(this.state.owner, this.state.title, this.state.description,
      this.state.type, this.state.price, this.state.availability, this.state.brand,
      this.state.model,
      this.state.imageURL, this.state.renter);
    this.setState({
      owner: '',
      title: '',
      desciption: '',
      type: '',
      price: '',
      availability: '',
      brand: '',
      model: '',
      imageURL: '',
      renter: '',
    });
  };

  searchIt = () => {
    this.props.search(this.state.searchBrand);

    this.setState({
      searchBrand: '',
    });
  };

  // "id": 3,
  // "owner": 2,
  // "title": "Flat screen TV",
  // "type": "TV",
  // "description": "high resolution",
  // "price": 20,
  // "availability": true,
  // "brand": "Samsung",
  // "model": "100",
  // "imgURL": "https://www.flatpanelshd.com/pictures/samsungf8000-1l.jpg",
  // "renter": null
  render() {
    return (
      <StyledDiv>
        <button onClick={this.props.back}>
          Back
</button>
        <input
          name="searchBrand"
          onChange={this.handleChange}
          value={this.state.searchBrand}
          type="text"
        />
        <button onClick={this.searchIt}>
          Search
</button>
        <Droppable id="dr2" >
        </Droppable>
        {this.props.techItems.map(techItem => {
          return <div
            className={techItem.imgURL !== "" ? "techItem" : 'off'}
            key={techItem.id}>
            <Droppable id="dr1">
              <Draggable id={techItem.id}
                className="draggable">
                <Link
                  id={techItem.id} to={`/protected/${techItem.title}`}>
                  <img id={techItem.model} src={techItem.imgURL} alt={techItem.id} />
                </Link>
              </Draggable>
            </Droppable>
            <Link
              id={techItem.id} to={`/protected/${techItem.title}`}>
              <h1>{techItem.brand}</h1>
            </Link>
            <p>{techItem.type}</p>
            <p>{techItem.model}</p>
            <p>{techItem.availability ? 'still to have' : null}</p>
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
          </div>
        })}
        <div className="hiddenInput">
          <div
            className={this.state.input === 'off' ? 'off' : 'on'}>
            <input
              onChange={this.handleChange}
              name="nameUpdate"
              type="text"
              value={this.state.nameUpdate} />
            <input
              onChange={this.handleChange}
              name="ageUpdate"
              type="number"
              value={this.state.ageUpdate} />
            <input
              onChange={this.handleChange}
              name="emailUpdate"
              type="text"
              value={this.state.emailUpdate} />
            <button onClick={this.updateIt}>
              update
</button>
          </div>
        </div>
        {/* // owner < --Required(Foreign Key)(References user id)
// title < --Required(string)
// description < --Required(string)
// type < --Required(string)
// description < --Required(string)
// price < --Required(integer)
// availibility < --Required(boolean)
// brand(string)
// model(string)
// imgURL(string)
// renter(integer)(Foreign Key)(References user id) */}
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
          name="description"
          type="text"
          value={this.state.description}
          placeholder="description" />
        <input
          onChange={this.handleChange}
          name="price"
          type="number"
          value={this.state.price}
          placeholder="price" />
        <input
          onChange={this.handleChange}
          name="availability"
          type="text"
          value={this.state.avail}
          placeholder="true or false" />
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
          name="imageURL"
          type="text"
          value={this.state.imageURL}
          placeholder="image url" />
        <input
          onChange={this.handleChange}
          name="renter"
          type="number"
          value={this.state.renter}
          placeholder="renter" />
        <button onClick={this.adder} >
          Add
</button>
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

export default connect(mapStateToProps, { fetch, deleter, add, update, search, back })(TechList);