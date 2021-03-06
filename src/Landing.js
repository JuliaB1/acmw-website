import React from 'react';
import './Landing.css';
import Officer from './Officer.js';
import Zoom from "react-reveal/Zoom"

const officers = [
  {
    name: "Julia Baylon",
    role: "President",
    image: "/img/julia1.jpg",
  },
  { name: "Cindy Zhang", role: "Vice President", image: "/img/cindy.jpg" },
  { name: "Monica Bellare", role: "Mentorship", image: "/img/monica.jpg" },
  { name: "Ruining Ding", role: "Mentorship", image: "/img/ruining1.png" },
  { name: "Lena O'Grady", role: "WESP/QWER Hacks", image: "/img/lena.jpg" },
  { name: "Preethi Kiruveedula", role: "External", image: "/img/preethi.jpg" },
  { name: "Lulu Wang", role: "External", image: "/img/lulu.jpg" },
  { name: "Ethan Wong", role: "Publicity", image: "/img/ethan.jpg" },
  { name: "Michelle Kim", role: "Day of Code", image: "/img/michelle.jpg" },
  { name: "Maggie Huang", role: "Finance", image: "/img/maggie.jpg" },
];

function Landing(){
  const officerMap = officers.map((officer, index)=>(
    <li key={index}>
      <Officer name={officer.name} role={officer.role} image={officer.image}/>
    </li>
  ));
  return (
    <div className="main flex flex-column">
      <img
        src={"/img/header_gradient_text.svg"}
        className="Header-img"
        alt=""
      />
      <Zoom>
        <div className="our-mission-section-div">
          <div className="section-header">Our Mission?</div>
          <div>
            We advocate for the inclusion of all groups in computer science!
          </div>
        </div>
      </Zoom>

      <div className="maintext-section-div">
        <div className="section-header">Events</div>
        <span className="event-title">
          Technical Interview Practice with SWE |{" "}
        </span>
        <span className="date-time"> Every Tuesday, 7-8pm PST </span>
        <div>
          ACM-W has joined forces with SWE to put on this fall Technical
          Interview Workshop series! Join us on Tuesday evenings @ 7PM PST for
          an hour of engaging in mock interviews, sharing your resume for
          feedback, and collaborating on LeetCode problems with peers. Hop in on
          any Tuesday you’d like, or join us for the entire series this fall
          quarter! Check out our{" "}
          <a href="https://www.facebook.com/events/365759064469868/">
            {" "}
            Facebook event
          </a>{" "}
          for more details.
        </div>
        <span className="event-title">Undergrad Mentorship Kickoff | </span>
        <span className="date-time"> Wednesday Oct 28th, 6-7:30pm PST </span>
        <div>
          Come meet your new ACM-W undergrad mentor family at kickoff! Log on
          October 28 @ 6-7:30pm (week 4) PDT to Zoom for a fun time full of
          introductions, bonding and games! You’ll C(++) why the W in ACM-W can
          stand for wonderful, (neural) network with us and hopefully help us
          find more CS puns.
        </div>
        <span className="event-title">Alumni Mentorship Kickoff | </span>
        <span className="date-time"> Wednesday Nov 4th, 6-7:30pm PST </span>
        <div>
          Join us over Zoom for an evening of intros, bonding, and networking
          with your new CS Alumni mentor! During ACM-W’s Alumni Mentorship
          Kickoff, you’ll have the opportunity to share experiences and gain
          advice from both your personal mentor as well as all of the students
          and alumni attending. Facebook event coming soon.
        </div>
        <span className="event-title">
          Human Capital Info/Networking Session |{" "}
        </span>
        <span className="date-time"> Monday Nov 16th, 6-5pm PST </span>
        <div>
          Interested in startups? Want to learn more about venture capital? Have
          no idea what that last thing is but think it sounds cool? Like
          watching Silicon Valley?? Come network with two amazing
          representatives from Human Capital, a company that specializes in
          both! We'll be having Gelila Asnake (the Director of University
          Talent) share her experiences as a director at Human Capital, and
          Peter Cetale (Principal) there to share his perspective and work with
          the company!
        </div>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <div
          className="section-header right-justify"
          style={{ paddingRight: "50px" }}
        >
          Officers
        </div>
        <div className="photo-grid space-evenly">{officerMap.slice(0, 5)}</div>
        <div className="photo-grid">{officerMap.slice(5)}</div>
        <div
          className="section-header"
          style={{ textAlign: "left", paddingTop: "50px" }}
        >
          Gallery
        </div>
        <div
          className="flex space-evenly"
          style={{
            flexDirection: "row",
            maxWidth: "1000px",
            paddingBottom: "50px",
          }}
        >
          <Zoom>
            <img src={"/img/zoom_heart2.png"} className="gallery-img" alt="" />
          </Zoom>
          <Zoom>
            <img src={"/img/IMG_0124.JPG"} className="gallery-img" alt="" />
          </Zoom>
          <Zoom>
            <img src={"/img/IMG_0131.JPG"} className="gallery-img" alt="" />
          </Zoom>
          <Zoom>
            <img src={"/img/IMG_0133.JPG"} className="gallery-img" alt="" />
          </Zoom>
          <Zoom>
            <img src={"/img/IMG_0134.JPG"} className="gallery-img" alt="" />
          </Zoom>
          <Zoom>
            <img src={"/img/IMG_0135.JPG"} className="gallery-img" alt="" />
          </Zoom>
        </div>
      </div>
      <div
        className="flex"
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "#1BC3A9",
          paddingTop: "50px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <a
            href="https://www.facebook.com/groups/uclaacmw"
            style={{ marginLeft: "45%" }}
          >
            <img src={"/img/FindUs-FB-RGB.svg"} className="facebook" alt="" />
          </a>
          <div style={{ textAlign: "center", color: "white" }}>
            uclaacmw@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;