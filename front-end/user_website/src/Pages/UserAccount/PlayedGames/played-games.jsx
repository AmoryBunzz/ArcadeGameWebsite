import React from "react";

import './played-games.css'

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

import logo from '../../../Assets/Images/App/app-logo.png';

function PlayedGames() {
  return (
    <>
        <div className="content">
        <Row>
        <Col className="12">
            <Card>
            <CardHeader>
            <h1 className="title">Game Played</h1>
            </CardHeader>
            <CardBody>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                <img src={require(logo).default} className="game-img" alt="" />
                <div className="caption">
                    <h3>name</h3>
                    <p>
                    <a href="/" className="btn btn-default">Play</a>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                <img src={require(logo).default} className="game-img" alt="" />
                <div className="caption">
                    <h3>name</h3>
                    <p>
                    <a href="/" className="btn btn-default">Play</a>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                <img src={require(logo).default} className="game-img" alt="" />
                <div className="caption">
                    <h3>name</h3>
                    <p>
                    <a href="/" className="btn btn-default">Play</a>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                <img src={require(logo).default} className="game-img" alt="" />
                <div className="caption">
                    <h3>name</h3>
                    <p>
                    <a href="/" className="btn btn-default">Play</a>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                <img src={require(logo).default} className="game-img" alt="" />
                <div className="caption">
                    <h3>name</h3>
                    <p>
                    <a href="/" className="btn btn-default">Play</a>
                    </p>
                </div>
                </div>
            </div>
            </CardBody>
            </Card>
        </Col>
        </Row>
        </div>
    </>
  );
}

export default PlayedGames;
