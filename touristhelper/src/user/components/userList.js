import React from "react";


import './userList.css';
import UserItem from "./userItem";
function UserList(props){


    if(props.items.length === 0){
        return (<div className="center">
         <h2> No user found </h2>
        </div>);
    }
    else{
        return(
            <ul className="users-list">
            {props.items.map(user => (
                <UserItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image} 
                    name={user.name} 
                    placesCount={user.places} // Ensure the prop name matches your data
                />
            ))}
            
            </ul>
        );

    }
}
export default UserList;