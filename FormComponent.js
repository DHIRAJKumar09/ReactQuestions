import React, { useState, useEffect } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        skills: '',
        cv: ''
    });

    
    const [cvFile, setCvFile] = useState(null);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    
    const handleCvUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setCvFile(reader.result);
            setFormData((prevData) => ({
                ...prevData,
                cv: reader.result 
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userInfo', JSON.stringify(formData));
        alert('Data saved to local storage!');
    };

 
    const [savedData, setSavedData] = useState(null);

    useEffect(() => {
        const retrievedData = JSON.parse(localStorage.getItem('userInfo'));
        if (retrievedData) {
            setSavedData(retrievedData);
        }
    }, []);

    return (
        <div className="container">
            <h2 className="mt-5">User Information Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skill Sets:</label>
                    <textarea
                        className="form-control"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="Enter skills"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="cv">Upload CV:</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleCvUpload}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {savedData && (
                <div className="mt-5">
                    <h3>Saved Data</h3>
                    <p><strong>Name:</strong> {savedData.name}</p>
                    <p><strong>Email:</strong> {savedData.email}</p>
                    <p><strong>Phone:</strong> {savedData.phone}</p>
                    <p><strong>Skills:</strong> {savedData.skills}</p>
                    {savedData.cv && (
                        <p>
                            <strong>CV:</strong> 
                            <a href={savedData.cv} download="CV">Download CV</a>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default FormComponent;
