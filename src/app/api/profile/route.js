import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "../../../models/User";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const sessions = await getServerSession(authOptions);
  const email = sessions.user.email;
  console.log({ email });

  if ("name" in data) {
    await User.updateOne({ email }, { name: data.name });
    // const user = await User.findOne({ email });
    // user.name = data.name;
    // await user.save();
  }
  return Response.json(true);
}
