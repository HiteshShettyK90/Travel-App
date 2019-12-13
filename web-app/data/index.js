const payments = require("./payment");
const hpackage1 = require("./hpackages");
const attraction1 = require("./attraction");
const loc = require("./locations");

const connection = require('./connection');
const bcrypt = require("bcryptjs");



async function create()
{
   const one = await hpackage1.create(1,"Mini-Package", "3-Day tour", 1500, 1, "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(one);
   const oneone = await hpackage1.create(2,"Mega-Package", "5-Day tour", 1500,  1, "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(oneone);
   const two = await hpackage1.create(3,"Mini-Package", "3-Day tour", 2000,  2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(two);
   const twotwo = await hpackage1.create(4,"Mega-Package", "5-Day tour",  2000,  2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(twotwo);
   const three = await hpackage1.create(5,"Mini-Package", "3-Day tour", 18000,  3, "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(three);
   const threethree = await hpackage1.create(6,"Mega-Package", "5-Day tour", 18000,  3, "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(threethree);
   const four = await hpackage1.create(7,"Mini-Package", "3-Day tour", 1700,  4, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(four);
   const fourfour = await hpackage1.create(8,"Mega-Package", "5-Day tour", 1700,  4, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(fourfour);
   const five = await hpackage1.create(9,"Mini-Package", "3-Day tour", 1900,  5, "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(five);
   const fivefive = await hpackage1.create(10,"Mega-Package", "5-Day tour", 1900, 5, "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(fivefive);
   const six = await hpackage1.create(11,"Mini-Package", "3-Day tour", 1600, 6, "https://static.toiimg.com/photo/62569054/.jpg");
   console.log(six);
   const sixsix = await hpackage1.create(12,"Mega-Package", "5-Day tour", 1600, 6, "https://static.toiimg.com/photo/62569054/.jpg");
   console.log(sixsix);


   const oneLoc = await loc.create( 1,"Kerala", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
   console.log(oneLoc);
   const twoLoc = await loc.create( 2, "Himalayas","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
   console.log(twoLoc);
   const threeLoc = await loc.create(3,"Tamil Nadu",  "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
   console.log(threeLoc);
   const fourLoc = await loc.create( 4,"Andhra Pradesh", "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
   console.log(fourLoc);
   const fiveLoc = await loc.create(5,"Punjab",  "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
   console.log(fiveLoc);
   const sixLoc = await loc.create( 6, "West Bengal","https://static.toiimg.com/photo/62569054/.jpg");
   console.log(sixLoc);

// //Kerala
//    const kone = await attraction1.create(1, "Museum", 1, "https://en.wikipedia.org/wiki/Kerala_Museum#/media/File:Museum_of_Kerala_History.jpg");
//    console.log(kone);
//    const ktwo = await attraction1.create(2, "BackWater", 3, "https://www.indiaholidayarchitects.com/wp-content/uploads/2014/12/Palm-tree-tropical-forest-in-backwater-of-Kochin-Kerala-India-copy-1024x550.jpg");
//    console.log(ktwo);
//    const kthree = await attraction1.create(3, "Thekkady Safari", 5, "https://www.holidify.com/places/thekkady/");
//    console.log(kthree);
//    const kfour = await attraction1.create(4, "National Park", 4, "https://lh3.googleusercontent.com/proxy/M6zEpWHzLc5n_W0O8F6IW0s6bAcb9qkQRkWinR-k4Z71kiVSxeWu406h0GkLC5p6ONdS0_IcvtDyRNmEGx9BWnvZ-sAWHEbYBGYKYh87-D6B049N8RFs_3BpVsTZUQnACp5X2wSUwkXgtngYublv71t63p8=w464-h260-n-k-no");
//    console.log(kfour);
//    const kfive = await attraction1.create(5, "Water Falls", 2, "https://cdn.photographylife.com/wp-content/uploads/2015/06/AJT_8848-Edit-650x293.jpg");
//    console.log(kfive);
//    const ksix = await attraction1.create(6, "Caves", 1, "https://steemitimages.com/DQmUEm5wBiVKyYXXo9P1CY5ZAcAZjGtieXcve87TVo2VE1L/Edakkal-caves-Wayanad.png");
//    console.log(ksix);
//    const kseven = await attraction1.create(7, "Beach", 1, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Varkala_beach_750.jpg?itok=Nk4qC4Uf");
//    console.log(kseven);
//    const keight = await attraction1.create(8, "Fort Kochi", 1, "https://s1.it.atcdn.net/wp-content/uploads/2013/10/Sunset-over-Chinese-Fishing-nets-and-boat-in-Cochin-Kochi-Kerala-India-shutterstock_104171129-800x600.jpg");
//    console.log(keight);
//    const knine = await attraction1.create(9, "Vembanad Lake", 1, "images/vembanad-lake-kumarakom1.jpg");
//    console.log(knine);
//    const kten = await attraction1.create(10, "Periyar River", 1, "https://www.thenewsminute.com/sites/all/var/www/images/Periyar-river-turns-black-650.jpg");
//    console.log(kten);

//Himalayas
   // const hone = await attraction1.create(11, "Temple", 2, "https://handluggageonly.co.uk/wp-content/uploads/2017/09/IMG_4482.jpg");
   // console.log(hone);
   // const htwo = await attraction1.create(12, "Cliffside Caves", 4, "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/Paro-Taktsang-Cover.jpg");
   // console.log(htwo);
   // const hthree = await attraction1.create(13, "Pashupatinath Temple", 5, "http://www.helpmeagain.com/wp-content/uploads/2017/04/MAN_7441.jpg");
   // console.log(hthree);
   // const hfour = await attraction1.create(14, "Buddhist Temple", 2, "https://i.pinimg.com/originals/5c/71/73/5c7173f85a750b51e1c0161fa0a41bbb.jpg");
   // console.log(hfour);
   // const hfive = await attraction1.create(15, "Kathmandu Durbar Square ", 3, "https://www.betterplacestravel.com/wp-content/uploads/2017/03/Nepal-Kathmandu-Durbar-square-2w.jpg");
   // console.log(hfive);
   // const hsix = await attraction1.create(16, "Trekking", 6, "https://www.adventuregreathimalaya.com/wp-content/uploads/2016/07/manaslu12.jpg");
   // console.log(hsix);
   // const hseven = await attraction1.create(17, "Kathmandu Valley", 3, "https://cdn.britannica.com/s:700x500/48/10548-004-B1063E67/Kathmandu-Nepal-Valley-background-Bairavkund-Range.jpg");
   // console.log(hseven);
   // const height = await attraction1.create(18, "Annapurna Sanctuary", 5, "https://ssl.c.photoshelter.com/img-get2/I0000vnvCm4kPHA4/fit=1000x750/07NEP-2719.jpg");
   // console.log(height);
   // const hnine = await attraction1.create(19, "Mount Kailash", 6, "https://www.tibettravel.org/blog/wp-content/uploads/2017/01/mount-kailash-3.jpg");
   // console.log(hnine);
   // const hten = await attraction1.create(20, "Rohtang La ", 4, "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/10/Rohtang-pass-2.jpg");
   // console.log(hten);

//Tamil Nadu
   const tone = await attraction1.create(21, "Meenakshi Temple", 2, "https://lh4.googleusercontent.com/proxy/vfwneme5ew6St9-O0NceqKmO_9zucfVxj2ZwX6cH6cbZck8Eg1Z5KMNoZZfmTBddCV0HzHFesNFc1n_Aknlr1Pg3StiZcqb0OHkqo7uLKt-GN8PTQjwyrMpg3dq0DdJbCUgrF0sFnAr5rfEnwfN37N8SAOA=w580-h325-n-k-no");
   console.log(tone);
   const ttwo = await attraction1.create(22, "Shore Temple", 2, "https://www.wondermondo.com/wp-content/uploads/2019/02/Chennai_Beach_temple_942115928.jpg");
   console.log(ttwo);
   const tthree = await attraction1.create(23, "Marina Beach", 2, "https://thelotus.in/blog/wp-content/uploads/2018/10/b1.jpg");
   console.log(tthree);
   const tfour = await attraction1.create(24, "Brihadeeswarar Temple", 1, "https://s3.india.com/travel/wp-content/uploads/2016/05/Brihadeeswarar1.jpg");
   console.log(tfour);
   const tfive = await attraction1.create(25, "Peak", 4, "http://live.staticflickr.com/5616/15349762328_196af94389_b.jpg");
   console.log(tfive);
   const tsix = await attraction1.create(26, "Nilgiri Mountain Railway", 2, "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-s3fkj69dr1tqpo8vn44fasres2-20190227015427.Medi.jpeg");
   console.log(tsix);
   const tseven = await attraction1.create(27, "Pancha Rathas", 2, "https://www.themysteriousindia.net/wp-content/uploads/Mahabalipuram-1-1-770x513.jpg");
   console.log(tseven);
   const teight = await attraction1.create(28, "Scholar Statue", 3, "https://www.maduraitourism.com/wp-content/uploads/2014/06/spot3.jpg");
   console.log(teight);
   const tnine = await attraction1.create(29, "Botanical Garden", 4, "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-ea35v3t98mpm963jkc5son8lt7-20160530063233.Medi.jpeg");
   console.log(tnine);
   const tten = await attraction1.create(30, "Meditation Dome", 2, "https://cdnimd.worldarchitecture.org/extuploadc/photobysanyambahgacopy.jpg");
   console.log(tten);

//Andhra Pradesh

   // const anone = await attraction1.create(31, "", 2, "");
   // console.log(anone);
   // const antwo = await attraction1.create(32, "", 4, "");
   // console.log(antwo);
   // const anthree = await attraction1.create(33, "", 5, "");
   // console.log(anthree);
   // const anfour = await attraction1.create(34, "", 2, "");
   // console.log(anfour);
   // const anfive = await attraction1.create(35, "", 3, "");
   // console.log(anfive);
   // const ansix = await attraction1.create(36, "", 6, "");
   // console.log(ansix);
   // const anseven = await attraction1.create(37, "", 3, "");
   // console.log(anseven);
   // const aneight = await attraction1.create(38, "", 5, "");
   // console.log(aneight);
   // const annine = await attraction1.create(39, "", 6, "");
   // console.log(annine);
   // const anten = await attraction1.create(40, "", 4, "");
   // console.log(anten);

   

   // const saltRounds = 5;

   // const cardnumber1 = "4712960125514588";
   // const cvv1 = "122";
   // const hash_cardnumber1 = await bcrypt.hash(cardnumber1, saltRounds);
   // const hash_cvv1 = await bcrypt.hash(cvv1, saltRounds);
   // const seven = await payments.createPayment("harsha",hash_cardnumber1,"05","2026",hash_cvv1 );
   // console.log(seven);

   // const cardnumber2 = "4715554865982255";
   // const cvv2 = "644";
   // const hash_cardnumber2 = await bcrypt.hash(cardnumber2, saltRounds);
   // const hash_cvv2 = await bcrypt.hash(cvv2, saltRounds);
   // const eight = await payments.createPayment("chaitanya",hash_cardnumber2,"07","2029",hash_cvv2 );
   // console.log(eight);


/*
payment details:

Details 1:
Name: harsha
CardNumber: 4712960125514588
Month: 05
Year: 2026
CVV:  122

Details 2:
Name:  chaitanya
CardNumber: 4715554865982255
Month: 07
Year: 2029
CVV:  644
*/





   const db = await connection();
    await db.serverConfig.close();
    
    console.log('Done!');
}
create().catch((error) => 
{
    console.log(error);
});
