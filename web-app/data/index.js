const payments = require("./payment");
const hpackage1 = require("./hpackages");
const attraction1 = require("./attraction");

const connection = require('./connection');
const bcrypt = require("bcryptjs");



async function create()
{
//    const one = await hpackage1.create("kerala", "1500", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg");
//    console.log(one);
//    const two = await hpackage1.create("Himalayas", "2000", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5T4J4RxyRB5X13V4tVi7qThADOocq57hxuzjk9H5dRID44gF&s");
//    console.log(two);
//    const three = await hpackage1.create("TamilNadu", "18000", "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
//    console.log(three);
//    const four = await hpackage1.create("AndhraPradesh", "1700", "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ntrstatue_0.jpg?itok=dDCIypLw");
//    console.log(four);
//    const five = await hpackage1.create("Punjab", "1700", "https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-66518638.cms");
//    console.log(five);
//    const six = await hpackage1.create("WestBengal", "1700", "https://static.toiimg.com/photo/62569054/.jpg");
//    console.log(six);

//Kerala
   const kone = await attraction1.create(1, "Museum", 1, "https://en.wikipedia.org/wiki/Kerala_Museum#/media/File:Museum_of_Kerala_History.jpg");
   console.log(kone);
   const ktwo = await attraction1.create(2, "BackWater", 3, "https://www.indiaholidayarchitects.com/wp-content/uploads/2014/12/Palm-tree-tropical-forest-in-backwater-of-Kochin-Kerala-India-copy-1024x550.jpg");
   console.log(ktwo);
   const kthree = await attraction1.create(3, "Thekkady Safari", 5, "https://www.holidify.com/places/thekkady/");
   console.log(kthree);
   const kfour = await attraction1.create(4, "National Park", 4, "https://lh3.googleusercontent.com/proxy/M6zEpWHzLc5n_W0O8F6IW0s6bAcb9qkQRkWinR-k4Z71kiVSxeWu406h0GkLC5p6ONdS0_IcvtDyRNmEGx9BWnvZ-sAWHEbYBGYKYh87-D6B049N8RFs_3BpVsTZUQnACp5X2wSUwkXgtngYublv71t63p8=w464-h260-n-k-no");
   console.log(kfour);
   const kfive = await attraction1.create(5, "Water Falls", 2, "https://cdn.photographylife.com/wp-content/uploads/2015/06/AJT_8848-Edit-650x293.jpg");
   console.log(kfive);
   const ksix = await attraction1.create(6, "Caves", 1, "https://steemitimages.com/DQmUEm5wBiVKyYXXo9P1CY5ZAcAZjGtieXcve87TVo2VE1L/Edakkal-caves-Wayanad.png");
   console.log(ksix);
   const kseven = await attraction1.create(7, "Beach", 1, "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Varkala_beach_750.jpg?itok=Nk4qC4Uf");
   console.log(kseven);
   const keight = await attraction1.create(8, "Fort Kochi", 1, "https://s1.it.atcdn.net/wp-content/uploads/2013/10/Sunset-over-Chinese-Fishing-nets-and-boat-in-Cochin-Kochi-Kerala-India-shutterstock_104171129-800x600.jpg");
   console.log(keight);
   const knine = await attraction1.create(9, "Vembanad Lake", 1, "images/vembanad-lake-kumarakom1.jpg");
   console.log(knine);
   const kten = await attraction1.create(10, "Periyar River", 1, "https://www.thenewsminute.com/sites/all/var/www/images/Periyar-river-turns-black-650.jpg");
   console.log(kten);

//    const athree = await attraction1.create("TamilNadu", "18000", "https://media.istockphoto.com/photos/kodaikanal-tamil-nadu-the-picturesque-lake-in-the-british-colonial-picture-id492882716?k=6&m=492882716&s=612x612&w=0&h=cswJpnBhroG9Q_6wWsRjXJ1BTfZUqDLROQO5JLDdlSQ=");
//    console.log(athree);

//    const saltRounds = 5;

//    const cardnumber1 = "4712960125514588";
//    const cvv1 = "122";
//    const hash_cardnumber1 = await bcrypt.hash(cardnumber1, saltRounds);
//    const hash_cvv1 = await bcrypt.hash(cvv1, saltRounds);
//    const seven = await payments.createPayment("harsha",hash_cardnumber1,"05","2026",hash_cvv1 );
//    console.log(seven);

//    const cardnumber2 = "4715554865982255";
//    const cvv2 = "644";
//    const hash_cardnumber2 = await bcrypt.hash(cardnumber2, saltRounds);
//    const hash_cvv2 = await bcrypt.hash(cvv2, saltRounds);
//    const eight = await payments.createPayment("chaitanya",hash_cardnumber2,"07","2029",hash_cvv2 );
//    console.log(eight);


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
