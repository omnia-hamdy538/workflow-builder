import { Handle, Position } from "@xyflow/react";

function CustomNode({ data }) {
  return (
    <div
      className={`
        relative
        min-w-[140px]
        rounded-xl
        border
        border-white/25
        px-[18px]
        py-3
        text-center
        text-sm
        font-semibold
        text-white
        shadow-lg
        whitespace-nowrap
      `}
      style={{
        backgroundColor: data.color,
      }}
    >

      <Handle
        type="target"
        position={Position.Left}
        className="!h-3 !w-3 !border-2 !border-white !bg-gray-500"
      />

      {data.label}


      <Handle
        type="source"
        position={Position.Right}
        className="!h-3 !w-3 !border-2 !border-white !bg-gray-500"
      />
    </div>
  );
}

export default CustomNode;