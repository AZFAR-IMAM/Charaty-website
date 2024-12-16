import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch the category to conditionally render fields
  const selectedCategory = watch("category");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      {/* Username Field */}
      <div className="form-group">
        <label>Username:</label>
        <input
          {...register("username", { required: "Username is required" })}
          placeholder="Enter your username"
          className={errors.username ? "input-error" : ""}
        />
        {errors.username && <p className="error-message">{errors.username.message}</p>}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Enter your password"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      {/* Category Selection */}
      <div className="form-group">
        <label>Category:</label>
        <select
          {...register("category", { required: "Category is required" })}
          className={errors.category ? "input-error" : ""}
        >
          <option value="">Select a category</option>
          <option value="Admin">Admin</option>
          <option value="Doner">Doner</option>
          <option value="Needy">Needy</option>
        </select>
        {errors.category && <p className="error-message">{errors.category.message}</p>}
      </div>

      {/* Conditionally Render Needy Fields */}
      {selectedCategory === "Needy" && (
        <>
          <div className="form-group">
            <label>Bank Account Number:</label>
            <input
              {...register("bankAccount", { required: "Bank Account Number is required" })}
              placeholder="Enter your bank account number"
              className={errors.bankAccount ? "input-error" : ""}
            />
            {errors.bankAccount && <p className="error-message">{errors.bankAccount.message}</p>}
          </div>

          <div className="form-group">
            <label>Bank Name:</label>
            <input
              {...register("bankName", { required: "Bank Name is required" })}
              placeholder="Enter your bank name"
              className={errors.bankName ? "input-error" : ""}
            />
            {errors.bankName && <p className="error-message">{errors.bankName.message}</p>}
          </div>
        </>
      )}

      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default Signup;
