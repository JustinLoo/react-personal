// src/projectData.js

// --- Import your project images here ---
// Make sure these match the filenames in your src folder
import bok from "./bok.jpg";
import schem from "./schem.png";
import layout from "./layout.png";
import vivado1 from "./p3.png";
import vivado2 from "./waver.png";
import pastweb from "./pastwebsite.png";

export const projects = [
 {
   id: "radar",
    title: "FPGA-Based Doppler Radar (IN PROGRESS)",
    subtitle: "2025/2026",
    
    cardTitle: "Micro-Doppler Speed Radar",
    cardDesc: "Real-time velocity detector using 10.5GHz radar and hardware signal processing on an Artix-7 FPGA.",
    images: [bok], 
    
    overview: "Designed a mixed-signal embedded system to measure speed using the Doppler effect. The project bridges a microwave radar sensor with a Basys 3 FPGA via a custom analog circuit. I engineered an amplifier stage to condition weak sensor signals for the FPGA's ADC and implemented digital logic to process the data and calculate real-time velocity. Implements and solidifies understanding of the use case of FFT (Fast Fourier Transform).",
    
    learned: [
      "Analog Circuit Design: Building amplifiers and signal conditioning for real-world sensors.",
      "FPGA Integration: Interfacing analog hardware with digital logic (XADC & Artix-7).",
      "Hardware Debugging: Using Oscilloscopes and Integrated Logic Analyzers (ILA) to validate signals.",
      "Signal Processing: Applying sampling theory and frequency analysis to interpret sensor data."
    ],
    link: null
 },
  {
    id: "altium",
    title: "Space Enterprise at Berkeley(SEB) PCB and firmware design",
    subtitle: "2024/2025",
    cardTitle: "PCB and firmware for Space Enterprise at Berkeley",
    cardDesc: "PCB Design schematic and layout with firmware",
    images: [schem, layout], 
    overview: "PCB design focusing on avionics for my club at UC Berkeley | Space Enterprise at Berkeley",
   learned: [
      "I developed firmware for the Flight Computer on the Eureka-3 liquid-fueled rocket, implementing custom data packet protocols for efficient telemetry transmission. On the hardware side, I assisted in the design of the GSEv4 (Ground Support Equipment) PCB to manage valve actuation and solenoid control during launch sequences. Through this project, I used Altium Designer, specifically focusing on schematic capture, PCB layout"
    ],
    link: "https://github.com/JustinLoo"
  },
  {
    id: "cpu",
    title: "16-bit RISC cpu",
    subtitle: "2024",
    cardTitle: "16-bit CPU",
    cardDesc: "SystemVerilog • Vivado • FPGA",
    images: [vivado1, vivado2],
    overview: "A fully custom 16-bit CPU designed from the ground up using SystemVerilog. This architecture implements a classic RISC-style pipeline, optimized into a single-cycle/dual-stage fetch-execute model.",
    learned: [
      "Implementation of register file",
      "How datapath works",
      "Implementation of ALU, control units, instruction memory",
      "Mapped all instructions to custom instruction set",
      "High-speed UART serial interface"
    ],
    link: "https://github.com/JustinLoo/cpu"
  },
  {
    id: "web",
    title: "full stack web dev",
    subtitle: "2023",
    cardTitle: "web dev / node.js projects",
    cardDesc: "React, Node.js, and Full Stack variations.",
    images: [pastweb],
    overview: "random applications of all of the sort i played around with in my time in high school. all projects can be found on github!",
    learned: [
      "js, php, react, mysql, c#",
      "React front end develop",
      "node js / express.js",
      "php/MySQL/apache on XXAMP"
    ],
    link: null
  }
];