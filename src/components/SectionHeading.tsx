type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  tight?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  tight = false,
}: SectionHeadingProps) {
  const spacing = tight ? "mb-7 md:mb-10" : "mb-10 md:mb-14";

  return (
    <div
      className={`scroll-reveal ${spacing} ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"}`}
    >
      {eyebrow && (
        <p className="eyebrow mb-3" data-dark={dark}>
          {eyebrow}
        </p>
      )}
      <h2 className="section-title" data-dark={dark}>
        {title}
      </h2>
      {description && (
        <p className="section-description mt-3" data-dark={dark}>
          {description}
        </p>
      )}
    </div>
  );
}
