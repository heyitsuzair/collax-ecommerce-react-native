import * as Yup from "yup";

export const CheckoutFormSchema = Yup.object({
  country: Yup.string().required("Please Select A Country"),
  first_name: Yup.string().required("Please Enter Your First Name"),
  last_name: Yup.string().required("Please Enter Your Last Name"),
  company: Yup.string(),
  street_address: Yup.string().required("Please Enter Your Street Address"),
  apartment_no: Yup.string(),
  city: Yup.string().required("Please Enter Your City"),
  province: Yup.string().required("Please Enter Your State"),
  zip: Yup.string().required("Please Enter Your ZIP Code"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  phone_no: Yup.string().required("Please Enter Your Phone No."),
  method: Yup.string().required("Please Choose Payment Method"),
  card_no: Yup.string()
    .when("method", {
      is: "Stripe",
      then: Yup.string()
        .required("Please Enter Your Card Number")
        .min(16, "Card Number Must Be Valid 16 Digit Number")
        .max(16, "Card Number Must Be Valid 16 Digit Number"),
    })
    .when("method", {
      is: "Authorize.net",
      then: Yup.string()
        .required("Please Enter Your Card Number")
        .min(16, "Card Number Must Be Valid 16 Digit Number")
        .max(16, "Card Number Must Be Valid 16 Digit Number"),
    }),
  card_cvc: Yup.string()
    .when("method", {
      is: "Stripe",
      then: Yup.string()
        .required("Please Enter Your Card CVC")
        .min(3, "Card CVC Must Be Valid 3 Digit Number")
        .max(3, "Card CVC Must Be Valid 3 Digit Number"),
    })
    .when("method", {
      is: "Authorize.net",
      then: Yup.string()
        .required("Please Enter Your Card CVC")
        .min(3, "Card CVC Must Be Valid 3 Digit Number")
        .max(3, "Card CVC Must Be Valid 3 Digit Number"),
    }),
  expiry_year: Yup.string()
    .when("method", {
      is: "Stripe",
      then: Yup.string()
        .required("Please Enter Your Card Expiry Year")
        .min(4, "Expiry Year Must Be Valid 4 Digit Number")
        .max(4, "Expiry Year Must Be Valid 4 Digit Number"),
    })
    .when("method", {
      is: "Authorize.net",
      then: Yup.string()
        .required("Please Enter Your Card Expiry Year")
        .min(4, "Expiry Year Must Be Valid 4 Digit Number")
        .max(4, "Expiry Year Must Be Valid 4 Digit Number"),
    }),
  expiry_month: Yup.string()
    .when("method", {
      is: "Stripe",
      then: Yup.string()
        .required("Please Enter Your Card Expiry Month")
        .min(2, "Expiry Month Must Be Valid 2 Digit Number")
        .max(2, "Expiry Month Must Be Valid 2 Digit Number"),
    })
    .when("method", {
      is: "Authorize.net",
      then: Yup.string()
        .required("Please Enter Your Card Expiry Month")
        .min(2, "Expiry Month Must Be Valid 2 Digit Number")
        .max(2, "Expiry Month Must Be Valid 2 Digit Number"),
    }),
});
