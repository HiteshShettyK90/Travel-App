const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

    //get user id from the session
    let userId = "User id from session";
    const bookingData = require("../data/booking");
    const bookingHistory = await bookingData.getAllBookedByUserId(userId);

    for (let i = 0; i < bookingHistory.length; i++) {
        const date = (bookingHistory[i].booking_date);
        const booking_date = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
        bookingHistory[i].booking_date = booking_date;
    }
    const userDetail = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        phoneNo: req.body.phonenumber,
        email: req.body.email,
        state: req.body.state,
        city: req.body.city,
        zip: req.body.zip,
        username: req.body.username,
        password: req.body.password
    }
    const profile = {
        user: userDetail,
        bookingHistory: bookingHistory,
    }
    res.status(200).render("user/profile", {
        pageTitle: "User Profile",
        profile: profile,
    });

});
router.post("/cancel-booking/:id", async (req, res) => {
    let bookingId = req.params.id;
    console.log(bookingId);
    const bookingData = require("../data/booking");

    try {
        const booking = await bookingData.updateBookingStatus(bookingId, "canceled");
        res.status(200).json({
            status: "success",
            bookingObj: booking
        });
    } catch (e) {
        res.status(200).json({
            status: "fail",
        });
    }


});

router.post("/validate-user", async (req, res) => {
    let emailId = req.body.email;
    const userData = require("../data/users");
    let isExistingUser = await userData.isExistUserByEmail(emailId);
    const responseObj = {};
    if (isExistingUser) {
        responseObj.isError = true;
        responseObj.message = "User Already Exists!!";
    } else {
        responseObj.isError = false;
    }
    res.json(responseObj);
});


module.exports = router;