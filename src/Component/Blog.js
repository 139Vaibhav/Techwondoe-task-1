import React, { useState, useEffect } from 'react';
import { client } from "../client";
import '../CSS/Blog.css'

function Blog() {

    const [data, setData] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blog' }).then((res) => {
            // console.log("response is", JSON.stringify(res));
            let temp_arr = [];
            for (let i = 0; i < res.items.length; i++) {
                let temp_data = {
                    id: res.items[i].fields['id'],
                    imagelink: res.items[i].fields['imagelink'],
                    btn: res.items[i].fields['btn'],
                    date: res.items[i].fields['date'],
                    title: res.items[i].fields['title'],
                    text: res.items[i].fields['text'],
                    readmore: res.items[i].fields['readmore'],
                };
                temp_arr.push(temp_data);
            }
            setData(temp_arr);
        }).catch(console.error)
    }, [])

    return (
        <div className='blog wf-section'>
            <div className='div-block-4'>
                <div className='max-w-width'>
                    <h4 className="sub-small-title">Blog</h4>
                    <h3 className="centered-display">Sharing our thoughts.
                        <span className="text-gradient"></span>
                        <br />
                    </h3>
                </div>
            </div>

            <div className='w-dyn-list'>
                <div className='blog-grid w-dyn-items'>
                    {/* The loop wil come here */}
                    {
                        data.map((key) => {
                            return (
                                <div className='w-dyn-item'>
                                    <div>
                                        <img src={key['imagelink']} className='blog-image w-inline-block' alt=""></img>
                                        <div className='blog-content'>
                                            <div className='card-meta-content'>
                                                <a href="/blog-category/culture" className="category-tag">{key['btn']}</a>
                                                <div className="card-meta-date">{key['date']}</div>
                                            </div>
                                            <a href="/blog/kindness-driven-development" className="link-block w-inline-block"><h3 className="heading-3" style={{ textAlign: "left" }}>{key['title']}</h3></a>
                                            <p className='paragraph-5' style={{ textAlign: "left" }}>
                                                {key['text']}
                                            </p>
                                            <a href="/#" className="link text-link-red">{key['readmore']}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Blog;