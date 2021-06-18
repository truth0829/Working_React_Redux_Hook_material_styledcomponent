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
    image: '/static/howitworks/4.jpg',
    title: 'USER',
    description: (
      <span>
        <ol>
          <li>User create a profile</li>
          <li>Selects new post</li>
          <li>Enters, event desciption and other details</li>
          <li>Submits post</li>
          <li>Wait for bids to come</li>
        </ol>
      </span>
    ),
    description1: (
      <span>
        <br />
        -OR-
        <br />
        <br />
        Search on Location, price & reviews
      </span>
    )
  },
  {
    image: '/static/howitworks/2.jpg',
    title: 'VENDOR',
    description: (
      <span>
        <ol>
          <li>Vendor creates profile</li>
          <li>Choose category</li>
          <li>Add price, location and brief description</li>
          <li>Vendors are now able to view event listings</li>
          <li>Bid & accept</li>
        </ol>
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
  lineHeight: '15px',
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
          <Grid key={index} container spacing={isDesktop ? 10 : 5}>
            <Typography
              variant="h1"
              sx={{
                marginTop: '80px',
                color: theme.palette.primary.main,
                textAlign: 'center',
                width: '100%'
              }}
            >
              {card.title}
            </Typography>
            <Grid
              container
              spacing={isDesktop ? 10 : 5}
              sx={{ direction: card.direction, marginBottom: '120px' }}
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
                  <Typography
                    variant="h4"
                    sx={{ color: 'text.secondary', paddingLeft: '30px' }}
                  >
                    {card.description}
                    {card.description1}
                  </Typography>
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>
    </RootStyle>
  );
}
