require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

const port = 5000;
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("❌ MONGO_URI is missing in .env file");
}

// MongoDB client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    // --------DB Collection
    const db = client.db("mentor-connect-DB");
    const usersCollection = db.collection("users");
    const mentorsCollection = db.collection("mentors");

    // ---------> Users APIs
    app.post("/users", async (req, res) => {
      console.log("🔥 BACKEND /users HIT");
      const user = req.body;

      if (!user.email) {
        return res.status(400).send({ message: "Email required" });
      }

      const existingUser = await usersCollection.findOne({ email: user.email });

      if (existingUser) {
        return res.send({ message: "User already exists" });
      }

      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const query = {};
      const users = await usersCollection
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      res.send(users);
    });

    // ---------> Mentors APIs
    app.get("/mentors", async (req, res) => {
      const result = await mentorsCollection.find().toArray();
      res.send(result);
    });
    app.get("/mentors/:id", async (req, res) => {
      const id = req.params.id;
      const mentor = await mentorsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(mentor);
    });
    // await client.connect();
    // console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
}

connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Mentor Connect Server running .........!");
});

// Server
app.listen(port, () => {
  console.log(`🚀 Mentor Connect listening on port ${port}`);
});
