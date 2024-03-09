const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    totalClasses: {type: Number,required: true},
    classesAttended: {type: Number,required: true}
});

attendanceSchema.virtual('attendancePercentage').get(function() {
    return (this.classesAttended / this.totalClasses) * 100;
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;