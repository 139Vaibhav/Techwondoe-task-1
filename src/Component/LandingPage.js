import React, { useState, useEffect } from 'react';
import { client } from '../client';
import '../CSS/LandingPage.css';

function LandingPage() {

    const [subTitle, setSubTitle] = useState("");
    const [title, setTitle] = useState("");
    const [btn1, setBtn1] = useState("");
    const [btn2, setBtn2] = useState("");

    useEffect(() => {
        client.getEntries({ content_type: 'landingPage' }).then((res) => {
            console.log("response is", JSON.stringify(res));
            setSubTitle(res.items[0].fields.subtitle);
            setTitle(res.items[0].fields.title)
            setBtn1(res.items[0].fields.btn1)
            setBtn2(res.items[0].fields.btn2)
        }).catch(console.error)
    }, [])


    return (
        <div className="hero hero-home" id='Top'>
            <div className="container">
                <h4 className="sub-small-title">{subTitle}</h4>

                <h1 className="display-1">
                    {title.substring(0, 16)}
                    <br />
                    {title.substring(17)}
                    <span className="text-gradient">.</span>
                </h1>

                <div className="margin-80px">
                    <div className="button-flex">
                        <a href="/contact" className="button w-button" style={{ padding: "15px 30px 14px", borderRadius: "5px" }}>{btn1}</a>
                        <div class="horizontal-divider"></div>
                        <a href="/case-studies" className="button button-line w-button" style={{ padding: "15px 30px 14px", borderRadius: "5px" }}>{btn2}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;