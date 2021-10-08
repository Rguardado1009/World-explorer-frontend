import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Button, ButtonGroup } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import {Typography} from '@material-ui/core'
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    page: {
        background:'#292929',
        width:'100%',
        paddingTop: '5%',
        paddingBottom: 'auto',
        color:'#ECCB9A',
    },
    appbar:{
        background:'#292929',
        display:'flex',
        flexDirection: "row",
        justifyContent:'space-between',
    },
    toolbar:{
        alignItems:'end',
    },
    btn:{
        color:'#ECCB9A',
        marginTop: 10,
        marginBottom: 10,
    },
    title:{
        justifySelf:'start',
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        color:'#ECCB9A',
    },
    group:{
        justifySelf:'end',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 30,
    }
})

export default function Layout({children, currentUser, handleLogout}) {
    const classes = useStyles()
    
    return (
        <div>
            <AppBar className={classes.appbar}>
            <Typography className={classes.title}
            variant ="h5"
            component="h1"
            >Flight Explorer</Typography>
            <ButtonGroup className={classes.group}>
                <Link to="/about">
                <Button className={classes.btn}>About</Button>               
                </Link>
                <Link to="/airlines">
                <Button className={classes.btn}>Airlines</Button>
                </Link>
                <Link to="/flights">                
                <Button className={classes.btn}>FLights</Button>
                </Link>
                <Link to="/signup">                
                <Button className={classes.btn}>Sign up</Button>
                </Link>
                <Link to="/login">                
                <Button className={classes.btn}>Log in</Button>
                </Link>
                <Button className={classes.btn} onClick={handleLogout}>Log Out</Button>
                <p> Logged in as {currentUser}</p>
            </ButtonGroup>  
            </AppBar> 
            <div className={classes.page}>
                <div></div>
            {children}
            </div>
        </div>
    )
}
