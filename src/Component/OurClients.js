import React, { useState, useEffect } from 'react';
import { client } from "../client";
import '../CSS/OurClients.css';

function OurClients() {

    const [title, setTitle] = useState("");
    const [imagelink, setImageLink] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'ourClients' }).then((res) => {
            console.log("response is", JSON.stringify(res));
            setImageLink(res.items[0].fields['imagelink'])
            setTitle(res.items[0].fields['title'])
        }).catch(console.error)
    }, [])

    let row = 0;

    const arrayBlock = (imagelink, x) => {
        const array = imagelink.slice();
        const blocks = [];
        while (array.length) blocks.push(array.splice(0, x));
        return blocks;
    };
    let w = window.innerWidth;
    if (w > 479) {
        if (imagelink.length >= 4) { row = 4 } else { row = imagelink.length }
    }
    else {
        if (imagelink.length >= 2) { row = 2 } else { row = imagelink.length }
    }
    return (
        <div className='clients'>
            <div className='grid-10'>
                <h1 id="w-node-ead019a9-a0e2-8df5-e85d-dd044c73481c-059e42a0" className="display-2" style={{ textAlign: "center" }}>{title}</h1>
                {arrayBlock([...Array(imagelink.length).keys()], row).map((row, i) => (


                    <div key={i} className="row justify-content-center mt-5">
                        {row.map((value, i) => (
                            <>
                                {w > 479 ? (
                                    <div key={i} className="col-3">
                                        <img src={imagelink[value]} style={{ maxHeight: "60px" }} alt=""></img>
                                    </div>
                                ) : (
                                    <div key={i} className="col">
                                        <img src={imagelink[value]} style={{ maxHeight: "60px" }} alt=""></img>
                                    </div>
                                )}

                            </>
                        ))}
                    </div>


                ))}
            </div>
        </div>

    )
}

export default OurClients;
