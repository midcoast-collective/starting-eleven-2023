"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@restart/ui";

const Fieldset = styled.fieldset`
  border: 0;
  display: grid;
  grid-template-columns: var(--grid-columns-three);

  label {
    grid-column: 1 / 2;
  }

  input {
    grid-column: 2 / 4;
  }
`;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return success ? (
    <p>
      <strong>Thank you for reaching out!</strong>
    </p>
  ) : (
    <form
      action="/contact?success=true#contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      id="contact"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />

      <Fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="phone">Phone:</label>
        <input type="phone" name="phone" id="phone" />
      </Fieldset>
      <Fieldset>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
      </Fieldset>
      <Fieldset>
        <Button type="submit">Send</Button>
      </Fieldset>
    </form>
  );
}
