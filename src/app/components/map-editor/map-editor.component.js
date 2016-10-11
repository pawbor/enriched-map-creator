import template from './map-editor.html';
import styles from './map-editor.scss';

class controller {
  constructor() {
    this.styles = styles;
  }
}

const component = {
  template,
  controller
};

export default component;
