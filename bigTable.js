import React from 'react';
import faker from "@faker-js/faker";
import {makeStyles} from "@mui/styles";
import {
    Avatar,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import OnClick from "./onClick";
import SearchBar from "./SearchComponent";

const useStyle=makeStyles({
    tHCell:{
        padding:0,
    },
    table:{

    }
})
let USERS=[],STATUSES=['Active','Pending','Blocked'];
for (let i=0; i<14; i++){
    USERS[i]={
        name: faker.name.firstName(),
        email: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        price : faker.commerce.price(),
        joinDate: faker.commerce.price(),
        status: faker.datatype.number({
            'min': -10,
            'max': 20
        }),sort:true

    }
}

function BigTable  ()  {
    const classes=useStyle();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <TableContainer
            style={{width:'80%',margin:"20px auto",cursor:"pointer"}}>
            <SearchBar/>
            <Table className={classes.tHCell}>
                <TableHead>
                    <TableRow>

                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}>Name</TableCell>
                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}>Price</TableCell>
                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}>24h Change</TableCell>
                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}>24h Value</TableCell>
                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}>Market Cap</TableCell>
                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}/>
                        <TableCell style={{borderBottom:'none',padding:7,backgroundColor:'#fafafa'}}/>

                    </TableRow>
                </TableHead>
                {<TableBody>
                    {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow
                            key={row.name}>
                            <TableCell style={{width:"30%"}}>
                                <Grid container >
                                    <Grid item lg={2}>
                                        <Avatar alt={row.name} src="." style={{width:30, height: 30}}/>
                                    </Grid>
                                    <Grid item lg={10}>
                                        {row.name}
                                        <Typography style={{display:'inline-block',opacity:0.5,marginLeft:20}}> {row.email}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell  style={{width:"17%"}}>
                                ${row.price}
                            </TableCell>
                            <TableCell style={{width:"17%"}}><Typography style={{
                                color: row.status < 0 ? "red" : "green"
                            }}>
                                {row.status}%
                            </Typography></TableCell>
                            <TableCell style={{width:"17%"}}>{row.joinDate}</TableCell>
                            <TableCell style={{width:"10%"}}>${row.price}</TableCell>
                            <TableCell>
                                <Typography style={{display:"inline-block", color:"goldenrod",marginLeft:100}}><OnClick/></Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={{display:"inline-block", color:"goldenrod",marginLeft:-10}}>Trade</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>}
                <TableFooter style={{position:"absolute",right: "10%"}}>
                     <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={USERS.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default BigTable;
