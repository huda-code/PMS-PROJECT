

import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
// import { img1 } from './utils/icon'
// import { img2 } from './utils/icon'
// import { img3 } from './utils/icon'
// import { img4 } from './utils/icon'
import "./Home.css"
import { Link } from "react-router-dom"
function Home () {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className='frame1' > Know your students
                    Progress, <br />
                    Evaluate just in one click. </h1>
                <p className='head'>Transforming the traditional way of calulating the progress of your child. </p>
                <div className="container">
                    <h2 className="img1"></h2>
                    {/* <center><img src={img1} alt=" " style={{marginTop:"30px"}} /></center> */}
                </div>
                {/* <div className='flex-box'> */}
                    {/* <div className="container">
                        <h2 className="img1"></h2>
                        <center><img src={img1} alt=" " style={{ marginTop: "30px" }} /></center>
                    </div>
                    <div>
                        <form className='form-login'>
                            <label htmlFor="email"><b>Email : </b></label><br />
                            <input type="email" name="email" autoComplete="off" required /><br />
                            <label htmlFor="password"><b> Password : </b></label><br />
                            <input type="password" name="password" autoComplete="off" required /><br />
                            <input type="submit" value="Login" />
                        </form>
                        <p> no account? please signup<b> <Link to="/signup">Sign Up</Link></b></p>
                    </div> */}
                    <div>
                        <h2 id="aboutH" className='aboutH' >  About Us
                            <br /></h2>
                        <p className='about'>With millions of students appearing for tests and exams on a monthly and<br />
                            yearly basis, there is a constant influx of data in terms of result. The data is<br />
                            constantly uploaded on the Google Sheets which can be retrieved and<br />
                            accessed by the student during the academic year.<br />
                            The software is scalable and hence has the ability to store tons of data. The
                            <br />
                            Teachers can manage and maintain the exam data analysis, score section analysis, pass rate.<br />
                            Even Parents can access the progress sheets of their childerns.</p>
                    </div>
                    <div className='login'>
                        <h1 className='frame2' >
                            <b>Login as a<br /> Student</b><br /></h1>
                        <p className='down'>Login with your School<br /> Admission ID </p>
                        <h2 className='img2'></h2>
                        {/* <img src={img2} alt=" " style={{ height: "300px", paddingLeft: "450px", marginTop: "-220px", }} /> */}
                    </div>
                    <div>
                        <h1 className='frame4' >
                            Get your
                            <br /> progress<br />
                            sheet <br />
                            in just 1 click <br /></h1>
                        <p className='frame4sub'> Get Individual<br />
                            marks/Progress of your<br />
                            Child<br /></p>
                        <h2 className="img3"></h2>
                        {/* <img src={img3} alt=" " style={{ height: "300px", paddingLeft: "1000px", marginTop: "-420px" }} /> */}
                    </div>
                    <div>
                        <h1 className='frame3' >
                            Get the
                            <br /> Weekly<br />
                            Performance <br />
                            Graph <br /></h1>
                        <p className='frame3sub'>Get Weekly, Monthly and<br />
                            over-all Performance Graph<br />
                            to evaluate the progress.<br /></p>
                        <h2 className="img4"></h2>
                        {/* <img src={img4} alt=" " style={{ height: "400px", paddingLeft: "400px", marginTop: "-360px" }} /> */}
                    </div>
                    <div>
                        <h3 className='dashboard'>Dashboard<br /></h3>
                        <p className='dashpara'>The software has in-built dashboards which offer details regarding the<br />
                            number of students attending the test, number of online tests conducted,<br />
                            the number of questions, etc. to guide the administrator to focus on important areas. Teachers and students both can use the filter panel on<br />
                            the dashboard which enables them to easily navigate the <br />
                            data with their own <br />
                            criteria, giving more control and flexibility. The teacher can create graphical <br />
                            and engaging reports which give them a 360° view of the student, which<br />
                            helps the teachers to understand the learning gaps and accordingly improve <br />
                            the student learning outcome<br /></p>
                    </div>
                    <Footer />
                </div>
            </div>
        
    )
}
export default Home;