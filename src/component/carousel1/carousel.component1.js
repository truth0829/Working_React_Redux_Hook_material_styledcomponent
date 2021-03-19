import React from "react";
import './carousel.component1.css';
import png1 from './assets/indian-chef-png-6.png';
import png3 from './assets/images.jfif';
import png2 from './assets/DS-950-850-14-534x547.jpg';
import png4 from './assets/images (1).jfif';
import png5 from './assets/12.png';

export default function CarouselComponent() {
    return (
        <div className="aboutteam">
            <div className = 'team_container1'>
                <div className = 'team_container'>
                    <div className = 'first_man'>
                        <div className = "md"><img className = 'man_img' src = {png1} /></div>
                        <div className = "md">
                            <div className = 'man_detail'>
                                <h1>Jack</h1>
                                <p>12/03/1983, Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'first_man'>
                        <div className = "md"><img className = 'man_img' src = {png2} /></div>
                        <div className = "md">
                            <div className = 'man_detail'>
                                <h1>Irina</h1>
                                <p>21/11/2011, Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'first_man' style={{marginLeft: '50%', transform: 'translate(-50%)'}}>
                    <div className = "md"><img className = 'man_img' src = {png3} /></div>
                    <div className = "md">
                        <div className = 'man_detail'>
                            <h1>Nick</h1>
                            <p>02/04/2019, Headere Chef</p>
                        </div>
                    </div>
                </div>
                <div className = 'team_container'>
                    <div className = 'first_man'>
                        <div className = "md"><img className = 'man_img' src = {png4} /></div>
                        <div className = "md">
                            <div className = 'man_detail'>
                                <h1>Angel</h1>
                                <p>15/09/2014, Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className = 'first_man'>
                        <div className = "md"><img className = 'man_img' src = {png5} /></div>
                        <div className = "md">
                            <div className = 'man_detail'>
                                <h1>Anna</h1>
                                <p>12/08/2001, Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}