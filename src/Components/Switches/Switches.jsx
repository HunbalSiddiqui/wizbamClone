import React from 'react';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    // checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="flex">
      <Brightness4Icon style={{fontSize:"3rem"}}/>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        color="red"
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
