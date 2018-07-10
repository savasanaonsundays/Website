const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
 
    content:{

        aboutMe:{
            type: String,
            required: true
        },
        missionStatement:{
            type: String,
            required: true
        },
        timeTable:{

        },
        pricing:{
            type: String,
            required: true
        },
        privateBookings:{
            type: String,
            required: true
        },
        massage:{
            type: String,
            required: true
        },
        privateYoga:{
            type: String,
            required: true
        },
        publicYoga:{
            type: String,
            required: true
        },  
        testimonials:{
            type: String,
            required: true
        }



    }

});