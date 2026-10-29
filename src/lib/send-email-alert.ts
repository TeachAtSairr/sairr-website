export type EmailAlertPayload = {
  subject: string;
  text: string;
  html?: string;
};

/**
 * Returns timestamp formatted as: dd/mm/yyyy hh:mm AM/PM (Asia/Kolkata timezone)
 */
export function formatSubmissionTimestamp(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = get("day");
  const month = get("month");
  const year = get("year");
  const hour = get("hour");
  const minute = get("minute");
  const dayPeriod = get("dayPeriod").toUpperCase();

  return `${day}/${month}/${year} ${hour}:${minute} ${dayPeriod}`;
}

export async function sendEmailAlert(payload: EmailAlertPayload): Promise<void> {
  const response = await fetch("/api/send-email-alert", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    error?: string;
  };

  if (!response.ok || !result.success) {
    throw new Error(result.error ?? "Failed to send email alert");
  }
}

