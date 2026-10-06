function Board() {
  return (
    /* Whiteboard layout */
    <div className="flex flex-1 flex-col m-2">
      {/* row 1 (full width) */}
      <div className="flex flex-1 m-0.5">
        {/* sections */}
        <div className="flex flex-1 border border-dotted rounded-md"></div>
      </div>
      {/* row 2 (two sections) */}
      <div className="flex flex-1 m-0.5">
        {/* sections */}
        <div className="flex flex-1 m-0.5 border border-dotted rounded-md"></div>
        <div className="flex flex-1 m-0.5 border border-dotted rounded-md"></div>
      </div>
    </div>
  )
}

export default Board
