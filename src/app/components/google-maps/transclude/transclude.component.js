class controller {
  constructor($element, $transclude) {
    'ngInject';
    this.element = $element;
    this.transclude = $transclude;
  }

  $onInit() {
    this.transclude((clone) => {
      if (clone.length && notWhitespace(clone)) {
        this.element.empty();
        this.element.append(clone);
      }
    });
  }
}

function notWhitespace(nodes) {
  for (var i = 0, ii = nodes.length; i < ii; i++) {
    var node = nodes[i];
    if (node.nodeType !== Node.TEXT_NODE || node.nodeValue.trim()) {
      return true;
    }
  }
}

const component = {
  bindings: {
    mvcObject: '<'
  },
  controller
};

export default component;
