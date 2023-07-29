import axios from "axios";
import React from "react";
import { useState } from "react";

function Companycomponent() {
  const [file, setFile] = useState();
  const changeImage = (e) => {
    const files = e.target.files;

    if (!files) {
      return;
    }
    const file = files[0];
    setFile(file);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:4000/uploadfile", formData);
    return res;
  };

  const [data, setData] = useState({
    cname: "",
    sponsored: "",
    location: "",
    website: "",
    logo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = await uploadImage();
    console.log(file.data.file.filename);

    const { cname, sponsored, location, website } = data;
    console.log(data);

    try {
      const res = await axios.post("http://localhost:4000/add_company", {
        cname: cname,
        h1b_sponsored: sponsored,
        location,
        website,
        logo: file.data.file.filename,
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
      cname: "",
      sponsored: "",
      location: "",
      website: "",
      logo: "",
    });
  };

  return (
    <div className="job-form-container">
      <h1>Add new company...</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="cname"
          value={setData.cname}
          onChange={handleChange}
          required
        />

        <label htmlFor="sponsored">Sponsored by:</label>
        <input
          id="sponsored"
          name="sponsored"
          value={setData.sponsored}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          value={setData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="logo">Logo:</label>
        <input
          id="logo"
          name="logo"
          type="file"
          value={setData.logo}
          onChange={changeImage}
          required
        />

        <label htmlFor="website">Website:</label>
        <input
          id="website"
          name="website"
          value={setData.website}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Companycomponent;
