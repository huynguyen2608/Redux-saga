import React from 'react';
import { petIncrement, petDecrement } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Home(props) {
    const Counter = useSelector(state => state.pet_Counter);
    const Favorite = useSelector(state => state.pet_Favorite);
    const dispatch = useDispatch();

    const addPet = () => {
        dispatch(petIncrement(2));
    };

    const removePet = () => {
        dispatch(petDecrement());
    };

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={addPet}>Add pet</button>
            <button onClick={removePet}>Remove pet</button>
            <h1>Pet Counter {Counter}</h1>
            <h2>Number of favorite pets so far {Favorite}</h2>
        </div>
    )
};

export default Home;