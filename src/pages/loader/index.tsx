import { Box, Typography } from '@mui/material';
import loadingGif from '../../icons/loading.gif'

const Loader = () => {
    return (
        <Box sx={{
            width:"50%",
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
        }}>
            <img width={50} height={50} src={loadingGif} alt="loading..." />
        </Box>
    )
}

export default Loader;