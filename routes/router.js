import express from "express";
import { hateoas, joyasCategory } from "../controller/controller.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
})

router.get("/joyas", hateoas)

router.get("/joyas/categoria/:categoria", joyasCategory)

export default router