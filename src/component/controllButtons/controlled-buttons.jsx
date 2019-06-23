import React from 'react';
import { Button } from "@material-ui/core";

const ControlledButtons = ({ handleCancelButton, renderData }) => {
  return (
    <>
      <Button variant="contained" onClick={renderData} >
        Submit
      </Button>
      <Button variant="contained" onClick={handleCancelButton} >
        Cancel
      </Button>
    </>
  )
}

export default ControlledButtons
