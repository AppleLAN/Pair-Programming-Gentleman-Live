import Typography from "@mui/material/Typography";

const Title = ({content}: { content: string }) => {
    return (
        <Typography sx={{pt:2}} variant='h5' gutterBottom>
            {content}
        </Typography>)
}

export default Title