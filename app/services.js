
(function () {
  'use strict';

  googleChart.factory('svc', ['$http', function ($http) {
    var _webAbsoluteUrl = _spPageContextInfo.webAbsoluteUrl;
   
    //RequestHeader for get,post,update,delete
    var requestHeader = {
      getHeader: {
        'headers': {
          'accept': 'application/json;odata=verbose'
        }
      }
    };
    /**SharePoint CRUD Operations Starts here**/
    function _getLisItems(urlValue) {
      return $http.get(urlValue, requestHeader.getHeader)
        .then(function (response) {
          return response.data.d.results; //TODO: View in Console
        });
    };

    function _getListItem(endpoint) {
      return $http.get(endpoint, requestHeader.getHeader).then(function (response) {
        return response.data.d;//Todo: View in browser
      });
    };   
    /**SharePoint CRUD Operation Ends here**/



    return {
      getTemplateUrl: function(temlateName){
        return '/SiteAssets/charts/template/' + temlateName;
      },
      getItems: function(listName, categoryName){
        if(!categoryName)categoryName = '';
        var url = _webAbsoluteUrl + "/_api/web/lists/getbytitle('"+listName+"')/items" + filter;
        return _getLisItems(url).then(function(response){
          //console.log(response);
          return response;
        });
      }

    };//End of Service Return

  }]);//ends svc function

})();//main anonymous function
