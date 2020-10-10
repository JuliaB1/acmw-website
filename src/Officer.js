import React from 'react';
import './Officer.css';


function Officer(props){
    return(
        <div style={{padding:'20px'}}>
            <div className="flex flex-column items-center">
            <div className="profile-pic"/>
            <div style={{textAlign:'center'}}>{props.name}</div>
            </div>
        </div>
    );
}

export default Officer;