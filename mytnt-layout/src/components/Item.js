import React from 'react'; 

//HINT: use Card as a model to build the Item Component

//TODO: create the Item Component as a function using the arrow function syntax
const Item = (props) =>
{
    return(
        <ul>
            <li>
                <strong>Name: </strong> {props.name}, Team: {props.team}
            </li>
            <li>
                <strong> Email: </strong> {props.email}
            </li>
        </ul>

    )
 }

//TODO: Don't forget to export the component so that it is available to import into the Card component

export default Item;

//Usage sample: <Item name="Zara Thomas" email="zthomas@home.com" team={16}/>
