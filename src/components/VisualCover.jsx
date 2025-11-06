import React from 'react';
import Spline from '@splinetool/react-spline';

export default function VisualCover() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Spline
        scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Gradient veil that doesn't block the Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.15)_40%,rgba(2,6,23,0.35)_100%)]" />
    </div>
  );
}
