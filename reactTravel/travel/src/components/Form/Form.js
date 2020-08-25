import React, {useState} from "react";
import './Form.scss'
import { Grid, TextField, makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';


const initialFValues = {
  id: 0,
  fullName:'',
  email:'',
  mobile: '',
  date: new Date (),
  isInterested: false,
}

export default function Form () {

  const [values, setValues] = useState(initialFValues);
  const classes=useStyle();
  const handleInputChange= e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

    return (
      <>
          <div className="title">
            <h5> Provide us your feedbacks</h5>
          </div>
          <form className={classes.root} autoComplete="off">

            <Grid container>
                <Grid item xs={6}>
                  <TextField 
                    variant="outlined"
                    name="fullName"
                    label="Full Name"
                    values={values.fullName}
                    onChange={handleInputChange}
                  />
                  <TextField 
                    variant="outlined"
                    name="email"
                    label="Email"
                    values={values.enail}
                  />
                  <TextField 
                    variant="outlined"
                    name="mobile"
                    label="Contact number"
                    values={values.mobile}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl>
                    <FormLabel className="formlabel">Interested in Tour?</FormLabel>
                      <RadioGroup row
                       name="isInterested"
                       values={values.isInterested}
                       onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="yes"
                          label="Yes"
                          control={<Radio />}
                        />
                         <FormControlLabel
                          value="no"
                          label="No"
                          control={<Radio />}
                        />
                      </RadioGroup>
                      <FormLabel className="formlabel">If Yes, how would you like to contact?</FormLabel>
                      <RadioGroup row
                       name="isInterested"
                       values={values.isInterested}
                       onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="mobile"
                          label="Phone"
                          control={<Radio />}
                        />
                         <FormControlLabel
                          value="email"
                          label="Email"
                          control={<Radio />}
                        />
                      </RadioGroup>
                     
                        <TextField
                          id="date"
                          label="Date to contact"
                          type="date"
                          defaultValue=" "
                         
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                    
                    
                  </FormControl>
                </Grid>

            </Grid>
            
          </form>
    </>
    )
  }

  const useStyle = makeStyles(theme=>({
    root:{
      '& .MuiFormControl-root':{
        width:'75%',
        margin:theme.spacing(1),

      }
    }
  }))



