import Event from "../models/event.model.js";

export const searchRecommendationController = async (req, res) => {
    try {
        const query = req.query.q || "";
        const events = await Event.find({
            $or: [
                {
                    event_name: {
                        $regex: query,
                        $options: "i",
                    },
                },
                {
                    "performers.name": {
                        $regex: query,
                        $options: "i",
                    },
                },
            ],
        });
        // console.log(events);
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
};
