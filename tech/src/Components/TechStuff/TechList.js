import React from 'react';
import { connect } from 'react-redux';
import { fetch, deleter, add, update } from '../../store/actions';
import 'react-animated-slider/build/horizontal.css';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const StyledDiv = styled.div`

.friend {
background: #C6FFDD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

width: 100%;
}

.off {
        display:none;
}

`;

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      input: 'off',
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: ''
    }
  }

  componentDidMount = () => {
    this.props.fetch();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showInput = () => {
    this.setState({
      input: 'on'
    });
  };

  updateIt = (id) => {
    this.props.update(id, this.state.nameUpdate, this.state.ageUpdate, this.state.emailUpdate);


    this.setState({
      nameUpdate: '',
      ageUpdate: '',
      emailUpdate: '',
      input: 'off'
    });
  };

  adder = () => {
    this.props.add(this.state.name, this.state.age, this.state.email);

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render() {
    return (
      <StyledDiv>
        {this.props.friends.map(friend => {
          return <div
            className="friend"
            key={friend.id}>
            <Link to={`/protected/${friend.name}`}>
                    <h1>{friend.name}</h1>
                    </Link>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={() =>
              this.props.deleter(friend.id)}>
              Delete
                                                                 </button>
            <button onClick={
              this.showInput}>
              Update
                                                                   </button>
            <div
              className={this.state.input === 'off' ? 'off' : null}>
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
              <button onClick={() =>
                this.updateIt(friend.id)}>
                update
                                                                   </button>
            </div>
          </div>
        })}
        <input
          onChange={this.handleChange}
          name="name"
          type="text"
          value={this.state.name} />
        <input
          onChange={this.handleChange}
          name="age"
          type="number"
          value={this.state.age} />
        <input
          onChange={this.handleChange}
          name="email"
          type="text"
          value={this.state.email} />
        <button onClick={this.adder} >
          Add
                                           </button>
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps, { fetch, deleter, add, update })(Friends);