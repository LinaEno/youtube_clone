import { Stack, Box } from "@mui/material";
import { VideoCard, ChanelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.chanelId && <ChanelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
