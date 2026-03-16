"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const subjects = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "General Inquiry",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formErrorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Focus error message when submission fails
  useEffect(() => {
    if (status === "error" && formErrorRef.current) {
      formErrorRef.current.focus();
    }
  }, [status]);

  // Focus success message when submission succeeds
  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = "Something went wrong";
        try {
          const body = await res.json();
          message = body.error || message;
        } catch {
          // Response wasn't JSON (e.g., 502 proxy error)
        }
        throw new Error(message);
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email me directly at safdarayub@gmail.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="flex flex-col items-center justify-center py-12 text-center outline-none"
      >
        <CheckCircle className="h-12 w-12 text-green-500 mb-4" aria-hidden="true" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! I&apos;ll get back to you within 24-48
          hours.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
          Full Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          autoComplete="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
          Subject
        </label>
        <Select onValueChange={(val) => setValue("subject", val as ContactFormData["subject"])}>
          <SelectTrigger id="subject" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined}>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-sm text-destructive mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project or inquiry..."
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-destructive mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <div
          ref={formErrorRef}
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          className="flex items-center gap-2 text-destructive text-sm outline-none"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
