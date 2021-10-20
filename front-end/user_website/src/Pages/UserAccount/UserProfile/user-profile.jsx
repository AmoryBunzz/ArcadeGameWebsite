
import React from "react";

import './user-profile.css'

import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h1 className="title">Profile</h1>
              </CardHeader>
                <div className="row">
                <div className="col-md-3">
                  <h4>Full Name:</h4>
                </div>
                <div className="col-md-3 text-secondary">
                  <form>
                    <input type="text" name="fullname" />
                  </form>
                </div>
                </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h4>Sex:</h4>
                </div>
                <div className="col-md-9 text-secondary">
                  <input type="radio" value="Male" name="gender" /> Male
                  <input type="radio" value="Female" name="gender" /> Female
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h4>Date of birth:</h4>
                </div>
                <div className="col-md-9 text-secondary">
                  <input type="date" name="bday" />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h4>Email:</h4>
                </div>
                <div className="col-md-9 text-secondary">
                  <form>
                    <input type="text" name="email" />
                  </form>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h4>Phone:</h4>
                </div>
                <div className="col-md-9 text-secondary">
                  <form>
                    <input type="text" name="phone" />
                  </form>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h4>Password:</h4>
                </div>
                <div className="col-md-9 text-secondary">
                  <p>******************************</p>
                </div>
              </div>
              <CardFooter>
                <Button className="btn-save" color="primary" >
                  Save
                </Button>
                <Button className="btn-save" color="primary"  >
                  Change Password
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
