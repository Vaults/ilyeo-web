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

/* 
 * Alt texts for all images
 */
var altTexts = {
  'default':              {dutch: 'Sfeerimpressie',
                           eng:   'Ambiance impression'},
  'impressie-1.jpg':     {dutch: 'Ilyeons die met andere sporten meedoen',
                           eng:   'Ilyeons joining other sports'},
  'impressie-2.jpg':      {dutch: 'Ilyeo shirt',
                           eng:   'Ilyeo shirt'},
  'impressie-3.jpg':      {dutch: 'Ilyeo nieuwjaarsdiner',
                           eng:   'Ilyeo new year\'s dinner'},
  'impressie-4.jpg':      {dutch: 'Pizza-etende Ilyeons',
                           eng:   'Ilyeons eating pizza'},
  'impressie-5.jpg':      {dutch: 'Ilyeons die met andere sporten meedoen',
                           eng:   'Ilyeons joining other sports'},
  'impressie-6.jpg':      {dutch: 'Ilyeons die met andere sporten meedoen',
                           eng:   'Ilyeons joining other sports'},
  'impressie-7.jpg':      {dutch: 'Groepsfoto',
                           eng:   "Group picture"},
  'impressie-8.jpg':      {dutch: 'Groepsfoto in de sneeuw',
                           eng:   "Group picture in the snow"},
  'impressie-9.jpg':      {dutch: 'Ilyeo nieuwjaarsdiner',
                           eng:   'Ilyeo new year\'s dinner'},
  'impressie-10.jpg':     {dutch: 'Kennedymars',
                           eng:   'Kennedymars'},
  'impressie-11.jpg':     {dutch: 'Introductieweek',
                           eng:   'Introduction week'},
  'impressie-12.jpg':     {dutch: 'Sparring wedstrijd',
                           eng:   'Sparring match'},
  'impressie-13.jpg':     {dutch: 'Vliegende Ilyeons',
                           eng:   'Flying Ilyeons'},
  'training-1.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-2.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-3.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-4.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-5.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-6.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-7.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-8.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-9.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-10.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-11.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-12.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-13.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-14.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-15.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-16.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-17.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-18.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-19.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-20.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-21.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-22.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-23.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-24.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-25.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'},
  'training-26.jpg':       {dutch: 'Sfeerimpressie van de trainings',
                           eng:   'Ambiance impression of the trainings'}
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
        $scope.img1 = {path:  'training-1.jpg'};
        $scope.img2 = {path:  'impressie-1.jpg'};
        if($rootScope.imgList){
          var rand1 = (Math.random()*$rootScope.imgList.length | 0)
          var rand2 = (Math.random()*$rootScope.imgList.length | 0)
          if (rand2 == rand1) {
            rand2 = (rand2+1) % $rootScope.imgList.length;
          }
          $scope.img1.path = $rootScope.imgList[rand1];
          $scope.img2.path = $rootScope.imgList[rand2];
        }
        var alt1str = typeof altTexts[$scope.img1.path] != 'undefined' ? 
          $scope.img1.path : 'default';
        var alt2str = typeof altTexts[$scope.img2.path] != 'undefined' ? 
          $scope.img2.path : 'default';
        $scope.img1.alt = 
          $scope.ENG ? altTexts[$alt1str].eng : altTexts[alt1str].dutch;
        $scope.img2.alt = 
          $scope.ENG ? altTexts[$alt1str].eng : altTexts[alt2str].dutch
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