import Icon from '../../core/Icon.styled';

/**
 * Display a home icon with hover effect (themed colors)
 */
const BurgerIcon = (): JSX.Element => (
  <Icon
    aria-label="menu"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 512 512">
    <g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
        data-original="#eceff1"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
        data-original="#eceff1"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"
        data-original="#eceff1"
      />
    </g>
  </Icon>
);

export default BurgerIcon;
