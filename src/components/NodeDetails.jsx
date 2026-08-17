function NodeDetails({ node, onClose }) {
  if (!node) {
    return null;
  }

  return (
    <div
      className="
        fixed
        right-5
        top-5
        z-[2000]
        w-60
        rounded-xl
        border
        border-gray-700
        bg-gray-800
        p-5
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <h2 className="m-0 text-lg font-semibold">
          Node Details
        </h2>

        <button
          onClick={onClose}
          className="
            flex
            h-[30px]
            w-[30px]
            cursor-pointer
            items-center
            justify-center
            rounded-md
            border-0
            bg-gray-700
            text-lg
            text-white
            transition
            hover:bg-gray-600
          "
        >
          ×
        </button>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <p>
          <strong className="text-gray-300">
            ID:
          </strong>{" "}
          {node.id}
        </p>

        <p>
          <strong className="text-gray-300">
            Name:
          </strong>{" "}
          {node.data.label}
        </p>

        <p>
          <strong className="text-gray-300">
            X:
          </strong>{" "}
          {Math.round(node.position.x)}
        </p>

        <p>
          <strong className="text-gray-300">
            Y:
          </strong>{" "}
          {Math.round(node.position.y)}
        </p>
      </div>
    </div>
  );
}

export default NodeDetails;