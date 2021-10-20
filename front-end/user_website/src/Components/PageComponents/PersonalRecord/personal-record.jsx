import React from "react";

import './personal-record.css'

import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

function PersonalRecord() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
               <h1>Record</h1>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>STT</th>
                      <th>Game</th>
                      <th>Date-time</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Xep Hinh</td>
                      <td>5/10/2021</td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ban sung</td>
                      <td>5/10/2021</td>
                      <td>3500</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Ban ga</td>
                      <td>5/10/2021</td>
                      <td>15000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Thoi trang</td>
                      <td>5/10/2021</td>
                      <td>18000</td>
                    </tr>
                    <tr>
                    <td>5</td>
                      <td>Dua xe</td>
                      <td>5/10/2021</td>
                      <td>18000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PersonalRecord;
