// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../animate';

// ----------------------------------------------------------------------

const eventData = [
  {
    image: '/static/home/services/venues.jpg',
    title: 'Venues',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    image: '/static/home/services/photographer.jpg',
    title: 'Photographer',
    description:
      'Easy to customize and extend each component, saving you time and money.'
  },
  {
    image: '/static/home/services/event-planner.jpg',
    title: 'Event Planner',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  },
  {
    image: '/static/home/services/caterers.jpg',
    title: 'Caterer',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const generalData = [
  {
    image: '/static/home/services/plumber.jpg',
    title: 'Plumber',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    image: '/static/home/services/electrician.jpg',
    title: 'Electrician',
    description:
      'Easy to customize and extend each component, saving you time and money.'
  },
  {
    image: '/static/home/services/handy.jpg',
    title: 'Handy',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  },
  {
    image: '/static/home/services/carpenter.jpg',
    title: 'Carpenter',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const homeData = [
  {
    image: '/static/home/services/house.jpg',
    title: 'House',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    image: '/static/home/services/maid.jpg',
    title: 'Maid',
    description:
      'Easy to customize and extend each component, saving you time and money.'
  },
  {
    image: '/static/home/services/carpet.jpg',
    title: 'Carpet',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  },
  {
    image: '/static/home/services/garden.jpg',
    title: 'Garden',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const officeData = [
  {
    image: '/static/home/services/printing.jpg',
    title: 'Printing',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    image: '/static/home/services/deliver.jpg',
    title: 'Deliver',
    description:
      'Easy to customize and extend each component, saving you time and money.'
  },
  {
    image: '/static/home/services/office.jpg',
    title: 'Office',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  },
  {
    image: '/static/home/services/data-entry.jpg',
    title: 'Data Entry',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    width: '100%',
    // minHeight: 440,
    color: theme.palette.primary.main,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(2),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: 'auto',
  borderRadius: 8,
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

//
const useStyles = makeStyles((theme) => ({
  serviceTitle: {
    marginBottom: 40,
    padding: '0px 20px',
    borderLeft: '5px solid'
  },
  viewmore: {
    padding: 0,
    margin: 0,
    paddingTop: '10px',
    paddingBottom: '10px',
    lineHeight: '35px',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useStyles();

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              align="center"
              sx={{ color: 'text.secondary', display: 'block' }}
            >
              TuliA service
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center">
              Please find our service!
            </Typography>
          </MotionInView>
        </Box>
        <Grid sx={{ marginBottom: '150px' }}>
          <Grid
            container
            flexDirection
            justifyContent="space-between"
            sx={{ zIndex: '1', position: 'relative' }}
          >
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" className={classes.serviceTitle}>
                EVENT SERVICES
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="p" className={classes.viewmore}>
                view more
              </Typography>
            </MotionInView>
          </Grid>
          <Grid container spacing={isDesktop ? 10 : 5}>
            {eventData.map((card, index) => (
              <Grid key={index} item xs={12} md={6}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle className="cardCenter">
                    <CardIconStyle
                      src={card.image}
                      alt={card.title}
                      sx={{
                        ...(index === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.info.main)
                        }),
                        ...(index === 1 && {
                          filter: (theme) =>
                            shadowIcon(theme.palette.error.main)
                        })
                      }}
                    />
                    <Typography variant="h5" paragraph>
                      {card.title}
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>
                      {card.description}
                    </Typography> */}
                  </CardStyle>
                </MotionInView>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid sx={{ marginBottom: '150px' }}>
          <Grid
            container
            flexDirection
            justifyContent="space-between"
            sx={{ zIndex: '1', position: 'relative' }}
          >
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" className={classes.serviceTitle}>
                GENERAL SERVICES
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="p" className={classes.viewmore}>
                view more
              </Typography>
            </MotionInView>
          </Grid>
          <Grid container spacing={isDesktop ? 10 : 5}>
            {generalData.map((card, index) => (
              <Grid key={index} item xs={12} md={6}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle className="cardCenter">
                    <CardIconStyle
                      src={card.image}
                      alt={card.title}
                      sx={{
                        ...(index === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.info.main)
                        }),
                        ...(index === 1 && {
                          filter: (theme) =>
                            shadowIcon(theme.palette.error.main)
                        })
                      }}
                    />
                    <Typography variant="h5" paragraph>
                      {card.title}
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>
                      {card.description}
                    </Typography> */}
                  </CardStyle>
                </MotionInView>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid sx={{ marginBottom: '150px' }}>
          <Grid
            container
            flexDirection
            justifyContent="space-between"
            sx={{ zIndex: '1', position: 'relative' }}
          >
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" className={classes.serviceTitle}>
                HOME SERVICES
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="p" className={classes.viewmore}>
                view more
              </Typography>
            </MotionInView>
          </Grid>
          <Grid container spacing={isDesktop ? 10 : 5}>
            {homeData.map((card, index) => (
              <Grid key={index} item xs={12} md={6}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle className="cardCenter">
                    <CardIconStyle
                      src={card.image}
                      alt={card.title}
                      sx={{
                        ...(index === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.info.main)
                        }),
                        ...(index === 1 && {
                          filter: (theme) =>
                            shadowIcon(theme.palette.error.main)
                        })
                      }}
                    />
                    <Typography variant="h5" paragraph>
                      {card.title}
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>
                      {card.description}
                    </Typography> */}
                  </CardStyle>
                </MotionInView>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid sx={{ marginBottom: '150px' }}>
          <Grid
            container
            flexDirection
            justifyContent="space-between"
            sx={{ zIndex: '1', position: 'relative' }}
          >
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3" className={classes.serviceTitle}>
                OFFICE SERVICES
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="p" className={classes.viewmore}>
                view more
              </Typography>
            </MotionInView>
          </Grid>
          <Grid container spacing={isDesktop ? 10 : 5}>
            {officeData.map((card, index) => (
              <Grid key={index} item xs={12} md={6}>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle className="cardCenter">
                    <CardIconStyle
                      src={card.image}
                      alt={card.title}
                      sx={{
                        ...(index === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.info.main)
                        }),
                        ...(index === 1 && {
                          filter: (theme) =>
                            shadowIcon(theme.palette.error.main)
                        })
                      }}
                    />
                    <Typography variant="h5" paragraph>
                      {card.title}
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>
                      {card.description}
                    </Typography> */}
                  </CardStyle>
                </MotionInView>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
