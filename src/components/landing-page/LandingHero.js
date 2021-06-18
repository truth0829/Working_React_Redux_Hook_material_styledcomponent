import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import userTie from '@iconify-icons/fa-solid/user-tie';
import usersSolid from '@iconify-icons/teenyicons/users-solid';
import searchIcon from '@iconify-icons/fa-solid/search';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Button,
  Input,
  Box,
  Link,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
// routes
import { PATH_DASHBOARD, PATH_ERROR, PATH_HOME } from '../../routes/paths';
//
import {
  varFadeIn,
  varWrapEnter,
  varFadeInUp,
  varFadeInDown,
  varFadeInRight
} from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F2F3F5',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 10,
  width: '100%',
  maxWidth: 800,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '72vh'
  }
}));

const SearchStyle = styled('div')(({ theme }) => ({
  width: '100%',
  height: 50,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F2F3F5',
  borderRadius: 50,
  paddingLeft: 20,
  paddingRight: 140,
  marginTop: 150
}));

// class
const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: '100%',
    height: '100%',
    padding: 0
  },
  searchbutton: {
    height: '96%',
    position: 'absolute',
    right: 2,
    borderRadius: 50
  },
  button: {
    width: '100%',
    lineHeight: '30px',
    maxWidth: 200,
    marginTop: 20,
    margin: 20,
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      marginTop: 20,
      marginRight: 40
    }
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const classes = useStyles();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/home/banner-image.jpg"
          variants={varFadeIn}
        />

        {/* <HeroImgStyle
          alt="hero"
          src="/static/home/hero.png"
          variants={varFadeInUp}
        /> */}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInDown}>
              <SearchStyle>
                <Input
                  placeholder="Please search needed service"
                  disableUnderline
                  fullWidth
                />
                <Button
                  size="large"
                  variant="contained"
                  to={PATH_DASHBOARD.root}
                  className={classes.searchbutton}
                  startIcon={<Icon icon={searchIcon} width={20} height={20} />}
                >
                  SEARCH
                </Button>
              </SearchStyle>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h1"
                sx={{ color: 'common.white', marginTop: 5 }}
              >
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: 'primary.main' }}
                >
                  Who are you?
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_ERROR.page404}
                className={classes.button}
                startIcon={<Icon icon={userTie} width={20} height={20} />}
              >
                USER
              </Button>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_ERROR.page404}
                className={classes.button}
                startIcon={<Icon icon={usersSolid} width={20} height={20} />}
              >
                VENDOR
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
