export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  // @ts-expect-error I haven't fixed this yet
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// TODO: add types here when you use this more
// @ts-expect-error I haven't fixed this yet
export const event = ({ action, category, label, value }) => {
  // @ts-expect-error I haven't fixed this yet
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
