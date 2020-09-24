import React from "react";
import VideoDetail from "../video/VideoDetail";
import VideoCarouselSlick from "../VideoCarouselSlick";
import SeriesCarousel from "../SeriesCarousel";
import "./Carousels.css";
import { AuthContext } from "../context/auth";

export default function Carousels({
  video,
  handleVideoSelect,
  setHistoryPager,
  authTokens,
  historyPager,
  seriesPager,
  seriesVideos,
  moviesPager,
  moviesVideos,
}) {
  return (
    <div className="ui container" style={{ marginTop: "1em" }}>
      <div className="ui grid">
        <div className="ui column">
          <VideoDetail
            video={video}
            handleVideoSelect={handleVideoSelect}
            setHistoryPager={setHistoryPager}
            authTokens={authTokens}
          />
        </div>
      </div>
      {historyPager && historyPager.videos.length > 0 && authTokens && (
        <div className="carouselContainer">
          <h4>RECENTLY WATCHED</h4>
          <div>
            <VideoCarouselSlick
              pager={historyPager}
              videos={historyPager.videos}
              handleVideoSelect={handleVideoSelect}
            />
          </div>
        </div>
      )}
      {seriesVideos.length > 0 && (
        <div className="carouselContainer">
          <SeriesCarousel
            pager={seriesPager}
            videos={seriesVideos}
            handleVideoSelect={handleVideoSelect}
          />
        </div>
      )}
      <div className="carouselContainer">
        <h4>MOVIES</h4>
        <div>
          {moviesVideos.length > 0 && (
            <VideoCarouselSlick
              pager={moviesPager}
              videos={moviesVideos}
              handleVideoSelect={handleVideoSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
