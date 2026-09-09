const services = [
  'Short-Form Video',
  'Lifestyle Photography',
  'B-Roll',
  'Direct to Camera',
  'Organic Social',
  'Travel + Experience',
  'Raw Footage',
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
        <img
          src={SURF_SUBJECT}
          alt=""
          className="media-kit-surf-figure"
          width={833}
          height={239}
          decoding="async"
        />
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
