/**
 * Created by Marcel on 9-7-2016.
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
        return 'pages/'+n+'.html'; //TODO: FIX THIS TO DYNAMICALLY RETURN EN OR NL
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
    //Add all file names in pages.html
    initState('besturen', 'boardCtrl');
    initState('exameneisen');
    initState('examens', 'examCtrl');
    initState('taekwondo');
    initState('trainers');
    initState('trainingen');
    initState('vereniging');
});

ILYEO.run(function($rootScope){
    $rootScope.pageList = pageList;
    $rootScope.ENG = false;
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
});

ILYEO.controller('examCtrl', function($scope, $rootScope) {
    $scope.ENG = $rootScope.ENG;
    //Belt codes to name
    //protip: Belt code = white, whitegreen, yellow, yellowgreen etc. shorthand
    $scope.belts = {
        'w':{dutch:'Wit', eng:'White', c:'white'},
        'wy':{dutch:'Wit/Geel', eng:'White/Yellow', c:'white-yellow'},
        'y':{dutch:'Geel', eng:'Yellow', c:'yellow'},
        'yg':{dutch:'Geel/Groen', eng:'Yellow/Green', c:'yellow-green'},
        'g':{dutch:'Groen', eng:'Green', c:'green'},
        'gb':{dutch:'Groen/Blauw', eng:'Green/Blue', c:'green-blue'},
        'b':{dutch:'Blauw', eng:'Blue', c:'blue'},
        'br':{dutch:'Blauw/Rood', eng:'Blue/Red', c:'blue-red'},
        'r':{dutch:'Rood', eng:'Red', c:'red'},
        'rb':{dutch:'Rood/Zwart', eng:'Red/Black', c:'red-black'},
        'black':{dutch:'Zwart', eng:'Black', c:'black'},
    }
    $scope.data = [
        {
            dutchDate: '8 Mei 2016',
            engDate: 'May 8th, 2016',
            belts:[
                {name:'Jie Chen', from:'r', to:'rb'},
                {name:'Le Xuan Tung', from:'r', to:'rb'},
                {name:'Mels van Broekhoven', from:'b', to:'r'},
                {name:'Rui Zhou Xie', from:'gb', to:'br'},
                {name:'Steven Ge', from:'yg', to:'gb'},
                {name:'Marcel Visser', from:'y', to:'g'},
                {name:'Domenec Bis Thobi', from:'w', to:'y'},
                {name:'Chaoyu Chen', from:'w', to:'y'},
                {name:'Lisa Koolen', from:'w', to:'y'},
                {name:'Rens Verhees', from:'w', to:'y'},
            ],
            img: 'images/exams/geslaagden2016_05_08.jpg',
            lefttoright: 'Jie, Melanie, Tung, Chaoyu, Andreas, Lisa, Marcel, Rens, Ruizhou, Steven, Mels, Domenec, Merijn'
        },
        {
            dutchDate: '13 December 2015',
            engDate: 'December 13th, 2015',
            belts:[
                {name:'Kelly Morales', from:'b', to:'r'},
                {name:'Sjors van den Elzen', from:'y', to:'g'},
                {name:'Nuran Sahin', from:'y', to:'g'},
                {name:'Ricardo Elout', from:'w', to:'yg'},
                {name:'Steven Ge', from:'w', to:'yg'},
                {name:'Stiliyan Stoyanov', from:'w', to:'yg'},
                {name:'Ivo Bernts', from:'w', to:'y'},
                {name:'Dennis Hekkers', from:'w', to:'y'},
                {name:'Tom Nijhof', from:'w', to:'y'},
                {name:'Robin van Renselaar', from:'w', to:'y'},
                {name:'Luuk Sachteleben', from:'w', to:'y'},
                {name:'Nimke Verhees', from:'w', to:'y'},
                {name:'Marcel Visser', from:'w', to:'y'},
                {name:'Lucy Xiao', from:'w', to:'y'},
                {name:'Haiyu Wang', from:'w', to:'y'},
            ],
            img: 'images/exams/geslaagden2015_12_13.jpg',
            lefttoright: 'Merijn, Marcel, Sjors, Tom, Stiliyan, Ivo, Ricardo, Haiyu, Luuk, Steven, Mels, Andreas, Melanie, Lucy, Rui Zhou, Dennis, Robin, Nimke, Kelly, Nuran'
        },
        {
            dutchDate: '31 Mei 2015',
            engDate: 'May 31st, 2015',
            belts:[
                {name:'Le Xuan Tung', from:'b', to:'r'},
                {name:'Mels van Broekhoven', from:'g', to:'b'},
                {name:'Weiming Yao', from:'yg', to:'b'},
                {name:'Arno van Lumig', from:'y', to:'g'},
                {name:'Dan Cristian Chirascu', from:'w', to:'y'},
                {name:'Sjors van den Elzen', from:'w', to:'y'},
            ],
        }
    ]
});

ILYEO.controller('boardCtrl', function($scope, $rootScope) {
    $scope.ENG = $rootScope.ENG;
    $scope.roles = {
        'chair':{dutch:'voorzitter', eng:'chairman'},
        'treas':{dutch:'penningmeester', eng:'treasurer'},
        'secr':{dutch:'secretaris', eng:'secretary'},
        'act':{dutch:'activiteitencommissaris', eng:'activity supervisor'}
    };
    $scope.data = [
        {
            prefixDutch: "Eerste",
            prefixEng: "First",
            durationDutch: "april 2004 - november 2005",
            durationEng: this.durationDutch,
            lefttoright:[
                {name:'Richard van den Hoven',role:'secr'},
                {name:'Hoi Ying Chan',role:'treas'},
                {name:'Merijn Donders',role:'chair'} ],
            pic: 'images/besturen/1ebestuur.jpg'

        }, {}
    ];

});