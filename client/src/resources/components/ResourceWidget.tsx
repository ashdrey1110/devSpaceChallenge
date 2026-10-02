import type { Resource } from "../../types";
import { Box, IconButton, ToggleButton, Typography } from "@mui/material";
import type React from "react";
import {
  categoryText,
  imageView,
  overlayBox,
  resourceButton,
  resourceButtons,
  resourceTitle,
  resourceWidget,
} from "../styles";
import { Bookmark, MoreVert, EmojiObjects } from "@mui/icons-material";
import { useState } from "react";

interface ResourceWidgetProps {
  resource: Resource;
}

const ResourceWidget: React.FC<ResourceWidgetProps> = ({ resource }) => {
  const [bookmarked, setBookmarked] = useState(resource.bookmarked);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      setBookmarked(false);
    } else setBookmarked(true);
  };

  return (
    <Box sx={resourceWidget}>
      <Box
        component="img"
        src={resource.image}
        alt={resource.title}
        sx={imageView}
      />
      <Box sx={overlayBox}>
        <Box sx={resourceButtons}>
          <ToggleButton
            value="bookmark"
            selected={bookmarked}
            disableRipple
            onChange={handleToggleBookmark}
            sx={resourceButton}
          >
            <Bookmark />
          </ToggleButton>
          <IconButton sx={resourceButton}>
            <MoreVert />
          </IconButton>
        </Box>
        <Box>
          <Box sx={categoryText}>
            <EmojiObjects />
            <Typography
              sx={{
                mx: "0.5rem",
              }}
            >
              {resource.category} • Resources
            </Typography>
          </Box>
          <Box>
            <Typography sx={resourceTitle}>{resource.title}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResourceWidget;
