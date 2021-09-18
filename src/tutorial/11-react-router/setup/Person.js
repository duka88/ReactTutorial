import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState("default name");

  useEffect(() => {
    const person = data.find((item) => item.id === +id);
    setName(person.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
