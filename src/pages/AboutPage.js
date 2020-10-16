import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            {/* <img src={profile} alt="profile"></img> */}

            <Content>
            <h3>Personal Details</h3>
            <p>
                Full Name	            :	Melinda Utami <br/>
                Place, Date of Birth	:	Banyumas, 19 August 1999<br/>
                Address	                :	Purwokerto, 53176<br/>
                E-mail	                :	melindautamii10@gmail.com<br/>

            </p>
            <br />
            <h3>Educational Background</h3>
            <p>
                20017-Now	:	S1 Informatika Institut Teknologi Telkom Purwokerto <br/>
                2015-2017	:	SMK TELKOM PURWOKERTO <br/>
                2012-2015	:	SMPN 1 WANGON <br/>
                2006-2012	:	SDN 4 WANGON <br/>
            </p>
            <br />
            <h3>Experience</h3>
            <p>
                1. Web Developer Internship at CV Ultranesia <br />
                2. Laboratory Asistant at Computer Networking Laboratory<br />
                3. Digital System Lab Asistant at Digital and Electrical Laboratory <br /> 
            </p>
            <h3>Skills</h3>
            <p>
                1. Computer Networking <br />
                2. Web Development (HTML, CSS, PHP, CodeIgniter, etc)<br />
            </p>
            <br />
            <h3>Certification</h3>
            <p>
                1. Full Stack Web Developer CodePolitan<br />
                2. Front end web Developer Dicoding<br />
                3. Cisco CCNA (CCNA 1, 2, 3)<br />
                4. Mikrotik MTCNA <br />
            </p>
            <br />


            </Content>
            
        </div>
    );

}

export default AboutPage;