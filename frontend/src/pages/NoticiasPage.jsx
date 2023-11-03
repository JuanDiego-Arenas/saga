import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { Tweet } from 'react-tweet'

const NoticiasPage = () => {
    return (
        <>
            <NavBar />
            <Tweet id="941451838032875520" />
            <Tweet id="944247851630112768" />
            <Tweet id="1696588332589818082" />
            <Tweet id="1445103163971883012" />
        </>
    );
}

export default NoticiasPage;
