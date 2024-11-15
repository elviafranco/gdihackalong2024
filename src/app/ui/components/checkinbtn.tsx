import Link from "next/link";

export function CheckIn() {
  return (
    <div className="flex justify-center">
      <Link href="/checkin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="386"
          height="386"
          viewBox="0 0 386 386"
          fill="none"
        >
          <g filter="url(#filter0_f_13_801)">
            <circle cx="193" cy="193" r="100" fill="url(#paint0_radial_13_801)" />
          </g>
          <g filter="url(#filter1_d_13_801)">
            <circle cx="197.938" cy="193" r="95.0617" fill="#FAFAFA" />
          </g>
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="#64708B"
            fontSize="22"
          >
            Begin check in
          </text>
          <defs>
            <filter
              id="filter0_f_13_801"
              x="0.40741"
              y="0.40741"
              width="385.185"
              height="385.185"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="46.2963"
                result="effect1_foregroundBlur_13_801"
              />
            </filter>
            <filter
              id="filter1_d_13_801"
              x="99.1728"
              y="94.2346"
              width="204.938"
              height="204.938"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3.7037" dy="3.7037" />
              <feGaussianBlur stdDeviation="3.7037" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.945098 0 0 0 0 0.94902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_13_801"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_13_801"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_13_801"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(193 75.0433) rotate(90) scale(217.957)"
            >
              <stop stop-color="#FB7185" />
              <stop offset="0.4" stop-color="#FDA4AF" />
              <stop offset="0.75" stop-color="#FECDD3" />
              <stop offset="1" stop-color="#FB7185" />
            </radialGradient>
          </defs>
        </svg>
      </Link>
    </div>
  );
}