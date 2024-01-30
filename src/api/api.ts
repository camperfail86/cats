import axios from "axios";

export const instance = axios.create(
    {
        headers: {
            "x-api-key": "live_YVRQITGg7uMhVyTlbsmMh4GPlUvv3y2oYiiw9S4GQrpjrQiE3a9QB5HQXCVMjQRO"
        },
        baseURL: 'https://api.thecatapi.com/v1'
    }
)

export const catsApi= {
    getCats() {
        return instance.get(`/images/search?limit=7`)
    },
}