import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    // Emergency Contact Details

    emergencyContact: {
        name: {
            type: String,
            required: false
        },
        relationship: {
            type: String,
            required: false
        },
        contactNumber: {
            countryCode: {
                type: String,
                required: false, // No validation needed (comes from dropdown)
            },
            phoneNumber: {
                type: String,
                required: false,
                validate: {
                    validator: function (v) {
                        return /^\d{10}$/.test(v); // Ensures exactly 10-digit numbers
                    },
                    message: props => `${props.value} is not a valid 10-digit phone number!`
                }
            }

        },
        email: {
            type: String,
            required: false,
            validate: {
                validator: function (v) {
                    return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        }
    },



    // Bank Information
    bankDetails: {
        name: {
            type: String,
            required: false,
        },
        AccountNo: {
            type: String,
            required: false,
        },
        IFSCCode: {
            type: String,
            required: false,
        }
    },

    //  image document from cloudinary or amazon s3
    documents: {
        adhar: {
            image: [{
                type: String,
                required: false,
            }],
            Number: {
                type: String,
                required: false,
            },
        },
        panCard: {
            image: {
                type: String,
                required: false,
            },
            Number: {
                type: String,
                required: false,
            }
        }
    }

}, { timestamps: true }
)


export const User = mongoose.model("User", userSchema);