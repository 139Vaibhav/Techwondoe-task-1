import React, { useState, useEffect } from "react";
import { client } from '../client';
import '../CSS/Footer.css';

function Footer() {

    const [imagelink, setImageLink] = useState("");
    const [section, setSection] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'footer' }).then((res) => {
            console.log("response from footer is", JSON.stringify(res));
            setImageLink(res.items[0].fields.imagelink);
            setSection(res.items[0].fields.sections)
        }).catch(console.error)
    }, [])

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-grid text-align-centre-mobile">
                    <div id="w-node-fb1d1d83-3ead-f17c-375d-15d6bd2a400b-bd2a4008" className="footer-logo">
                        <img src={imagelink} loading="lazy" width="200" alt=""></img>
                    </div>
                    <div id="w-node-_9545122f-e6de-fd24-6545-906eeeba7526-bd2a4008" className="align-right">
                        <a href="https://www.linkedin.com/company/techwondoe" className="text-link text-link-margin">
                            LinkedIN
                        </a>
                        <a href="mailto:hello@techwondoe.com" className="text-link text-link-margin">
                            Hello@techwondoe.com
                        </a>
                    </div>
                    <div id="w-node-_389b75b3-1dd5-f548-444c-a9f38edcdc8e-bd2a4008" class="div-block-2">

                        {section.map(key => (
                            <a href="/#" className="text-link text-link-margin">
                                {key}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <a href="#Top" style={{ transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="go-top w-inline-block">
                <img src="https://uploads-ssl.webflow.com/602ceee1cc4788ef7fdd0ea4/602ceee1cc4788a686dd0fd7_icons8-sort-down%20(1).svg" width="20" alt="Scroll To Top"></img>

            </a>
        </div>
    )
}

export default Footer;