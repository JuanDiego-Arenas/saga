import mongoose from "mongoose";

const dailyAttendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    attendances: [{
        type: Object,
        required: true,
    }],
});

const DailyAttendance = mongoose.model('DailyAttendance', dailyAttendanceSchema);

export default DailyAttendance;
