import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { client } from '../client';
import '../CSS/Contact.css'

function Contact() {

    const [title, setTitle] = useState("");
    const [btn, setBtn] = useState("");
    const [content, setContent] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'contact' }).then((res) => {
            // console.log("response is", JSON.stringify(res));
            setTitle(res.items[0].fields.title)
            setBtn(res.items[0].fields.btn)
            setContent(res.items[0].fields.list)
        }).catch(console.error)
    }, [])

    return (
        <div className='start-project wf-section'>
            <div className='container margin-140px w-container'>
                <div id='w-node-_249de2b7-ae72-9904-ef4c-14d5d52f9f39-059e42a0'>
                    <h4 className="sub-small-title text-align-centre-mobile">Contact</h4>
                    <h3 className="display-2 text-align-cenre-mobile">Let's start<br />your project<span className="text-gradient">.</span></h3>
                </div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <label for="Name-2" className="field-label-form">Name</label>
                            <input type="text" className="text-field w-input" maxlength="256" name="Name-2" data-name="Name 2" placeholder="" id="Name-2"></input>
                            <label for="Email-3" className="field-label-form">Email Address</label>
                            <input type="email" className="text-field w-input" maxlength="256" name="Email-2" data-name="Email 2" placeholder="" id="Email-2" required=""></input>
                            <label for="Text-Area-3" className="field-label-form">message</label>
                            <textarea name="Text-Area-2" maxlength="5000" id="Text-Area-2" data-name="Text Area 2" placeholder="" className="text-field area w-input"></textarea>
                        </Col>
                        <Col>
                            <label for="Text-Area-3" className="field-label-form">{title}</label>
                            <div className='checkbox-flex'>
                                {
                                    content.map((key) => (
                                        <label className='w-checkbox checkbox-field'><input type="checkbox" name="Checkbox-1" style={{ width: "16px", height: "16px" }}></input>
                                            <span for="Web-App" class="checkbox-select w-form-label">{key}</span>
                                        </label>
                                    ))
                                }

                            </div>
                            <input type="submit" value={btn} data-wait="Please wait..." className="button button-form w-button" style={{ padding: "15px", borderRadius: "5px" }}></input>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Contact;