function JsonModal({ jsonData, onClose }) {
  if (!jsonData) {
    return null;
  }

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
          w-[min(600px,90vw)]
          max-h-[70vh]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-[14px]
          bg-gray-800
          p-5
          text-white
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        "
      >
        <div
          className="
            mb-[15px]
            flex
            items-center
            justify-between
          "
        >
          <h3 className="m-0 text-lg font-semibold">
            Workflow JSON
          </h3>

          <button
            onClick={onClose}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              border-0
              bg-red-500
              text-lg
              text-white
              transition
              hover:bg-red-600
              cursor-pointer
            "
          >
            ×
          </button>
        </div>

        <pre
          className="
            m-0
            max-h-[50vh]
            overflow-auto
            rounded-lg
            bg-gray-900
            p-[15px]
            text-[13px]
            leading-[1.6]
            whitespace-pre-wrap
            break-words
          "
        >
          {jsonData}
        </pre>
      </div>
    </>
  );
}

export default JsonModal;