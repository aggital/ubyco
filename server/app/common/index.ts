import Env from '@ioc:Adonis/Core/Env'
// import AWS from  'aws-sdk'
import PayStack from 'paystack-node'

export const sendToken: any = (phone: string, message: string, ) => {
  const accountSid = Env.get('TWILIO_ACCOUNT_SID');
  const authToken = Env.get('TWILIO_AUTH_TOKEN');
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
       body: message,
       from: '+18573203152',
       to: phone
     })
    .then(message => console.log(message.sid));
};

export const randomGenerator: any = (max : number, min: number) :number =>  {
  return Math. floor(Math. random() * (max - min + 1)) + min;
}

export const paystack: any = new PayStack(Env.get('PAYSTACK_TOKEN'), Env.get('NODE_ENV'))