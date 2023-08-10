import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({
    userid: { type: String, required: true },
    mainCitie: {
        citieName: { type: String, default: 'Mangalore' },
        countryName: { type: String, default: 'India' },
        location: {
            Latitude: {
                type: String
            },
            Longitude: {
                type: String
            }
        }
    },
    otherFavoriteCities: {
        type: [String], default: []
    }
})
const Banner = mongoose.models.User || mongoose.model('User', userSchema)
export default Banner

