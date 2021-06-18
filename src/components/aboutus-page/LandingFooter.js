import { Link as ScrollLink } from 'react-scroll';
// material
import { Link, Container, Typography } from '@material-ui/core';
//
import Logo from '../Logo';

// ----------------------------------------------------------------------

export default function LandingFooter() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <ScrollLink to="move_top" spy smooth>
        <Logo sx={{ mb: 1, mx: 'auto' }} />
      </ScrollLink>

      <Typography variant="caption">
        TuliA.com2021 © All rights reserved
        <br /> Copyright: &nbsp;
        <a href="mailto:dpam8280@gmail.com">LG.tr|_|th</a>
      </Typography>
    </Container>
  );
}
