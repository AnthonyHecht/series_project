const Serie = require("../models/series")
const crypto = require("crypto")

exports.getSeries = (req, res, next) => {
    Serie.find()
        .then((series) => res.status(200).json(users))
        .catch((err) => res.status(500).json({ error: err }));
};

exports.getSerie = (req, res, next) => {
    Serie.findById(req.params.id)
        .then((serie) => res.status(200).json(serie))
        .catch((err) => res.status(500).json({ error: err }));
};

exports.createSerie = (req, res) => {
        const serie = new Serie({
            ...req.body,
            id: crypto.randomBytes(16).toString("hex"),
            imageUrl: `${req.protocol}://${req.get("host")}/medias/${req.file.filename}`,
            title: req.body.title,
            description: req.body.description,
        });
        serie
            .save()
            .then((serie) => res.status(201).json(serie))
            .catch((err) => res.status(400).json("Error: " + err));
};