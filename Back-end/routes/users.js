const { User, validate } = require("../models/user");
const express = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();

// Create
router.post("/", async (req, res) => {
  try{

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const newUser = new User({
      title: req.body.title,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      position: req.body.position,
      company: req.body.company,
      businessArena: req.body.businessArena,
      employees: req.body.employees,
      streetNr: req.body.streetNr,
      additionalInfo: req.body.additionalInfo,
      zipCode: req.body.zipCode,
      place: req.body.place,
      country: req.body.country,
      code: req.body.code,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      terms: req.body.terms,
    });
  
    await newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
  catch(ex){
    console.error('Error', ex);
  }
});

// Read
router.get("/", async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }
  catch(ex){
    console.error('Error:', ex)
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send("Invalid User ID");
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  } catch (ex) {
    console.error('Error:', ex);
    res.status(500).send("Server Error");
  }
});


// Update
router.put("/update/:id", async (req, res) => {
  try{

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const user = User.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        company: req.body.company,
        businessArena: req.body.businessArena,
        employees: req.body.employees,
        streetNr: req.body.streetNr,
        additionalInfo: req.body.additionalInfo,
        zipCode: req.body.zipCode,
        place: req.body.place,
        country: req.body.country,
        code: req.body.code,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        terms: req.body.terms,
      },
      { new: true }
    );
  
    user
      .save()
      .then(() => res.json("User updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
  catch(ex) {
    console.error('Error',ex);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id)
      .then(() => res.json("User deleted."))
      .catch((err) => res.status(400).json("Error: " + err));
  }
  catch(ex) {
    console.error('Error', ex);
  }
});

module.exports = router;
