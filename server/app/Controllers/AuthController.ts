// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from "@ioc:Adonis/Core/Validator";
import * as Helper from "../common";
import User from "../Models/User";
import NotfoundException from "App/Exceptions/NotfoundException";

export default class AuthController {
  public async register({ request, response }) {
    // validate input
    const data = schema.create({
      fullname: schema.string({}, [rules.required()]),
      phone: schema.string({ trim: true }, [rules.required()]),
      email: schema.string({ escape: true }, [rules.required(), rules.email()]),
      password: schema.string({}, [rules.required()]),
    });

    try {
      //generate token
      const verification_code: string = Helper.randomGenerator(10000, 999999);
      //validate input
      const payload = await request.validate({
        schema: data,
        reporter: validator.reporters.api,
        messages: {
          required: "The {{ field }} is required",
          "email.unique": "email already exist",
          "phone.unique": "phone number already exist",
          email: "Invalid email input",
        },
        errors: [
          {
            code: "required",
            source: {
              pointer: "title",
            },
            //   title: 'required validation failed'
          },
        ],
      });
      // send token to phone number
      // await Helper.sendToken(payload.phone, `your Ubyco token is ${verification_code}`)

      //Create new user
      const user = new User();
      (user.phone = payload.phone),
        (user.email = payload.email),
        (user.fullname = payload.fullname),
        (user.password = payload.password),
        (user.verification_code = verification_code);
      await user.save();
      return response.status(200);
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }

  public async verify({auth,request, response }) {
    const data = schema.create({
      verification_code: schema.string({}, [rules.required()]),
    });
    try {
      const payload = await request.validate({
        schema: data,
        messages: {
          required: "This field is required",
        },
      });

      let user = await User.findByOrFail(
        "verification_code",
        payload.verification_code
      );

        //split the full name for paystack customer account creation
        let name = user.fullname.split(" ");

        //create user as a paystack customer
        const createCustomer = await Helper.paystack.createCustomer({
          first_name: name[0],
          last_name: name[1],
          email: user.email,
          phone: user.phone,
        });
        //add customer_code to user details for future communication
        user.customer_id = createCustomer.body.data.customer_code;
        //create user wallet
        await user.related("userAmount").create({
          amount: "0",
        });

        user.is_verified = true;
        //save updated user
        await user.save();
        // Generate Token

        const token: any = await auth.use("api").generate(user, {
          expiresIn: "7days",
        });
        return response.status(200).send({ message: token, user });
    } catch (error) {
      console.log(error)
       return response.badRequest(error);
    }
  }

  public async login({ request, response, auth }) {
    //Validate User input
    const data = schema.create({
      email: schema.string({}, [rules.required(), rules.email()]),
      password: schema.string({}, [rules.required()]),
    });
    try {
      const payload = await request.validate({
        schema: data,
        messages: {
          required: "The {{ field }} is required",
          email: "invalid email input",
        },
      });
      const user = await User.findByOrFail("email", payload.email);
      //check if user is verified
      if (!user.is_verified) {
        return response
          .status(401)
          .send({ message: "Kindly verify your account" });
      }
      if (user.banned) {
        return response
          .status(401)
          .send({ message: "you are not allowed to use the system" });
      }
      //Authenticate User
      const token: any = await auth
        .use("api")
        .attempt(payload.email, payload.password, {
          expiresIn: "7days",
        });
      return response.status(200).send({ message: token });
    } catch (error) {
      return response.badRequest(error);
    }
  }

  public async logout({ auth }) {
    await auth.use("api").revoke();
    return {
      revoked: true,
    };
  }

  public async forget({ request, response }) {
    //validate
    const data = schema.create({
      phone: schema.string({}, [rules.required()]),
    });

    try {
      const payload = await request.validate({
        schema: data,
        message: {
          required: "The {{field}} is required",
        },
      });
      //generate token
      const verification_code = await Helper.randomGenerator(100000, 999999);
      //find phone if exist and update
      const user = await User.findByOrFail("phone", payload.phone);
      user.verification_code = verification_code;
      user.is_verified = false;
      user.save();
      //token sent
      //await sendToken(user.phone, `Your reset token is ${verification_code}`)
      return response.send({ message: "We sent you a token" });
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }

  public async index({ auth, response }) {
    try {
      return response.status(200).send({ message: auth.user });
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }
}
