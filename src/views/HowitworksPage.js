// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingFooter,
  LandingMinimal
} from '../components/howitworks-page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="we find the service for you | TuliA.com" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
