import React from "react";
import { useState } from "react";
import "./Job_component.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Jobcomponent() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({
    title: "",
    description: "",
    skills: "",
    domain: "",
    bname: "",
    bdomain: "",
    embedding: "",
    link: "",
    estimatedPay: "",
    location: "",
    company_id: id,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      title,
      description,
      skills,
      domain,
      bname,
      bdomain,
      embedding,
      link,
      estimatedPay,
      location,
      company_id,
    } = data;
    console.log(data);

    try {
      const res = await axios.post("http://localhost:4000/add_job", {
        title,
        description,
        skills,
        domain,
        bname,
        bdomain,
        embedding,
        link,
        estimatedPay,
        location,
        company_id,
      });
      console.log(res);
      alert("Company added successfully!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    console.log(data);
    // Reset the form after submission
    setData({
      title: "",
      description: "",
      skills: "",
      domain: "",
      bname: "",
      bdomain: "",
      embedding: "",
      link: "",
      estimatedPay: "",
      location: "",
      company_id: id,
    });
  };

  return (
    <div className="job-form-container">
      <h1>Add new job...</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="skills">Required Skills:</label>
        <input
          id="skills"
          name="skills"
          value={data.skills}
          onChange={handleChange}
          required
        />

        <label htmlFor="domain">Domain:</label>
        <input
          id="domain"
          name="domain"
          value={data.domain}
          onChange={handleChange}
          required
        />

        <label htmlFor="bname">Branch name:</label>
        <input
          id="bname"
          name="bname"
          value={data.bname}
          onChange={handleChange}
          required
        />

        <label htmlFor="bdomain">Branch domain:</label>
        <input
          id="bdomain"
          name="bdomain"
          value={data.bdomain}
          onChange={handleChange}
          required
        />

        <label htmlFor="embedding">Embedding:</label>
        <input
          id="embedding"
          name="embedding"
          value={data.embedding}
          onChange={handleChange}
          required
        />

        <label htmlFor="link">Link:</label>
        <input
          id="link"
          name="link"
          value={data.link}
          onChange={handleChange}
          required
        />

        <label htmlFor="estimated_pay">Estimated Pay:</label>
        <input
          id="estimated_pay"
          name="estimatedPay"
          value={data.estimatedPay}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Job Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={data.location}
          onChange={handleChange}
          required
        />

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Jobcomponent;
