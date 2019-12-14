const util = require("./utils/common-utility");
const constructorMethod = app => {

    var bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    const bcrypt = require("bcryptjs");

    app.get("/", async (req, res) => {
        const data = require("../data/locations");
        //Harsha: Use get first 6 pacakges to list the top packages
        const featuredLocations = await data.getall();
        //split package to multiple row based on column size
        const featuredColumnSize = 3;
        res.status(200).render("home/index", {
            pageTitle: "Home Page",
            featuredLocations: util.convertListToRows(
                featuredLocations,
                featuredColumnSize
            )
        });

    // app.get("/", async (req, res) => {

    //     if (req.session.user != undefined) {
    //         res.redirect("/search");    
    //     } else {
            
    //         res.render("user/login")
            
    //     }
    // });
    // app.post("/login", async (req, res) => {
    //     const username = req.body.username;
    //     const password = req.body.password;

    //     try {
    //         await validateUser(username, password);
    //         req.session.username = username;
    //         res.redirect("/search");
    //     } catch (e) {
    //         res.status(401).render("login", {
    //             pageTitle: "Login",
    //             error: e
    //         });
    //     }
    // });
        /*
            if (req.session !== undefined && req.session.username) {
                res.redirect("/private");
            } else {
                res.status(200).render("login", {
                    pageTitle: "Login"
                });
            }
            */
   // });



    /*
    async function validateUser(username, password) {
        if (username === undefined || username.trim().length == 0) {
            throw "Username is mandatory. Please enter Username.";
        }
        if (password === undefined || password.trim().length == 0) {
            throw "Password is mandatory. Please enter password.";
        }
        const user = users.filter(function (ele) {
            return ele.username == username;
        });
        if (user.length == 0) {
            throw "No user found with Username:" + username;
        }
        const compareMatch = await bcryptjs.compare(password, user[0].hashedPassword);
        if (!compareMatch) {
            throw "Password do not match in the database!";
        }
    }
    a
    //Authentication Middleware for /private
    app.use("/private", function (req, res, next) {
        const username = req.session.username;
        try {
            if (username === undefined) {
                throw "User not logged in!! Please login.";
            } else {
                const user = users.filter(function (ele) {
                    return ele.username == username;
                });
                if (user.length > 0) {
                    req.session.user = user[0];
                    next();
                } else {
                    throw "Authroization failed for user. Please login!!";
                }
            }
        } catch (e) {
            res.status(403).render("error_view/generic_error", {
                pageTitle: "Not Logged In",
                errorMsg: e
            });
        }
    });
    app.get("/private", async (req, res, next) => {
        res.status(200).render("private", {
            pageTitle: "Private",
            person: req.session.user
        });
    });

    app.get("/logout", async (req, res) => {
        //clear cookie
        const expireTime = new Date();
        expireTime.setHours(expireTime.getHours() - 100);
        res.cookie("AuthCookie", "", {
            expires: expireTime
        });
        res.status(200).render("logout", {
            pageTitle: "Logout"
        });
    });
    */
    app.get("/home", async (req, res) => {
        res.status(200).render("home/index", {
            pageTitle: "Home | Plan My Trip",
        });
    });
    app.get("/search", async (req, res) => {
        res.status(200).render("package/listing", {
            pageTitle: "Search Page",
        });
    });
    app.get("/user-profile", async (req, res) => {
        res.status(200).render("user/profile", {
            pageTitle: "User Profile",
        });
    });
    /* checkout get is only for UI build and testing*/
    app.get("/checkout", async (req, res) => {
        res.status(200).render("booking/checkout", {
            pageTitle: "Checkout"
        });
    });
    app.post("/checkout", async (req, res) => {
        res.status(200).render("booking/checkout", {
            pageTitle: "Checkout"
        });
    });
    app.post("/confirmation", async (req, res) => {
        const data = require("../data/payment");
        const paymentData = await data.getall();
        var c = 0;
        for (var i = 0; i < paymentData.length; i++) {
            if (req.body.name == paymentData[i]['name'] && req.body.expirymonth == paymentData[i]['month'] && req.body.expiryyear == paymentData[i]['year']) {
                var cardnumber_check = false;
                var cvv_check = false;
                cardnumber_check = bcrypt.compare(req.body.cardnumber, paymentData[i]['cardnumber']);
                cvv_check = bcrypt.compare(req.body.cvv, paymentData[i]['cvv']);
                if (cardnumber_check && cvv_check) {
                    console.log("success!");
                    c++;
                }
            }
        }
        if (c == 0) {
            console.log("fail");
        }
        res.status(200).render("booking/confirmation", {
            pageTitle: "Booking Confirmation",
        });
    });
    app.get("/contact", async (req, res) => {
        res.status(200).render("contact/details", {
            pageTitle: "Checkout",
        });
    });
    app.get("/package-details/:id", async (req, res) => {
        const packageId = parseInt(req.params.id);
        console.log("package id:" + packageId);
        //TODO redirect to 404 if packageId not found in database
        const data = require("../data/hpackages");
        const packageDetails = await data.gethpackageById(packageId);
        console.log(packageDetails);
        const package = {
            name : packageDetails['name'],
            description: packageDetails['description'],
            price: packageDetails['price']
        };

        
        
        res.status(200).render("package/details", {
            pageTitle: "Package Detail|" + packageId,
            package: package
            
        });
    });

    app.get("*", async (req, res) => {
        res.status(404).render("error_view/generic_error", {
            pageTitle: "Page Not found!!",
            errorMsg: "Page Not Found!!"
        });
    });
})};

module.exports = constructorMethod;