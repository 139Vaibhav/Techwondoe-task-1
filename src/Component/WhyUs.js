import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { client } from "../client";
import '../CSS/WhyUs.css';

function WhyUs() {

    const [content, setContent] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'whyUs' }).then((res) => {
            console.log("response is", JSON.stringify(res));
            let data = res.items;
            let arr_title = [];
            let arr_content = [];
            for (let i = 0; i < data.length; i++) {
                arr_title.push(data[i].fields['title']);
                let content_size = data[i].fields['content'].length;
                for (let j = 0; j < content_size; j++) {
                    arr_content.push(data[i].fields['content'][j]);
                }
            }
            setContent(arr_content);
            setTitle(arr_title);
            console.log(arr_content);
        }).catch(console.error)
    }, [])

    let w = window.innerWidth;

    return (
        <div className="why-us">

            <h4 id="w-node-_5fa3fe10-3529-9222-d66d-e0b335540410-059e42a0" className="sub-small-title text-align-centre-mobile" style={{ marginLeft: "1%" }}>why us?</h4>
            <Container>
                {w > 479 ? (
                    <>
                        <Row>
                            <Col xs={4} style={{ marginTop: "3%" }}>
                                <h3 id="w-node-_6915f596-ee2f-a9cb-3104-5d33898f65ba-059e42a0" className="display-2 text-align-cenre-mobile">{title[2]}</h3>
                            </Col>
                            <Col style={{ marginTop: "3%", marginLeft: "8%" }}>
                                <ul id="w-node-bb5121b2-3011-3a99-3e61-3a60f19e0068-059e42a0">
                                    <li>
                                        {content[5]}
                                    </li>

                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} style={{ marginTop: "3%" }}>
                                <h3 id="w-node-_6915f596-ee2f-a9cb-3104-5d33898f65ba-059e42a0" className="display-2 text-align-cenre-mobile">{title[1]}</h3>
                            </Col>
                            <Col style={{ marginTop: "3%", marginLeft: "8%" }}>
                                <ul id="w-node-bb5121b2-3011-3a99-3e61-3a60f19e0068-059e42a0">
                                    <li>
                                        {content[3]}
                                    </li>
                                    <li>
                                        {content[4]}
                                    </li>

                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} style={{ marginTop: "3%" }}>
                                <h3 id="w-node-_6915f596-ee2f-a9cb-3104-5d33898f65ba-059e42a0" className="display-2 text-align-cenre-mobile">{title[0]}</h3>
                            </Col>
                            <Col style={{ marginTop: "3%", marginLeft: "8%" }}>
                                <ul id="w-node-bb5121b2-3011-3a99-3e61-3a60f19e0068-059e42a0">
                                    <li>
                                        {content[0]}
                                    </li>
                                    <li>
                                        {content[1]}
                                    </li>
                                    <li>
                                        {content[2]}
                                    </li>

                                </ul>
                            </Col>
                        </Row>
                    </>
                ) : (
                    <>

                        <div style={{ marginTop: "3%" }}>
                            <h3 id="w-node-_6915f596-ee2f-a9cb-3104-5d33898f65ba-059e42a0" className="display-2 text-align-cenre-mobile">{title[2]}</h3>
                        </div>

                        <div style={{ marginTop: "3%" }}>
                            <ul id="w-node-bb5121b2-3011-3a99-3e61-3a60f19e0068-059e42a0">
                                <li>
                                    {content[5]}
                                </li>

                            </ul>
                        </div>

                        <div style={{ marginTop: "3%" }}>
                            <h3 id="w-node-_6915f596-ee2f-a9cb-3104-5d33898f65ba-059e42a0" className="display-2 text-align-cenre-mobile">{title[1]}</h3>
                        </div>

                        <div style={{ marginTop: "3%" }}>
                            <ul id="w-node-bb5121b2-3011-3a99-3e61-3a60f19e0068-059e42a0">
                                <li>
                                    {content[3]}
                                </li>
                                <li>
                                    {content[4]}
                                </li>

                            </ul>
                        </div>

                        <div style={{ marginTop: "3%" }}>
                            <h3 id="w-node-_6915f596-ee2f-a9cb-3104-5d33898f65ba-059e42a0" className="display-2 text-align-cenre-mobile">{title[0]}</h3>
                        </div>

                        <div style={{ marginTop: "3%" }}>
                            <ul id="w-node-bb5121b2-3011-3a99-3e61-3a60f19e0068-059e42a0">
                                <li>
                                    {content[0]}
                                </li>
                                <li>
                                    {content[1]}
                                </li>
                                <li>
                                    {content[2]}
                                </li>

                            </ul>
                        </div>

                    </>
                )}
            </Container>
        </div>
    )
}

export default WhyUs;