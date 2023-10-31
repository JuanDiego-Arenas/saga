import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { useAuth } from '../context/AuthContext';
import CardProfile from '../components/pures/CardProfile';

const ProfilePage = () => {

    const { user } = useAuth()

    return (
        <>
            <NavBar/>
            <section style={{ marginTop: '4em', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center' }}>
                <CardProfile user={user} />
            </section>
        </>
    );
}

export default ProfilePage;
