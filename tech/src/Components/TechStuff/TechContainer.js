import React from 'react';
import TechList from './TechList';
import StyledContainer from './StyledContainer';
import Droppable from './DragDrop/Droppable';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { deleteUser } from '../../store/actions';

class TechContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  logout = () => {
    localStorage.removeItem('token');

    this.props.deleteUser();
  };


  render() {
    if(this.props.loading){
return <Loader 
type="Puff"
color="#00BFFF"
height="100"	
width="100"
/>   
    }
    if(this.props.error) {
      return <h1>{this.props.error}</h1>
    }
    return (
      <StyledContainer>
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
          className="navLink"
          to="/protected/slide_mode" >
          <p>Slide Mode</p>
           </NavLink>
           <NavLink
          className="navLink"
          to="/protected/user" >
          <p>User</p>
           </NavLink>
           </nav>
        <div
          className="dr2">
          <Droppable
            id="dr2" >
          </Droppable>
        </div>
        <TechList />
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
};

export default connect(mapStateToProps, { deleteUser })(TechContainer);