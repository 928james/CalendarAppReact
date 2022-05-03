import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import { useState, useRef, forwardRef } from 'react';
import { useNavigate, Link as RouterLink } from "react-router-dom";




// @mui
import { Card, Button, CardHeader, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,Box ,DialogContentText, Slide, Input} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';



// components
// ----------------------------------------------------------------------

export default function AddEvent(props) {

  

    const [open, setOpen] = useState(false);

    const anchorRef = useRef(null);

    const {title, children, addEventPopUp, setAddEventPopUp }= props;

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      const path = `material-kit-react/src/pages/DashboardApp.js`; 
      navigate(path);
    }
  
    const Transition = forwardRef((props, ref) => {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


  return (

    <>

    <Dialog open = {addEventPopUp}
            TransitionComponent= {Transition}
            keepMounted
            // onClose={handleClose}
            aria-describedby="alert-dialog-slide-description">

          <DialogTitle>
              Add your event.
          </DialogTitle>

          <DialogContent>

            <DialogContentText id="alert-dialog-slide-description">
              {children}
            </DialogContentText>
            
          </DialogContent>

          <DialogActions>
            <form>
              <grid>
                <div>
                  <Input defaultValue="Name" />
                </div>
                <div>
                  <Input defaultValue="Time" />
                </div>
                <div>
                  <Input defaultValue="Date" />
                </div>
              </grid>
              <Button to="/" variant="outlined" component={RouterLink}>Save</Button>
              <Button to="/" variant="outlined" component={RouterLink}>Cancel</Button>
            </form>
            
          </DialogActions>
          
    </Dialog>
    
    </>

  );

}
