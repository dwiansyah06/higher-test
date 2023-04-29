import React from 'react'

const Desktop = () => {
  return (
    <Grid container>
        <Grid item xs={8}>
            <div className={classes.wrapperImage}>
            <img src={oneImg} className={classes.image} alt='background' />
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
            
            <input className={`${classes.formInput} ${classes.marb12}`} placeholder='test' />
            <input className={`${classes.formInput} ${classes.marb24}`} placeholder='test' />

            <button type='button' className={classes.buttonLogin}>Sign in account </button>

            <p className={classes.createAccountText}>Create an account ? <span className={classes.signUpText}>Sign Up</span></p>
            

            </div>
        </Grid>
    </Grid>
  )
}

export default Desktop