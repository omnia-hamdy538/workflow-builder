function FlowToolbar({ onShowJson }) {
  return (
    <button
      onClick={onShowJson}
      className="
        fixed
        left-5
        top-5
        z-[2000]
        h-10
        w-[110px]
        cursor-pointer
        rounded-lg
        border-0
        bg-blue-600
        p-0
        text-sm
        font-semibold
        text-white
        shadow-[0_4px_10px_rgba(0,0,0,0.25)]
        transition
        hover:bg-blue-700
      "
    >
      Show JSON
    </button>
  );
}

export default FlowToolbar;