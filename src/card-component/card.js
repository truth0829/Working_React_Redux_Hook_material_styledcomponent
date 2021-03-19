import React, { Component } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView,
    MDBRotatingCard,
    MDBInput,
    MDBIcon,
    MDBCardImage
  } from "mdbreact";
import './card.scss';
import $ from 'jquery';
import { Tabs, Tab } from 'react-bootstrap';
import TabBtn from './notify-btn';
import TabBtn1 from './notify-btn1';

class Card extends React.Component {

    constructor () {
        super ();
    }

    render () {
        return (
            <div className = "card_container3">
                <div className = "card_title_container">
                    My Cart
                </div>
                <div className = "tab_content">
                    <Tabs>
                        <Tab eventKey = "first" title = {<TabBtn />}>
                            <MDBContainer className = "container">
                                <MDBRow>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg11" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 1.8</div>
                                                            <div className = "cafood_name">Cabbage</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg12" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 3.3</div>
                                                            <div className = "cafood_name">cucumber</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg13" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 7.7</div>
                                                            <div className = "cafood_name">Eggplant</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg14" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 23.5</div>
                                                            <div className = "cafood_name">Broccoli</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg15" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 13.9</div>
                                                            <div className = "cafood_name">Sweet Radish</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </Tab>
                        <Tab eventKey = "second"  title = {<TabBtn1 />}>
                            <MDBContainer className = "container">
                                <MDBRow>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg1" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 23.5</div>
                                                            <div className = "cafood_name">Cabbage</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg2" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 5.1</div>
                                                            <div className = "cafood_name">cucumber</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg3" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 27.1</div>
                                                            <div className = "cafood_name">Eggplant</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg4" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 14.8</div>
                                                            <div className = "cafood_name">Broccoli</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                    <MDBCol xd="3" lg="3" md="4" sm="6">
                                            <MDBView className = "card_view" waves>
                                                <div className = "check_delete">
                                                    <MDBIcon className = "del_icon" icon="trash-alt" />
                                                </div>
                                                <div className = "front">
                                                    <div id = "cardImg5" className = "card_img"></div>
                                                    <div className = "peach-gradient card_details">
                                                        <div className = "ca_detail">
                                                            <div className = "cafood_price">$ 23.1</div>
                                                            <div className = "cafood_name">Sweet Radish</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MDBView>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Card;