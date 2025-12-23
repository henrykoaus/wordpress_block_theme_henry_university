wp.blocks.registerBlockType("ourblocktheme/archive", {
  title: "Henry University Archive",
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Archive Placeholder"
    );
  },
  save: function () {
    return null;
  },
});
