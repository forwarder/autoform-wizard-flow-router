Wizard.registerRouter('ostrio:flow-router-extra', {
  go: function(name, stepId) {
    FlowRouter.go(name, this.getParams(stepId));
  },
  getParams: function(stepId) {
    var route = FlowRouter.current()
      , params = route.params || {};

    return _.extend(params, {step: stepId});
  },
  getStep: function() {
    return FlowRouter.getParam('step');
  },
  path: function(name, stepId) {
    return FlowRouter.path(name, this.getParams(stepId));
  }
});