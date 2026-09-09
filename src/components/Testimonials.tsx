import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrap testimonials-section border-y border-[var(--line)]">
      <div className="testimonials-heading">
        <p className="eyebrow mb-3">From the brands</p>
        <h2 className="section-title">What brands say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <figure key={item.brand} className="testimonial-item">
            <blockquote className="testimonial-quote">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="testimonial-attribution">
              <p className="testimonial-author">
                {item.author}
                {item.role ? ` · ${item.role}` : ""}
              </p>
              <p className="testimonial-brand">{item.brand}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
