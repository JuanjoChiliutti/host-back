const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cuit: {
    type: String,
  },
  image: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // checklists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Checklist" }],
});

// userSchema.pre("save", async function (next) {
//   if (this.isModified("cuit") || this.isNew) {
//     try {
//       const checklistModel = mongoose.model("Checklist");
//       await checklistModel.updateMany(
//         { _id: { $in: this.checklists } },
//         { cuit: this.cuit }
//       );
//     } catch (err) {
//       console.error("Error updating CUIT in checklists:", err);
//     }
//   }
//   next();
// });

userSchema.pre("save", function (next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return reject(err);
      if (!isMatch) return reject(err);
      resolve(true);
    });
  });
};
module.exports = mongoose.model("User", userSchema);
