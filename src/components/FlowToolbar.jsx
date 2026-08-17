function FlowToolbar({
  onShowJson,
  onAddNode,
}) {
  return (
    <div
      className="
        fixed
        left-5
        top-5
        z-[2000]
        flex
        gap-3
      "
    >
      <button
        onClick={onAddNode}
        className="
          h-10
          rounded-lg
          bg-emerald-600
          px-4
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-all
          hover:bg-emerald-700
          hover:scale-105
        "
      >
        + Add Node
      </button>

      <button
        onClick={onShowJson}
        className="
          h-10
          rounded-lg
          bg-blue-600
          px-4
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-all
          hover:bg-blue-700
          hover:scale-105
        "
      >
        Show JSON
      </button>
    </div>
  );
}

export default FlowToolbar;