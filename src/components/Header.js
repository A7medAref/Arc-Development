/* eslint-disable react-hooks/exhaustive-deps */
import { Toolbar ,AppBar, Tabs, Tab, Button, Menu,MenuItem, useMediaQuery, useTheme, SwipeableDrawer, Collapse ,IconButton, List, ListItem,ListItemText} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { theme } from "./ui/theme";
import logo from "./ui/assets/logo.svg";
import { Link, useHistory} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdExpandLess,MdExpandMore} from "react-icons/md";
const useStyle = makeStyles({
    marginAppBar:{
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down('sm')]:
        {marginBottom:"2.5em"},
        [theme.breakpoints.down('xs')]:
        {marginBottom:"1.5em"}
    },
    imgLogo:{
        height:"6em",
        cursor:"pointer",
        [theme.breakpoints.down("sm")]:
        {height:"5.5em"},
        [theme.breakpoints.down("xs")]:
        {height:"4em"}
    },
    tabs:
    {marginLeft:"auto"},
    tab:
    {
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"20px",
    },
    AppBar:
    {
        paddingRight:"20px"
    },
    navButton:{
        marginLeft:"30px",
        borderRadius:"50px",
        fontFamily: "pacifico",
        color:"white",
        textTransform:"none",
        padding: '.5rem 1rem'
    },
    menuServices:{
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.common.white,
        borderRadius:0
    },
    menuItem:{
        ...theme.typography.tab,
        opacity:".7",
        "&:hover":
        {
            opacity:.9
        }
    },
    selectedOne:{opacity:1},
    SwipeableDrawer:{
        backgroundColor:theme.palette.primary.main,
    },
    menuIcon:{marginLeft:"auto",fontSize:"2em",color:"#000"},
    menuCard:{
        [theme.breakpoints.down("md")]:{width:"20rem"},
        [theme.breakpoints.down("xs")]:{width:"85vw"},
    },
    menuCardItems:{color:"white",...theme.typography.tab,fontFamily: "Roboto",opacity:".7"},
    selectedMenuItem:{opacity:"1 !important"},
    expandIcon:{color:"white",fontSize:"2rem",margin:0,padding:".3rem",position:"absolute",top:"50%",right:0,transform:"translate(-4px,-50%)","&:hover":{backgroundColor:"transparent"}},
    IconPosition:{position:"relative"},
    menuServicesItems:{marginLeft:"1rem",color:"white",...theme.typography.tab,fontFamily: "Roboto", opacity:.7},
    menuEstimate:{
        backgroundColor:theme.palette.secondary.main,
        "&:hover":{
            backgroundColor:theme.palette.secondary.main,
        }
    },
    selectedMenuEstimate:{
        color:`${theme.palette.secondary.light} !important`
    },
    menuEstimateItem:{
        color:"white",...theme.typography.tab,fontFamily: "Roboto"
    }

})
const options = [{name:"Services",link:"/services"},{name:"Custom Software Development",link:"/services/software"},{name:"Mobile App Development",link:"/services/mobile"},{name:"Website Development",link:"/services/website"}]
function HeaderSelecting(setSelected)
{
    switch (window.location.pathname) {
        case '/services':
            setSelected(0);
            break;
        case '/services/software':
            setSelected(1);
            break;
        case "/services/mobile":
            setSelected(2);
            break;
        case "/services/website":
            setSelected(3);
            break;
        default:
            break;
    }
}
function HeaderValues(value,setValue)
{
    
    if(window.location.pathname==="/" && value !== 0)
    setValue(0);
    else if(window.location.pathname.includes("/services") && value !== 1)
    setValue(1);
    else if(window.location.pathname==="/revolution" && value !== 2)
    setValue(2);
    else if(window.location.pathname==="/about" && value !== 3)
    setValue(3);
    else if(window.location.pathname==="/contact" && value !== 4)
    setValue(4);
    else if(window.location.pathname==="/estimate" && value !== 5)
    setValue(5);
}
export default function Header({value,setValue,selected,setSelected})
{
    const classes= useStyle();
    const th = useTheme();
    const media = useMediaQuery(th.breakpoints.down('md'));

    const [anchorEl,setAnchorEl] = useState(null);
    const history = useHistory();
    const [OpenMenu,setOpenMenu] = useState(false);
    const [openServices,setOpenServices] = useState(false);
    useEffect(()=>{
        HeaderSelecting(setSelected);
    },[]);

    window.addEventListener('popstate', function (e) {
        var state = e.state;
        if (state !== null) {
            HeaderValues(value,setValue);
            HeaderSelecting(setSelected);
        }
    });


    function redirectHome()
    {history.push('/');setValue(0);}
    function openMenuServices(e)
    {setAnchorEl(e.currentTarget);}
    function closeMenuServices(e)
    {setAnchorEl(null);}
    useEffect(_=>{
        HeaderValues(value,setValue)
    },[])

    const tabs = <><Tabs indicatorColor="primary" value={value} onChange={(_,i)=>{setValue(i)}} className={classes.tabs}>
    <Tab className={classes.tab} label="Home" component={Link} to="/"></Tab>
    <Tab className={classes.tab} aria-owns={()=>anchorEl===null ? undefined : true} aria-haspopup={()=>anchorEl===null ? undefined : true} label="Services" component={Link} to="/services"
        onMouseOver={openMenuServices}
    ></Tab>
    <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution"></Tab>
    <Tab className={classes.tab} label="About Us" component={Link} to="/about"></Tab>
    <Tab className={classes.tab} label="Contact" component={Link} to="/contact"></Tab>
    </Tabs>
    <Button variant="contained" color="secondary" className={classes.navButton} component={Link} to="/estimate"
    onClick={()=>setValue(5)}>Free Estimate</Button>
    <Menu elevation={0} classes={{paper:classes.menuServices}} anchorEl={anchorEl} open={Boolean(anchorEl)} MenuListProps={{onMouseLeave:closeMenuServices}}>
        {options.map((e,i)=>(
                    <MenuItem key={i} classes={{selected:classes.selectedOne}} selected={selected === i && value === 1} className={classes.menuItem} onClick={_=>{setSelected(i);closeMenuServices();setValue(1)}} component={Link} to={e.link}>{e.name}</MenuItem>
        ))}
    </Menu></>

    const menu = <><IconButton className={classes.menuIcon} onClick={_=>{setOpenMenu(true)}}><GiHamburgerMenu/></IconButton>
    <SwipeableDrawer classes={{paper:classes.SwipeableDrawer}} open={OpenMenu} onClose={_=>{setOpenMenu(false)}} onOpen={()=>{}}>
        <List disablePadding className={classes.menuCard}>
            <ListItem selected={value===0} button onClick={()=>{setOpenMenu(false);setValue(0)}} component={Link} to="/">
                <ListItemText disableTypography className={value===0 ? [classes.menuCardItems,classes.selectedMenuItem] : classes.menuCardItems}>Home</ListItemText>
            </ListItem>
            <div className={classes.IconPosition}>
            <ListItem selected={value===1} button onClick={()=>{setOpenMenu(false);setValue(1)}} component={Link} to="/services">
                <ListItemText disableTypography className={value===1 ? [classes.menuCardItems,classes.selectedMenuItem] : classes.menuCardItems}>Services</ListItemText>
            </ListItem>
            {!openServices ? <IconButton onClick={_=>{setOpenServices(!openServices);}} disablePadding disableGutters className={classes.expandIcon}><MdExpandMore/></IconButton>  : <IconButton onClick={_=>{setOpenServices(!openServices);}} disablePadding disableGutters className={classes.expandIcon}><MdExpandLess/></IconButton>}
            </div>
            {///////////////////////
                <Collapse in={openServices} timeout="auto" unmountOnExit>
                        {options.map((e,i)=>e.name !== "Services" ? <ListItem key={i} button selected={selected === i && value === 1} onClick={_=>{setSelected(i);setValue(1);setOpenMenu(false)}} component={Link} to={e.link}>
                            <ListItemText disableTypography className={selected === i && value ===1 ? [classes.menuServicesItems,classes.selectedMenuItem] : classes.menuServicesItems }>{e.name}</ListItemText>
                        </ListItem> : null)}
                </Collapse>
            /*////////////////*/}
            <ListItem selected={value===2} button onClick={()=>{setOpenMenu(false);setValue(2)}} component={Link} to="/revolution">
                <ListItemText disableTypography className={value===2 ? [classes.menuCardItems,classes.selectedMenuItem] : classes.menuCardItems}>The Revolution</ListItemText>
            </ListItem>
            <ListItem selected={value===3} button onClick={()=>{setOpenMenu(false);setValue(3)}} component={Link} to="/about">
                <ListItemText disableTypography className={value===3 ? [classes.menuCardItems,classes.selectedMenuItem] : classes.menuCardItems}>About Us</ListItemText>
            </ListItem>
            <ListItem selected={value===4} button onClick={()=>{setOpenMenu(false);setValue(4)}} component={Link} to="/contact">
                <ListItemText disableTypography className={value===4 ? [classes.menuCardItems,classes.selectedMenuItem] : classes.menuCardItems}>Contact</ListItemText>
            </ListItem>
            <ListItem selected={value===5} className={classes.menuEstimate} button onClick={()=>{setOpenMenu(false);setValue(5)}} component={Link} to="/estimate">
                <ListItemText disableTypography className={value===5 ? [classes.menuEstimateItem,classes.selectedMenuEstimate] :[classes.menuEstimateItem]}>Estimate</ListItemText>
            </ListItem>
        </List>
    </SwipeableDrawer></>

    return(
        <>
            <AppBar className={classes.AppBar}>
                    <Toolbar disableGutters>
                        <img onClick={redirectHome} src={logo} className={classes.imgLogo} alt="company logo" />
                            {media ? menu : tabs}
                    </Toolbar>
            </AppBar>
            <div className={classes.marginAppBar}></div>
        </>
            )
}