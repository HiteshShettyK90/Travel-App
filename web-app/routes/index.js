const util = require("./utils/common-utility");
const listing_routes = require("./listing-routes");
const itrData = require("../data/itinerary");
const constructorMethod = app => {
  var bodyParser = require("body-parser");
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  const bcrypt = require("bcryptjs");
  /*
    app.use("/", function (req, res, next) {
        console.log(req.session.test);
        const username = req.session.username;
        try {
            if (username === undefined) {
                throw "Please login.";
            } else {
                next();
            }
        } catch (e) {
            res.status(403).render("user/login", {
                pageTitle: "Login",
                error: e
            });
        }
    });
    */
  app.get("/", async (req, res) => {
    //validateLoggedIn(req, res);
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
    /*
                app.get("/", async (req, res) => {

                    if (req.session.username != undefined) {
                        res.redirect("/");
                    } else {

                        res.render("/login");

                    }
                });
                */
    app.post("/login", async (req, res) => {
      const username = req.body.email;
      const password = req.body.inputPassword;
      console.log(username + ":" + password);
      try {
        await validateUser(username, password);
        req.session.username = username;

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
      } catch (e) {
        req.session.test = "test";
        res.status(401).render("user/login", {
          pageTitle: "Login",
          error: e
        });
      }
    });
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

    async function validateUser(username, password) {
      if (username === undefined || username.trim().length == 0) {
        throw "Username is mandatory. Please enter Username.";
      }
      if (password === undefined || password.trim().length == 0) {
        throw "Password is mandatory. Please enter password.";
      }
      const userData = require("../data/users");
      const user = await userData.getUserByEmail(username);

      if (user === undefined) {
        throw "No user found with Username:" + username;
      }
      console.log(user);
      const compareMatch = await bcrypt.compare(password, user.hashedPassword);
      if (!compareMatch) {
        throw "Please check username/password.";
      }
    }

    //Authentication Middleware for /private
    /*
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
*/
    app.get("/logout", async (req, res) => {
      //clear cookie
      const expireTime = new Date();
      expireTime.setHours(expireTime.getHours() - 100);
      res.cookie("AuthCookie", "", {
        expires: expireTime
      });
      res.render("user/login");
    });

    app.get("/login-form", async (req, res) => {
      res.render("user/login");
    });
    app.get("/signup-form", async (req, res) => {
      res.render("user/signup");
    });

    app.use("/signup", require("./signup"));

    app.get("/home", async (req, res) => {
      res.status(200).render("home/index", {
        pageTitle: "Home | Plan My Trip"
      });
    });
    /*Hitesh*/
    app.use("/location-packages", listing_routes);
    /*Hitesh*/
    app.post("/search", async (req, res) => {
      const locationName = req.body.keyword;
      const data = require("../data/locations");
      const hpackageid = await data.getLocationIdByLocationName(locationName);
      const data1 = require("../data/hpackages");
      const packageDetailsByLocationId = await data1.gethpackageByLocationId(
        hpackageid
      );
      if (hpackageid === undefined || hpackageid == null) {
        res.status(404).render("error_view/generic_error", {
          pageTitle: "Package Not Found",
          error_msg: "Location not found"
        });
      } else {
        res.status(200).render("package/listing", {
          pageTitle: "Package Listing",
          packages: packageDetailsByLocationId
        });
      }
    });
    /* user profile changes*/
    app.use("/user-profile", require("./user-profile"));

    /*Checkout routes to checkout.js*/
    app.use("/checkout", require("./checkout"));

    app.post("/confirmation", async (req, res) => {
      const data = require("../data/payment");
      const data1 = require("../data/booking");
      const paymentData = await data.getall();
      var c = 0;
      var booking_id = req.body.booking_id;
      for (var i = 0; i < paymentData.length; i++) {
        if (
          req.body.name == paymentData[i]["name"] &&
          req.body.expirymonth == paymentData[i]["month"] &&
          req.body.expiryyear == paymentData[i]["year"]
        ) {
          var cardnumber_check = false;
          var cvv_check = false;
          cardnumber_check = await bcrypt.compare(
            req.body.cardnumber,
            paymentData[i]["cardnumber"]
          );
          cvv_check = await bcrypt.compare(req.body.cvv, paymentData[i]["cvv"]);
          if (cardnumber_check && cvv_check) {
            console.log("success!");
            c++;
            const bookingId = {
              id: booking_id
            };
            await data1.updateBookingStatus(booking_id, "booked");
            res.status(200).render("booking/confirmation", {
              pageTitle: "Booking Confirmation",
              bookingId: bookingId
            });
          }
        }
      }
      if (c == 0) {
        console.log("Payment fail");
        res.status(404).render("error_view/generic_error", {
          pageTitle: "Booking Confirmation",
          error_msg: "Payment Failed"
        });
      }
    });
    app.get("/contact", async (req, res) => {
      res.status(200).render("contact/details", {
        pageTitle: "Checkout"
      });
    });
    app.get("/package-details/:id", async (req, res) => {
      const packageId = parseInt(req.params.id);
      console.log("package id:" + packageId);
      //TODO redirect to 404 if packageId not found in database
      const data = require("../data/hpackages");
      const packageDetails = await data.gethpackageById(packageId);
      console.log(packageDetails);
      const itrList = packageDetails["itineraries"];
      const itrInfoList = await itrData.getIteraryDetailsByIds(itrList);
      const attractionData = require("../data/attraction");
      const hotelData = require("../data/hotels");
      if (itrInfoList !== undefined && itrInfoList.length > 0) {
        for (let i = 0; i < itrInfoList.length; i++) {
          itrInfoList[i][
            "attractions"
          ] = await attractionData.getAttractionByIds(
            itrInfoList[i]["attractions"]
          );
          itrInfoList[i]["hotel"] = await hotelData.getHotelById(
            parseInt(itrInfoList[i]["hotel"])
          );
          itrInfoList[i]["hotel"]["rooms"][0]["checked"] = "checked";
          let rooms = itrInfoList[i]["hotel"]["rooms"];
          for (let j = 0; j < rooms.length; j++) {
            let price_diff_text = "No Additional Cost";
            if (itrInfoList[i]["hotel"]["rooms"][j]["price_diff"] > 0) {
              price_diff_text =
                "+" +
                itrInfoList[i]["hotel"]["rooms"][j]["price_diff"] +
                " will be applied at the hotel during checkout.";
            }
            itrInfoList[i]["hotel"]["rooms"][j]["price_diff_text"] =
              "Price: " + price_diff_text;
          }
        }
      }
      const package = {
        id: packageDetails["_id"],
        name: packageDetails["name"],
        image: packageDetails["image"],
        description: packageDetails["description"],
        price: packageDetails["price"],
        itinerary: itrInfoList
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
  });
};

module.exports = constructorMethod;
