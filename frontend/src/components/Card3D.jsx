import React from 'react';
import styled from 'styled-components';

const Card3D = ({ images = [] }) => {
  return (
    <StyledWrapper>
      <div className="card-3d">
        {[...Array(10)].map((_, i) => (
          <div key={i}>
            {images[i] ? (
              <img src={images[i]} alt={`product-${i + 1}`} />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 420px;

  @keyframes autoRun3d {
    from { transform: perspective(1000px) rotateY(-360deg); }
    to   { transform: perspective(1000px) rotateY(0deg); }
  }

  @keyframes animateBrightness {
    10%  { filter: brightness(1); }
    50%  { filter: brightness(0.35); }
    90%  { filter: brightness(1); }
  }

  .card-3d {
    position: relative;
    width: 500px;
    height: 300px;
    transform-style: preserve-3d;
    animation: autoRun3d 22s linear infinite;
    will-change: transform;
  }

  .card-3d div {
    position: absolute;
    width: 130px;
    height: 170px;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    animation: animateBrightness 22s linear infinite;
    will-change: transform, filter;
    border-radius: 14px;
    overflow: hidden;
    border: 2px solid rgba(255,255,255,0.6);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  }

  .card-3d div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-3d .placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    border-radius: 0;
    border: none;
    box-shadow: none;
  }

  .card-3d:hover { animation-play-state: paused !important; }
  .card-3d:hover div { animation-play-state: paused !important; }

  .card-3d div:nth-child(1)  { transform: translate(-50%,-50%) rotateY(0deg)   translateZ(200px); animation-delay: -0s; }
  .card-3d div:nth-child(2)  { transform: translate(-50%,-50%) rotateY(36deg)  translateZ(200px); animation-delay: -2.2s; }
  .card-3d div:nth-child(3)  { transform: translate(-50%,-50%) rotateY(72deg)  translateZ(200px); animation-delay: -4.4s; }
  .card-3d div:nth-child(4)  { transform: translate(-50%,-50%) rotateY(108deg) translateZ(200px); animation-delay: -6.6s; }
  .card-3d div:nth-child(5)  { transform: translate(-50%,-50%) rotateY(144deg) translateZ(200px); animation-delay: -8.8s; }
  .card-3d div:nth-child(6)  { transform: translate(-50%,-50%) rotateY(180deg) translateZ(200px); animation-delay: -11s; }
  .card-3d div:nth-child(7)  { transform: translate(-50%,-50%) rotateY(216deg) translateZ(200px); animation-delay: -13.2s; }
  .card-3d div:nth-child(8)  { transform: translate(-50%,-50%) rotateY(252deg) translateZ(200px); animation-delay: -15.4s; }
  .card-3d div:nth-child(9)  { transform: translate(-50%,-50%) rotateY(288deg) translateZ(200px); animation-delay: -17.6s; }
  .card-3d div:nth-child(10) { transform: translate(-50%,-50%) rotateY(324deg) translateZ(200px); animation-delay: -19.8s; }
`;

export default Card3D;
