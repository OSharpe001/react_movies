import { Input, ButtonInput, Forms, FormH2 } from "./Styled";
import { useState } from "react";

export default function Form({ movieSearch }) {

    const [formData, setFormData] = useState({
        searchTerm: "",
    });

    const handleInputChange = ({target}) => {
        setFormData({
            ...formData,
            searchTerm: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        movieSearch(formData.searchTerm);
        formData.searchTerm = "";
    };

  return (
    <div>
        <Forms action="">
            <FormH2>Pick a movie, any movie...</FormH2>
            <Input type="text" value={formData.searchTerm} onChange={handleInputChange} />
            <ButtonInput type="submit" value="submit" onClick={handleSubmit}/>
        </Forms>
    </div>
  );
};