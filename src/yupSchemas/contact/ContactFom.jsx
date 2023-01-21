import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  message: Yup.string().required("Please Enter Your Message"),
});
