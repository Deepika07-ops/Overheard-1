export function featuresToScene(features) {
  const { volume, bass, mid, treble } = features;

  const place = document.getElementById('location-input')?.value?.trim() 
    || 'an unknown indoor space';

  const loudness = volume > 80 ? "loud — multiple people talking at once"
    : volume > 50 ? "moderate activity, people working and moving"
    : volume > 20 ? "nearly silent with occasional small sounds"
    : "completely still";

  const texture = bass > 60  ? "deep voices or heavy equipment humming"
    : mid > 60   ? "overlapping conversations and movement"
    : treble > 60 ? "sharp clicks, taps, and high-pitched details"
    : "soft and muffled, just the sound of concentration";

  return `Location: ${place}. Atmosphere: ${loudness}. Sound texture: ${texture}.`;
}

export function buildPrompt(scene) {
  return `You are a fiction writer sitting quietly, watching without being noticed. You invent tiny fictional moments about the people around you — never identifying anyone, only imagining inner lives from small details.

${scene}

Write one paragraph (3-5 sentences) of quiet observational fiction. One small moment. One person. Present tense. No names. No physical descriptions. Make it feel like something true that never happened.`;
}