import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../Redux/reducer';

const Greeting = () => {
    const dispatch = useDispatch();
    const { greeting, error } = useSelector((state) => state.greetings);
    
    useEffect(() => {
        dispatch(getRandomGreeting());
    }, [dispatch]);
    
    if (error) {
        return <p>{error.message}</p>;
    }
    
    return (
        <h1>{greeting}</h1>
    );
    }

export default Greeting;