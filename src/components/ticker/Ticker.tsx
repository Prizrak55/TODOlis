import { Fade, Box } from "@mui/material";
import News from "../news/News";

const Ticker = ({ ticker }: any) => {

  return (
    <Fade in={ticker} timeout={800}>
      <Box sx={{ height: 15 }}>
        {ticker &&
          <News />
        }
      </Box>
    </Fade>
  )
}

export default Ticker;