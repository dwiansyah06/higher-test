import React, { useState } from 'react'
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

import oneImg from "../../assets/image/1.png";
import twoImg from "../../assets/image/2.png";

import logo from "../../assets/logo.png";
import mobileImg from "../../assets/image/4.png";

const useStyles = makeStyles((theme) => ({
  mar0 : {
    margin : 0
  },
  color : {
    color : '#fff'
  },
  marb12 : {
    marginBottom : '12px'
  },
  marb24 : {
    marginBottom : '24px'
  },
  wrapperImage: {
    position: 'relative',
    height : '100vh',
  },
  image: {
    position: 'absolute',
    height : '100%',
    width: '100%',
    objectFit : 'cover' 
  },
  wrapperRight: {
    background: '#000',
    height : '100vh',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    paddingLeft : '25%',
    paddingRight : '25%'
  },
  imgLogo : {
    width : '20%'
  },
  textLogo : {
    color : '#fff',
    margin : 0,
    textTransform : 'capitalize'
  },
  titleLogin : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    marginBottom : '20px',
    zIndex : 3
  },
  line : {
    padding : '8px',
    background : '#fff',
    width : '100%',
    borderRadius : '10em',
    textAlign : 'center',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    gap : '8px',
    marginBottom : '25px'
  },
  textGoogle : {
    fontSize : '12px',
    fontWeight : '200'
  },
  textFormLogin : {
    color : '#fff',
    margin : 0,
    textTransform : 'capitalize',
    width : '100%',
    fontWeight : '600',
    marginBottom : '12px'
  },
  formLogin : {
    display : 'flex',
    flexDirection : 'column',
    gap : '4px',
    width : '100%'
  },
  formInput : {
    padding : '12px',
    background : '#1d2e3b',
    width : '100%',
    borderRadius : '10em',
    border : 0,
    color : '#fff',
  },
  buttonLogin : {
    padding : '8px',
    background : '#00dac5',
    width : '100%',
    borderRadius : '10em',
    textAlign : 'center',
    border : 0,
    color : '#fff',
    textTransform : 'capitalize',
    fontSize : '14px',
    fontWeight : '700',
    marginBottom : '14px'
  },
  createAccountText : { 
    color : '#fff',
    fontSize : '12px',
    fontWeight : 600
  },
  signUpText : { 
    color : '#00dac5',
    fontWeight : 800
  },
  desktop : {
    [theme.breakpoints.down('sm')]: {
      display : 'none'
    },
  },

  mobile : {
    [theme.breakpoints.up('md')]: {
      display : 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display : 'block',
      height : '100vh',
    },
  },
  bgMobile : {
    position: 'relative',
    height : '100%',
    backgroundImage: `url(${mobileImg})`,
    backgroundPosition : 'center',
    backgroundSize : 'cover',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    paddingLeft : '50px',
    paddingRight : '50px'
  },
  imgLogoDesktop : {
    width : '45%'
  },
  textLogoMobile : {
    fontSize : '20px',
    fontWeight : '500'
  },
  socialMediaWrapper : {
    display : 'flex',
    gap : '16px',
    zIndex : 3,
  },
  socialMediaLink : {
    position : 'relative',
    height : '60px',
    width : '60px',
    background : '#000',
    borderRadius : '100%',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
  },
  overlayBg : {
    position : 'absolute',
    width : '100%',
    height : '100%',
    background : '#000',
    top : 0,
    left : 0,
    opacity : '50%',
    zIndex : '2'
  },
  loginSectionMobile : {
    zIndex : 3,
    display : 'flex',
    flexDirection : 'column',
    width : '100%',
    alignItems : 'center'
  },
  formInputMobile : {
    padding : '18px',
    background : '#fff',
    width : '100%',
    borderRadius : '8px',
    border : 0,
    color : '#000',
  },
  buttonLoginMobile : {
    padding : '14px',
    background : '#00dac5',
    width : '100%',
    borderRadius : '10em',
    textAlign : 'center',
    border : 0,
    color : '#fff',
    textTransform : 'capitalize',
    fontSize : '14px',
    fontWeight : '700',
    marginBottom : '14px'
  },
  navigateSign : {
    display : 'flex',
    gap : '28px',
    marginBottom : '20px'
  },
  textNavigate : {
    color : '#fff',
    zIndex : 3,
  },
  active : {
    '&::after': {
        content: '',
        display: 'block',
        height: 'px',
        background : '#000',
        width : '100%'
      }
  }

}));

const AppsIndex = () => {
    const classes = useStyles();

    const [imgBackground, setImgBackground] = useState(oneImg)
    const [order, setOrder] = useState(1)

    return (
        <div className="App">
            <div className={classes.desktop}>
                <Grid container>
                    <Grid item xs={8}>
                        <div className={classes.wrapperImage}>
                        <img src={imgBackground} className={classes.image} alt='background' />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.wrapperRight}> 
                        <div className={classes.titleLogin}> 
                            <img src={logo} className={classes.imgLogo} alt='my logo' />
                            <h3 className={classes.textLogo}>higher</h3>
                        </div>

                        <div className={classes.line}> 
                            <GoogleIcon sx={{ fontSize: 16 }} />
                            <p className={`${classes.mar0} ${classes.textGoogle}`}>Continue With Google</p>
                        </div>

                        {/* Form Login */}
                        <h4 className={classes.textFormLogin}>or signin with</h4>
                        
                        <input className={`${classes.formInput} ${classes.marb12}`} placeholder='test@gmail.com' />
                        <input type='password' className={`${classes.formInput} ${classes.marb24}`} placeholder='*******' />

                        <button type='button' className={classes.buttonLogin}>Sign in account </button>

                        <p className={classes.createAccountText}>Create an account ? <span className={classes.signUpText}>Sign Up</span></p>
                        

                        </div>
                    </Grid>
                </Grid>
            </div>
            
            <div className={classes.mobile}>
                <div className={classes.bgMobile}>
                <div className={classes.titleLogin}> 
                    <img src={logo} className={classes.imgLogoDesktop} alt='my logo' />
                    <h3 className={`${classes.textLogo} ${classes.textLogoMobile}`}>higher</h3>
                </div>

                <div className={classes.navigateSign}>
                    <a href='/' className={`${classes.textNavigate} ${classes.active}`}>Sign in</a>
                    <a href='/register' className={classes.textNavigate}>Sign up</a>
                </div>

                <div className={classes.loginSectionMobile}>
                    <input className={`${classes.formInputMobile} ${classes.marb12}`} placeholder='Email address or phone number' />
                    <input type="password" className={`${classes.formInputMobile} ${classes.marb12}`} placeholder='Password' />

                    <button type='button' className={classes.buttonLoginMobile}>Login </button>

                    <p className={`${classes.createAccountText} ${classes.mar0}`}>forgot password ? </p>
                    <p className={`${classes.createAccountText} ${classes.marb24}`}>or use social media account to login </p>
                </div>
                

                <div className={classes.socialMediaWrapper}>
                    <div className={classes.socialMediaLink}><GoogleIcon sx={{ color: '#fff' }} /></div>
                    <div className={classes.socialMediaLink}><AppleIcon sx={{ color: '#fff' }} /></div>
                    <div className={classes.socialMediaLink}><FacebookIcon sx={{ color: '#fff' }} /></div>
                </div>

                </div>
                <div className={classes.overlayBg}></div>
            </div>
            
            </div>
    )
}

export default AppsIndex