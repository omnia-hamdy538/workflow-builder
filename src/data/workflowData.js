export const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 50, y: 150 },
    data: {
      label: "User Message",
      color: "#2563eb",
    },
  },

  {
    id: "2",
    type: "custom",
    position: { x: 280, y: 150 },
    data: {
      label: "AI Agent",
      color: "#7c3aed",
    },
  },

  {
    id: "3",
    type: "custom",
    position: { x: 510, y: 150 },
    data: {
      label: "Condition",
      color: "#ea580c",
    },
  },

  {
    id: "4",
    type: "custom",
    position: { x: 740, y: 150 },
    data: {
      label: "Reply",
      color: "#16a34a",
    },
  },
];
export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: {
      stroke: "#60a5fa",
      strokeWidth: 2,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: {
      stroke: "#a78bfa",
      strokeWidth: 2,
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: {
      stroke: "#4ade80",
      strokeWidth: 2,
    },
  },
];