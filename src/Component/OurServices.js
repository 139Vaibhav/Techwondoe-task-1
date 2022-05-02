import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { client } from "../client";
import '../CSS/OurServices.css'

function OurServices() {

    const [subTitle, setSubTitle] = useState("");
    const [title, setTitle] = useState("");
    const [btn, setBtn] = useState("");
    const [content, setContent] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'ourServices' }).then((res) => {
            console.log("response is", JSON.stringify(res));
            setSubTitle(res.items[0].fields.subtitle);
            setTitle(res.items[0].fields.title)
            setBtn(res.items[0].fields.btn)
            setContent(res.items[0].fields.content)
        }).catch(console.error)
    }, [])

    return (
        <div className="our-services wf-section">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="home-our-services">
                            <h4 className="sub-small-title text-align-centre-mobile">{subTitle}</h4>
                            <h3 className="display-2 text-align-cenre-mobile">
                                {title.substring(0, 12)}
                                <br />
                                {title.substring(12)}
                                <span className="text-gradient">.</span>
                            </h3>
                            <div className="margin-50px tet-align-centre-mobile margin-mobile-60">
                                <ul className="list">
                                    {content.map(key => (
                                        <li>{key}</li>
                                    ))}
                                </ul>
                                <a href="/about" className="button button-line margin-20px w-button" target="_blank">{btn}</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <img id="w-node-_1fa41dc1-9865-90aa-e0f7-538e937b1879-059e42a0" className="image-4" loading="lazy" src="https://uploads-ssl.webflow.com/61151a6979644d46e49e429b/621162234072ac802d22e005_techwondoe-website.gif" alt=''>
                        </img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurServices;