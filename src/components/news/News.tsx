import { Box } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Marquee from "react-fast-marquee"
type Response = {
  isLoading: boolean;
  data: string | undefined;
}
const News = () => {
  // загрузка данных
  const { isLoading, data }:Response = useQuery(['newsData'], () =>
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
      return response.data.body
    }
    ))

  if (isLoading) return <Box>Loading news...</Box>;

  return (
    <Marquee speed={30} className="marquee">
      {data}
    </Marquee>
  )
}

export default News;