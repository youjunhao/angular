
      angular.module("myapp", [])
                .controller("mainctrl", function($scope) {

                    $scope.person = {
                        name:"小明",address:"河北-石家庄",click:"26w",fans:"41w",
                    };
                    $scope.people = {
                        name:"小明",introduce:"IT大佬",head:"images/a1.jpg",
                    };

                    $scope.myvar = false;
                    $scope.install = function(){

                        $scope.myvar = !$scope.myvar;
                    }
                    $scope.conment = [
                    { name: "小王", introduce:"设计师，博客",head:"images/a9.jpg"},
                    { name: "张琳", introduce:"作家，杂志编辑",head:"images/a7.jpg" },
                    { name: "李小明", introduce:"艺术总监，电影剪辑",head:"images/a5.jpg" },
                    { name: "张大城", introduce:"音乐家，运动员",head:"images/a10.jpg"}
                   ];
});

