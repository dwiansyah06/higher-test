import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

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
  desktop : {
    [theme.breakpoints.down('sm')]: {
      display : 'none'
    },
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
  createAccountText : { 
    color : '#fff',
    fontSize : '12px',
    fontWeight : 600
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

}));

const Register = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <div className={classes.desktop}>
                
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
                    <input type="password" className={`${classes.formInputMobile} ${classes.marb12}`} placeholder='Confirm Password' />

                    <button type='button' className={classes.buttonLoginMobile}>Create Account </button>

                    <p className={`${classes.createAccountText} ${classes.marb24}`}>or use social media account to create account </p>
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

export default Register