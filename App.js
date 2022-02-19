import React from 'react';
import TopGroup from "./topGroup";
import {makeStyles} from "@mui/styles";
import FifthTable from "./FifthTable";

const useStyle=makeStyles({
    containerDiv:{

    }
});

const App = () => {
    const classes = useStyle();
    return (
        <div className={classes.containerDiv}>
            <TopGroup/>
            <FifthTable/>
        </div>
    );
};

export default App;