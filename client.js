Wizard.registerRouter('kadira:flow-router', {
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
    return FlowRouter.go(name, this.getParams(stepId));
  }
});