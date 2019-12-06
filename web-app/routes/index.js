const constructorMethod = app => {

    app.get("/", async (req, res) => {
        res.status(200).render("home/index", {
            pageTitle: "Home Page"
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
    });



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
    app.post("/login", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        try {
            await validateUser(username, password);
            req.session.username = username;
            res.redirect("/private");
        } catch (e) {
            res.status(401).render("login", {
                pageTitle: "Login",
                error: e
            });
        }
    });
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
            pageTitle: "Search",
        });
    });

    app.get("/package-details/:id", async (req, res) => {
        const packageId = req.params.id;
        console.log("package id:" + packageId);
        //TODO redirect to 404 if packageId not found in database

        const packageDetails = {
            id: packageId,
            name: "Dummy Package name",
            description: "Dummy Package Description"
        }
        res.status(200).render("package/details", {
            pageTitle: "Package Detail|" + packageId,
            package: packageDetails
        });
    });

    app.get("*", async (req, res) => {
        res.status(404).render("error_view/generic_error", {
            pageTitle: "Page Not found!!",
            errorMsg: "Page Not Found!!"
        });
    });
};

module.exports = constructorMethod;