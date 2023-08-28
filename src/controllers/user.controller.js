import  User  from "../models/user.model.js";
import {addUserValidator, loginUserValidator, updateUser, deleteUserValidator, getUsers} from "../validators/user.validator.js";
import bcrypt from "bcrypt";
import {formatZodError} from "../utilities/errormessage.js";
// import userDetails from "../config/emailDetails.js";
// import {google} from "googleapis";
// import nodemailer from "nodemailer";
// import OAuth2 from "google.auth.OAuth2";
// import gravatar from "gravatar";



export const getAllUser = async (req, res) => {
    const user = await User.find();

    res.status(200).json({ message: "Fetch was Successfully", user }).end();
}

export const getSingleUser = async (req, res) => {
    const result = getUsers.safeParse(req.params.UserId);
  
    if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
    }
  
    const user = await User.findById(req.params.UserId);
  
    res.status(200).json({ message: "Fetch was Successful", user }).end();
  };
  
  // export const addUser = async (req, res) => {
  //   try {
  //     const result = addUserValidator.safeParse(req.body);
  
  //     if (!result.success) {
  //       return res.status(400).json(formatZodError(result.error.issues)).end();
  //     }

  //     const salt = bcrypt.genSaltSync(10);
  //     const encryptedPassword = bcrypt.hashSync(req.body.password, salt);
  
  //     const { name, email, rank, station, batchId } = req.body;
  
  //     const user = new User({ name, email, rank, station, batchId, password:encryptedPassword });
  
  //     await user.save();
  
  //     res.status(201).json({ message: "New User Created" }).end();
  //   } catch (error) {
  //     // Handle any errors that occur during the process
  //     console.error("Error adding user:", error);
  //     res.status(500).json({ error: "An error occurred while adding the user" }).end();
  //   }
  // };
 
 
  export const addUser = async (req, res) => {
    try {
      const result = addUserValidator.safeParse(req.body);
  
      if (!result.success) {
        return res.status(400).json(formatZodError(result.error.issues)).end();
      }
  
      const salt = bcrypt.genSaltSync(10);
      const encryptedPassword = bcrypt.hashSync(req.body.password, salt);
  
      const { name, email, rank, station, batchId } = req.body;
  
      const user = new User({
        name,
        email,
        rank,
        station,
        batchId,
        password: encryptedPassword,
      });
  
      await user.save();
  
      res.status(201).json({ message: "New User Created" }).end();
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "An error occurred while adding the user" }).end();
    }
  };
  
  export const loginUser = async (req, res) => {
    try {
      const result = loginUserValidator.safeParse(req.body); // Assuming loginUserValidator is properly defined
  
      if (!result.success) {
        return res.status(400).json(formatZodError(result.error.issues)).end();
      }
  
      const user = await User.findOne({ batchId: req.body.batchId });
  
      if (!user) {
        return res.status(401).json({ message: "Authentication failed" }).end();
      }
  
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({ message: "Authentication failed" }).end();
      }
  
      // Remove the password from the user object before sending it in the response
      user.password = undefined;
  
      res.json(user).end();
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "An error occurred while logging in" }).end();
    }
  };
  

  // const OAuth2_Client = new OAuth2(userDet.clientId,userDet.clientSecret,'https://developers.google/playground')
  // OAuth2_Client.setCredentials({
  //   refresh_token:userDet.refreshToken
  // })
  // const accessToken = OAuth2_Client.getAccessToken()
  // const transporter = nodemailer.createTransport({
  //   service:'gmail',
  //   auth:{
  //     type:'OAuth2',
  //     user:userDet.user,
  //     clientId:userDet.clientId,
  //     clientSecret:userDet.clientSecret,
  //     refreshToken:userDet.refreshToken,
  //     accessToken:accessToken
  //   }
  // })

  // const verifyMail = async ({firstname,id,email }) => {
  //   try {
  //     const mailOptions = {
  //       from: 'medlink005@gmail.com',
  //       to: email,
  //       subject: `Verification Email For ${email} as Officer`,
  //       html: `
  //       <div style="background-color:black; color: white; font-size: 16px; width: 100%; height: 65vh; margin: auto; border-radius: 3px; box-shadow: 0px 1px 10px 2px black; max-width: 40rem;">
  //      <img src="https://res.cloudinary.com/dba1aezsn/image/upload/v1687622863/png_logo_r9wfzj.png" alt="" style="height: 30px; margin-left: 10px;">
  //      <div style="background: #285430; height: 55vh; padding: 10px;">
  //      <p style="color: white; margin-bottom: 10px;">Dear ${name}, with batchId ${batchId}</p>
  //     <p style="color: rgb(255, 255, 255);">We are pleased to inform you that your Login ID has been generated and is ready for use. The assigned Login ID is </p>
  //     <p style="font-size: 20px;text-align: center; color: white;">${id}</p>
  //     <p style="color: white;">
  //       Please ensure to keep this ID secure and use it for any future correspondence or transactions related to your hospital account. <br>
  //       If you have any questions or need further assistance, please don't hesitate to contact our support team at criss@gmail.com. We are here to help.
  //     </p>
  //     <p style="color: white; margin-bottom: 10px;">Thank you for choosing our platform. We value your partnership and look forward to providing you with exceptional services.</p> <br>
  //     <p style="color: white;">CRISS</p>
  //   </div>
  // </div>`
  //     };
  
  //     transporter.sendMail(mailOptions, (error, info) => {
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         console.log(info.response);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  export const udpateUser = async (req, res) => {
    const result = updateUser.safeParse(req.params.UserId);
  
    if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
    }
  
    await User.updateOne({ _id: req.params.UserId }, { ...req.body });
  
    res.status(200).json({ message: "Updated Successfully" }).end();
  };
  
  export const deleteUser = async (req, res) => {
    const result = deleteUserValidator.safeParse(req.params.UserId);
  
    if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
    }
  
    await User.deleteOne({ _id: req.params.UserId });
  
    res.status(200).json({ message: "User Deleted Successfully" }).end();
  };
  