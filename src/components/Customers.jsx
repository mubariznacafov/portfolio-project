import React from "react";
import "../scss/pages/customers/_customers.scss";
import Person1 from "../assets/people-1.jpg";
import Person2 from "../assets/people-2.jpg";
import Person3 from "../assets/people-3.jpg";
import Person4 from "../assets/people-4.jpg";
import Person5 from "../assets/people-5.jpg";
import Person6 from "../assets/people-6.jpg";

const Customers = () => {
  return (
    <div className="customers">
      <div className="cards">
        <div className="card">
          <p>
            "Absolutely loved the layout! Very clean and easy to navigate. I can
            tell a lot of thought went into every detail."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person1} alt="person_1" />
            </div>
            <div className="personal_info">
              <h3>Amelia Foster</h3>
              <h2>BrightCore Designs</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Your portfolio is impressive! Each project really highlights your
            skills. I especially liked the animations."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person2} alt="person_2" />
            </div>
            <div className="personal_info">
              <h3>Lucas Thompson</h3>
              <h2>InnovateX</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "A fantastic showcase of talent! The responsiveness is seamless, and
            the colors are well-chosen."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person3} alt="person_3" />
            </div>
            <div className="personal_info">
              <h3>Maria Lopez</h3>
              <h2>Peak Solutions</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Very user-friendly and visually appealing. This is a great example
            of modern web design."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person4} alt="person_4" />
            </div>
            <div className="personal_info">
              <h3>Rauf Najaf</h3>
              <h2>GuestPet</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Very user-friendly and visually appealing. This is a great example
            of modern web design."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person5} alt="person_5" />
            </div>
            <div className="personal_info">
              <h3>Oliver Chen</h3>
              <h2>UnityLabs</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Very user-friendly and visually appealing. This is a great example
            of modern web design."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person6} alt="person_6" />
            </div>
            <div className="personal_info">
              <h3>Azer Ahadli</h3>
              <h2>HYPE+</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p>
            "Absolutely loved the layout! Very clean and easy to navigate. I can
            tell a lot of thought went into every detail."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person1} alt="person_1" />
            </div>
            <div className="personal_info">
              <h3>Amelia Foster</h3>
              <h2>BrightCore Designs</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Your portfolio is impressive! Each project really highlights your
            skills. I especially liked the animations."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person2} alt="person_2" />
            </div>
            <div className="personal_info">
              <h3>Lucas Thompson</h3>
              <h2>InnovateX</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "A fantastic showcase of talent! The responsiveness is seamless, and
            the colors are well-chosen."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person3} alt="person_3" />
            </div>
            <div className="personal_info">
              <h3>Maria Lopez</h3>
              <h2>Peak Solutions</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Very user-friendly and visually appealing. This is a great example
            of modern web design."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person4} alt="person_4" />
            </div>
            <div className="personal_info">
              <h3>Rauf Najaf</h3>
              <h2>GuestPet</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Very user-friendly and visually appealing. This is a great example
            of modern web design."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person5} alt="person_5" />
            </div>
            <div className="personal_info">
              <h3>Oliver Chen</h3>
              <h2>UnityLabs</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <p>
            "Very user-friendly and visually appealing. This is a great example
            of modern web design."
          </p>
          <div className="person">
            <div className="img">
              <img src={Person6} alt="person_6" />
            </div>
            <div className="personal_info">
              <h3>Azer Ahadli</h3>
              <h2>HYPE+</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
