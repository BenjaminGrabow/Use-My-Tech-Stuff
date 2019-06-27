import React from 'react';
import StyledDiv from './StyledDiv';
import { connect } from 'react-redux';
import { buy, deleter, add, update, search, back } from '../../store/actions';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import Draggable from './DragDrop/Draggable';
import Droppable from './DragDrop/Droppable';
import { Animated } from "react-animated-css";

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
                <h1>
                  <p className="brandLink">
                {techItem.brand}
                </p>
                </h1>
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