import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { useAuth } from '../context/AuthContext';
import CardProfile from '../components/pures/CardProfile';

const ProfilePage = () => {

    const { user } = useAuth()

    return (
        <>
            <NavBar/>
            <section style={{ marginTop: '5em', width: '100vw', height: '95vh', display: 'flex', justifyContent: 'center' }}>
                <CardProfile user={user} />
            </section>
        </>
    );
}

export default ProfilePage;
