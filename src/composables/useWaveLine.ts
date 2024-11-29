function useWaveLine(x1: number, y1: number, x2: number, y2: number, waveAmplitude = 20, waveLength = 50) {
    // Calculate midpoints and control points for the wave
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Create control points for the wave
    const controlPoint1X = midX - waveLength;
    const controlPoint1Y = midY + waveAmplitude;

    const controlPoint2X = midX + waveLength;
    const controlPoint2Y = midY - waveAmplitude;

    // Generate the SVG path data
    return `M ${x1} ${y1} 
                      C ${controlPoint1X} ${controlPoint1Y}, 
                        ${controlPoint2X} ${controlPoint2Y}, 
                        ${x2} ${y2}`;

}