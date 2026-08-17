import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import { useCallback, useState } from "react";

import "@xyflow/react/dist/style.css";

import CustomNode from "./components/CustomNode";
import JsonModal from "./components/JsonModal";
import NodeDetails from "./components/NodeDetails";
import FlowToolbar from "./components/FlowToolbar";

import {
  initialNodes,
  initialEdges,
} from "./data/workflowData";

const nodeTypes = {
  custom: CustomNode,
};

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [jsonData, setJsonData] = useState("");

  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      setEdges((currentEdges) =>
        addEdge(params, currentEdges)
      );
    },
    [setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  const showJson = useCallback(() => {
    const workflow = {
      nodes,
      edges,
    };

    setJsonData(
      JSON.stringify(workflow, null, 2)
    );
  }, [nodes, edges]);

  const closeNodeDetails = () => {
    setSelectedNode(null);
  };

  const closeJsonModal = () => {
    setJsonData("");
  };

  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-gray-900">
      <FlowToolbar onShowJson={showJson} />

      <JsonModal
        jsonData={jsonData}
        onClose={closeJsonModal}
      />

      <NodeDetails
        node={selectedNode}
        onClose={closeNodeDetails}
      />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{
          padding: 0.3,
        }}
      >
        <Background
          gap={20}
          size={1}
        />

        <Controls />

        <MiniMap
          zoomable
          pannable
          className="!rounded-lg !border !border-gray-700 !bg-gray-800"
        />
      </ReactFlow>
    </div>
  );
}

export default App;




// import {
//   ReactFlow,
//   Background,
//   Controls,
//   addEdge,
//   useNodesState,
//   useEdgesState,
// } from "@xyflow/react";

// import { useCallback, useState } from "react";
// import "@xyflow/react/dist/style.css";

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 100, y: 100 },
//     data: { label: "User Message" },
//   },
//   {
//     id: "2",
//     position: { x: 400, y: 100 },
//     data: { label: "AI Agent" },
//   },
//   {
//     id: "3",
//     position: { x: 700, y: 100 },
//     data: { label: "Condition" },
//   },
//   {
//     id: "4",
//     position: { x: 1000, y: 100 },
//     data: { label: "Reply" },
//   },
// ];

// const initialEdges = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//   },
//   {
//     id: "e2-3",
//     source: "2",
//     target: "3",
//   },
//   {
//     id: "e3-4",
//     source: "3",
//     target: "4",
//   },
// ];

// function App() {
//   const [jsonData, setJsonData] = useState("");

//   const [nodes, setNodes, onNodesChange] =
//     useNodesState(initialNodes);

//   const [edges, setEdges, onEdgesChange] =
//     useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (params) =>
//       setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const onNodeClick = (event, node) => {
//     alert(`Selected: ${node.data.label}`);
//   };

//   const showJson = () => {
//     setJsonData(
//       JSON.stringify(
//         {
//           nodes,
//           edges,
//         },
//         null,
//         2
//       )
//     );
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <button
//         onClick={showJson}
//         style={{
//           position: "absolute",
//           zIndex: 1000,
//           top: 10,
//           left: 10,
//         }}
//       >
//         Show JSON
//       </button>

//       {jsonData && (
//         <div
//           style={{
//             position: "absolute",
//             zIndex: 1000,
//             top: 50,
//             left: 10,
//             width: "400px",
//             maxHeight: "300px",
//             overflow: "auto",
//             background: "#fff",
//             padding: "10px",
//             border: "1px solid #ccc",
//           }}
//         >
//           <button
//             onClick={() => setJsonData("")}
//             style={{
//               position: "absolute",
//               top: "5px",
//               right: "5px",
//               border: "none",
//               background: "red",
//               fontSize: "20px",
//               cursor: "pointer",
//             }}
//           >
//             ×
//           </button>

//           <pre style={{ marginTop: "25px" }}>
//             {jsonData}
//           </pre>
//         </div>
//       )}

//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         onNodeClick={onNodeClick}
//         fitView
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }

// export default App;
















