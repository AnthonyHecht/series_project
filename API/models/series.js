const mongoose = require("mongoose")

const seriesSchema = new mongoose.Schema(
    {
        imageUrl: { type: String },
        title: { type: String },
        description: { type: String },
        commentaire: { type: String },
        id: { type: String },
        tier: { type: String}
    }
);

module.exports = mongoose.model("Series", seriesSchema);