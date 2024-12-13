"use client";
import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, title, ...props }) => (
  <input title={title} {...props} className={className} />
);

export default Input;
