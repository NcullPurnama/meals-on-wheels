import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { banner3 } from "../../assets";
import Regis from "../../component/Forms/regis"

import './Form.css';

const FormRegister = () => {

    return (

        <div className="container col-12 col-sm-8 col-lg-6 d-flex justify-content-center">
            <div className="card m-5 card-donate ">
                <Regis/>
            </div>
        </div>

    );
}

export default FormRegister;