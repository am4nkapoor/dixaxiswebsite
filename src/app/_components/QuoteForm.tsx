"use client";

import { useRef, useState } from "react";

export default function QuoteForm() {
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
      service: (formData.get("service") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/quote", {
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
        <div className="col-xl-12">
          <input
            type="text"
            name="name"
            className="form-control bg-light border-0"
            placeholder="Your Name"
            style={{ height: 55 }}
            required
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            className="form-control bg-light border-0"
            placeholder="Your Email"
            style={{ height: 55 }}
            required
          />
        </div>
        <div className="col-12">
          <select
            name="service"
            className="form-select bg-light border-0"
            style={{ height: 55 }}
            defaultValue=""
          >
            <option value="">Select A Service</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="data-analytics">Data Analytics</option>
            <option value="web-development">Web Development</option>
            <option value="apps-development">Apps Development</option>
            <option value="seo-optimization">SEO Optimization</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            name="message"
            className="form-control bg-light border-0"
            rows={3}
            placeholder="Message"
          />
        </div>
        {status === "success" && (
          <div className="col-12">
            <div className="alert alert-success mb-0" role="alert">
              Thank you! Your quote request has been sent. We&apos;ll get back to you soon.
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
            className="btn btn-dark w-100 py-3"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Request A Quote"}
          </button>
        </div>
      </div>
    </form>
  );
}
