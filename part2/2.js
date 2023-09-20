function solution(input, markers) {
  
  const lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

  }

  const index = -1;
    for ( let j = 0; j < markers.length; j++) {
      const markerIndex = line.indexOf (markers[j]);
      if (markerIndex !== -1 && (index=== -1 || markerIndex < index)) {
        index = markerIndex;
      }
    }
    if (index !== -1) {
      line = line.subString (0, index);

      line = line.trim();

      lines[i] = line;

    }

    const output = lines.join('\n');

    return output;

}
//   const strippedLines = lines.map(line => {
//     let strippedLine = line;
//     for (const marker of markers) {
//       const index = strippedLine.indexOf(marker);
//       if (index !== -1) {
//         strippedLine = strippedLine.slice(0, index);
//       }
//     }
//     return strippedLine.trimRight();
//   });

 
//   return strippedLines.join("\n");
// }