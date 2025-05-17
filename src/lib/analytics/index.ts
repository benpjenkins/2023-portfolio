export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  // @ts-expect-error define window.gtag types
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// TODO: add types here when you use this more
// @ts-expect-error define function argument types
export const event = ({ action, category, label, value }) => {
  // @ts-expect-error define window.gtag types
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
