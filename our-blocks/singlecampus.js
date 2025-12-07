wp.blocks.registerBlockType("ourblocktheme/singlecampus", {
  title: "Henry University Single Campus",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Campus Placeholder")
  },
  save: function () {
    return null
  }
})
