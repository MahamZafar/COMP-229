import { useState } from "react";
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    street: "",
    postalcode: "",
    city: "",
    selectedOption:"",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Street: ${formData.street}, Postalcode: ${formData.postalcode}, City : ${formData.city}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">

    <h> Enter Address </h>

      <label className="multiple__text" htmlFor="name">
        Street:
      </label>
      <input
        type="text"
        id="street"
        className="multiple__input"
        name="street"
        value={formData.street}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="postalcode">
        Postal Code
      </label>
      <input
        type="postalcode"
        id="postalcode"
        className="multiple__input"
        name="postalcode"
        value={formData.postalcode}
        onChange={handleChange}
      />
      <label className="multiple__text" htmlFor="city">
        City
      </label>
      <input
        type="city"
        id="city"
        className="multiple__input"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label>
        Country:
        <select value={formData.selectedOption} onChange={handleChange}>
          <option value="option1">Canada</option>
          <option value="option2">Pakistan</option>
          <option value="option3">London</option>
        </select>
      </label>
     

      <button className="multiple__button" type="submit">
        Submit
      </button>
    </form>
  );
}



