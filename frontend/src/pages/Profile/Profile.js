import React, { useState, useEffect } from "react";
import { db } from "../../components/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./Profile.css";
import image from "../../assets/profile.jpg";
import Popup from "../../components/NewCardRegistrationDialog";
import "reactjs-popup/dist/index.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import NewCardRegistrationDialog from "../../components/NewCardRegistrationDialog";

const Home = (props) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const user = {
        name: "Asli",
        username: 'asli-karaman',
        fullname: "Asli Karaman",
        email: "asli.karaman@ug.bilkent.edu.tr",
        phoneNumber: "1234567890",
        addresses: ["Bilkent University Dormitories", "Bilkent University"],
        isAdmin: false
    }

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(
            collection(db, "events"),
            (snapshot) => {
                const list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setEvents(list);
                setLoading(false);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <section className="profile-container">
                <img src={image} className="profile-img" alt="user" />
                <section className="profile-details">
                    <h1 className="profile-name">
                        <FormLabel>{user.name}</FormLabel>
                    </h1>
                    <p className="profile-loc">
                        <b>Username: {user.username}</b>
                    </p>
                    <p className="profile-loc">
                        <b>Full name: {user.fullname}</b>
                    </p>
                    <p className="profile-loc">
                        <b>Email address: {user.email}</b>
                    </p>
                    <p className="profile-loc">
                        <b>Phone number: {user.phoneNumber}</b>
                    </p>
                    {
                        user.addresses.map((address, index) => {
                            return <p className="profile-loc" key={index}>
                                <b>Registered Address {index+1}: {address}</b>
                            </p>
                        })
                    }
                    {
                        user.isAdmin && <button className="profile-btn">Edit</button>
                    }
                    <p></p>
                    <p>
                        <Button variant='contained' onClick={() => setOpen(true)}>Register a new credit card</Button>
                    </p>
                    <NewCardRegistrationDialog open={open} setOpen={setOpen} info={props}></NewCardRegistrationDialog>
                </section>
            </section>
        </div>
    );
};

export default Home;
