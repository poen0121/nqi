export async function DetectNQI({
  debug = false
} = {}) {
  const resourceUrl = new URL('./nqi.dat', import.meta.url).href;
  // Download Test
  let duration = 0;
  try {
    const start = performance.now();
    const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const response = await fetch(`${resourceUrl}?u=${uniqueId}`, { cache: "no-store" });
    await response.blob();
    const end = performance.now();
    duration = (end - start); // ms
  } catch (e) {
    if (debug) console.warn(`NQI`, e);
    if (debug) console.info(`NQI: rtt=null, gear=0`);

    return {
      rtt: null,
      gear: 0
    };
  }

  const rtt = duration.toFixed(2);
  // Classify speed gear
  function classifySpeed(rtt) {
    if (rtt < 50) return 10;
    if (rtt < 100) return 9;
    if (rtt < 150) return 8;
    if (rtt < 200) return 7;
    if (rtt < 250) return 6;
    if (rtt < 300) return 5;
    if (rtt < 350) return 4;
    if (rtt < 400) return 3;
    if (rtt < 450) return 2;
    return 1;
  }
  // Speed gear
  const gear = classifySpeed(rtt);
  if (debug) console.info(`NQI: rtt=${rtt} ms, gear=${gear}`);

  return {
    rtt,
    gear
  };
}
