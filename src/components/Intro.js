import React from "react";
import './styles/Intro.css';
import sort_img from '../assets/sort_img.png';
import path_img from '../assets/pf1.png';
import data_img from '../assets/ds.png';
import array from "../assets/Array.jpg";
import sll from "../assets/SLL.jpg";
import dll from "../assets/DLL.jpg";
import oset from "../assets/Ordered_Set.jpg";
import uset from "../assets/Unordered_Set.jpg";
import sav from "../assets/SAV.jpg"
import queue from "../assets/Queue.jpg";
import astar from "../assets/Astar.jpg";
import bfs from "../assets/BFS.jpg";
import dfs from "../assets/DFS.jpg";
import dijkstra from "../assets/Dijkstra.jpg";
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
class Intro extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="intro-container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">LEARNING THAT CREATES LIFELONG MEMORIES</h3>
                <p className="subtitle-a">
                  THE CANVAS OF <u>IMAGINATION</u> | THE <u>PLAYGROUND</u> OF CONCEPTS
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="work-box">
                <a href={array} data-lightbox="gallery-todo" data-title="Array">
                  <div className="work-img">
                    <img src={data_img} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Data Structures</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Array, Linked Lists, Sets and Queue
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={sll}
                  data-title="Singly Linked List"
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dll}
                  data-title="Doubly Linked List"
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={uset}
                  data-title="Unordered Set"
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={oset}
                  data-title="Ordered Set"
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={queue}
                  data-title="Queue"
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={sav} data-lightbox="gallery-vmarine" data-title="Sorting Algorithm Visualizer">
                  <div className="work-img">
                    <img src={sort_img} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Sorting Algorithms</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bubble, Insertion, Merge, Quick, etc...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={astar} data-lightbox="gallery-aguadeluz" data-title="Astar Algorithm">
                  <div className="work-img">
                    <img src={path_img} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Path Finding Algorithms</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Astar, BFS, DFS and Dijkstra
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={bfs}
                  data-lightbox="gallery-aguadeluz"
                  data-title="Breadth First Search Algorithm"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dfs}
                  data-title="Depth First Search Algorithm"
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dijkstra}
                  data-title="Dijkstra Algorithm"
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;