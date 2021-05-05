import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 1116
  }
});

const CustomSlider = withStyles({
  rail: {
    width: '1116px',
    height: '22px',
    background: "#F6F6F6",
    boxShadow: "inset -2.5px -2.5px 5px #FAFBFF, inset 2.5px 2.5px 8px rgba(202, 208, 223, 0.5)",
    borderRadius: '23px',
    position: 'relative',
    border: '0.5px solid rgba(202, 208, 223, 0.25)',
    boxSizing: 'border-box',
  },
  track: {
    width: '1108px',
    minWidth: '16px',
    height: '16px',
    top: '17px',
    background: "linear-gradient(89.99deg, #6ACCDC 0.63%, #24B6F4 23.58%, #598DF5 48.01%, #6568F3 71.39%, #B034C6 97.6%, #F5299E 122.4%, #F25257 149.63%)",
    borderRadius: '25px'
  },
  thumb: {
    display:'none'
  },
})(Slider);

export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event, newValue) => {
    // setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CustomSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
