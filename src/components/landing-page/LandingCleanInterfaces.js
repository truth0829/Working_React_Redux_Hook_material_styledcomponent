// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import lime from '@material-ui/core/colors/lime';
//
import Carousel from 'react-multi-carousel';
//
import Avatar from '@material-ui/core/Avatar';
import { Icon } from '@iconify/react';
import starIcon from '@iconify-icons/el/star';
//
import { varFadeInUp, MotionInView } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));

//
const sliderData = [
  {
    image: '/static/home/eventreview1.jpg',
    image1: '/static/home/userreview1.jpg',
    desc:
      'TuliA.com is the best site that find the service. I used this site at my wedding day and really it had the most helpful. I recommend this platform for all the users. Thank you.',
    icon: '/static/home/reveiw.jpg',
    name: 'Sornny',
    reviews: '99',
    stars: [
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      }
    ]
  },
  {
    image: '/static/home/eventreview2.jpg',
    image1: '/static/home/userreview2.jpg',
    desc:
      'Finally, I have found the best teacher to teach mathematics for my son, Adam, using TuliA.com. Thank you so much. I will use this platform again.',
    icon: '/static/home/reveiw.jpg',
    name: 'Keirra',
    reviews: '99',
    stars: [
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: grey[500]
      },
      {
        starColor: grey[500]
      }
    ]
  },
  {
    image: '/static/home/eventreview3.jpg',
    image1: '/static/home/userreview3.jpg',
    desc:
      'Amazing! I had my travel service quicky. It was fast and quality. All the users, please use this platform. Maybe you will get perfect service.',
    icon: '/static/home/reveiw.jpg',
    name: 'Jackson',
    reviews: '99',
    stars: [
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: grey[500]
      }
    ]
  },
  {
    image: '/static/home/eventreview4.jpg',
    image1: '/static/home/userreview4.jpg',
    desc: 'Good! It really was safe and comfortable for me. Thank you',
    icon: '/static/home/reveiw.jpg',
    name: 'Saria',
    reviews: '99',
    stars: [
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: lime[500]
      },
      {
        starColor: grey[500]
      },
      {
        starColor: grey[500]
      }
    ]
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SliderStyle = styled('div')(() => ({
  width: 'auto',
  height: 'auto',
  margin: 10,
  marginBottom: 70,
  borderRadius: 10,
  boxShadow: '0 8px 11px 0 rgb(0 0 0 / 64%)'
}));

const ImageStyle = styled('img')(() => ({
  width: 'auto',
  height: 'auto',
  borderRadius: '10px 10px 0 0'
}));

const Dot = styled('div')(() => ({
  width: 20,
  height: 20,
  borderRadius: 50,
  margin: 10,
  cursor: 'pointer',
  backgroundColor: grey[500],
  '&.active': {
    backgroundColor: red[500]
  }
}));

const CustomDot = ({ onClick, active }) => (
  <Dot onClick={() => onClick()} className={active ? 'active' : ''} />
);

// ----------------------------------------------------------------------

export default function LandingCleanInterfaces() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              sx={{ color: 'text.secondary', display: 'block' }}
            >
              our review
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography variant="h2" paragraph>
              FURTURED VENDORS
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Carousel
              draggable={false}
              responsive={responsive}
              showDots
              infinite
              customDot={<CustomDot />}
            >
              {sliderData.map((item, index) => (
                <SliderStyle key={index}>
                  <ImageStyle src={item.image} />
                  <Typography
                    sx={{
                      textAlign: 'center',
                      padding: '20px 10px',
                      minHeight: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Grid
                    container
                    justifyContent="space-around"
                    sx={{
                      backgroundColor: red[500],
                      color: '#fff',
                      padding: '40px 10px',
                      borderRadius: '0 0 10px 10px'
                    }}
                  >
                    <Avatar
                      alt="teacher"
                      src={item.image1}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Grid item xs={6}>
                      <Typography>{item.name}</Typography>
                      <Grid container item xs={7} color={grey[900]}>
                        {item.stars.map((staritem, key) => (
                          <Icon
                            key={key}
                            icon={starIcon}
                            color={staritem.starColor}
                            sx={{ margin: '10px', width: 150, height: 150 }}
                          />
                        ))}
                      </Grid>
                      <Typography>({item.reviews} reviews)</Typography>
                    </Grid>
                  </Grid>
                </SliderStyle>
              ))}
            </Carousel>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
