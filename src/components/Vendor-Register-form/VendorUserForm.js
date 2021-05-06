import { Paper } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import FileInput from "./file.input";

// import formHeader from "./formHeader";

import './formstyles.css'


export default function VendorUserForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));


  
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <Paper className="paper">
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="Password" placeholder="Password" {...register("Password", {required: true, minLength: "6"})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 14})} />
      <select {...register("Gender", { required: true })}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input type="text" placeholder="Business Name" {...register("Business NAme", {required: true})} />
      <select {...register("Business Type", { required: true })}>
        <option value="Limited">Limited Liability</option>
        <option value="Enterprise">Enterprise</option>
        <option value="Unregistered">Unregistered</option>
      </select>
        <FileInput  />
      <input type="submit" />
    </Paper>
    </form>
  );
}
