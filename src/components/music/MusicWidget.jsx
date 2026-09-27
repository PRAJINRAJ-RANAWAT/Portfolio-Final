import React, { useState } from "react";
import { PlayIcon, PauseIcon, BackwardIcon, ForwardIcon, HeartIcon } from "@heroicons/react/24/solid";
import { playlist } from "../../data/music";

const MusicWidget = () => {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  const title = playlist?.title ?? "Add your playlist";
  const by = playlist?.by ?? "Set it in src/data/music.js";

  return (
    <div className="fixed bottom-5 right-5 z-30 hidden md:block">
      <p className="section-eyebrow mb-2 justify-end w-full text-right">
        <span className="dot" aria-hidden="true" />
        Now playing
      </p>
      <div className="snd-box">
        <div className="snd-top">
          <span className={`snd-art ${playing ? "is-playing" : ""}`} aria-hidden="true" />
          <span className="snd-say">
            <span className="snd-title">{title}</span>
            <span className="snd-by">{by}</span>
          </span>
        </div>

        <span className="snd-rail" aria-hidden="true">
          <span className="snd-run" style={{ width: playing ? "40%" : "0%" }} />
        </span>

        <span className="snd-ops">
          <button type="button" className="snd-op" aria-label="Like" onClick={() => setLiked((v) => !v)}>
            <HeartIcon className={`w-3.5 h-3.5 ${liked ? "text-red-500" : ""}`} />
          </button>
          <button type="button" className="snd-op" aria-label="Restart" onClick={() => setPlaying(false)}>
            <BackwardIcon className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            className="snd-op"
            data-lead="true"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => setPlaying((v) => !v)}
          >
            {playing ? <PauseIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5" />}
          </button>
          <button type="button" className="snd-op" aria-label="Next">
            <ForwardIcon className="w-3.5 h-3.5" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MusicWidget;
