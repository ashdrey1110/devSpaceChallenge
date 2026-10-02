// Styles for My Resources page

export const pageColumn = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1300px",
  "@media (min-width: 1300px)": {
    width: "1300px",
  },
};

export const titleRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const buttons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export const button = {
  "@media (max-width: 480px)": {
    width: "20px",
    height: "20px",
  },
};

export const description = {
  display: "flex",
  flexDirection: "flex-start",
  my: "0.8rem",
};

export const filtersBox = {
  display: "flex",
  flexDirection: "flex-start",
  gap: "14px",
  flexWrap: "wrap",
};

export const filterButton = {
  color: "#6b6375",
  borderColor: "#6b6375",
  fontWeight: "700",
  textTransform: "none",
  borderRadius: "28px",
  height: "1.8rem",
  px: "15px",
};

export const resourceContainer = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.5rem",
  mt: "1.5rem",
  "@media (min-width: 800px)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (min-width: 1300px)": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
};

export const showMoreButton = {
  textTransform: "none",
  fontWeight: 600,
  my: "30px",
  width: "8rem",
  height: "2rem",
  color: "#00263a",
};

export const resourceWidget = {
  position: "relative",
  width: "100%",
  aspectRatio: "2 / 1",
  borderRadius: "8px",
  overflow: "hidden",
};

export const imageView = {
  position: "relative",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export const overlayBox = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  display: "grid",
  gridTemplateRows: "3fr 3fr",
  aspectRatio: "16 / 9",
  objectFit: "cover",
  backgroundColor: "rgba(4, 22, 28, 0.4)",
};

export const resourceButtons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  margin: "1rem",
};

export const resourceButton = {
  color: "#f5faff",
  backgroundColor: "#00263a",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  margin: "4px",
  "&.Mui-selected": {
    color: "#6dc294",
    backgroundColor: "#00263a",
  },
};

export const categoryText = {
  color: "#acafb0",
  display: "flex",
  fontSize: "0.8rem",
  mx: "1rem",
  my: "0.2rem",
  "& .MuiTypography-root": {
    fontSize: "0.8rem",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.25rem",
  },
};

export const resourceTitle = {
  display: "flex",
  textAlign: "left",
  mx: "1rem",
  color: "#dcdfe0",
  fontSize: "0.95rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
};
