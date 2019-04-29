(function () {
  'use strict';

  googleChart.component('DemoComponent', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.tempUrl = svc.getTemplateUrl('barchart.html');
      vm.$onInit = function () {
        // TODO: Initialization goes here
      };
      
    }

  }); //End of Component

})();
