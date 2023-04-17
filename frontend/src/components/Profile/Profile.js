import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import "./Profile.css";
import { motion } from "framer-motion";
import image from "../images/profile.jpg";
import Table from "react-bootstrap/Table";
import Popup from "../PaymentForm";
import PastOrder from "../PastOrders";
import "reactjs-popup/dist/index.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
      <section className="profile-container">
        <img src={image} className="profile-img" alt="user" />
        <section className="profile-details">
          <h1 className="profile-name">
            <b>Asli</b>
          </h1>
          <p className="profile-loc">
            <b>ID: 123456</b>
          </p>
          <p className="profile-loc">
            <b>Username: aslikaraman</b>
          </p>
          <p className="profile-loc">
            <b>Full name: Asli Karaman</b>
          </p>
          <p className="profile-loc">
            <b>Email: asli.karaman@ug.bilkent.edu.tr</b>
          </p>
          <p className="profile-loc">
            <b>Registered Address 1: Bilkent University</b>
          </p>
          <p className="profile-loc">
            <b>Registered Address 2: Bilkent University Dormitories</b>
          </p>
          <button className="profile-btn">Edit</button>
          <p>
            <button className="profile-btn" onClick={() => setButtonPopup(true)}>Register a new credit card</button>
          </p>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              <div>
                <div class="card">
                  <form role="form">
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6>Card Name</h6>
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
                          <h6>Balance</h6>
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
                    <div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Popup>
        </section>
      </section>
      <PastOrder/>
    </div>
  );
};

export default Home;
