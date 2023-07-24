import BugPosition from "@/interfaces/BugPosition";

export function randomPosition(): BugPosition {
	const bugSize: number = 50;
	const scoreContainerSize: number = 60;
    const x: number = Math.floor(Math.random() * (window.innerWidth - bugSize)) ;
    const y: number = Math.floor(Math.random() * (window.innerHeight - bugSize - scoreContainerSize )) + scoreContainerSize;
    return { x, y };
};