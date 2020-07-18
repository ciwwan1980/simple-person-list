import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
   <img  src={url} alt=""/>
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
    </article>
  );
};

const PersonList = () => {

  return (
    <section  className="person-list" >
    <Person img="76" name="david" job="designer" />
    <Person img="22" name="bob" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
    <Person img="11" name="bob" job="artist" />
    <Person img="36" name="john" job="designer" />
    <Person img="33" name="lio" job="designer" />
    <Person img="55" name="dan" job="developer" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
