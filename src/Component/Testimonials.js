import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import { client } from "../client";
import '../CSS/Testimonials.css';

function Testimonials() {

    const [data, setData] = useState([]);


    useEffect(() => {
        client.getEntries({ content_type: 'testimonial' }).then((res) => {
            console.log("response is", JSON.stringify(res));
            let temp_arr = [];
            for (let i = 0; i < res.items.length; i++) {
                let temp_data = {
                    id: res.items[i].fields['id'],
                    name: res.items[i].fields['name'],
                    subname: res.items[i].fields['subname'],
                    desc: res.items[i].fields['description'],
                    btn: res.items[i].fields['btn'],
                    link: res.items[i].fields['imagelink'],
                }
                temp_arr.push(temp_data);
            }
            setData(temp_arr);
        }).catch(console.error)
    }, [])

    return (
        <div className="testimonials wf-section">

            <div className="div-block-5">
                <h4 className="sub-small-title text-align-centre-mobile centered-sub-small-title">testimonials</h4>
                <h3 className="centered-display">What they're saying about us<span class="text-gradient">.</span></h3>
            </div>
            <div className="testimonials-wrapper">
                <Carousel prevIcon="" nextIcon="">
                    {
                        data.map((key) => {
                            return (
                                < Carousel.Item >
                                    <Container>
                                        <Row>
                                            <Col xs={3}>
                                                <div className="text-align-centre-mobile w-col w-col-3">
                                                    <div style={{ width: "140px", height: "140px", borderRadius: "100%", backgroundPosition: "50% 50%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}><img src={key['link']} style={{ width: "140px", height: "140px", borderRadius: "100%", backgroundPosition: "50% 50%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} alt=""></img></div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="text-align-centre-mobile w-col w-col-9">
                                                    <div className="align-center">
                                                        <div className="testimonials-name text-align-centre-mobile">
                                                            <br />
                                                            {key['name']}
                                                        </div>
                                                        <div className="testimonials-company text-align-centre-mobile">{key['subname']}</div>
                                                    </div>
                                                </div>
                                                <div className="testimonials-text text-align-centre-mobile">
                                                    {key['desc']}
                                                </div>
                                                <a href="/#" className="button w-button" style={{ padding: "15px 30px 14px", borderRadius: "5px", float: "left" }}>{key['btn']}</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div >
    )
}

export default Testimonials;