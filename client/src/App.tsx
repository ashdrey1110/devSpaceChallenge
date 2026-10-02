import ResourcesPage from "./resources/page";
import { Box } from "@mui/material";
import { pageContainerStyles } from "./styles/shared";

function App() {
  return (
    <Box sx={pageContainerStyles}>
      <ResourcesPage />
    </Box>
  );
}

export default App;
