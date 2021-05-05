import React from "react";
import { useStyles } from 'react-styles-hook';

import ProfilePic from '../../assets/images/pages/therapist/profile_pic.png';
import FocusedImg from '../../assets/images/signup/Focused_Icon.png'
import MarvinImg from '../../assets/images/signup/Marvin.png'
import GroupImg from '../../assets/images/signup/Group.png'
import WarmImg from '../../assets/images/signup/Warm.png'
import {
    CardsContainer,
    Tilte,
    CardBox,
    Card,
    RCT,
    RCText,
    RCTitle,
} from './styles'

export default function DashboardProfile() {
    const styles = useStyles({
        container: {
            width: "606px",
            height: "auto",
            background: 'linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6',
            boxShadow: '-22px -22px 66px #FFFFFF, 22px 22px 66px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4)',
            borderRadius: '16px',
            padding: '48px 53px'
        },
        disp: {
            display: 'flex',
            alignItems: 'center'
        },
        dispflex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        h3restyle: {
            fontFamily: 'Syne',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '19px',
            lineHeight: '23px',
            color: "#333333",
            marginLeft: '16px'
        },
        message_btn: {
            width: '154px',
            height: '49px',
            background: 'linear-gradient(303.64deg, rgba(255, 255, 255, 0.4) 16.13%, rgba(0, 0, 0, 0.4) 132.9%), linear-gradient(326.75deg, #6ADCB3 -14.42%, #6ACCDC 99.59%)',
            backgroundBlendMode: 'soft-light, normal',
            boxShadow: '8px 8px 16px rgba(106, 204, 220, 0.3), -4px -4px 16px #FFFFFF, 4px 4px 12px rgba(202, 223, 219, 0.7)',
            borderRadius: '75px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            fontFamily: 'Syne',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#FEFEFE',
            marginTop: '10px'
        },
        special: {
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
        },
        specialTop: {
            marginTop: '30px'
        },
        lightfont: {
            fontWeight: 'normal'
        },
        condescrip: {
            marginTop: '8px'
        }
    })

    const CardData1 = [
      {
        icon: MarvinImg,
        text: 'No Preference Saved',
        title1: 'Therapist directs sessions',
        title2: 'Vs. Client direction',
      },
      {
        icon: GroupImg,
        text: 'No Preference Saved',
        title1: 'Emotional Intensity',
        title2: 'Vs. Emotionally Reserved',
      },
    ]

    const CardData2 = [
        {
          icon: FocusedImg,
          text: 'No Preference Saved',
          title1: 'Focused on The past',
          title2: 'Vs. The present',
        },
        {
          icon: WarmImg,
          text: 'No Preference Saved',
          title1: 'Provide warm support',
          title2: 'Vs. A focused challenge',
        },
    ]

    return (
        <div style={styles.container}>
            <div style={styles.dispflex}>
                <div style={styles.disp}>
                    <img src={ProfilePic} />
                    <h3 style={styles.h3restyle}>
                        Dr. Susie Quermier (she/her) <br/> Los Angeles, California <br/> (310) 987-9009
                    </h3>
                </div>
                <div style={styles.message_btn}>Send Message</div>
            </div>
            <div style={Object.assign({}, styles.special, styles.specialTop)}>Specialties: <span style={styles.lightfont}>Depression, Anxiety</span></div>
            <div style={Object.assign({}, styles.special, styles.specialTop)}>
                <div>Bio</div>
                <div style={Object.assign({}, styles.lightfont, styles.condescrip)}>
                    I've had a very varied client population and have spent a lot of time working with medical professionals. I work now at a clinic in the Los Angeles area and deeply understand the culture and lifestyle.
                </div>
            </div>
            <div style={Object.assign({}, styles.special, styles.specialTop)}>
                <div>Experience With Healthcare Workers</div>
                <div style={Object.assign({}, styles.lightfont, styles.condescrip)}>
                    I've had a very varied client population and have spent a lot of time working with medical professionals. I work now at a clinic in the Los Angeles area and deeply understand the culture and lifestyle.
                </div>
            </div>
            <CardsContainer>
                <Tilte>Therapist Preferences</Tilte>
                    <CardBox>
                    {CardData1.map((item, ind) => (
                        <Card key={ind} className={'color'+ind}>
                            <RCT>
                                <img src={item.icon} />
                                <RCText>{item.text}</RCText>
                            </RCT>
                            <RCTitle>{item.title1}</RCTitle>
                            <RCTitle>{item.title2}</RCTitle>
                        </Card>
                    ))}
                    </CardBox>
                    <CardBox>
                    {CardData2.map((item, ind) => (
                        <Card key={ind} className={'color'+(ind+2)}>
                            <RCT>
                                <img src={item.icon} />
                                <RCText>{item.text}</RCText>
                            </RCT>
                            <RCTitle>{item.title1}</RCTitle>
                            <RCTitle>{item.title2}</RCTitle>
                        </Card>
                    ))}
                    </CardBox>
            </CardsContainer>
        </div>
    )
}