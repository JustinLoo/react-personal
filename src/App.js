// src/App.js

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import "hover.css/css/hover-min.css";
import ScrollReveal from "scrollreveal";

// Components
import Row from "./components/Row";
import Column from "./components/Column"; 
import Box from "./components/Box";

// General Images
import backgroundImage from "./background.jpg";
import profile from "./personal.jpg";
import amberbg from "./amber.jpg";
import swiss from "./swiss.jpg";
import sather from "./sather.jpg";

// IMPORT DATA
import { projects } from "./projectData"; 

function App() {
  const scrollToMiddle = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight / 4, 
      behavior: "smooth", 
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", 
    });
  };

  const [activeProject, setActiveProject] = useState(null);

  const currentModalData = activeProject 
    ? projects.find(p => p.id === activeProject) 
    : null;

  const chunkProjects = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const projectRows = chunkProjects(projects, 2);

  useEffect(() => {
    // SCROLL REVEAL CONFIG
    const sr = ScrollReveal({
      reset: false,   
      mobile: true,   
      viewFactor: 0.2, 
      delay: 100,      
    });

    sr.reveal(".slide-from-top", { duration: 1500, distance: "50px", origin: "top" });
    sr.reveal(".slide-from-left", { duration: 1500, distance: "100px", origin: "left" });
    sr.reveal(".slide-from-right", { duration: 1500, distance: "100px", origin: "right" });
    sr.reveal(".slide-from-right-delay", { duration: 2250, distance: "100px", origin: "right" });
    sr.reveal(".slide-from-left-delay", { duration: 2250, distance: "100px", origin: "left" });
    sr.reveal(".slide-from-bottom", { duration: 1500, distance: "100px", origin: "bottom" });
    sr.reveal(".fade-in", { duration: 1000, distance: "10px", origin: "bottom" });
  }, []);

  return (
    /* FIX: Removed style={{overflowX: 'hidden'}} from here to prevent iPhone scroll lock */
    <div className="App d-flex flex-column align-items-center justify-content-start min-vh-100">
      
      <style>
        {`
          /* FIX: Apply overflow-x hidden to body instead of wrapper to fix iOS scroll */
          body, html {
            overflow-x: hidden;
            width: 100%;
            position: relative;
          }

          /* --- ANIMATION PERFORMANCE --- */
          /* Using translateZ(0) engages the GPU without locking up the main thread */
          .slide-from-top, 
          .slide-from-left, 
          .slide-from-right, 
          .slide-from-bottom {
             transform: translateZ(0); 
             -webkit-font-smoothing: antialiased;
          }

          .project-card {
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
            cursor: pointer;
            border-radius: 25px; 
            position: relative;
            overflow: hidden; 
            background-color: #000; 
            transform: translateZ(0);
            isolation: isolate;
          }
          
          .project-card:hover {
            transform: translateY(-10px) translateZ(0); 
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            z-index: 10;
          }

          .project-card img {
            transition: transform 0.6s ease;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 25px; 
          }
          .project-card:hover img {
            transform: scale(1.05); 
          }

          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 25px; 
            background: rgba(0, 0, 0, 0.3); 
            opacity: 1; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: background 0.4s ease;
            z-index: 2;
          }

          .project-card:hover .project-overlay {
            background: rgba(0, 0, 0, 0.2); 
            backdrop-filter: blur(8px); 
            -webkit-backdrop-filter: blur(8px);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          }
          
          .project-overlay h1, .project-overlay p {
             text-shadow: 0 4px 15px rgba(0,0,0,0.9);
             transition: transform 0.3s ease;
          }
          
          .project-card:hover .project-overlay h1 {
             transform: translateY(-5px);
          }

          @keyframes spaceModalAppear {
            0% { opacity: 0; transform: scale(0.95) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }

          .modal-content-box {
             height: 85vh; 
          }

          /* --- MOBILE RESPONSIVENESS --- */
          @media (max-width: 768px) {
             .modal-content-box {
                height: 95vh !important;
                width: 95% !important;
             }
             .mobile-project-box {
                height: 220px !important; 
             }
             .project-overlay h1 {
                font-size: 1.1rem !important;
                margin-bottom: 2px !important;
             }
             .project-overlay p {
                font-size: 0.75rem !important;
                line-height: 1.1 !important;
             }
          }
        `}
      </style>

      <div className="container text-white"> 
        
        {/* Title / Navbar */}
        <div
          className="title text-center mb-4 mt-5 slide-from-top"
          style={{ color: "white" }}
        >
          <nav className="navbar py-3">
            <div className="container-fluid d-flex justify-content-center justify-content-md-between">
              <a
                className="navbar-brand fs-5 name ps-3"
                href="#"
                style={{ color: "#A7A7A7" }}
              >
                optimus
              </a>
              <ul className="navbar-nav d-none d-md-flex flex-row gap-3 pe-3">
                <li className="nav-item">
                  <a onClick={scrollToMiddle} className="nav-link hvr-grow" style={{ color: "#A7A7A7", fontSize: "25px", cursor: "pointer" }}>current</a>
                </li>
                <li className="nav-item">
                  <a onClick={scrollToBottom} className="nav-link hvr-grow" style={{ color: "#A7A7A7", fontSize: "25px", cursor: "pointer" }}>about</a>
                </li>
                <li className="nav-item">
                  <a href="mailto:jloo131222@berkeley.edu" className="nav-link hvr-grow" style={{ color: "#A7A7A7", fontSize: "25px" }}>contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Introduction Row */}
        <Row>
          <Column size={8}>
            <Box
              style = {{backgroundSize: 'cover'}}
              className="slide-from-left"
              textColor="white"
              bgImage={backgroundImage}
            >
              <h1 className="pt-5 ps-5 fw-900 fs-1">
                hello <br></br>thanks for visiting
              </h1>

              <p className="pt-4 px-5 fw-normal" style={{ color: "#A7A7A7" }}>
                 I am student at UC Berkeley majoring in EECS. Expected to graduate in 2027.    Throughout my academic journey, my focus has increasingly shifted toward the intersection of physics and hardware engineering. I hope to learn more about materials science and quantumn physics 
              </p>

              <div className="icons" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                <a href="mailto:jloo131222@berkeley.edu" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope hvr-grow" style={{ fontSize: "35px", color: "white" }}></i>
                </a>

               <a href="https://github.com/jloo131222" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github hvr-grow" style={{ fontSize: "35px", color: "white" }}></i>
               </a>
              </div>
            </Box>
          </Column>
          <Column size={4}>
            <Box bgColor="black" textColor="white" className="slide-from-right" >
              <img src={profile} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </Box>
          </Column>
        </Row>

        {/* --- DYNAMIC PROJECTS SECTION --- */}
        {projectRows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((project, colIndex) => {
              const animClass = colIndex === 0 ? "slide-from-left-delay" : "slide-from-right";

              return (
                <div className="col-6 mb-4" key={project.id}>
                  <div className={animClass}> 
                    <div 
                      className="project-card"
                      onClick={() => setActiveProject(project.id)}
                    >
                      <Box
                        className="position-relative d-flex justify-content-center align-items-center mobile-project-box"
                        sx={{ position: "relative", width: "100%", height: "400px" }}
                        bgColor="black"
                      >
                        <div className="project-overlay">
                          <h1 className="text-white text-center" style={{ fontSize: "1.8em", marginBottom: "10px" }}>
                            {project.cardTitle}
                          </h1>
                          <p className="text-white text-center px-2 d-none d-sm-block" style={{ fontSize: "0.9em", color: "#ddd" }}>
                            {project.cardDesc}
                            <span style={{fontSize: "0.8em", opacity: 0.9, marginTop:"10px", display:"block"}}>(Click for details)</span>
                          </p>
                          <p className="text-white text-center d-block d-sm-none" style={{ fontSize: "0.8em", color: "#ddd" }}>
                            Tap to view
                          </p>
                        </div>
                        <img src={project.images[0]} alt={project.title} className="img-fluid" />
                      </Box>
                    </div>
                  </div>
                </div>
              );
            })}
          </Row>
        ))}

        {/* SKILLS SECTION */}
        <Row>
          <Column size={12}>
            <Box
              href=""
              className="fluent-in-box d-flex justify-content-center align-items-center slide-from-right"
              bgImage={amberbg}
              style={{ 
                backgroundSize: "200% 200%", 
                backgroundPosition: "center",
                width: "100%", 
                // FIX: Changed from height:100vh to minHeight:100vh to prevent content clipping
                minHeight: "100vh" 
              }}
            >
              <div className="fluent-in-container d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white fluent-in-text pb-3">skills</h1>
                <p className="px-2" style={{ color: "#A7A7A7" }}>programming - fluent in python, java data structures, nodejs</p>
                <p className="px-2" style={{ color: "#A7A7A7" }}>PCB design - PCB design in altium designer and kiCad</p>
                <p className="px-2" style={{ color: "#A7A7A7" }}>circuit - circuit deisng/anaylsis | soldering, scope, etc..</p>
                <p className="px-2" style={{ color: "#A7A7A7" }}>Vivado - FPGA Design. System Verilog</p>
                <p className="px-2" style={{ color: "#A7A7A7" }}>backend - php,sql. know requests and basic php implmenation</p>
                <p className="px-2" style={{ color: "#A7A7A7" }}>other - git, linux, windows, proxmox</p>
              </div>
            </Box>
          </Column>
        </Row>

        {/* ABOUT SECTION */}
        <Row>
          <Column size={4}>
            <Box
              href=""
              className="slide-from-bottom"
              bgColor="black"
              style={{ 
                width: "100%", 
                aspectRatio: "1 / 1", 
                overflow: "hidden",
                padding: 0,
                display: "block"
              }} 
            >
              <img 
                src={sather} 
                alt="Profile"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  display: "block"
                }} 
              />
            </Box>
          </Column>

          <Column size={8}>
            <Box
              id="about12"
              className="slide-from-bottom"
              bgImage={swiss}
              shouldRotate={false}
              scaleFactor={1} 
              bgPositionY="bottom" 
              style={{ scale: 1 }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div style={{ flex: 1, paddingRight: "20px" }}>
                  <h1 className="pt-5 ps-5 fw-900 fs-1 text-white">time flies like an arrow, fruit flies like banana</h1>
                  <p className="pt-4 px-5 fw-normal lh-lg" style={{ color: "#A7A7A7" }}>
                    <br></br>
                    I'm more into hardware and physics these days. This is me dilly-dallying in some software / web-development. 😎😎😎
                      This is a react app with a one page design. Hope you enjoy! Built with React.js
                and Node.js. Animations made with scrollreveal.js
                  </p>
                   <p className="pt-4 px-5 fw-normal lh-lg" style={{ color: "#A7A7A7" }}>
                    <br></br>
                  </p>
                </div>
              </div>
            </Box>
          </Column>
        </Row>
        
        <footer className="text-center py-3" style={{ backgroundColor: "#000", color: "#A7A7A7", marginTop: "auto", height: "75px" }}>
          <p style={{ margin: 0 }}></p>
        </footer>

        {/* MODAL COMPONENT */}
        {activeProject && currentModalData && (
          <div
            onClick={() => setActiveProject(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.3)", 
              backdropFilter: "blur(4px)",
              animation: "fade-in 0.3s ease-out"
            }}
          >
            <div
              className="modal-content-box" 
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: "spaceModalAppear 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                width: "90%", 
                maxWidth: "1100px",
                background: "linear-gradient(135deg, rgba(20, 30, 50, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "20px",
                border: "1px solid rgba(100, 200, 255, 0.3)", 
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)", 
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                color: "#b8c7e0",
                textShadow: "0 2px 4px rgba(0,0,0,0.8)" 
              }}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  padding: "1rem 1.5rem", 
                  borderBottom: "1px solid rgba(100, 200, 255, 0.2)",
                  background: "rgba(100, 200, 255, 0.05)", 
                }}
              >
                <div>
                  <h2 className="m-0  text-white" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "1px" }}>
                    {currentModalData.title}
                  </h2>
                  <span style={{ fontSize: "0.75rem", color: "#ffffffff", letterSpacing: "2px", fontWeight:"bold" }}>
                    {currentModalData.subtitle}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-close-white btn-close-white"
                  aria-label="Close"
                  onClick={() => setActiveProject(null)}
                  style={{ transform: "scale(1.1)", filter: "drop-shadow(0 0 5px #64d2ff)", cursor: "pointer", background: "none", border: "none", color: "white", fontSize: "1.5rem" }}
                >
                  ×
                </button>
              </div>
              
              <div className="flex-grow-1 overflow-auto p-3 p-md-5" style={{ cssText: `::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); } ::-webkit-scrollbar-thumb { background: rgba(100, 200, 255, 0.4); borderRadius: 4px; }` }}>
                <div className="row h-100 align-items-start">
                  <div className="col-lg-5 mb-4 mb-lg-0 d-flex flex-column gap-4">
                    {currentModalData.images.map((imgSrc, index) => (
                      <div key={index} style={{ width: "100%", height: "250px", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(100, 200, 255, 0.3)", boxShadow: "0 5px 20px rgba(0,0,0,0.3)", position: "relative", flexShrink: 0 }}>
                        <img src={imgSrc} alt={`Visual ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.2)" }} />
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-7 ps-lg-5">
                    <h3 className="mb-3 text-white fw-light" style={{ letterSpacing: "1px" }}><span style={{color: "#ffffffff", fontWeight:"bold", marginRight:"10px"}}>></span> overview</h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#ffffffff" }}>
                      {currentModalData.overview}
                    </p>
                    <h5 className="mt-4 mb-3 text-white" style={{ fontSize: "1.1rem" }}>what I learned</h5>
                    <ul className="list-unstyled" style={{ lineHeight: "1.8", color: "#e0e6ed" }}>
                      {currentModalData.learned.map(item => (
                        <li key={item} className="d-flex align-items-start mb-2"><span style={{color: "#ffffffff", marginRight: "10px", marginTop: "4px"}}>►</span><span style={{ fontSize: "0.95rem" }}>{item}</span></li>
                      ))}
                    </ul>
                    
                    {currentModalData.link && (
                      <div className="mt-5">
                        <a href={currentModalData.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "12px 25px", background: "rgba(100, 200, 255, 0.1)", border: "1px solid rgba(100, 200, 255, 0.5)", borderRadius: "3px", color: "white", textDecoration: "none", fontWeight: "bold", letterSpacing: "1px", transition: "all 0.3s ease", boxShadow: "0 0 15px rgba(100, 200, 255, 0.1)" }} onMouseOver={(e) => { e.currentTarget.style.background = "rgba(100, 200, 255, 0.2)"; e.currentTarget.style.boxShadow = "0 0 25px rgba(100, 200, 255, 0.3)"; }} onMouseOut={(e) => { e.currentTarget.style.background = "rgba(100, 200, 255, 0.1)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(100, 200, 255, 0.1)"; }}>
                            <i className="fab fa-github" style={{ fontSize: "1.2rem" }}></i> VIEW SOURCE CODE
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;