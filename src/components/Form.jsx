// import React from 'react';
import { useState } from "react";

function Form({ movieSearch }) {

    const [formData, setFormData] = useState({
        searchTerm: "",
    });

    const handleInputChange = ({target}) => {
        setFormData({
            ...formData,
            searchTerm: target.value
        });
        // console.log(formData.searchTerm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        movieSearch(formData.searchTerm);
        formData.searchTerm = "";
    };

  return (
    <div>
        <form action="">
            <input type="text" value={formData.searchTerm} onChange={handleInputChange} />
            <input type="submit" value="submit" onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default Form;