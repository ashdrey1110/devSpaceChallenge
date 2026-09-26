import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  ModeEdit,
  Add,
  FormatListBulleted,
  SwapVert,
  Check,
} from "@mui/icons-material";
import {
  pageColumn,
  titleRow,
  buttons,
  description,
  filters,
  filterButton,
  resourceContainer,
} from "./styles";
import ResourceWidget from "./components/ResourceWidget";

const ResourcesPage = () => {
  const filterOptions = [
    "Acquisition",
    "Communication",
    "Engineering",
    "Education",
    "Productivity",
    "Training",
    "Workplace",
  ];

  const resources = [
    {
      title: "Threat Briefing",
      category: "Training",
      bookmarked: false,
      image: "someimage.jpg",
    },
  ];

  const filterEnabled = true;

  return (
    <Box sx={pageColumn}>
      <Box sx={titleRow}>
        <Typography>Your Resources</Typography>
        <Box sx={buttons}>
          <IconButton>
            <ModeEdit />
          </IconButton>
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <FormatListBulleted />
          </IconButton>
          <IconButton>
            <SwapVert />
          </IconButton>
        </Box>
      </Box>
      <Box sx={description}>
        <Typography>
          You may add more or edit your existing resources
        </Typography>
      </Box>
      <Box sx={filters}>
        {filterOptions.map((option) => (
          <Button
            variant="outlined"
            size="small"
            startIcon={filterEnabled ? <Check /> : <></>}
            sx={filterButton}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Box sx={resourceContainer}>
        {resources.map((resource) => (
          <ResourceWidget resource={resource} />
        ))}
      </Box>
    </Box>
  );
};

export default ResourcesPage;
