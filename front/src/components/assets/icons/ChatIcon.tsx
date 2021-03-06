import JelloAnimatedIcon from '../../core/JelloAnimatedIcon';

// TODO: link animated property with user's theme data

/**
 * Display an animated chat icon with hover effect (spin)
 */
const ChatIcon = (): JSX.Element => (
  <JelloAnimatedIcon
    aria-label="chat"
    animated
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 512 512">
    <g className="jello">
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="m512 219.649c0-121.309-98.789-219.649-220.651-219.649-121.863 0-220.652 98.34-220.652 219.649s98.789 219.65 220.652 219.65c25.577 0 50.13-4.347 72.974-12.314l67.316 32.51v-70.301c49.076-40.287 80.361-101.279 80.361-169.545z"
            fill="#68d0fc"
            data-original="#ff9e5e"
          />
          <path
            d="m291.349 0c-6.949 0-13.819.336-20.604.961 112.2 10.345 200.048 104.297 200.048 218.688 0 112.497-90.212 208.074-200.36 218.661 6.886.645 13.861.988 20.916.988 25.577 0 50.13-4.347 72.974-12.314l67.316 32.51v-70.301c49.076-40.286 80.361-101.278 80.361-169.544 0-121.309-98.789-219.649-220.651-219.649z"
            fill="#46c7fa"
            data-original="#fa8d46"
          />
          <g fill="#fff7e8">
            <circle
              cx="189.238"
              cy="224.035"
              r="31.119"
              fill="#fff7e8"
              data-original="#fff7e8"
            />
            <circle
              cx="291.348"
              cy="224.035"
              r="31.119"
              fill="#fff7e8"
              data-original="#fff7e8"
            />
            <circle
              cx="393.459"
              cy="224.035"
              r="31.119"
              fill="#fff7e8"
              data-original="#fff7e8"
            />
          </g>
        </g>
        <path
          d="m0 393.758c0-59.804 48.702-108.285 108.779-108.285s108.78 48.481 108.78 108.285c0 59.805-48.702 108.286-108.78 108.286-12.609 0-24.714-2.143-35.976-6.071l-33.185 16.027v-34.658c-24.194-19.861-39.618-49.929-39.618-83.584z"
          fill="#fe7f2d"
          data-original="#ffd88f"
        />
        <g>
          <path
            d="m108.779 285.472c-7.045 0-13.931.675-20.603 1.948 50.224 9.587 88.176 53.546 88.176 106.338 0 52.773-37.925 96.72-88.123 106.327 6.657 1.27 13.521 1.959 20.55 1.959 60.077 0 108.78-48.481 108.78-108.286s-48.702-108.286-108.78-108.286z"
            fill="#ff6e11"
            data-original="#ffc963"
          />
        </g>
      </g>
    </g>
  </JelloAnimatedIcon>
);

export default ChatIcon;
