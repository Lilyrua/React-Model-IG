import React, { useState } from 'react';
import "./App.css";
import "./App"

export default function HomePage(props) {   

    return (
        <div className='Main'>
            <Post profile={props.profile[props.ran.Pran]} picpost={props.picpost[props.ran.Picran]} datat={props.datat} />
        </div>
    )
}




function Post(props) {
    const [love, setlike] = useState(props.datat.like);
    const [btn, setbtn] = useState(0);

    return (
        <div className="Post box">
            <div className='person'>
                <img src={props.profile.image} alt="not load"/> 
                <p>{props.profile.name}</p>
                <button id="re" onClick={function (z) {
                  window.location.reload(false);
                }}>Click to other picture..</button>
            </div>
            <div className='pic'>
                <img src={props.picpost} alt="not load" />
            </div>
            <div className="m-bar">
      
            
                <button id='like' onClick={function (e) {
                    e.preventDefault();
                    if (btn === 0) {
                        document.querySelector('#like').innerHTML = `
                        <svg id='like' xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>`;
                        setbtn(1);
                        setlike(love + 1);
                    }
                    else {
                        document.querySelector('#like').innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>`;
                        setbtn(0);
                        setlike(love - 1);
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </button>
            </div>
            <div>
            <p className='like'>ถูกใจ {love} คน</p>
            </div>
            <div className="url">
                <p><b>{props.profile.name}</b> บั๊กไม่มี บารมีไม่เกิด.. #คนเศร้าเขียนโค้ด</p>
            </div>
            <Comment datat={props.datat} />
        </div>
    )
}

function Comment(props) {

    const [comment, setcom] = useState(props.datat.comment);
    return (
        <>
            <div onClick={function (e) {
                e.preventDefault();
                alert("Sorry, This features is not yet available");
            }}>
                <p className='comment'>ดูความคิดเห็นทั้ง {comment} รายการ</p>
            </div>
            <div className="inp">
                <input id="txt" type="text" placeholder='เพิ่มความคิดเห็น...' onChange={function (e) {
                    e.preventDefault();
                    const sent = document.getElementById("sent");
                    let txt = document.getElementById("txt").value;

                    if (isNaN(txt)) {
                        sent.style.color = "#0089fa";
                    }
                    else {
                        sent.style.color = "#293268";
                    }
                }} />
                <button id="sent" onClick={function (e) {
                    e.preventDefault();
                    const sent = document.getElementById("sent");
                    let comt = document.getElementById("txt").value;

                    if (isNaN(comt)) {
                        setcom(comment + 1);
                        document.getElementById("txt").value = "";
                        sent.style.color = "#293268";
                        alert(`ขอบคุณที่คอมเมนต์`);
                    }

                }}>โพสต์</button>
            </div>
        </>
    )
}
