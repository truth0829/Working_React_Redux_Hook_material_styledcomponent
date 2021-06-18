import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// material
import { Box, Drawer, Tooltip, Divider, Typography } from '@material-ui/core';
//
import { MIconButton, MFab } from './@material-extend';
import SvgIconStyle from './SvgIconStyle';

// ----------------------------------------------------------------------

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ScrollLink to="move_top" smooth spy>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          zIndex: 999
        }}
      >
        <Tooltip title="To Top">
          <MFab
            color="warning"
            size="medium"
            // onClick={handleOpenSettings}
            sx={{
              color: (theme) => theme.palette.warning.contrastText,
              background: (theme) => theme.palette.gradients.warning
            }}
          >
            <SvgIconStyle
              src="/static/icons/controls/settings.svg"
              sx={{ width: 16, height: 16 }}
            />
          </MFab>
        </Tooltip>
      </Box>
    </ScrollLink>
  );
}
