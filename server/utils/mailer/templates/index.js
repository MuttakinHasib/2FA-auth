/**
 * @param  {String} name
 * @param  {String} message
 * @param  {String} url
 */
export const sendGiftCardEmail = (name, message, url) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html
    data-editor-version="2"
    class="sg-campaigns"
    xmlns="http://www.w3.org/1999/xhtml"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style>
        @media screen and (max-width: 630px) {
          .row {
            display: block;
            float: left;
          }

          .links {
            justify-content: flex-start !important;
          }
        }
      </style>
    </head>

    <body
      style="
        background: #fdfcfc;
        padding: 2.5rem 1rem;
        font-family: 'Lato', -apple-system, system-ui, BlinkMacSystemFont,
          'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
      "
    >
      <table style="max-width: 800px; width: 100%; margin: auto">
        <p style="text-align: center; font-size: 16px; margin-bottom: 2rem">
          Welcome to <strong>BeWeddy- Free All-In-One Wedding Platform.</strong>
        </p>
      </table>
      <table
        style="
          max-width: 800px;
          width: 100%;
          border: 2px solid #dfdfdf;
          border-radius: 5px;
          background: #fff4f8;
          padding: 3rem 1rem 1.5rem 1rem;
          margin: auto;
        "
      >
        <tr style="margin-bottom: 1.5rem">
          <td
            style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px"
            valign="top"
            align="center"
          >
            <img
              class="max-width"
              border="0"
              style="
                display: block;
                color: #000000;
                text-decoration: none;
                font-family: Helvetica, arial, sans-serif;
                font-size: 16px;
                max-width: 33% !important;
                width: 26%;
                height: auto !important;
              "
              alt=""
              data-proportionally-constrained="true"
              data-responsive="true"
              src="http://cdn.mcauto-images-production.sendgrid.net/87928f979ea43fec/6e3fc13c-cdc9-4f50-a73f-1e4fc2614f44/1004x388.png"
            />
          </td>
        </tr>
        <tr>
          <td align="center">
            <h2 style="font-weight: 500">Congratulations! 🎉</h2>
          </td>
        </tr>
        <tr>
          <td align="center">
            <p style="font-size: 18px; font-weight: 400">
              <!-- Hi <strong>${name}</strong> Thank You For Choosing BeWeddy For -->
              <br />
              you Just Got a gift!! Redeem your gift card below and you will
              <br />
              receive an email within 24 hours to activate.
            </p>
          </td>
        </tr>
        <tr style="margin-bottom: 1.5rem">
          <td align="center">
           <a
              style="
                background: #f9d1de;
                color: #000;
                padding: 10px 25px;
                display: inline-block;
                border: 2px solid #000;
                border-radius: 5px;
                text-decoration: none;
                border-radius: 4px;
                margin-bottom: 30px;
                font-weight: 600;
              "
              href="${url}"
              >Redeem</a
            >
          </td>
        </tr>
        <tr>
          <td align="center">
            <p style="font-weight: 600; font-size: 13px; line-height: 30px">
              <strong>From:</strong> ${name} <br />
              <strong>Note:</strong> "${message}"
            </p>
          </td>
        </tr>
      </table>
      <table style="max-width: 800px; width: 100%; margin: 1.5rem auto">
        <tr class="row">
          <th align="left" style="font-weight: 500">
            <strong>© 2021 BeWeddy.</strong> All rights reserved.
          </th>
          <th
            style="display: flex; justify-content: flex-end; font-weight: 300"
            class="links"
          >
            <p style="margin-left: 12px; display: block">
              <a href="#"> Terms & Conditions </a>
            </p>
            <p style="margin-left: 12px; display: block">
              <a href="#"> Contact us </a>
            </p>
          </th>
        </tr>
      </table>
    </body>
  </html>`;
};
/**
 * @param  {String} name
 * @param  {String} url
 */

export const activationTemplate = (name, url) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <style>
    @media screen and (max-width: 630px) {
      .row {
        display: block;
        float: left;
      }

      .links {
        justify-content: flex-start !important;
      }
    }
  </style>
</head>

<body style="
      background: #fdfcfc;
      padding: 2.5rem 1rem;
      font-family: 'Lato', -apple-system, system-ui, BlinkMacSystemFont,
        'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    ">
  <table style="max-width: 800px; width: 100%; margin: auto">
    <p style="text-align: center; font-size: 16px; margin-bottom: 2rem">
      Welcome to <strong>BeWeddy- Free All-In-One Wedding Platform.</strong>
    </p>
  </table>
  <table style="
        max-width: 800px;
        width: 100%;
        border: 2px solid #dfdfdf;
        border-radius: 5px;
        background: #fff4f8;
        padding: 3rem 1rem 1.5rem 1rem;
        margin: auto;
      ">
    <tr style="margin-bottom: 1.5rem">
      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="center">
        <img class="max-width" border="0" style="
              display: block;
              color: #000000;
              text-decoration: none;
              font-family: Helvetica, arial, sans-serif;
              font-size: 16px;
              max-width: 33% !important;
              width: 26%;
              height: auto !important;
            " alt="" data-proportionally-constrained="true" data-responsive="true"
          src="http://cdn.mcauto-images-production.sendgrid.net/87928f979ea43fec/6e3fc13c-cdc9-4f50-a73f-1e4fc2614f44/1004x388.png" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <h2 style="font-weight: 500;">
          Congratulations! 🎉
        </h2>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-size: 18px; font-weight: 400;">
          Hi <strong>${name}</strong> Thank You For Choosing BeWeddy For <br /> Your Wedding Platform! Confirm Your Email and <br /> Lets Get This Party Started!
        </p>
      </td>
    </tr>
    <tr style="margin-bottom: 1.5rem">
      <td align="center">
        <a style="
              background: #f9d1de;
              color: #000;
              padding: 10px 25px;
              display: inline-block;
              border: 2px solid #000;
              border-radius: 5px;
              text-decoration: none;
              border-radius: 4px;
              margin-bottom: 30px;
              font-weight: 600;
            " href="${url}">Active Account</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-weight: 600; font-size: 13px; line-height: 30px">
          Need help, contact support at
          <a style="color: #333" href="mailto:beweddy1@gmail.com">nate@beweddy.com</a>
        </p>
      </td>
    </tr>
  </table>
  <table style="max-width: 800px; width: 100%; margin: 1.5rem auto;">
    <tr class='row'>
      <th align="left" style='font-weight: 500;'><strong>© 2021 BeWeddy.</strong> All rights reserved.</th>
      <th style='display:flex; justify-content: flex-end; font-weight: 300;' class="links">
        <p style="margin-left: 12px; display:block;">
          <a href="#">
            Terms & Conditions
          </a>
        </p>
        <p style="margin-left: 12px; display:block;">
          <a href="#">
            Contact us
          </a>
        </p>
      </th>
    </tr>
  </table>
</body>

</html>
  `;
};

/**
 * @param  {String} url
 */
export const passwordResetTemplate = url => {
  return `
  <body style='background: #eee; padding:20px; font-family: "Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif!important;'>
  <table style='max-width: 600px; width:100%; padding-bottom: 35px; margin: auto; background: #fff; text-align: center; border: 2px solid #eee; border-radius: 10px;'>
    <tr>
      <th> <h1 style='padding:5px 10px; text-align: center; color: #333; font-weight: 500;'>Password Reset</h1></th>
    </tr>
    <tr>
      <td>
        <p style='color: #333; max-width: 450px; margin: auto; margin-bottom: 15 px; font-weight: 300'>
          If you've lost your password or wish to reset it, <br>use the link below to get started
        </p>
    </td>
    </tr>
    <tr>
      <td>
        <a style='background: rgb(0, 116, 255); color:#fff; padding:10px 25px;display: inline-block; text-decoration: none; border-radius: 4px; margin: 25px 0; margin-bottom: 30px' href="${url}">Reset your password</a>
      </td>
    </tr>
    <tr>
      <td>
        <p style='color: #888; max-width: 500px; margin: auto; margin-bottom: 25px; font-weight: 300'>
          If you did not request a password reset, you can safely ignore this email. Only a person with access to your email can reset your account password.
        </p>
    </td>
    </tr>

    </table>
</body>
  `;
};

export const sendEmailInvitesTemplate = (coupleName, image, message) => `
<html>
    <head>
      <title>Beweddy - Email Invites</title>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Alice&family=Inter:wght@100;200;300;400;500;600;700&family=Poppins:wght@700&display=swap'
            rel='stylesheet'
          />
      <style>
      * {
          box-sizing: border-box;
        }
        body {
            font-family: 'inter';
            box-sizing: border-box;
            background: #f4f4f4;
        }
        .root {
          background: #f4f4f4;
          width: 100%;
          padding: 4rem;
        }
        .container{
          max-width: 1018px;
          margin: 0 auto;
          width: 100%;
          padding: 5rem 6rem;
          background: #fff;
        }
        .header{
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1rem;
        }
        .logo-container {
          grid-column: span 4 / span 4;
        }
        .logo-container img {
          width: 100px;
          height: 40px;
        }
        .header-middle {
           grid-column: span 6 / span 6;
        }
        .header-middle h1 {
           display: flex;
           align-items: center;
           text-align: center;
           font-size: 16px;
            font-family: 'Alice';
           line-height: 1.25rem;
        }
        .subtitle {
            margin-top: 3rem;
            background: #FCE0EB;
            padding: 1rem .5rem;
            text-align: center;
            border-radius: 4px;
            font-size: 16px;
        }
        .banner-container {
            margin: 1.5rem 0;
        }
        .banner-container img {
            height: auto;
            max-width: 100%;
            border-radius: 4px;
        }
        .heading h1 {
            font-size: 2.25rem;
            margin: 2.5rem 0;
            font-family: 'Alice';
            text-align: center;
            line-height: 2.5rem;
        }
        .divider {
            width: 256px;
            height: 5px;
            margin: 0 auto;
            background: #FCE0EB;
            margin-top: -0.5rem;
        }
        .message {
            max-width: 600px;
            width: 100%;
            margin: 3rem auto 0 auto;
        }
        @media screen and (max-width: 768px){
          .root {
            padding: 2rem;
          }
          .container {
            padding: 4.5rem;
          }
            .header{
                 /*grid-template-columns: repeat(1, minmax(0, 1fr));*/
                 gap: .3rem;
            }
            .heading h1 {
            font-size: 20px;
            margin: 2rem 0;
            font-family: 'Alice';
            text-align: center;
            line-height: 2rem;
            }
            .subtitle {
                font-size: 12px;
            }
            .divider {
            width: 156px;
            height: 3px;
            margin-top: -1rem;
        }
        }
        @media screen and (max-width: 500px){
          .root{
            padding: 1rem;
          }
          .container {
            padding: 1rem;
          }
             .header{
                 grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
                 gap: .3rem;
            }
        }
      </style>
    </head>
    <body>
    <div class='root'>
      <div class="container">
        <div class="header">
            <div class="logo-container p-5">
            <img src="https://beweddy-delta.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" alt='logo' />
            </div>
            <div class="header-middle">
                <h1>Let’s Eat, Drink & BeWeddy. 🎉</h1>
            </div>
        </div>
        <div class="subtitle">
            <span>You have Received an Email Invitaion for ${coupleName}’s Wedding. 💯
            </span>
        </div>
        <div class="banner-container">
            <img
            src="${image}"
            alt=""

            />
        </div>
        <div class="heading">
            <h1>
                You’re Invited to Our Wedding
            </h1>
            <div class="divider"></div>
        </div>
        <div class="message">
        ${message}
        </div>
      </div>
      </div>
    </body>
    </html>
`;
