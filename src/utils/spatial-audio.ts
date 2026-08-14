"use client";

// Web Audio API Spatial Soundscape Synthesizer
let audioCtx: AudioContext | null = null;
let currentOsc: OscillatorNode | AudioBufferSourceNode | null = null;
let currentGain: GainNode | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function stopSpatialSound() {
  if (currentGain && audioCtx) {
    try {
      currentGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.2);
      setTimeout(() => {
        if (currentOsc) {
          try {
            currentOsc.stop();
          } catch {}
          currentOsc = null;
        }
        currentGain = null;
      }, 200);
    } catch {}
  }
}

// 1. Synthesize Stone Mortar Pounding Rhythm (Hand-Pounded Spices)
export function playPoundingSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  stopSpatialSound();

  try {
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
    gainNode.connect(ctx.destination);
    currentGain = gainNode;

    // Create a 2-second rhythmic stone mortar thud sound
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Create rhythmic thud pulses every 0.35s
      const pulsePeriod = Math.floor(ctx.sampleRate * 0.35);
      const posInPulse = i % pulsePeriod;
      if (posInPulse < 800) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-posInPulse / 150);
      } else {
        data[i] = 0;
      }
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, ctx.currentTime);

    noise.connect(filter);
    filter.connect(gainNode);
    noise.start();
    currentOsc = noise;
  } catch (err) {
    console.warn("Spatial audio error:", err);
  }
}

// 2. Synthesize Wood Fire Crackle Sound (The Hearth)
export function playFireCrackleSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  stopSpatialSound();

  try {
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
    gainNode.connect(ctx.destination);
    currentGain = gainNode;

    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Random crackle pops
      if (Math.random() < 0.003) {
        data[i] = (Math.random() * 2 - 1) * 0.8;
      } else {
        data[i] = (Math.random() * 2 - 1) * 0.05;
      }
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(650, ctx.currentTime);
    filter.Q.setValueAtTime(2, ctx.currentTime);

    noise.connect(filter);
    filter.connect(gainNode);
    noise.start();
    currentOsc = noise;
  } catch (err) {
    console.warn("Spatial audio error:", err);
  }
}

// 3. Synthesize Boiling Gulai Simmer Sound (Coconut Reduction)
export function playSimmerSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  stopSpatialSound();

  try {
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.connect(ctx.destination);
    currentGain = gainNode;

    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const pulsePeriod = Math.floor(ctx.sampleRate * 0.2);
      const posInPulse = i % pulsePeriod;
      if (posInPulse < 400 && Math.random() < 0.3) {
        data[i] = Math.sin(posInPulse * 0.1) * Math.exp(-posInPulse / 100);
      } else {
        data[i] = (Math.random() * 2 - 1) * 0.03;
      }
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(480, ctx.currentTime);

    noise.connect(filter);
    filter.connect(gainNode);
    noise.start();
    currentOsc = noise;
  } catch (err) {
    console.warn("Spatial audio error:", err);
  }
}
