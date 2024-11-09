"use client";

import { useState } from "react";
import Button from "./Button";

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const initFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formState, setFormState] = useState<FormState>(initFormData);

  const handleSubmit = async (event: React.FormEvent<UsernameFormElement>) => {
    event.preventDefault();
    const { name, email, phone, message } = formState;

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) throw new Error("error sending email");

      setFormState(initFormData);
    } catch (_err) {
      // console.error(err.message || "Unknown error sending email");
      return;
    }
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setFormState((values) => ({ ...values, [name]: value }));
  };

  return (
    <form
      id="contact-form"
      className="flex flex-col gap-2 mt-4"
      onSubmit={handleSubmit}
      method="post"
    >
      <label htmlFor="name" className="visuallyhidden">
        Name or company
      </label>
      <input
        required
        type="text"
        id="name"
        name="name"
        placeholder="Name or company"
        className="rounded bg-transparent border border-white px-2 py-1 text-sm max-w-80"
        value={formState.name}
        onChange={handleChange}
      />
      <label htmlFor="email" className="visuallyhidden">
        Email
      </label>
      <input
        required
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="rounded bg-transparent border border-white px-2 py-1 text-sm max-w-80"
        value={formState.email}
        onChange={handleChange}
      />
      <label htmlFor="phone" className="visuallyhidden">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone (optional)"
        className="rounded bg-transparent border border-white px-2 py-1 text-sm max-w-80"
        value={formState.phone}
        onChange={handleChange}
      />
      <label htmlFor="message" className="visuallyhidden">
        Message
      </label>
      <textarea
        required
        id="message"
        name="message"
        placeholder="Message"
        className="rounded bg-transparent border border-white px-2 py-1 text-sm max-w-80"
        value={formState.message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className={
          formState.name && formState.email && formState.message
            ? "bg-primary"
            : "bg-gray-800"
        }
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
