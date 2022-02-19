import React from 'react';
import {makeStyles} from "@mui/styles";
import {Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";


const useStyle= makeStyles({
    marketsH1:{
        marginLeft:"10%",
        fontWeight:'normal',
    },
    h6:{
        opacity:0.5,
        margin:"10px 0 25px 0"
    },
    btn:{
        width:"25px",
        height:"25px",
        backgroundColor:"gold",
        borderRadius:"50%",
        border:"none",
        display:"none",
        float:"right",
        marginRight:20,
        cursor:"pointer"
    },
    littleTables:{
        marginLeft:'2%',
        borderRadius:5,
        width:'18%',
        padding:5,
        display:'inline-block',
        transition: "0.3s",
        "&:hover": {
            background: "#fff",
            "& $btn":{
                display: "inline"
            }
        },
    },
    boxTxt:{
        margin:10
    }

})
function openPage(){
    return(
        <div style={{width:400,height:300,backgroundColor:"red",position:"fixed"}}/>
    )
}
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('BTC', 159, 6.0),
    createData('ING', 237, 9.0),
    createData('ETH', 262, 16.0),
];

const TopGroup = () => {
    const classes = useStyle();
    return (
        <div style={{backgroundColor:"#f9f9f9",padding:16,}}>
            <h1 className={classes.marketsH1}>Markets</h1>
            <div className={classes.littleTables} style={{marginLeft:"10%"}}>
                <h6 className={classes.h6}>HighLight Coin
                </h6>
                <TableContainer style={{marginTop:-10}}>
                <Table aria-label="caption table" >
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell style={{border:'none',lineHeight:0,padding:5}} component="th" scope="row">
                                    <Grid container>
                                        <Grid item lg={2}>
                                            <Avatar alt={row.name} style={{width:30,height:30}} src="."/>
                                        </Grid>
                                        <Grid item style={{margin:15}}>
                                            {row.name}
                                        </Grid>
                                    </Grid>
                                    </TableCell>
                                <TableCell style={{border:'none',lineHeight:0}}>{row.calories}</TableCell>
                                <TableCell style={{border:'none',lineHeight:0}}>{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <div className={classes.littleTables}>
                <h6 className={classes.h6}>New Listing
                    <button className={classes.btn} ><i className="fa fa-chevron-right" style={{margin:3}}/></button>
                </h6>
                    <TableContainer style={{marginTop:-10}}>
                        <Table aria-label="caption table" >
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell style={{border:'none',lineHeight:0,padding:5}} component="th" scope="row">
                                            <Grid container>
                                                <Grid item lg={2}>
                                                    <Avatar alt={row.name} style={{width:30,height:30}} src="."/>
                                                </Grid>
                                                <Grid item style={{margin:15}}>
                                                    {row.name}
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                        <TableCell style={{border:'none',lineHeight:0}}>{row.calories}</TableCell>
                                        <TableCell style={{border:'none',lineHeight:0}}>{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            <div className={classes.littleTables}>
                <h6 className={classes.h6}>Top Gainer Coin
                    <button className={classes.btn} ><i className="fa fa-chevron-right" style={{margin:3}}/></button>
                </h6>
                <TableContainer style={{marginTop:-10}}>
                    <Table aria-label="caption table" >
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell style={{border:'none',lineHeight:0,padding:5}} component="th" scope="row">
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <Avatar alt={row.name} style={{width:30,height:30}} src="."/>
                                            </Grid>
                                            <Grid item style={{margin:15}}>
                                                {row.name}
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell style={{border:'none',lineHeight:0}}>{row.calories}</TableCell>
                                    <TableCell style={{border:'none',lineHeight:0}}>{row.fat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={classes.littleTables}>
                <h6 className={classes.h6}>Top Volume Coin
                    <button className={classes.btn} ><i className="fa fa-chevron-right" style={{margin:3}}/></button>
                </h6>
                <TableContainer style={{marginTop:-10}}>
                    <Table aria-label="caption table" >
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell style={{border:'none',lineHeight:0,padding:5}} component="th" scope="row">
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <Avatar alt={row.name} style={{width:30,height:30}} src="."/>
                                            </Grid>
                                            <Grid item style={{margin:15}}>
                                                {row.name}
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell style={{border:'none',lineHeight:0}}>{row.calories}</TableCell>
                                    <TableCell style={{border:'none',lineHeight:0}}>{row.fat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            </div>
    );
};

export default TopGroup;