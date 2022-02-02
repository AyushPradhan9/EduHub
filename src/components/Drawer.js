import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EqualizerSharpIcon from '@material-ui/icons/EqualizerSharp';
import KeyboardArrowRightSharpIcon from '@material-ui/icons/KeyboardArrowRightSharp';
import StorageSharpIcon from '@material-ui/icons/StorageSharp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import { withRouter } from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import "./styles/Drawer.css";


const useStyles = makeStyles({
  drawer: {
    width: 270,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 270,
  },
  itemlist: {
    marginTop: 2,
    marginBottom: 2,
  },
  nested: {
    paddingLeft: 40,
  },
  customizeToolbar: {
    minHeight: 44.5,
  },
});

const Drawer = props => {
  const { history } = props;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const classes = useStyles();
  const handleClicks = () => {
    setOpen(!open);
    if (!open) {
      setOpen1(false);
      setOpen2(false);
    }
  };
  const handleClickds = () => {
    setOpen1(!open1);
    if (!open1) {
      setOpen(false);
      setOpen2(false);
    }
  };
  const handleClickpf = () => {
    setOpen2(!open2);
    if (!open2) {
      setOpen(false);
      setOpen1(false);
    }
  };
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => history.push("/")
    },
    {
      text: "Data Structures",
      icon: <StorageSharpIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => handleClickds()
    },
    {
      text: "Sortings",
      icon: <EqualizerSharpIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => handleClicks()
    },
    {
      text: "Path Finding",
      icon: <LocationOnIcon style={{ color: '#0b132f' }} fontSize="large" />,
      onClick: () => handleClickpf()
    }
  ];

  const sortList = [
    {
      text: " Bubble Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/BubbleSort/BubbleInfo"),

    },
    {
      text: " Comb Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/CombSort/CombInfo")
    },
    {
      text: " Cycle Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/CycleSort/CycleInfo")
    },
    {
      text: " Gnome Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/GnomeSort/GnomeInfo")
    },
    {
      text: " Heap Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/HeapSort/HeapInfo")
    },
    {
      text: " Insertion Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/InsertionSort/InsertionInfo")
    },
    {
      text: " Merge Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/MergeSort/MergeInfo")
    },
    {
      text: " PigeonHole Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/PigeonHoleSort/PigeonHoleInfo")
    },
    {
      text: " Quick Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/QuickSort/QuickInfo")
    },
    {
      text: " Radix Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/RadixSort/RadixInfo")
    },
    {
      text: " Selection Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/SelectionSort/SelectionInfo")
    },
    {
      text: " Shell Sort",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Sorting/ShellSort/ShellInfo")
    },
  ]

  const pathList = [
    {
      text: "A* Search",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Pathfinding/AStar/AStarInfo")
    },
    {
      text: "Breadth First Search",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Pathfinding/BFS/BFSInfo")
    },
    {
      text: "Depth First Search",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Pathfinding/DFS/DFSInfo")
    },
    {
      text: "Dijkstra Search",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/Pathfinding/Dijkstra/DijkstraInfo")
    },
  ]

  const dsList = [
    {
      text: "Array",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/DataStructure/Array/ArrayInfo")
    },
    {
      text: "Sorted Set",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/DataStructure/SortedSet/SSInfo")
    },
    {
      text: "Unsorted Set",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/DataStructure/UnsortedSet/USInfo")
    },
    {
      text: "Singly Linked List",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/DataStructure/SinglyLinkedList/SLLInfo")
    },
    {
      text: "Doubly Linked List",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/DataStructure/DoublyLinkedList/DLLInfo")
    },
    {
      text: "Queue",
      icon: <KeyboardArrowRightSharpIcon style={{ color: 'black' }} fontSize="large" />,
      onClick: () => history.push("/Routes/DataStructure/Queue/QueueInfo")
    },
  ]


  return (
    <MUIDrawer variant="permanent" className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left">
      <Toolbar className={classes.customizeToolbar} />
      <Toolbar className={classes.customizeToolbar} />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          if (text === "Sortings") {
            return (
              <>
                <ListItem width="50%" className={classes.itemlist} button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {sortList.map((item2, index2) => {
                      const { text, icon, onClick } = item2;
                      return (
                        <ListItem width="50%" className={classes.nested} button key={text} onClick={onClick}>
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
                <ListItem width="50%" className={classes.itemlist} button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                  {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {pathList.map((item2, index2) => {
                      const { text, icon, onClick } = item2;
                      return (
                        <ListItem width="50%" className={classes.nested} button key={text} onClick={onClick}>
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
                <ListItem width="50%" className={classes.itemlist} button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {dsList.map((item2, index2) => {
                      const { text, icon, onClick } = item2;
                      return (
                        <ListItem width="50%" className={classes.nested} button key={text} onClick={onClick}>
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
          else {
            return (
              <>
                <ListItem className={classes.itemlist} width="50%" button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
                <Divider />
              </>
            );
          }
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
