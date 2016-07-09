/**
 * Created by Marcel on 9-7-2016.
 */
var BELTS = {
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
};

var BELT_EXAMS = [
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
        lefttoright: ['Jie, Melanie, Tung, Chaoyu, Andreas, Lisa, Marcel, Rens, Ruizhou, Steven, Mels, Domenec, Merijn']
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
        lefttoright: ['Merijn, Marcel, Sjors, Tom, Stiliyan, Ivo, Ricardo, Haiyu, Luuk, Steven, Mels, Andreas, Melanie, Lucy, Rui Zhou, Dennis, Robin, Nimke, Kelly, Nuran']
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
    },
    {
        dutchDate: '18 Mei 2014',
        engDate: 'May 18th, 2014',
        belts:[
            {name:'Jesse Joosten', from:'gb', to:'b'},
            {name:'Le Xuan Tung', from:'yg', to:'b'},
            {name:'Wanda Bloemers', from:'y', to:'g'},
            {name:'Mels van Broekhoven', from:'y', to:'g'},
            {name:'Roy Krak', from:'y', to:'g'},
            {name:'Emanuele Russo', from:'y', to:'g'},
            {name:'Aiman Aldanova', from:'y', to:'g'},
            {name:'Robin Berghuijs', from:'w', to:'y'},
            {name:'Arno van Lumig', from:'w', to:'y'},
            {name:'Marieke Sluijmer', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden15.jpg',
        lefttoright: ['Redouane, Andreas, Jesse, Yanja, Arno, Roy, Sjors, Robin, Marieke, Emanuele, Mels, Wanda, Aiman, Melanie, Tung, Merijn']
    },
    {
        dutchDate: '10 Maart 2013',
        engDate: 'March 10th 2013',
        belts:[
            {name:'Jie Chen', from:'br', to:'r'},
            {name:'Yanja Dajsuren', from:'g', to:'gb'},
            {name:'Jesse Joosten', from:'g', to:'gb'},
            {name:'Rui Zhou Xie', from:'y', to:'g'},
            {name:'Daniel Wahyudi', from:'y', to:'g'},
            {name:'Laurens van der Bel', from:'y', to:'g'},
            {name:'Le Xuan Tung', from:'w', to:'yg'},
            {name:'Roy Kraak', from:'w', to:'y'},
            {name:'Aiman Aldanova', from:'w', to:'y'},
            {name:'Lulu Wang', from:'w', to:'y'},
            {name:'Wanda Bloemers', from:'w', to:'y'},
            {name:'Emanuele Russo', from:'w', to:'y'},
            {name:'Chiara Beltrami', from:'w', to:'y'},
            {name:'Mels van Broekhoven', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden14.jpg',
        lefttoright: ['Laurens, Roy, Daniel, Wanda, Jesse, Tung, Huyn Jin','Redouane, Ab, Mels, Chiara, Emanuele, Yanja, Jie, Lulu, Aiman, Merijn']
    },
    {
        dutchDate: '12 Juli 2012',
        engDate: 'July 12th, 2012',
        belts:[
            {name:'Alexander Andre Limas', from:'b', to:'br'},
            {name:'Jie Chen', from:'b', to:'br'},
            {name:'Jesse Joosten', from:'y', to:'yg'},
            {name:'Andres Skowron', from:'w', to:'y'},
            {name:'Rui Zhou Xie', from:'w', to:'y'},
            {name:'Daniel Wahyudi', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden12.jpg',
        lefttoright: ['Merijn, Andre, Andreas, Jesse, Daniel, Rui Zhou, Jie, Redouane']
    },
    {
        dutchDate: '8 December 2011',
        engDate: 'December 8th, 2011',
        belts:[
            {name:'Jesse Joosten', from:'yg', to:'g'},
        ],
    },
    {
        dutchDate: '24 Juni 2010',
        engDate: 'June 24th, 2010',
        belts:[
            {name:'AMark Graus', from:'y', to:'g'},
        ],
    },
    {
        dutchDate: '25 Maart 2010',
        engDate: 'March 25th, 2010',
        belts:[
            {name:'Alexander Janssen', from:'b', to:'r'},
            {name:'Xixi Lu', from:'y', to:'g'},
            {name:'Shahriyar Nasrmalek', from:'y', to:'g'},
            {name:'Yanja Dajsuren', from:'y', to:'g'},
            {name:'Jurriën Bakker', from:'w', to:'y'},
            {name:'Jesse Joosten', from:'w', to:'y'},
            {name:'Laurens van der Bel', from:'w', to:'y'},
            {name:'Richard van Baardwijk', from:'w', to:'y'},
            {name:'Luuk Spronk', from:'w', to:'y'},
            {name:'Job van der Klein', from:'w', to:'y'},
            {name:'Kawai An', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden10.jpg',
        lefttoright: ['Merijn, Marieke, Jurriën, Shahriyar, Luuk, Laurens, Kawai, Richard, Redouane',
            'Jesse, Alexander, Xixi, Yanja, Job']
    },
    {
        dutchDate: '25 Juni 2009',
        engDate: 'June 25th, 2009',
        belts:[
            {name:'Marieke Tjebbes', from:'b', to:'r'},
            {name:'Alexander Janssen', from:'g', to:'b'},
            {name:'Xixi Lu', from:'w', to:'y'},
            {name:'Joost Velterop', from:'w', to:'y'},
            {name:'Shahriyar Nasrmalek', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden09.jpg',
        lefttoright: ['Merijn, Xixi, Alexander, Shahriyar, Joost, Marieke, Richard en Redouane']
    },
]