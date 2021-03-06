/**
 * Created by Marcel on 9-7-2016.
 */
/**
 * List of all pages in navigation bar
 */
var pageList = {
    'home':         {dutch:'Home',
                        eng:'Home'},
    'taekwondo':    {dutch:'Taekwondo',
                        eng:'Taekwondo'},
    'vereniging':   {dutch:'Vereniging',
                        eng:'Association'},
    'trainingen':   {dutch:'Trainingen',
                        eng:'Trainings'},
    'examens':        {dutch:'Examens',
                        eng:'Exams'},
    'exameneisen':  {dutch:'Exameneisen',
                        eng:'Exam Requirements'},
};

/**
 * Remembers current language in local cache and keeps it at that until it is switched.
 */
if(!localStorage.getItem('lang')){
    localStorage.setItem('lang', 'EN');
}
var LANG = localStorage.getItem('lang');


/**
 * Initializes angular module Ilyeo and configures instantly the mapping from website URLs to page files
 * For instance; makes sure that when you browse to /besturen, pages/besturen.html gets displayed
 */
var ILYEO = angular.module('Ilyeo', ['ui.router']).config(function($urlRouterProvider, $stateProvider){
    //If invalid page is selected from URL, redirect to index page
    $urlRouterProvider.otherwise('/');

    /**
     * Returns a valid path for a page name, depending whether or not the user wants the site to be English
     * @param n the page name
     * @returns {string} Respective page URL in English/Dutch
     */
    var retUrl = function(n){
        var suffix = (LANG==="NL")?'':'_en';
        return 'pages/'+n+suffix+'.html';
    }

    //initializes index state routing
    $stateProvider.state('home', {
        url: '/',
        templateUrl: retUrl('home')
    });
    /**
     * Enables routing for a pagename
     * @param dutch Dutch pagename
     * @param eng   English pagename
     */
    var initState = function(dutch, ctrl){
        var state = {
            url: '/'+dutch,
            templateUrl: retUrl(dutch)
        };
        if(ctrl){state.controller = ctrl;}
        $stateProvider.state(dutch, state);
    }
    //Add all file names in pages.html and add respective controllers to those states
    initState('besturen', 'boardCtrl');
    initState('exameneisen');
    initState('examens', 'examCtrl');
    initState('taekwondo');
    initState('trainers');
    initState('trainingen');
    initState('vereniging');
});

/**
 * Sets the rootScope's global variables to the respective values.
 * For instance, the navigation bar page list, whether the site should be displayed in English
 * and the names of all the images in the img/impression folder
 */
ILYEO.run(function($rootScope){
    $rootScope.pageList = pageList;
    $rootScope.ENG = (LANG !== "NL");
    $.get('js/data/impressions.php', function(data){
         $rootScope.imgList = JSON.parse(data);
    });
})
/**
 * Initializes controller for index page;
 */
ILYEO.controller('indexCtrl', function($scope, $rootScope){
    /**
     * Sets the scope pages to the pages dictionary
     */
    $scope.pages = $rootScope.pageList;
    $scope.ENG = $rootScope.ENG;
    /**
     * Sets the left bar images to random images from the img/impressions folder
     */
    function changeImgs(){
        $scope.img1 = 'ilyeosite-1.jpg';
        $scope.img2 = 'ilyeosite-2.jpg';
        if($rootScope.imgList){
            $scope.img1 = $rootScope.imgList[(Math.random()*$rootScope.imgList.length | 0)];
            $scope.img2 = $rootScope.imgList[(Math.random()*$rootScope.imgList.length | 0)];
        }
        if($scope.img1 == $scope.img2){changeImgs();}
    }

    /**
     * Ensures that changeImgs gets called on page switch
     */
    changeImgs();
    $scope.$on('$stateChangeStart', changeImgs);

    /**
     * Function to change language and reload page
     * @param ln Language to switch to, 'EN' or 'NL'.
     */
    $scope.changeLang = function(ln){
        localStorage.setItem('lang', ln);
        location.reload();
    }
});
//see js/data/beltexams.js, sets scope variables to include the data in that file
ILYEO.controller('examCtrl', function($scope, $rootScope) {
    $scope.ENG = $rootScope.ENG;
    //Belt codes to name
    //protip: Belt code = white, whitegreen, yellow, yellowgreen etc. shorthand
    $scope.belts = BELTS;
    $scope.data = BELT_EXAMS;
});
//see js/data/boards.js, sets scope variables to include the data in that file
ILYEO.controller('boardCtrl', function($scope, $rootScope) {
    $scope.ENG = $rootScope.ENG;
    $scope.roles = ROLES;
    $scope.data = BOARDS;

});