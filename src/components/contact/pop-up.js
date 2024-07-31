import React from "react";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import formImg from '/public/images/leftSide.svg';

export default function PopUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  // Bugünün tarihini YYYY-MM-DD formatında almak için
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="pop-up">
      <div className="pop-up__container">
        <div className="pop-up__center">
          <div className="pop-up__left-side">
            <Image className="pop-up__formImg1" src={formImg} alt="Form Image" />

            <form className="pop-up__firstForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="pop-up__text-field">
                <label htmlFor="message" or>Message</label>
                <textarea
                  className="pop-up__input-text"
                  placeholder="Enter your message here"
                  {...register("message", { required: "Message is required" })}
                />
                <p className="pop-up__validations">{errors.message?.message}</p>
              </div>

              <div className="pop-up__checkbox-field">
                <label htmlFor="checkbox">
                  <input
                    className="pop-up__checkbox"
                    type="checkbox"
                    {...register("newsletter", { required: "You must opt-in to the newsletter" })}
                  />
                  Opt-in to newsletter
                </label>
                <p className="pop-up__validations">{errors.newsletter?.message}</p>
              </div>

              <div>
                <button className={`pop-up__button ${isSubmitSuccessful ? 'submitted' : ''}`} type="submit">Submit</button>
                <p className={`pop-up__confirmation ${isSubmitSuccessful ? 'submitted' : ''}`}>Thanks! We’ll get back to you soon.</p>
              </div>
            </form>
          </div>

          <div className="pop-up__right-side">
            <form className="pop-up__secondForm" onSubmit={handleSubmit(onSubmit)}>
              <Image className="pop-up__formImg2" src={formImg} alt="Form Image" />
              <h1>Let's Chat!</h1>

              <div className="pop-up__input-field">
                <label htmlFor="firstname">First Name</label>
                <input
                  className="pop-up__input-first-name"
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters long"
                    },
                    pattern: {
                      value: /^[a-zA-ZğüşöçİĞÜŞÖÇ[^QqWw]]+$/,
                      message: "First name can only contain letters and cannot include special characters"
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.firstName?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="pop-up__input-last-name"
                  type="text"
                  placeholder="Enter your last name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters long"
                    },
                    pattern: {
                      value: /^[a-zA-ZğüşöçİĞÜŞÖÇ[^QqWw]]+$/,
                      message: "Last name can only contain letters and cannot include special characters"
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.lastName?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="email">Email</label>
                <input
                  className="pop-up__input-email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.email?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="password">Password</label>
                <input
                  className="pop-up__input-password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long"
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/,
                      message: "Password must contain at least one uppercase, one lowercase letter and one special character"
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.password?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="age">Age</label>
                <input
                  className="pop-up__input-age"
                  type="number"
                  placeholder="Enter your age"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 18, message: "You must be at least 18 years old" },
                    validate: {
                      matchBirthDate: value => {
                        const today = new Date();
                        const birthDate = new Date(watch('birthDate'));
                        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
                        const monthDifference = today.getMonth() - birthDate.getMonth();
                        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                          calculatedAge--;
                        }
                        return calculatedAge === parseInt(value) || "Age does not match birth date";
                      }
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Age must be a number"
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.age?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="birthDate">Birth Date</label>
                <input
                  className="pop-up__input-birth-date"
                  type="date"
                  max={today} // Bugünün tarihinden sonraki tarihler seçilemez
                  {...register("birthDate", {
                    required: "Birth date is required",
                    validate: {
                      over18: value => {
                        const today = new Date();
                        const birthDate = new Date(value);
                        let age = today.getFullYear() - birthDate.getFullYear();
                        const monthDifference = today.getMonth() - birthDate.getMonth();
                        if (
                          monthDifference < 0 ||
                          (monthDifference === 0 && today.getDate() < birthDate.getDate())
                        ) {
                          age--;
                        }
                        return age >= 18 || "You must be at least 18 years old";
                      }
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.birthDate?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="phone">Phone</label>
                <input
                  className="pop-up__input-phone"
                  type="tel"
                  placeholder="Enter your phone number (5XXXXXXXXX)"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid phone number"
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.phone?.message}</p>
              </div>

              <div className="pop-up__input-field">
                <label htmlFor="id">Identity Number</label>
                <input
                  className="pop-up__input-id-number"
                  type="text"
                  placeholder="Enter your identity number"
                  {...register("identityNumber", {
                    required: "Identity number is required",
                    validate: (value) => {
                      if (value.length !== 11) return "Identity number must be 11 digits long";
                      if (!/^[1-9][0-9]{10}$/.test(value)) return "Identity number must be numeric and cannot start with 0";

                      const digits = value.split('').map(Number);

                      const sumOdd = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
                      const sumEven = digits[1] + digits[3] + digits[5] + digits[7];
                      const sumTotal = sumOdd + sumEven + digits[9];

                      if ((sumOdd * 7 - sumEven) % 10 !== digits[9]) return "Invalid identity number";
                      if (sumTotal % 10 !== digits[10]) return "Invalid identity number";

                      return true;
                    }
                  })}
                />
                <p className="pop-up__validations">{errors.identityNumber?.message}</p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section >
  );
}
