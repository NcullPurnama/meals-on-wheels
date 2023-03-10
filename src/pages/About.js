import { Col, Row } from "react-bootstrap";
import Layout from "../component/Layout/Layout";

import './css/About.css';

const AboutPage = () => {
    return (
        <Layout>
            {/* <div className="hero animate__animated animate__fadeIn">
                <img src={herobg1} alt="hero" />
                <h1>About Us</h1>
            </div> */}
            <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" bis_skin_checked="1">
                    <div className="col-lg-6 animate__animated animate__fadeInLeftBig" bis_skin_checked="1">
                        <p>Lorem ipsum dolor sit amet tincidunt turpis per. Augue convallis sem taciti penatibus semper etiam magnis pulvinar malesuada. Si vivamus integer elit tempor nulla lorem magna erat porta ipsum. Ligula interdum scelerisque mi pulvinar gravida. Integer conubia proin tortor montes felis aliquam letius purus. Massa gravida taciti pharetra ante curae bibendum. Pretium metus sed dignissim viverra consequat diam. Praesent hac est curabitur eu non justo porta tincidunt.
                            <br /> <br />
                            Aliquet curabitur tempor volutpat suscipit gravida laoreet viverra nisi ex. Arcu nisl molestie magnis fringilla feugiat scelerisque id rhoncus dis. Accumsan a nisl lorem ligula cursus etiam. Consequat enim tempor leo libero fringilla sagittis cursus magnis sapien massa.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container text-center pb-5 animate__animated animate__fadeInLeftBig">
                <h1 className="fw-bold">Our <span className="yellow">Mission</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis pariatur laborum qui cupiditate consequatur illum, est in distinctio possimus animi iure voluptates? Cupiditate, dolorum voluptate facilis et assumenda sunt sit.</p>
            </div>
            <div className="container text-center pb-5 animate__animated animate__fadeInRightBig">
                <h1 className="fw-bold">Our <span className="yellow">Vision</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis pariatur laborum qui cupiditate consequatur illum, est in distinctio possimus animi iure voluptates? Cupiditate, dolorum voluptate facilis et assumenda sunt sit.</p>
            </div>
            <div className="staff mb-5">
                <div className="container text-center py-5 animate__animated animate__fadeInUpBig">
                    <h1 className="fw-bold">Our <span className="yellow">Staff</span></h1>
                    <div className="hr-yellow-center mb-5"></div>
                    <Row>
                        
                    </Row>
                </div>
            </div>
        </Layout>
    );
}

export default AboutPage;