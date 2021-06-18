// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import { Icon } from '@iconify/react';
import checkCircle from '@iconify-icons/cil/check-circle';
//
import { varFadeInUp, MotionInView } from '../animate';

// ----------------------------------------------------------------------

const sectionData = [
  {
    image: '/static/aboutus/1.jpg',
    title: 'The best for every budget',
    description: (
      <span>
        Find high-quality services at every price point.
        <br />
        No hourly rates, just project-based pricing.
        <br />
        Tulia is the best service provider that deliver event service, general
        serevice, home and office service.
        <br />
        We strategists serve for Africain through our offices located in Africa.
        We are servicing over 20000+ customers in Africa.
        <br />
        You aren’t alone. We are here to provide all the service for you. We
        have helped for 5000+ customers over the past 3 years and look forward
        to partnering with you also.
      </span>
    )
  },
  {
    image: '/static/aboutus/2.jpg',
    title: 'Quality work done quickly',
    description: (
      <span>
        TuliA team is comprised of members who serve their passion for all need
        into service that fulfill.
        <br />
        Every individual on our team is dedicated to providing the most smart,
        clean, quality and quickly service that will boost your terms well above
        other competitors.
        <br />
        Serve everywhere.
      </span>
    ),
    direction: 'rtl'
  },
  {
    image: '/static/aboutus/3.jpg',
    title: 'Protected payments, every time',
    description: (
      <span>
        We serve with project-based pricing, every time and every place.
        <br />
        No hourly rate.
        <br />
        We provide Protected payments for you.
        <br />
        Only pay for work when it has been completed and you're 100% satisfied
        with the service quality using our payment system.
      </span>
    )
  },
  {
    image: '/static/aboutus/4.jpg',
    title: '24/7 support',
    description: (
      <span>
        We provide all the service with 27/7 for your life and business.
        <br />
        Please feel free to touch us.
        <br />
        We always are welcome anytime.
        <br />
        Always our awesome Customer Support Team is ready to assist you..
      </span>
    ),
    direction: 'rtl'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardIconStyle = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  margin: 'auto',
  borderRadius: 8,
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main),
  boxShadow:
    'rgb(145 158 171 / 20%) 0px 10px 14px -6px, rgb(145 158 171 / 14%) 0px 22px 35px 3px, rgb(145 158 171 / 12%) 0px 8px 42px 7px'
}));

//
const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    color: theme.palette.primary.main
  }
}));

const Title = styled('span')(() => ({
  width: 'auto',
  height: 'auto',
  lineHeight: '32px',
  marginLeft: '5px'
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyles();

  return (
    <RootStyle>
      <Container maxWidth="lg">
        {sectionData.map((card, index) => (
          <Grid
            key={index}
            container
            spacing={isDesktop ? 10 : 5}
            sx={{ direction: card.direction }}
          >
            <Grid item xs={12} md={6}>
              <MotionInView variants={varFadeInUp}>
                <CardIconStyle
                  src={card.image}
                  alt={card.title}
                  sx={{
                    ...(index === 0 && {
                      filter: (theme) => shadowIcon(theme.palette.info.main)
                    }),
                    ...(index === 1 && {
                      filter: (theme) => shadowIcon(theme.palette.error.main)
                    }),
                    marginTop: 10
                  }}
                />
              </MotionInView>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                direction: 'ltr',
                marginTop: 10,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <MotionInView
                variants={varFadeInUp}
                sx={{ maxWidth: '600px', margin: 'auto' }}
              >
                <Typography variant="h3" paragraph className={classes.title}>
                  <Icon icon={checkCircle} />
                  <Title>{card.title}</Title>
                </Typography>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        ))}
      </Container>
    </RootStyle>
  );
}
