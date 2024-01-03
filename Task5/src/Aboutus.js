import React from "react";
import img1 from "./images/aboutus.png"

const Aboutus=()=>{
    return(
        <div>
            <h1 style={{color:'#0d6efd',marginLeft:'4%',textAlign:'justify'}}>Paint Artist</h1>
            <hr/>
            <div className="aboutus">
            <h3>About Us</h3>
              <p>Paint Artist, founded in 2012, has been the largest and
                 most innovative online art platform in the country.
                 We are strong believers in the transformational power
                 of technology and have long been the pioneering art
                 entity in the country; bringing together artists, collectors,
                 dealers, galleries and resellers onto a single powerful
                 online platform. With a state of the art user experience,
                 and a leading edge art portal backed by some amazing analytics 
                 and data, we transform the art shopping experience, empower
                 artists, and provide a huge convenience for those who wish to re-sell their art.</p>
            </div>
            <img src={img1} className="aboutusmargin aboutusimg"/>
            <div className="aboutus">
            <p>Founded a decade ago, Paint Artist was ahead of its time, bringing
                 to the art world a number of 'firsts'. It was the first platform
                 to democratize the art buying process, while also empowering the
                 artist; the first platform with a completely transparent pricing
                 and purchase process; the first platform to proactively help collectors
                 re-sell their art. It was the first portal to bring on board galleries
                 and dealers, art critics and writers alike – to bring art to every home.
                 It is now also the first art portal in the country to be backed by cutting-edge
                 technology and data to drive its unique art selection and display process</p>
            </div>
            <div className="aboutus abt">
            <div className="about">
             <h3 className="aboutusmargin">Our Team</h3>
             <p>Paint Artist was started by a small team of people who believed 
                the art world experience would thrive online. We have grown
                to become a revolutionary international service that puts
                the best of Indian art and collectibles at your fingertips
                to explore, engage with and bring home.</p>
             </div>
             <div className="about">
             <h3 className="aboutusmargin">Our  mission</h3>
             <p>Our mission is to nurture and promote emerging artists
                side-by-side with masters of their field and create a unique,
                cutting-edge viewing experience with always-on international
                exhibitions, guest curations, gallery partnerships and daily
                updated videos and blogs that explore the ecology of the vibrant
                world of Indian art & collectibles in a fun and engaging way.</p>
             </div>
            </div><br/><br/>
        </div>
    )
}
export default Aboutus;