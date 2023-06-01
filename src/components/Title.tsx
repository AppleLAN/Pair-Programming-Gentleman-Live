import Typography from "@mui/material/Typography";

const Title = ({content}: { content: string }) => {
    return (
        <Typography variant='h2' gutterBottom>
            {content}
        </Typography>)
}

export default Title