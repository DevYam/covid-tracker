
const URL = 'https://covid19.mathdro.id/api';
let app = angular.module("MyApp",[]);

app.controller('MyCtrl',($scope, $http)=>{

    // This is controller
    $scope.j_name="Novel coronavirus tracker";

    console.log("App Initialized");

    // https://covid19.mathdro.id/api
    // https://covid19.mathdro.id/api/countries/india

    $http.get(URL).then((response)=>{
        // console.log(response.data);
        $scope.all_data = response.data;

    },(error)=>{
       console.log(error);
    });

    $scope.get_C_Data=()=>{
            if ($scope.c===""){
                $scope.c_data = undefined;
                return;
            }
            let country = $scope.c;
            $http.get(`${URL}/countries/${country}`)
                .then((response)=>{
                    console.log(response.data);
                    $scope.c_data = response.data;
                },(error)=>{
                    console.log(error);
                })

        }

});