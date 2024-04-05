function isfakeacc(user) {

    if(user.followersCount > 1000000000){
        return true;
    }

    if(user.postsCount === 0){
        return true;
    }

    if(!user.isVerified && !user.profilepic){
        return true;
    }

    const currentDate = new Date();
    const creationDate = new Date(user.creationDate);
    const accountAgeInDays = Math.floor((currentDate - creationDate) / (1000 * 60 * 60 * 24));

    if (accountAgeInDays < 10) {
        return true;
    }

    return false;

}

const users = [
    {
        username: "ankit._.atcc",
        followersCount: 88,
        postsCount: 0,
        isVerified: false,
        profilepic: "Images/PFP/ankit._.atcc.jpg",
        creationDate: '2021-12-01',
    },
       {
        username: 'strange._.op',
        followersCount: 1317,
        postsCount: 4,
        isVerified: false,
        profilepic: 'Images/PFP/strange._.op.jpg',
        creationDate: '2020-07-01',
    },
    {
        username: 'shubs.__',
        followersCount: 442,
        postsCount: 38,
        isVerified: false,
        profilepic: 'Images/PFP/shubs.__.jpg',
        creationDate: '2020-07-01',
    },
    {
        username: 'ig._.panda24',
        followersCount: 24,
        postsCount: 1,
        isVerified: false,
        profilepic: 'Images/PFP/ig._.panda24.jpg',
        creationDate: '2022-10-1',
    },
    {
        username: 'krish_prajapati_07_',
        followersCount: 275,
        postsCount: 2,
        isVerified: false,
        profilepic: 'Images/PFP/krish_prajapati_07_.jpg',
        creationDate: '2020-12-01',
    },
    {
        username: 'harshvyas_snatani_123',
        followersCount: 135,
        postsCount: 4,
        isVerified: false,
        profilepic: 'Images/PFP/harshvyas_snatani_123.jpg',
        creationDate: '2021-11-01',
    },
    {
        username: 'chandni._.05',
        followersCount: 103,
        postsCount: 1,
        isVerified: false,
        profilepic: 'Images/PFP/chandni._.05.jpg',
        creationDate: '2019-08-01',
    },
    {
        username: 'sltietrajkot',
        followersCount: 1372,
        postsCount: 509,
        isVerified: false,
        profilepic: 'Images/PFP/sltietrajkot.jpg',
        creationDate: '2018-10-01',
    },
    {
        username: 'smit_o27',
        followersCount: 103,
        postsCount: 2,
        isVerified: false,
        profilepic: 'Images/PFP/smit_o27.jpg',
        creationDate: '2021-10-01',
    },
    {
        username: 'narendramodi',
        followersCount: 80700000,
        postsCount: 669,
        isVerified: true,
        profilepic: 'Images/PFP/narendramodi.jpg',
        creationDate: '2014-5-01',
    },
	 {
        username: 'joebiden',
        followersCount: 17300000,
        postsCount: 2321,
        isVerified: true,
        profilepic: 'Images/PFP/joebiden.jpg',
        creationDate: '2017-11-01',
    },
	 {
        username: 'realdonaldtrump',
        followersCount: 25500000,
        postsCount: 6300,
        isVerified: true,
        profilepic: 'Images/PFP/realdonaldtrump.jpg',
        creationDate: '2013-4-01',
    },
	 {
        username: 'mahindra_auto',
        followersCount: 174000,
        postsCount: 637,
        isVerified: true,
        profilepic: 'Images/PFP/mahindra_auto.jpg',
        creationDate: '2018-5-01',
    },
	 {
        username: 'ratantata',
        followersCount: 8800000,
        postsCount: 60,
        isVerified: true,
        profilepic: 'Images/PFP/ratantata.jpg',
        creationDate: '2019-10-01',
    },
	 {
        username: 'tatamotorscars',
        followersCount: 418000,
        postsCount: 2631,
        isVerified: true,
        profilepic: 'Images/PFP/tatamotorscars.jpg',
        creationDate: '2020-4-01',
    },
	 {
        username: 'royalenfield',
        followersCount: 2800000,
        postsCount: 4569,
        isVerified: true,
        profilepic: 'Images/PFP/royalenfield.jpg',
        creationDate: '2012-11-01',
    },
	 {
        username: 'heromotocorp',
        followersCount: 349000,
        postsCount: 3246,
        isVerified: true,
        profilepic: 'Images/PFP/heromotocorp.jpg',
        creationDate: '2014-1-01',
    },
	 {
        username: 'yoyohoneysingh',
        followersCount: 13400000,
        postsCount: 1390,
        isVerified: true,
        profilepic: 'Images/PFP/yoyohoneysingh.jpg',
        creationDate: '2014-3-01',
    },
	 {
        username: 'm___c___stan',
        followersCount: 10400000,
        postsCount: 1390,
        isVerified: true,
        profilepic: 'Images/PFP/m___c___stan.jpg',
        creationDate: '2017-8-01',
    },
	 {
        username: 'gautam.adani',
        followersCount: 547000,
        postsCount: 33,
        isVerified: true,
        profilepic: 'Images/PFP/gautam.adani.jpg',
        creationDate: '2018-9-1',
    },
	 {
        username: 'hhfhgdhffg',
        followersCount: 59,
        postsCount:0 ,
        isVerified: false,
        profilepic: 'Images/PFP/hhfhgdhffg.jpg',
        creationDate: '2023-9-1',
    },
	 {
        username: 'ghelo_bijlo9998',
        followersCount: 989 ,
        postsCount: 317  ,
        isVerified: false,
        profilepic: 'Images/PFP/ghelo_bijlo9998.jpg',
        creationDate: '2020-7-1',
    },
	 {
        username: 'krishna_u_r_ mine__0407',
        followersCount: 579 ,
        postsCount: 134,
        isVerified: false,
        profilepic: 'Images/PFP/krishna_u_r_ mine__0407.jpg',
        creationDate: '2020-9-1',
    },
	 {
        username: 'aashlesh_soneji__',
        followersCount: 147,
        postsCount: 5,
        isVerified: false,
        profilepic: 'Images/PFP/aashlesh_soneji__.jpg',
        creationDate: '2021-5-1',
    },
	 {
        username: 'll_v31_ll',
        followersCount: 206,
        postsCount: 15,
        isVerified: false,
        profilepic: 'Images/PFP/ll_v31_ll.jpg', 
        creationDate: '2017-12-1',
    },
	 {
        username: 'itzz_rider_007',
        followersCount: 10100,
        postsCount: 11 ,
        isVerified: false,
        profilepic: 'Images/PFP/itzz_rider_007.jpg',
        creationDate: '2020-8-1',
    },
	 {
        username: 'strangeverse_616',
        followersCount: 2712,
        postsCount: 61,
        isVerified: false,
        profilepic: 'Images/PFP/strangeverse_616.jpg',  
        creationDate: '2023-6-1',
    },
	 {
        username: 'supermotersport',
        followersCount: 9585,
        postsCount: 133,
        isVerified: false,
        profilepic: 'Images/PFP/supermotersport.jpg',
        creationDate: '2022-12-1',
    },
	 {
        username: 'chefkunal',
        followersCount: 2700000,
        postsCount: 6687,
        isVerified: true,
        profilepic: 'Images/PFP/chefkunal.jpg',
        creationDate: '2012-4-1',
    },
	 {
        username: 'ranveer.brar',
        followersCount: 2900000,
        postsCount: 6887,
        isVerified: true,
        profilepic: 'Images/PFP/ranveer.brar.jpg',
        creationDate: '2013-10-1',
    },
	 {
        username: 'living_true05',
        followersCount: 92700,
        postsCount: 1966,
        isVerified: false,
        profilepic: 'Images/PFP/living_true05.jpg',
        creationDate: '2022-7-1',
    },
	 {
        username: 'shinchan humors',
        followersCount: 210000,
        postsCount: 862,
        isVerified: false,
        profilepic: 'Images/PFP/shinchan humors.jpg',
        creationDate: '2020-12-1',
    },
	 {
        username: 'viralbhayani',
        followersCount: 7900000,
        postsCount: 66600,
        isVerified: true,
        profilepic: 'Images/PFP/viralbhayani.jpg',
        creationDate: '2015-6-1',
    },
	 {
        username: 'focusedIndian',
        followersCount: 1100000,
        postsCount: 1043,
        isVerified: true,
        profilepic: 'Images/PFP/focusedIndian.jpg',
        creationDate: '2018-2-1',
    },
	 {
        username: 'boat.nirvana',
        followersCount: 964000,
        postsCount: 3547,
        isVerified: true,
        profilepic: 'Images/PFP/boat.nirvana.jpg',
        creationDate: '2016-9-1',
    },
	 {
        username: 'middaygujarati',
        followersCount: 15500 ,
        postsCount: 12700 ,
        isVerified: true,
        profilepic: 'Images/PFP/middaygujarati.jpg',
        creationDate: '2018-11-1',
    },
    {
        username: 'cgffu',
        followersCount: 0 ,
        postsCount: 0 ,
        isVerified: false,
        profilepic: 'Images/PFP/cgffu.jpg',
        creationDate: '2016-5-1',
    },
	 {
        username: 'duduuul',
        followersCount: 0 ,
        postsCount: 3 ,
        isVerified: false,
        profilepic: 'Images/PFP/duduuul.jpg',
        creationDate: '2012-8-1',
    },
	 {
        username: 'vivianakadivine',
        followersCount: 2200000 ,
        postsCount: 176 ,
        isVerified: true,
        profilepic: 'Images/PFP/vivianakadivine.jpg',
        creationDate: '2013-1-1',
    },
	 {
        username: 'joesthetics',
        followersCount: 9300000 ,
        postsCount: 2001 ,
        isVerified: true ,
        profilepic: 'Images/PFP/joesthetics.jpg',
        creationDate: '2013-11-1',
    },
	 {
        username: 'stark__editz',
        followersCount: 82800  ,
        postsCount: 296 ,
        isVerified:  false ,
        profilepic: 'Images/PFP/stark__editz.jpg',
        creationDate: '2019-7-1',
    },
	 {
        username: 'shree_kishorii',
        followersCount: 512000 ,
        postsCount: 115 ,
        isVerified: false ,
        profilepic: 'Images/PFP/shree_kishorii.jpg',
        creationDate: '2020-2-1',
    },
	 {
        username: '_i_ankitaa',
        followersCount: 429000 ,
        postsCount:  372,
        isVerified: false ,
        profilepic: 'Images/PFP/_i_ankitaa.jpg',
        creationDate: '2017-11-1',
    },
	 {
        username: 'pulkitsamrat',
        followersCount: 1400000 ,
        postsCount: 1918  ,
        isVerified: true ,
        profilepic: 'Images/PFP/pulkitsamrat.jpg',
        creationDate: '2011-8-1',
    },
	 {
        username: 'sonu_sood',
        followersCount: 24800000 ,
        postsCount: 1992 ,
        isVerified: true ,
        profilepic: 'Images/PFP/sonu_sood.jpg',
        creationDate: '2014-5-1',
    },
	 {
        username: 'iconmekh',
        followersCount: 787627 ,
        postsCount: 1863 ,
        isVerified: true ,
        profilepic: 'Images/PFP/iconmekh.jpg',
        creationDate: '2015-2-1',
    },
	 {
        username: 'dushyant__singh298',
        followersCount:146402  ,
        postsCount: 2415 ,
        isVerified: false ,
        profilepic: 'Images/PFP/dushyant__singh298.jpg',
        creationDate: '2017-2-1',
    },
	 {
        username: 'karma_sagara',
        followersCount: 21195,
        postsCount: 1581 ,
        isVerified: false ,
        profilepic: 'Images/PFP/karma_sagara.jpg',
        creationDate: '2018-12-1',
    },
	 {
        username: 'ph_onk',
        followersCount:674461  ,
        postsCount: 339 ,
        isVerified: false  ,
        profilepic: 'Images/PFP/ph_onk.jpg',
        creationDate: '2023-5-1',
    },
	 {
        username: 'ankit_baiyanpuria',
        followersCount: 7183924 ,
        postsCount: 1729 ,
        isVerified: true ,
        profilepic: 'Images/PFP/ankit_baiyanpuria.jpg',
        creationDate: '2016-3-1',
    },
	 {
        username: 'elvish_yadav',
        followersCount:15687998  ,
        postsCount: 1068 ,
        isVerified: true ,
        profilepic: 'Images/PFP/elvish_yadav.jpg',
        creationDate: '2016-5-1',
    },
	 {
        username: 'fukra_insaan',
        followersCount: 7050043 ,
        postsCount: 711 ,
        isVerified: true ,
        profilepic: 'Images/PFP/fukra_insaan.jpg',
        creationDate: '2013-12-1',
    },
	 {
        username: 'triggeredinsaan',
        followersCount: 7519379 ,
        postsCount: 552 ,
        isVerified: true ,
        profilepic: 'Images/PFP/triggeredinsaan.jpg',
        creationDate: '2017-5-1',
    },
	 {
        username: 'puneetsuper_starrrr',
        followersCount: 2858597 ,
        postsCount: 29641 ,
        isVerified:  true,
        profilepic: 'Images/PFP/puneetsuper_starrrr.jpg',
        creationDate: '2020-2-1',
    },
	 {
        username: 'bhupendrajogi',
        followersCount: 11500 ,
        postsCount: 12 ,
        isVerified: true  ,
        profilepic: 'Images/PFP/bhupendrajogi.jpg',
        creationDate: '2016-11-1',
    },
	{
        username: 'carryminati',
        followersCount: 13450163 ,
        postsCount: 539 ,
        isVerified: true ,
        profilepic: 'Images/PFP/carryminati.jpg',
        creationDate: '2015-5-1',
    },
	{
        username: 'cristiano',
        followersCount: 610548285 ,
        postsCount: 3575 ,
        isVerified:  true,
        profilepic: 'Images/PFP/cristiano.jpg',
        creationDate: '2015-5-1',
    },
	{
        username: 'amitabhbachchan',
        followersCount: 35965275 ,
        postsCount: 1254 ,
        isVerified:true  ,
        profilepic: 'Images/PFP/amitabhbachchan.jpg',
        creationDate: '2013-2-1',
    },
	{
        username: 'techno_gamerz',
        followersCount:  1336393,
        postsCount: 26 ,
        isVerified:  true,
        profilepic: 'Images/PFP/techno_gamerz.jpg',
        creationDate: '2017-12-1',
    },
	{
        username: 'scoutop',
        followersCount: 3872682 ,
        postsCount: 1082 ,
        isVerified: true  ,
        profilepic: 'Images/PFP/scoutop.jpg',
        creationDate: '2014-5-1',
    },
	{
        username: 'mr_dharam01',
        followersCount: 652 ,
        postsCount: 115 ,
        isVerified: false ,
        profilepic: 'Images/PFP/mr_dharam01.jpg',
        creationDate: '2015-9-1',
    },
	{
        username: 'dhaval_vyas_2112',
        followersCount: 366 ,
        postsCount: 4 ,
        isVerified: false ,
        profilepic: 'Images/PFP/dhaval_vyas_2112.jpg',
        creationDate: '2016-11-1',
    },
	{
        username: 'anil_kuvariya_',
        followersCount: 509 ,
        postsCount: 31 ,
        isVerified: false ,
        profilepic: 'Images/PFP/anil_kuvariya_.jpg',
        creationDate: '2019-8-1',
    },
	{
        username: '___kotadiya__',
        followersCount: 307 ,
        postsCount: 0 ,
        isVerified: false ,
        profilepic: 'Images/PFP/___kotadiya__.jpg',
        creationDate: '2021-9-1',
    },
	{
        username: 'luckyy_____04',
        followersCount: 240  ,
        postsCount: 15 ,
        isVerified: false ,
        profilepic: 'Images/PFP/luckyy_____04.jpg',
        creationDate: '2022-4-1',
    },
	{
        username: 'patel.in___',
        followersCount: 1827 ,
        postsCount: 14 ,
        isVerified: false ,
        profilepic: 'Images/PFP/patel.in___.jpg',
        creationDate: '2020-4-1',
    },
	{
        username: 'ms.s.k.vyas',
        followersCount:470  ,
        postsCount: 51 ,
        isVerified: false ,
        profilepic: 'Images/PFP/ms.s.k.vyas.jpg',
        creationDate: '2018-10-1',
    },
	{
        username: 'pushprajsinh._.1606',
        followersCount:403  ,
        postsCount: 6 ,
        isVerified:false  ,
        profilepic: 'Images/PFP/pushprajsinh._.1606.jpg',
        creationDate: '2020-10-1',
    },
];


function detect() {
    const useridinput = document.getElementById('useridinput').value;
    const user = users.find(u => u.username === useridinput);
    const result = document.getElementById('result'); 
    const p_attributes = document.querySelector('.profile_attributes');
    const dresult = document.querySelector('.detect-result');
    

    if(user){
        if(isfakeacc(user)) {
            result.innerHTML = `User ${useridinput} might be fake. `;
        } else {
            result.innerHTML = `User ${useridinput} appears legitimate.`;
        }

        document.getElementById('username').textContent = user.username;
        document.getElementById('followersCount').textContent = user.followersCount;
        document.getElementById('postsCount').textContent = user.postsCount;
        document.getElementById('isVerified').textContent = user.isVerified ? 'Yes' : 'No';
        document.getElementById('profilePicture').src = user.profilepic;
        document.getElementById('creationDate').textContent = user.creationDate;
        
        profile_attribute.style.display = 'block';
        p_attributes.style.display = 'flex';

    } else {
        result.innerHTML = `user ${useridinput} not found. `;
        profile_attribute.style.display = 'none';
        profile_attributes.style.display = 'none';
        dresult.style.display = 'none';
    }

}

var menuicon = document.querySelector(".menu")
var sidebar = document.querySelector("nav")
var mainbox = document.querySelector(".nav-left")

menuicon.onclick = function(){
    sidebar.classList.toggle("nav-2")
    mainbox.classList.toggle("nav-left-2")

}

function show() {
    if(mainbox.style.display = "none") {
        mainbox.style.display = "flex";
    }   else {
        mainbox.style.display = "none";
    }
}