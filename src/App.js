import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import Auth from './components/auth/Auth.js';
import BubbleInfo from "./routes/Sorting/BubbleSort/BubbleInfo";
import CombInfo from "./routes/Sorting/CombSort/CombInfo";
import CycleInfo from "./routes/Sorting/CycleSort/CycleInfo";
import GnomeInfo from "./routes/Sorting/GnomeSort/GnomeInfo";
import HeapInfo from "./routes/Sorting/HeapSort/HeapInfo";
import InsertionInfo from "./routes/Sorting/InsertionSort/InsertionInfo";
import MergeInfo from "./routes/Sorting/MergeSort/MergeInfo";
import PigeonHoleInfo from "./routes/Sorting/PigeonHoleSort/PigeonHoleInfo";
import QuickInfo from "./routes/Sorting/QuickSort/QuickInfo";
import RadixInfo from "./routes/Sorting/RadixSort/RadixInfo";
import SelectionInfo from "./routes/Sorting/SelectionSort/SelectionInfo";
import ShellInfo from "./routes/Sorting/ShellSort/ShellInfo";
import AStarInfo from "./routes/Pathfinding/AStar/AStarInfo";
import BFSInfo from "./routes/Pathfinding/BFS/BFSInfo";
import DFSInfo from "./routes/Pathfinding/DFS/DFSInfo";
import DijkstraInfo from "./routes/Pathfinding/Dijkstra/DijkstraInfo";
import ArrayInfo from "./routes/DataStructure/Array/ArrayInfo";
import SSInfo from "./routes/DataStructure/SortedSet/SSInfo";
import USInfo from "./routes/DataStructure/UnsortedSet/USInfo";
import SLLInfo from "./routes/DataStructure/SinglyLinkedList/SLLInfo";
import DLLInfo from "./routes/DataStructure/DoublyLinkedList/DLLInfo";
import QueueInfo from "./routes/DataStructure/Queue/QueueInfo";
import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100%",
    marginTop: 72
  }
});

export default function App() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.container}>
      <Drawer setUserName={setUserName} setEmail={setEmail} setPassword={setPassword}
        userName={userName} email={email} password={password} />
      <Switch>
        <Route exact from="/" component={Home} />
        <Route exact from="/Auth" >
          {userName === "" && email === "" && password === "" &&
            <Auth setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} />
          }
        </Route>
        <Route exact path="/Sorting/BubbleSort" render={props => <BubbleInfo {...props} />} />
        <Route exact path="/Sorting/CombSort" render={props => <CombInfo {...props} />} />
        <Route exact path="/Sorting/CycleSort" render={props => <CycleInfo {...props} />} />
        <Route exact path="/Sorting/GnomeSort" render={props => <GnomeInfo {...props} />} />
        <Route exact path="/Sorting/HeapSort" render={props => <HeapInfo {...props} />} />
        <Route exact path="/Sorting/InsertionSort" render={props => <InsertionInfo {...props} />} />
        <Route exact path="/Sorting/MergeSort" render={props => <MergeInfo {...props} />} />
        <Route exact path="/Sorting/PigeonHoleSort" render={props => <PigeonHoleInfo {...props} />} />
        <Route exact path="/Sorting/QuickSort" render={props => <QuickInfo {...props} />} />
        <Route exact path="/Sorting/RadixSort" render={props => <RadixInfo {...props} />} />
        <Route exact path="/Sorting/SelectionSort" render={props => <SelectionInfo {...props} />} />
        <Route exact path="/Sorting/ShellSort" render={props => <ShellInfo {...props} />} />
        <Route exact path="/Pathfinding/AStar" render={props => <AStarInfo {...props} />} />
        <Route exact path="/Pathfinding/BFS" render={props => <BFSInfo {...props} />} />
        <Route exact path="/Pathfinding/DFS" render={props => <DFSInfo {...props} />} />
        <Route exact path="/Pathfinding/Dijkstra" render={props => <DijkstraInfo {...props} />} />
        <Route exact path="/DataStructure/Array" render={props => <ArrayInfo {...props} />} />
        <Route exact path="/DataStructure/SortedSet" render={props => <SSInfo {...props} />} />
        <Route exact path="/DataStructure/UnsortedSet" render={props => <USInfo {...props} />} />
        <Route exact path="/DataStructure/SinglyLinkedList" render={props => <SLLInfo {...props} />} />
        <Route exact path="/DataStructure/DoublyLinkedList" render={props => <DLLInfo {...props} />} />
        <Route exact path="/DataStructure/Queue" render={props => <QueueInfo {...props} />} />
      </Switch>
    </div>
  );
}