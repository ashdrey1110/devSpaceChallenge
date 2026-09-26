import type { Resource } from "../../types";
import { Box, IconButton, Typography } from "@mui/material";
import type React from "react";
import { categoryText, resourceButtons, resourceWidget } from "../styles";
import { Bookmark, MoreVert, EmojiObjects } from "@mui/icons-material";

interface ResourceWidgetProps {
  resource: Resource;
}

const ResourceWidget: React.FC<ResourceWidgetProps> = ({ resource }) => {
  return (
    <Box sx={resourceWidget}>
      <Box sx={resourceButtons}>
        <IconButton>
          <Bookmark />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>
      <Box>
        <Box sx={{ categoryText }}>
          <EmojiObjects />
          <Typography>{resource.category} * Resources</Typography>
        </Box>
        <Typography>{resource.title}</Typography>
      </Box>
    </Box>
  );
};

export default ResourceWidget;
