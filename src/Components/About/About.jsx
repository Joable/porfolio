import { useEffect, useState } from "react";
import { 
    Button, 
    Card, 
    Modal
 } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs'

import AboutLoading from "./AboutLoading.jsx";
import firebase from "../../Config/firebase.js";

import './About.css'

function About() {
    const [isLoading, setIsLoading] = useState(true)
    const [aboutText, setAboutText] = useState("");
    const [aboutTextChange, setAboutTextChange] = useState(aboutText)

    const [show, setShow] = useState(false);

    useEffect(() =>{
        firebase.db.doc("profile-data/about-data")
        .get()
        .then( doc => {
            setAboutText(doc.data().about)
            setAboutTextChange(aboutText)
            setIsLoading(false)
        })
    }, []
    )

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setAboutTextChange(value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setAboutText(aboutTextChange)
        handleClose()
    }

    if(isLoading){
        return(
            <AboutLoading/>
        )
    }else{
        return (
            <>
            <Card>
                <Card.Body>

                    <div className="justify-spacebetween">
                        <Card.Title>Acerca de mi</Card.Title>
                        <BsPencilSquare onClick={handleShow}/>
                    </div>
                    <Card.Text>
                        {aboutText}
                    </Card.Text>
                    
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h3>
                        About
                    </h3>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>    
                        <textarea name="about" id="about-input" onChange={handleChange}>{aboutTextChange}</textarea>
                        <Button type="submit">Save Changes</Button>
                    </form>
                </Modal.Body>
            </Modal>
            </> 
        );
    }
}

export default About;