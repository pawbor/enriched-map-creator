class controller {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
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
      let $event = {
        target: this.target,
        data
      };

      this.$scope.$apply(() => {
        this.onEvent({$event});
      });
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
