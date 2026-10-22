import React from "react";

const palette = {
  red: "#E6323A",
  cyan: "#67CFE8",
  ink: "#182333",
};

function BlockFaceLogo() {
  return (
    <div className="logo" aria-label="Block Face">
      <span className="logo__block">BLOCK</span>
      <span className="logo__face">FACE</span>
      <span className="logo__crown" aria-hidden="true">♛</span>
    </div>
  );
}

function Character({ color, expression = "smile", flip = false, className = "" }) {
  const isCyan = color === palette.cyan;

  return (
    <svg
      className={`character ${flip ? "character--flip" : ""} ${className}`}
      viewBox="0 0 220 250"
      role="img"
      aria-label={isCyan ? "Personaje celeste de Friends" : "Personaje rojo de Friends"}
    >
      <g>
        <ellipse cx="110" cy="222" rx="66" ry="15" fill="rgba(24,35,51,.15)" />
        <path
          d="M45 104C45 52 73 25 111 25c40 0 66 29 66 81v53c0 42-27 66-67 66-41 0-65-25-65-67v-54Z"
          fill={color}
          stroke={palette.ink}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path d="M46 140 22 153" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
        <path d="m176 140 23 13" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
        <path d="m78 220-13 18" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
        <path d="m141 220 13 18" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
        <circle cx="84" cy="100" r="9" fill={palette.ink} />
        <circle cx="137" cy="100" r="9" fill={palette.ink} />

        {expression === "smile" ? (
          <path
            d="M84 139c16 14 37 14 53 0"
            fill="none"
            stroke={palette.ink}
            strokeWidth="8"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M87 148c14-12 31-12 45 0"
            fill="none"
            stroke={palette.ink}
            strokeWidth="8"
            strokeLinecap="round"
          />
        )}
      </g>
    </svg>
  );
}

function Building({ height, tone, sign }) {
  return (
    <div className="building" style={{ height, background: tone }}>
      <div className="building__windows" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      {sign && <div className="building__sign">{sign}</div>}
    </div>
  );
}

function MenuIcon({ children }) {
  return <span className="menu-icon" aria-hidden="true">{children}</span>;
}

export default function App() {
  return (
    <main className="game-shell">
      <section className="menu-screen" aria-labelledby="menu-title">
        <div className="sky" aria-hidden="true">
          <span className="cloud cloud--one" />
          <span className="cloud cloud--two" />
          <span className="sun" />
        </div>

        <div className="skyline" aria-hidden="true">
          <Building height="58%" tone="#F6B6C1" />
          <Building height="75%" tone="#FFE38B" sign="FRIENDS" />
          <Building height="64%" tone="#A6E6F5" />
          <Building height="84%" tone="#FFF4D6" />
          <Building height="69%" tone="#F4A7A9" />
          <Building height="78%" tone="#BFE9C2" />
          <Building height="55%" tone="#FFD1A8" />
        </div>

        <div className="street" aria-hidden="true">
          <span className="street__line street__line--one" />
          <span className="street__line street__line--two" />
        </div>

        <header className="menu-header">
          <BlockFaceLogo />
        </header>

        <div className="hero-cast" aria-hidden="true">
          <Character color={palette.red} expression="smile" className="hero-cast__red" />
          <Character color={palette.cyan} expression="smile" flip className="hero-cast__cyan" />
        </div>

        <nav className="menu-panel" aria-label="Menú principal">
          <a id="menu-title" className="play-button" href="#/acceso">
            Jugar
            <span aria-hidden="true">→</span>
          </a>

          <div className="menu-secondary">
            <button type="button" className="secondary-button">
              <MenuIcon>⚙</MenuIcon>
              <span>Ajustes</span>
            </button>
            <button type="button" className="secondary-button">
              <MenuIcon>i</MenuIcon>
              <span>Acerca de</span>
            </button>
          </div>
        </nav>

        <div className="foreground-crowd" aria-hidden="true">
          <span className="mini-blob mini-blob--red" />
          <span className="mini-blob mini-blob--cyan" />
          <span className="mini-blob mini-blob--red mini-blob--small" />
          <span className="mini-blob mini-blob--cyan mini-blob--small" />
        </div>
      </section>
    </main>
  );
}
