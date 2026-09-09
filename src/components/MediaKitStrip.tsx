const services = [
  'Short-Form Video',
  'Lifestyle Photography',
  'B-Roll',
  'Direct to Camera',
  'Organic Social',
  'Travel + Experience',
  'Creative Concepts',
];

const SURF_WATER_BAND = '/images/surf-water-band-v2.png';
const SURF_SUBJECT = '/images/kelsey-surf-subject-v6.png';

export default function MediaKitStrip() {
  const items = [...services, ...services];

  return (
    <div className="media-kit-strip-stage">
      <div className="media-kit-ocean-zone" aria-hidden="true">
        <img
          src={SURF_WATER_BAND}
          alt=""
          className="media-kit-water-band"
          width={4093}
          height={126}
          decoding="async"
        />
        <div className="media-kit-surf-figure">
          <img
            src={SURF_SUBJECT}
            alt=""
            className="media-kit-surf-subject"
            width={833}
            height={239}
            decoding="async"
          />
          <span className="hand-annotation media-kit-surf-note">
            that&apos;s me too
            <svg
              className="hand-arrow media-kit-surf-arrow"
              viewBox="0 0 36 30"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M33 3.5C28.6 5.4 23.6 8.6 18.6 13.2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M16.3 6.2 16.8 14.6 24.8 12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="media-kit-strip" aria-hidden="true">
        <div className="media-kit-strip-track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="media-kit-strip-item">
              {item}
              <span className="media-kit-strip-dot" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
