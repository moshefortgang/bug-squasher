import React from "react";
import { AiTwotoneBug } from "react-icons/ai";
import BugProps from "@/interfaces/BugProps";


const Bug = ({ position, onClick }: BugProps) => {
	return (
	  <div 
		className="bug"
		style={{ top: `${position.y}px`, left: `${position.x}px` }}
		onClick={onClick}
	  >
		<AiTwotoneBug />
	  </div>
	);
  };

export default Bug;
