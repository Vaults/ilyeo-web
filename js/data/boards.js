/**
 * Created by Marcel on 9-7-2016.
 */
var ROLES = {
    'chair':{dutch:'voorzitter', eng:'chairman'},
    'treas':{dutch:'penningmeester', eng:'treasurer'},
    'secr':{dutch:'secretaris', eng:'secretary'},
    'act':{dutch:'activiteitencommissaris', eng:'activity supervisor'}
}
var BOARDS =[
    {
        prefixDutch: "Eerste",
        prefixEng: "First",
        durationDutch: "april 2004 - november 2005",
        durationEng: this.durationDutch,
        lefttoright:[
            {name:'Richard van den Hoven',role:'secr'},
            {name:'Hoi Ying Chan',role:'treas'},
            {name:'Merijn Donders',role:'chair'} ],
        img: 'images/besturen/1ebestuur.jpg'

    },
    {
        prefixDutch: "Tweede",
        prefixEng: "Second",
        durationDutch: "november 2005 - september 2006",
        durationEng: this.durationDutch,
        lefttoright:[
            {name:'Ruud Hawinkels',role:'secr'},
            {name:'Marieke Tjebbes',role:'chair'},
            {name:'Dorothee Wasserberg',role:'treas'} ],
        img: 'images/besturen/2ebestuur.jpg'

    },
    {
        prefixDutch: "Derde",
        prefixEng: "Third",
        durationDutch: "september 2006 - oktober 2007",
        durationEng: "september 2006 - october 2007",
        lefttoright:[
            {name:'Martijn de Groot',role:'chair'},
            {name:'Hanneke Vinke',role:'treas'},
            {name:'Gertjan Groen',role:'secr'} ],
        img: 'images/besturen/3ebestuur.jpg'

    },
    {
        prefixDutch: "Vierde",
        prefixEng: "Fourth",
        durationDutch: "oktober 2007 - oktober 2008",
        durationEng: "october 2007 - october 2008",
        lefttoright:[
            {name:'Bas Ploeger',role:'treas'},
            {name:'Martijn de Groot',role:'chair'},
            {name:'Gertjan Groen',role:'secr'} ],
        img: 'images/besturen/4ebestuur.jpg'

    },
    {
        prefixDutch: "Vijfde",
        prefixEng: "Fifth",
        durationDutch: "oktober 2008 - september 2009",
        durationEng: "october 2008 - september 2009",
        lefttoright:[
            {name:'Mark van Domburg',role:'treas'},
            {name:'Tobi Maas',role:'chair'},
            {name:'Milan Marell',role:'secr'} ],

    },
    {
        prefixDutch: "Zesde",
        prefixEng: "Sixth",
        durationDutch: "september 2009 - november 2010",
        durationEng: this.durationDutch,
        lefttoright:[
            {name:'Xixi Lu',role:'treas'},
            {name:'Alexander Janssen',role:'chair'},
            {name:'Mark Graus',role:'secr'} ],

    },
    {
        prefixDutch: "Zevende",
        prefixEng: "Seventh",
        durationDutch: "november 2010 - mei 2013",
        durationEng: "november 2010 - may 2013",
        lefttoright:[
            {name:'Laurens van der Bel',role:'chair'},
            {name:'Shahriyar Nasrmalek',role:'treas'},
            {name:'Jesse Joosten',role:'secr'} ],

    },
    {
        prefixDutch: "Achtste",
        prefixEng: "Eighth",
        durationDutch: "mei 2013 - september 2014",
        durationEng: "may 2013 - september 2014",
        lefttoright:[
            {name:'Roy Kraak',role:'chair'},
            {name:'Ruizhou Xie',role:'treas'},
            {name:'Wanda Bloemers',role:'secr'} ],
        img: 'images/besturen/8ebestuur.jpg'

    },
    {
        prefixDutch: "Negende",
        prefixEng: "Ninth",
        durationDutch: "september 2014 - september 2015",
        durationEng: this.durationDutch,
        lefttoright:[
            {name:'Fleur Petit',role:'act'},
            {name:'Sjors Turlings',role:'treas'},
            {name:'Melanie Ahn',role:'chair'},
            {name:'Arno van Lumig',role:'secr'}],
        img: 'images/besturen/9ebestuur.jpg'

    }
];