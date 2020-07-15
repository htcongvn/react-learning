import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C5103AQHDxWXPvkwhvQ/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=4UxJkVndnnV9pR0_ye-105mGWmVJEE0A8-vCjIvcvtw" />
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
