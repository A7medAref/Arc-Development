import { Grid, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
export default function PageNotFound({setValue})
{
    setValue(10);
    return <Grid container style={{height:"80vh"}} direction="column" alignItems="center" justifyContent="center">
        <Grid item>
            <Typography variant="h3" style={{fontSize:"5em",marginBottom:"2rem"}}>Page doesn't exist</Typography>
        </Grid>
        <Grid item>
            <Button component={Link} to="/" variant="contained" color="primary" style={{fontWeight:"bold"}}
            onClick={_=>setValue(0)}>Back to Home Page</Button>
        </Grid>
    </Grid>
}