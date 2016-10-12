class controller {
  constructor(EventEmitter) {
    'ngInject';
    this.EventEmitter = EventEmitter;
  }

  $onChanges(changes) {
    this.eventChange(changes);
  }

  $doCheck() {
    if(this.target !== this.transcludeCtrl.mvcObject) {
      this.updateListener();
    }
  }

  $onDestroy() {
    this.removeListener();
  }

  eventChange({event}) {
    if(event) {
      this.updateListener();
    }
  }

  addListener() {
    if(!this.event || !this.target) { return; }

    this.listener = this.target.addListener(this.event, (...data) => {
      let $event = this.EventEmitter({
        target: this.target,
        data
      });
      this.onEvent($event);
    });
  }

  updateListener() {
    this.target = this.transcludeCtrl.mvcObject;
    this.removeListener();
    this.addListener();
  }

  removeListener() {
    if(this.listener) {
      this.listener.remove();
      this.listener = null;
    }
  }
}



const component = {
  require: {
    transcludeCtrl: '^^pbGmTransclude'
  },
  bindings: {
    event: '<',
    onEvent: '&'
  },
  controller
};

export default component;
