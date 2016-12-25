app.controller('homeController', function ($scope,configservice,httpservice) {
   httpservice.post(configservice.logCount,{count:1})
})