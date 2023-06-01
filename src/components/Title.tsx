import Typography from "@mui/material/Typography";
import * as React from "react";

const Title = ({content}: { content: string }) => {
    return (
        <Typography variant='h2' gutterBottom>
            {content}
        </Typography>)
}

export default Title