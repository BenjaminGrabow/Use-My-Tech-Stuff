import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = (props) => {
        return (
                <div>
                        <h1>{props.friend.name}</h1>
                        <p>{props.friend.age}</p>
                        <p>{props.friend.email}</p>
                        {props.friend.messages.map(message => 
                                <div className="ratings">
                                        <p>{message.message}</p>
                                </div>)}
                        <Link to="/protected">Back</Link>
                </div>
        );
}

export default ListItem;