import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = () => {
    const navigate = useNavigate();

    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">
                        Get Started with Homyz
                    </span>

                    <span className="secondaryText">
                        Discover attractive properties and find
                        your perfect residence.
                    </span>

                    <button
                        className="button"
                        onClick={() => {
                            navigate("/properties");
                            window.scrollTo(0, 0);
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;