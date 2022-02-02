import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home.js";
import SignUp from './components/SignUp';
import logo from "./assets/EduhubLogo.jpg";
import {
  Button,
  AppBar,
  Toolbar
} from "@material-ui/core";
import BubbleInfo from "./Routes/Sorting/BubbleSort/BubbleInfo";
import CombInfo from "./Routes/Sorting/CombSort/CombInfo";
import CycleInfo from "./Routes/Sorting/CycleSort/CycleInfo";
import GnomeInfo from "./Routes/Sorting/GnomeSort/GnomeInfo";
import HeapInfo from "./Routes/Sorting/HeapSort/HeapInfo";
import InsertionInfo from "./Routes/Sorting/InsertionSort/InsertionInfo";
import MergeInfo from "./Routes/Sorting/MergeSort/MergeInfo";
import PigeonHoleInfo from "./Routes/Sorting/PigeonHoleSort/PigeonHoleInfo";
import QuickInfo from "./Routes/Sorting/QuickSort/QuickInfo";
import RadixInfo from "./Routes/Sorting/RadixSort/RadixInfo";
import SelectionInfo from "./Routes/Sorting/SelectionSort/SelectionInfo";
import ShellInfo from "./Routes/Sorting/ShellSort/ShellInfo";
import AStarInfo from "./Routes/Pathfinding/AStar/AStarInfo";
import BFSInfo from "./Routes/Pathfinding/BFS/BFSInfo";
import DFSInfo from "./Routes/Pathfinding/DFS/DFSInfo";
import DijkstraInfo from "./Routes/Pathfinding/Dijkstra/DijkstraInfo";
import ArrayInfo from "./Routes/DataStructure/Array/ArrayInfo";
import SSInfo from "./Routes/DataStructure/SortedSet/SSInfo";
import USInfo from "./Routes/DataStructure/UnsortedSet/USInfo";
import SLLInfo from "./Routes/DataStructure/SinglyLinkedList/SLLInfo";
import DLLInfo from "./Routes/DataStructure/DoublyLinkedList/DLLInfo";
import QueueInfo from "./Routes/DataStructure/Queue/QueueInfo";
import { Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    paddingLeft: 300
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginRight: "auto"
  },
  drawer: {
    width: 300,
    zIndex: theme.zIndex.appBar - 1,
  },
  content: {
    padding: theme.spacing(3)
  }
}));


export default function App() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger();
  const history = useHistory();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact from="/" component={Home} />
        <Route exact from="/SignUp" component={SignUp} />
        <Route exact path="/Routes/Sorting/BubbleSort/BubbleInfo" render={props => <BubbleInfo {...props} />} />
        <Route exact path="/Routes/Sorting/CombSort/CombInfo" render={props => <CombInfo {...props} />} />
        <Route exact path="/Routes/Sorting/CycleSort/CycleInfo" render={props => <CycleInfo {...props} />} />
        <Route exact path="/Routes/Sorting/GnomeSort/GnomeInfo" render={props => <GnomeInfo {...props} />} />
        <Route exact path="/Routes/Sorting/HeapSort/HeapInfo" render={props => <HeapInfo {...props} />} />
        <Route exact path="/Routes/Sorting/InsertionSort/InsertionInfo" render={props => <InsertionInfo {...props} />} />
        <Route exact path="/Routes/Sorting/MergeSort/MergeInfo" render={props => <MergeInfo {...props} />} />
        <Route exact path="/Routes/Sorting/PigeonHoleSort/PigeonHoleInfo" render={props => <PigeonHoleInfo {...props} />} />
        <Route exact path="/Routes/Sorting/QuickSort/QuickInfo" render={props => <QuickInfo {...props} />} />
        <Route exact path="/Routes/Sorting/RadixSort/RadixInfo" render={props => <RadixInfo {...props} />} />
        <Route exact path="/Routes/Sorting/SelectionSort/SelectionInfo" render={props => <SelectionInfo {...props} />} />
        <Route exact path="/Routes/Sorting/ShellSort/ShellInfo" render={props => <ShellInfo {...props} />} />
        <Route exact path="/Routes/Pathfinding/AStar/AStarInfo" render={props => <AStarInfo {...props} />} />
        <Route exact path="/Routes/Pathfinding/BFS/BFSInfo" render={props => <BFSInfo {...props} />} />
        <Route exact path="/Routes/Pathfinding/DFS/DFSInfo" render={props => <DFSInfo {...props} />} />
        <Route exact path="/Routes/Pathfinding/Dijkstra/DijkstraInfo" render={props => <DijkstraInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/Array/ArrayInfo" render={props => <ArrayInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/SortedSet/SSInfo" render={props => <SSInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/UnsortedSet/USInfo" render={props => <USInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/SinglyLinkedList/SLLInfo" render={props => <SLLInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/DoublyLinkedList/DLLInfo" render={props => <DLLInfo {...props} />} />
        <Route exact path="/Routes/DataStructure/Queue/QueueInfo" render={props => <QueueInfo {...props} />} />
      </Switch>
      <div className="shadow">
        <AppBar position="fixed" color="#cae8f6" elevation="8" className={classes2.appBar}>
          <Toolbar>
            <img src={logo} onClick={() => history.push('/')} alt="EduHub" width="150" height="95" />
            <Button color="inherit" id="btn" onClick={() => history.push('/SignUp')}>Login/Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

