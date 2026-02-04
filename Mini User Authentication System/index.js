require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const supabase = require("./supabaseClient");

const app = express();
app.use(express.json());
