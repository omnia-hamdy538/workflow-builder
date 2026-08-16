import {
  ReactFlow,
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import { useCallback, useState } from "react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "User Message" },
  },
  {
    id: "2",
    position: { x: 400, y: 100 },
    data: { label: "AI Agent" },
  },
  {
    id: "3",
    position: { x: 700, y: 100 },
    data: { label: "Condition" },
  },
  {
    id: "4",
    position: { x: 1000, y: 100 },
    data: { label: "Reply" },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
];

function App() {
  const [jsonData, setJsonData] = useState("");

  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = (event, node) => {
    alert(`Selected: ${node.data.label}`);
  };

  const showJson = () => {
    setJsonData(
      JSON.stringify(
        {
          nodes,
          edges,
        },
        null,
        2
      )
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button
        onClick={showJson}
        style={{
          position: "absolute",
          zIndex: 1000,
          top: 10,
          left: 10,
        }}
      >
        Show JSON
      </button>

      {jsonData && (
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            top: 50,
            left: 10,
            width: "400px",
            maxHeight: "300px",
            overflow: "auto",
            background: "#fff",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <button
            onClick={() => setJsonData("")}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              border: "none",
              background: "red",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <pre style={{ marginTop: "25px" }}>
            {jsonData}
          </pre>
        </div>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;