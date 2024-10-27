import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    event_name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: [String],
        enum: [
            "standup",
            "inhouse",
            "concert",
            "outdoor",
            "festival",
            "indoor",
        ],
    },
    genres: {
        type: [String],
        required: true,
    },
    audience: {
        type: [String],
        required: true,
        enum: ["all ages", "adults", "kids", "family", "teenagers"],
    },
    ticket_info: {
        price_range: {
            type: [Number],
            required: true,
        },
        currency: {
            type: String,
            default: "INR",
        },
        ticket_link: {
            type: String,
            required: true,
        },
    },
    location: {
        city: String,
        state: String,
        country: String,
        address: String,
        postal_code: String,
        latitude: Number,
        longitude: Number,
        venue: String,
    },
    host_info: {
        host_name: String,
        contact_email: String,
        contact_phone: String,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    reviews_count: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String],
    },
    performers: [
        {
            name: String,
            role: String,
            profile_image: String,
        },
    ],
    amenities: {
        type: [String],
    },
    safety_measures: {
        type: [String],
    },
    tags: {
        type: [String],
    },
    event_policies: {
        refund_policy: String,
        age_restriction: String,
        dress_code: String,
    },
    engagement_metrics: {
        likes: {
            type: Number,
            default: 0,
        },
        shares: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Number,
            default: 0,
        },
        bookmarks: {
            type: Number,
            default: 0,
        },
    },
    related_events: [
        {
            event_name: String,
            date: Date,
        },
    ],
});

const Event = mongoose.model("Events", eventSchema);
export default Event;