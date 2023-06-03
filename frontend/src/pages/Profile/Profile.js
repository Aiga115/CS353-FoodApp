import React, { useState, useEffect } from "react";
import { db } from "../../components/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./Profile.css";
import image from "../../assets/profile.jpg";
import Popup from "../../components/NewCardRegistrationPopup";
import "reactjs-popup/dist/index.css";

const Home = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const user = {
        name: "Asli",
        username: 'asli-karaman',
        fullname: "Asli Karaman",
        email: "asli.karaman@ug.bilkent.edu.tr",
        phoneNumber: "1234567890",
        addresses: ["Bilkent University Dormitories", "Bilkent University"]
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
                        <b>{user.name}</b>
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
                    <button className="profile-btn">Edit</button>
                    <p>
                        <button
                            className="profile-btn"
                            onClick={() => setButtonPopup(true)}
                        >
                            Register a new credit card
                        </button>
                    </p>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <div>
                            <div>
                                <div class="card">
                                    <form role="form">
                                        <div class="form-group">
                                            <label for="cardNumber">
                                                <h6 style={{ color: "#fff" }}>Card name</h6>
                                            </label>
                                            <div class="input-group">
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    placeholder="Card name"
                                                    class="form-control "
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <label for="cardNumber">
                                                    <h6 style={{ color: "#fff" }}>Balance</h6>
                                                </label>
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        name="cardNumber"
                                                        placeholder="Balance"
                                                        class="form-control "
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div>
                                            <button type="button" class="button">
                                                Add new credit card
                                            </button>
                                        </div>
                                        <div></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </section>
            </section>
        </div>
    );
};

export default Home;
