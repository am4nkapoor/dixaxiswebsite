"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      subject: (formData.get("subject") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control border-0 bg-light px-4"
            placeholder="Your Name"
            style={{ height: 55 }}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control border-0 bg-light px-4"
            placeholder="Your Email"
            style={{ height: 55 }}
            required
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            name="subject"
            className="form-control border-0 bg-light px-4"
            placeholder="Subject"
            style={{ height: 55 }}
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            className="form-control border-0 bg-light px-4 py-3"
            rows={4}
            placeholder="Message"
          />
        </div>
        {status === "success" && (
          <div className="col-12">
            <div className="alert alert-success mb-0" role="alert">
              Thank you! Your message has been sent. We&apos;ll get back to you soon.
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="col-12">
            <div className="alert alert-danger mb-0" role="alert">
              {errorMessage}
            </div>
          </div>
        )}
        <div className="col-12">
          <button
            className="btn btn-primary w-100 py-3"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}
