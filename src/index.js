import React from "react";
import ReactDOM from "react-dom";

const Person = () => {
   const url = `https://randomuser.me/api/portraits/thumb/men/61.jpg`;
  return (
    <article >
   <img  src={url} alt=""/>
    <h4>name</h4>
    <h4>job</h4>
    </article>
  );
};

const PersonList = () => {

  return (
    <section >
  <Person img="56" name="david" job="the boss" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
