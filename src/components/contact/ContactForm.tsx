"use client";

import { useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  website: string;
  consent: boolean;
};

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload: ContactPayload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      consent: formData.get("consent") === "on",
    };

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("Please check the form and try again.");
        return;
      }

      setStatus(
        "Message validated successfully. Configure an email provider to deliver it."
      );

      formElement.reset();
    } catch {
      setStatus("Unable to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-3xl border border-slate-200 p-6 dark:border-slate-800"
    >
      <input
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label>
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-xl border bg-transparent px-4 py-3"
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-xl border bg-transparent px-4 py-3"
        />
      </label>

      <label>
        Company
        <input
          name="company"
          autoComplete="organization"
          className="mt-1 w-full rounded-xl border bg-transparent px-4 py-3"
        />
      </label>

      <label>
        Subject
        <input
          name="subject"
          required
          className="mt-1 w-full rounded-xl border bg-transparent px-4 py-3"
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-xl border bg-transparent px-4 py-3"
        />
      </label>

      <label className="flex items-start gap-2">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1"
        />
        <span>
          I consent to being contacted regarding this enquiry.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-blue-600 px-5 py-3 text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      <p aria-live="polite" className="text-sm text-slate-500">
        {status}
      </p>
    </form>
  );
}