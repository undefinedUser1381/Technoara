import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("وارد کردن فیلد اجباری است !!")
    .email("ایمیل را به درستی وارد کنید !!")
    .min(13, "ایمیل حداقل 13 کاراکتر")
    .max(30, "ایمیل حداکثر 30 کاراکتر"),
  password: yup
    .string()
    .trim()
    .required("وارد کردن فیلد اجباری است !!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/,
      "پسورد باید حدافل 8 و حداکثر 24 کاراکتر و شامل یک حرف و یک هدد باشد !!"
    )
});

export { loginSchema };
