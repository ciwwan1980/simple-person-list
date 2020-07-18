import React from "react";
import ReactDOM from "react-dom";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article >
   <img  src={url} alt=""/>
    <h4>{name}</h4>
    <h4>{job}</h4>
    </article>
  );
};

const PersonList = () => {

  return (
    <section >
    <Person img="56" name="david" job="designer" />
    <Person img="44" name="schnider" job="developer" />
    <Person img="11" name="bob" job="artist" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
