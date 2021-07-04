import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/customSelectStyle.js";




export default function CustomSelect(props) {
  const useStyles = makeStyles(styles)
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    selectProps,
    onChange,
    name,
    value,
    error,
    success,
    item,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });

  return (
    <div>
      <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
        <InputLabel  
          className={classes.labelRoot + labelClasses} 
          htmlFor={id}
          {...labelProps}>
            {labelText}
        </InputLabel>
        <Select
          native
          labelId="demo-simple-select-label"
          id={id}
          value={value}
          onChange={handleChange}
          {...selectProps}

        >
          <option aria-label="None" value="" />
         {item.map(obj => 
            <option key={obj.id} value={obj.value} >{obj.value.toString()}</option>
        )}
    
        </Select>
      </FormControl>
    </div>
  );
}

CustomSelect.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  selectProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
