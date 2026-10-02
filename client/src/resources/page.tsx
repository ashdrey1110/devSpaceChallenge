import {
  Box,
  Button,
  IconButton,
  ToggleButton,
  Typography,
} from "@mui/material";
import {
  ModeEdit,
  Add,
  FormatListBulleted,
  SwapVert,
  Check,
  ExpandCircleDownOutlined,
} from "@mui/icons-material";
import {
  pageColumn,
  titleRow,
  buttons,
  description,
  filterButton,
  resourceContainer,
  button,
  filtersBox,
  showMoreButton,
} from "./styles";
import ResourceWidget from "./components/ResourceWidget";
import { pageTitle } from "../styles/shared";
import articleImage from "../assets/ArticlePlaceholder2.jpeg";
import { useState } from "react";

const ResourcesPage = () => {
  const categories = [
    "ALL",
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
      id: 0,
      title:
        "Ignition Podcast: Innovation, Agility, Talent, Workplace, Culture, and more",
      category: "Workplace",
      bookmarked: true,
      image: articleImage,
    },
    {
      id: 1,
      title: "Threat Briefing",
      category: "Training",
      bookmarked: false,
      image: articleImage,
    },
    {
      id: 2,
      title: "SSC Telework Portal",
      category: "Productivity",
      bookmarked: true,
      image: articleImage,
    },
    {
      id: 3,
      title: "AIR FORCE Virtual Education",
      category: "Education",
      bookmarked: false,
      image: articleImage,
    },
    {
      id: 4,
      title: "Guide to DigitalU",
      category: "Education",
      bookmarked: false,
      image: articleImage,
    },
    {
      id: 5,
      title: "How to Build a Collaborative Team Environment",
      category: "Workplace",
      bookmarked: false,
      image: articleImage,
    },
  ];

  const [filters, setFilters] = useState<string[]>(["ALL"]);

  const filteredResources = filters.includes("ALL")
    ? resources
    : resources.filter((resource) => filters.includes(resource.category));

  const updateFilter = (category: string) => {
    if (category === "ALL") {
      setFilters(["ALL"]);
      return;
    }
    const currFilters = filters.filter((item) => item !== "ALL");
    const isSelected = currFilters.includes(category);

    let updatedFilters: string[];
    if (isSelected) {
      updatedFilters = currFilters.filter((item) => item !== category);
    } else {
      updatedFilters = [...currFilters, category];
    }

    setFilters(updatedFilters.length == 0 ? ["ALL"] : updatedFilters);
  };

  return (
    <Box sx={pageColumn}>
      <Box sx={titleRow}>
        <Typography sx={pageTitle}>Your Resources</Typography>
        <Box sx={buttons}>
          <IconButton>
            <ModeEdit sx={button} />
          </IconButton>
          <IconButton>
            <Add sx={button} />
          </IconButton>
          <IconButton>
            <FormatListBulleted sx={button} />
          </IconButton>
          <IconButton>
            <SwapVert sx={button} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={description}>
        <Typography sx={{ fontSize: "0.9rem" }}>
          You may add more or edit your existing resources
        </Typography>
      </Box>
      <Box sx={filtersBox}>
        {categories.map((category) => {
          const filterEnabled = filters.includes(category);
          return (
            <ToggleButton
              size="small"
              disableRipple
              value={category}
              key={category}
              selected={filterEnabled}
              onChange={() => updateFilter(category)}
              sx={{
                ...filterButton,
                color: filterEnabled ? "#183e69" : "#6b6375",
                backgroundColor: filterEnabled ? "#b8dff7" : "",
                border: filterEnabled ? "none" : "",
                "&.Mui-selected": {
                  backgroundColor: "#b8dff7",
                  color: "#183e69",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#9cd1f5",
                },
              }}
            >
              {filterEnabled ? (
                <Check sx={{ height: "18px", width: "18px", pr: "4px" }} />
              ) : (
                <></>
              )}
              {category}
            </ToggleButton>
          );
        })}
      </Box>
      <Box sx={resourceContainer}>
        {filteredResources.map((resource, index) => (
          <ResourceWidget key={resource.title + index} resource={resource} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          size="small"
          startIcon={<ExpandCircleDownOutlined />}
          sx={showMoreButton}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default ResourcesPage;
