import React from 'react'
import './contact.scss'
import News from '../../components/newsletter'
import Header from '../../components/header'
import Footer from '../../components/footer'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        width: '20%',
        margin: '0 auto ',
        marginBottom: '10px',
        marginTop: '10px'
      },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

  

export function Contact () {
    const classes = useStyles();
return (
    
    <div style={{marginTop:'10vh'}}>
        <Header />
        <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8271945817664!2d7.478516750177298!3d9.079502193453889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b54f52fd673%3A0x735f1e08d6f81ed!2sHeroes%20Plaza!5e0!3m2!1sen!2sng!4v1570722746877!5m2!1sen!2sng"
       // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7419930538017!2d7.473332850177317!3d9.087252393448475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b2468362891%3A0xfa5a43d268b2505d!2sMarieAnne%20Montessori!5e0!3m2!1sen!2sng!4v1570565573185!5m2!1sen!2sng" 
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen>
        </iframe>

    <div class="container" >
        <div className="row contact">
            <div className="col-lg-6">
                <div style={{boxShadow: '24px 50px 60px rgba(0,0,0,.3)', padding:'10px'}}>
                    <h2>Contact Us for Enquiries</h2>
                    <p>Phone No: 09090422127</p>
                    <p>Email: info@kyrieuberfashion.com</p>
                </div>
            </div>
            <div className="col-lg-6">
            <form style={{boxShadow: '24px 50px 60px rgba(0,0,0,.3)'}} className={classes.container} noValidate >
            <TextField
                id="standard-search"
                label="Name"
                type="search"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="standard-search"
                label="Email"
                type="search"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="standard-search"
                label="Phone Number"
                type="search"
                className={classes.textField}
                margin="normal"
            />

            <TextField
                id="outlined-dense-multiline"
                label="Message"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                multiline
                rowsMax="4"
            />
            <Button variant="contained" className={classes.button}>
                Submit
            </Button>
            </form>
            
    
            </div>
        </div>
   
    </div>

        <News />
        <Footer />
    </div>

)
}
export default Contact;