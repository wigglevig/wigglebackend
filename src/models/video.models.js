import bcrypt from "bcryptjs/dist/bcrypt";
import mongoose from "mongoose";
import mongooseAgreegatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = mongoose.Schema({
    videoFile:{
        type:String, //Cloudinary url
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        requried:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:Number,
        default: 0,
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

},
{
    timestamps:true
}
);

videoSchema.plugin(mongooseAgreegatePaginate);
export const Video = mongoose.model("Video",userSchema);
