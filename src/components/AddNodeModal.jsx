import { useState } from "react";

function AddNodeModal({
  isOpen,
  onClose,
  onAddNode,
}) {
  const [nodeName, setNodeName] =
    useState("");

  const [nodeColor, setNodeColor] =
    useState("#2563eb");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    if (!nodeName.trim()) {
      return;
    }

    onAddNode(nodeName, nodeColor);

    setNodeName("");
    setNodeColor("#2563eb");

    onClose();
  };

  return (
    <>

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[3000]
          bg-black/60
        "
      />


      <div
        className="
          fixed
          left-1/2
          top-1/2
          z-[3001]
          w-[400px]
          max-w-[90vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-xl
          bg-gray-800
          p-6
          text-white
          shadow-2xl
        "
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Add New Node
          </h2>

          <button
            onClick={onClose}
            className="
              h-8
              w-8
              rounded-md
              bg-red-500
              text-white
            "
          >
            ×
          </button>
        </div>


        <div className="mb-4">
          <label className="mb-2 block">
            Node Name
          </label>

          <input
            type="text"
            value={nodeName}
            onChange={(e) =>
              setNodeName(e.target.value)
            }
            placeholder="Enter node name"
            className="
              w-full
              rounded-lg
              border
              border-gray-600
              bg-gray-900
              px-3
              py-2
              outline-none
            "
          />
        </div>


        <div className="mb-6">
          <label className="mb-2 block">
            Node Color
          </label>

          <input
            type="color"
            value={nodeColor}
            onChange={(e) =>
              setNodeColor(e.target.value)
            }
            className="h-10 w-full"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              rounded-lg
              bg-gray-600
              px-4
              py-2
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              rounded-lg
              bg-blue-600
              px-4
              py-2
            "
          >
            Add Node
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNodeModal;