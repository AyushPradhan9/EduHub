import React from "react";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StorageIcon from '@mui/icons-material/Storage';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { withRouter } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import "./styles/Drawer.css";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/EduhubLogo1.jpg";

const drawerWidth = 230;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const Drawer = props => {
  const { history } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expandSort, setExpandSort] = React.useState(false);
  const [expandDs, setExpandDs] = React.useState(false);
  const [expandPath, setExpandPath] = React.useState(false);

  const handleSort = () => {
    setExpandSort(!expandSort);
    if (!expandSort) {
      setExpandPath(false);
      setExpandDs(false);
    }
  };

  const handleDS = () => {
    setExpandDs(!expandDs);
    if (!expandDs) {
      setExpandPath(false);
      setExpandSort(false);
    }
  };

  const handlePath = () => {
    setExpandPath(!expandPath);
    if (!expandPath) {
      setExpandDs(false);
      setExpandSort(false);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setExpandDs(false);
    setExpandPath(false);
    setExpandSort(false);
  }

  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => history.push("/")
    },
    {
      text: "Data Structures",
      icon: <StorageIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => handleDS()
    },
    {
      text: "Sortings",
      icon: <EqualizerIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => handleSort()
    },
    {
      text: "Path Finding",
      icon: <LocationOnIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => handlePath()
    }
  ];

  const dsList = [
    {
      text: "Array",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/DataStructure/Array")
    },
    {
      text: "Sorted Set",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/DataStructure/SortedSet")
    },
    {
      text: "Unsorted Set",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/DataStructure/UnsortedSet")
    },
    {
      text: "Singly Linked List",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/DataStructure/SinglyLinkedList")
    },
    {
      text: "Doubly Linked List",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/DataStructure/DoublyLinkedList")
    },
    {
      text: "Queue",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/DataStructure/Queue")
    },
  ]

  const sortList = [
    {
      text: " Bubble Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/BubbleSort"),

    },
    {
      text: " Comb Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/CombSort")
    },
    {
      text: " Cycle Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/CycleSort")
    },
    {
      text: " Gnome Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/GnomeSort")
    },
    {
      text: " Heap Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/HeapSort")
    },
    {
      text: " Insertion Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/InsertionSort")
    },
    {
      text: " Merge Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/MergeSort")
    },
    {
      text: " PigeonHole Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/PigeonHoleSort")
    },
    {
      text: " Quick Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/QuickSort")
    },
    {
      text: " Radix Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/RadixSort")
    },
    {
      text: " Selection Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/SelectionSort")
    },
    {
      text: " Shell Sort",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Sorting/ShellSort")
    },
  ]

  const pathList = [
    {
      text: "A* Search",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Pathfinding/AStar")
    },
    {
      text: "Breadth First Search",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Pathfinding/BFS")
    },
    {
      text: "Depth First Search",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Pathfinding/DFS")
    },
    {
      text: "Dijkstra Search",
      icon: <KeyboardArrowRightIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Pathfinding/Dijkstra")
    },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "25px",
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} onClick={() => history.push('/')} alt="EduHub" width="110" height="72" />
          <div className="position-absolute mx-4" style={{ right: "0" }}>
            <Button color="inherit" className="btn btn-outline-dark float-end" type="button" onClick={() => history.push('/Auth')}>Login/Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
      <CustomDrawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <Divider />
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            if (text === "Sortings") {
              return (
                <>
                  <ListItem width="50%" button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                    {expandSort ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Divider />
                  <Collapse in={expandSort} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {sortList.map((item2, index2) => {
                        const { text, icon, onClick } = item2;
                        return (
                          <ListItem width="50%" button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            }
            else if (text === "Path Finding") {
              return (
                <>
                  <ListItem width="50%" button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                    {expandPath ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Divider />
                  <Collapse in={expandPath} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {pathList.map((item2, index2) => {
                        const { text, icon, onClick } = item2;
                        return (
                          <ListItem width="50%" button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            }
            else if (text === "Data Structures") {
              return (
                <>
                  <ListItem width="50%" button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                    {expandDs ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Divider />
                  <Collapse in={expandDs} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {dsList.map((item2, index2) => {
                        const { text, icon, onClick } = item2;
                        return (
                          <ListItem width="50%" button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            }
            else if (text === "Home") {
              return (
                <>
                  <ListItem width="50%" button key={text} onClick={onClick}>
                    {icon && <ListItemIcon >{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                  <Divider />
                </>
              );
            }
          })}
        </List>
        <div className="position-absolute overflow-scroll w-100" style={{ bottom: "0" }}>
          <Divider />
          <ListItem width="50%" button key="Account" onClick={() => history.push("/Auth")}>
            <ListItemIcon ><AccountCircleIcon style={{ color: '#0b132f' }} fontSize="large" /></ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItem>
        </div>
      </CustomDrawer>
    </Box>
  );
};

export default withRouter(Drawer);
