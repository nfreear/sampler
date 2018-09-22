const getSampler = (sampler, baseUrl) => {
  return new Promise(resolve => {
    var smplr = new Tone.Sampler(samplers[sampler], function() { 
      return resolve(smplr);
    }, baseUrl || '/sampler/samples/');
  });
}

const samplers = {
  piano: {
    'C3' : 'piano/piano48.wav',
    'C#3' : 'piano/piano49.wav',
    'D3' : 'piano/piano50.wav',
    'D#3' : 'piano/piano51.wav',
    'E3' : 'piano/piano52.wav',
    'F3' : 'piano/piano53.wav',
    'F#3' : 'piano/piano54.wav',
    'G3' : 'piano/piano55.wav',
    'G#3' : 'piano/piano56.wav',
    'A4' : 'piano/piano57.wav',
    'A#4' : 'piano/piano58.wav',
    'B4' : 'piano/piano59.wav',
    'C4' : 'piano/piano60.wav',
    'C#4' : 'piano/piano61.wav',
    'D4' : 'piano/piano62.wav',
    'D#4' : 'piano/piano63.wav',
    'E4' : 'piano/piano64.wav',
    'F4' : 'piano/piano65.wav',
    'F#4' : 'piano/piano66.wav',
    'G4' : 'piano/piano67.wav',
    'G#4' : 'piano/piano68.wav',
    'A5' : 'piano/piano69.wav',
    'A#5' : 'piano/piano70.wav',
    'B5' : 'piano/piano71.wav',
    'C5' : 'piano/piano72.wav',
    'C#5' : 'piano/piano73.wav',
    'D5' : 'piano/piano74.wav',
    'D#5' : 'piano/piano75.wav',
    'E5' : 'piano/piano76.wav',
    'F5' : 'piano/piano77.wav',
    'F#5' : 'piano/piano78.wav',
    'G5' : 'piano/piano79.wav',
    'G#5' : 'piano/piano80.wav',
    'A6' : 'piano/piano81.wav',
    'A#6' : 'piano/piano82.wav',
    'B6' : 'piano/piano83.wav'
  },
  superSaw: {
    'C3' : 'superSaw/C3.wav',
    'C#3' : 'superSaw/Db3.wav',
    'D3' : 'superSaw/D3.wav',
    'D#3' : 'superSaw/Eb3.wav',
    'E3' : 'superSaw/E3.wav',
    'F3' : 'superSaw/F3.wav',
    'F#3' : 'superSaw/Gb3.wav',
    'G3' : 'superSaw/G3.wav',
    'G#3' : 'superSaw/Ab3.wav',
    'A4' : 'superSaw/A4.wav',
    'A#4' : 'superSaw/Bb4.wav',
    'B4' : 'superSaw/B4.wav',
    'C4' : 'superSaw/C4.wav',
    'C#4' : 'superSaw/Db4.wav',
    'D4' : 'superSaw/D4.wav',
    'D#4' : 'superSaw/Eb4.wav',
    'E4' : 'superSaw/E4.wav',
    'F4' : 'superSaw/F4.wav',
    'F#4' : 'superSaw/Gb4.wav',
    'G4' : 'superSaw/G4.wav',
    'G#4' : 'superSaw/Ab4.wav',
    'A5' : 'superSaw/A5.wav',
    'A#5' : 'superSaw/Bb5.wav',
    'B5' : 'superSaw/B5.wav',
    'C5' : 'superSaw/C5.wav',
    'C#5' : 'superSaw/Db5.wav',
    'D5' : 'superSaw/D5.wav',
    'D#5' : 'superSaw/Eb5.wav',
    'E5' : 'superSaw/E5.wav',
    'F5' : 'superSaw/F5.wav',
    'F#5' : 'superSaw/Gb5.wav',
    'G5' : 'superSaw/G5.wav',
    'G#5' : 'superSaw/Ab5.wav',
    'A6' : 'superSaw/A6.wav',
    'A#6' : 'superSaw/Bb6.wav',
    'B6' : 'superSaw/B6.wav',
    'C6' : 'superSaw/C6.wav'
  },

  korgBass: {
    'a1': 'korgBass/a1-33.wav',
    'a2': 'korgBass/a2-45.wav',
    'a3': 'korgBass/a3-57.wav',
    'a4': 'korgBass/a4-69.wav',
    'a5': 'korgBass/a5-81.wav',
    'a6': 'korgBass/a6-93.wav',
    'b1': 'korgBass/b1-35.wav',
    'b2': 'korgBass/b2-47.wav',
    'b3': 'korgBass/b3-59.wav',
    'b4': 'korgBass/b4-71.wav',
    'b5': 'korgBass/b5-83.wav',
    'b6': 'korgBass/b6-95.wav',
    'bb1': 'korgBass/bb1-34.wav',
    'bb2': 'korgBass/bb2-46.wav',
    'bb3': 'korgBass/bb3-58.wav',
    'bb4': 'korgBass/bb4-70.wav',
    'bb5': 'korgBass/bb5-82.wav',
    'bb6': 'korgBass/bb6-94.wav',
    'c1': 'korgBass/c1-24.wav',
    'c2': 'korgBass/c2-36.wav',
    'c3': 'korgBass/c3-48.wav',
    'c4': 'korgBass/c4-60.wav',
    'c5': 'korgBass/c5-72.wav',
    'c6': 'korgBass/c6-84.wav',
    'c7': 'korgBass/c7-96.wav',
    'd1': 'korgBass/d1-26.wav',
    'd2': 'korgBass/d2-38.wav',
    'd3': 'korgBass/d3-50.wav',
    'd4': 'korgBass/d4-62.wav',
    'd5': 'korgBass/d5-74.wav',
    'd6': 'korgBass/d6-86.wav',
    'db1': 'korgBass/db1-25.wav',
    'db2': 'korgBass/db2-37.wav',
    'db3': 'korgBass/db3-49.wav',
    'db4': 'korgBass/db4-61.wav',
    'db5': 'korgBass/db5-73.wav',
    'db6': 'korgBass/db6-85.wav',
    'e1': 'korgBass/e1-28.wav',
    'e2': 'korgBass/e2-40.wav',
    'e3': 'korgBass/e3-52.wav',
    'e4': 'korgBass/e4-64.wav',
    'e5': 'korgBass/e5-76.wav',
    'e6': 'korgBass/e6-88.wav',
    'eb1': 'korgBass/eb1-27.wav',
    'eb2': 'korgBass/eb2-39.wav',
    'eb3': 'korgBass/eb3-51.wav',
    'eb4': 'korgBass/eb4-63.wav',
    'eb5': 'korgBass/eb5-75.wav',
    'eb6': 'korgBass/eb6-87.wav',
    'f1': 'korgBass/f1-30.wav',
    'f2': 'korgBass/f2-42.wav',
    'f3': 'korgBass/f3-54.wav',
    'f4': 'korgBass/f4-66.wav',
    'f5': 'korgBass/f5-78.wav',
    'f6': 'korgBass/f6-90.wav',
    'g1': 'korgBass/g1-32.wav',
    'g2': 'korgBass/g2-44.wav',
    'g3': 'korgBass/g3-56.wav',
    'g4': 'korgBass/g4-68.wav',
    'g5': 'korgBass/g5-80.wav',
    'g6': 'korgBass/g6-92.wav',
    'gb1': 'korgBass/gb1-31.wav',
    'gb2': 'korgBass/gb2-43.wav',
    'gb3': 'korgBass/gb3-55.wav',
    'gb4': 'korgBass/gb4-67.wav',
    'gb5': 'korgBass/gb5-79.wav',
    'gb6': 'korgBass/gb6-91.wav'
  },

  ciriusRez: {
    'a3': 'ciriusRez/a3.wav',
    'a4': 'ciriusRez/a4.wav',
    'b3': 'ciriusRez/b3.wav',
    'b4': 'ciriusRez/b4.wav',
    'bb3': 'ciriusRez/bb3.wav',
    'bb4': 'ciriusRez/bb4.wav',
    'c3': 'ciriusRez/c3.wav',
    'c4': 'ciriusRez/c4.wav',
    'd3': 'ciriusRez/d3.wav',
    'd4': 'ciriusRez/d4.wav',
    'db3': 'ciriusRez/db3.wav',
    'db4': 'ciriusRez/db4.wav',
    'e3': 'ciriusRez/e3.wav',
    'e4': 'ciriusRez/e4.wav',
    'eb3': 'ciriusRez/eb3.wav',
    'eb4': 'ciriusRez/eb4.wav',
    'f3': 'ciriusRez/f3.wav',
    'f4': 'ciriusRez/f4.wav',
    'g3': 'ciriusRez/g3.wav',
    'g4': 'ciriusRez/g4.wav',
    'gb3': 'ciriusRez/gb3.wav',
    'gb4': 'ciriusRez/gb4.wav'
  },

  celestialPad: {
    'a3': 'celestialPad/a3.wav',
    'a4': 'celestialPad/a4.wav',
    'b3': 'celestialPad/b3.wav',
    'b4': 'celestialPad/b4.wav',
    'bb3': 'celestialPad/bb3.wav',
    'bb4': 'celestialPad/bb4.wav',
    'c3': 'celestialPad/c3.wav',
    'c4': 'celestialPad/c4.wav',
    'c5': 'celestialPad/c5.wav',
    'd3': 'celestialPad/d3.wav',
    'd4': 'celestialPad/d4.wav',
    'db3': 'celestialPad/db3.wav',
    'db4': 'celestialPad/db4.wav',
    'e3': 'celestialPad/e3.wav',
    'e4': 'celestialPad/e4.wav',
    'eb3': 'celestialPad/eb3.wav',
    'eb4': 'celestialPad/eb4.wav',
    'f3': 'celestialPad/f3.wav',
    'f4': 'celestialPad/f4.wav',
    'g3': 'celestialPad/g3.wav',
    'g4': 'celestialPad/g4.wav',
    'gb3': 'celestialPad/gb3.wav',
    'gb4': 'celestialPad/gb4.wav'
  },
  epicTranceLead: {
    'a3': 'epicTranceLead/a3.wav',
    'a4': 'epicTranceLead/a4.wav',
    'b3': 'epicTranceLead/b3.wav',
    'b4': 'epicTranceLead/b4.wav',
    'bb3': 'epicTranceLead/bb3.wav',
    'bb4': 'epicTranceLead/bb4.wav',
    'c3': 'epicTranceLead/c3.wav',
    'c4': 'epicTranceLead/c4.wav',
    'c5': 'epicTranceLead/c5.wav',
    'd3': 'epicTranceLead/d3.wav',
    'd4': 'epicTranceLead/d4.wav',
    'db3': 'epicTranceLead/db3.wav',
    'db4': 'epicTranceLead/db4.wav',
    'e3': 'epicTranceLead/e3.wav',
    'e4': 'epicTranceLead/e4.wav',
    'eb3': 'epicTranceLead/eb3.wav',
    'eb4': 'epicTranceLead/eb4.wav',
    'f3': 'epicTranceLead/f3.wav',
    'f4': 'epicTranceLead/f4.wav',
    'g3': 'epicTranceLead/g3.wav',
    'g4': 'epicTranceLead/g4.wav',
    'gb3': 'epicTranceLead/gb3.wav',
    'gb4': 'epicTranceLead/gb4.wav'
  },

  jarblePerator: {
    'a3': 'jarblePerator/a3.wav',
    'a4': 'jarblePerator/a4.wav',
    'b3': 'jarblePerator/b3.wav',
    'b4': 'jarblePerator/b4.wav',
    'bb3': 'jarblePerator/bb3.wav',
    'bb4': 'jarblePerator/bb4.wav',
    'c3': 'jarblePerator/c3.wav',
    'c4': 'jarblePerator/c4.wav',
    'c5': 'jarblePerator/c5.wav',
    'd3': 'jarblePerator/d3.wav',
    'd4': 'jarblePerator/d4.wav',
    'db3': 'jarblePerator/db3.wav',
    'db4': 'jarblePerator/db4.wav',
    'e3': 'jarblePerator/e3.wav',
    'e4': 'jarblePerator/e4.wav',
    'eb3': 'jarblePerator/eb3.wav',
    'eb4': 'jarblePerator/eb4.wav',
    'f3': 'jarblePerator/f3.wav',
    'f4': 'jarblePerator/f4.wav',
    'g3': 'jarblePerator/g3.wav',
    'g4': 'jarblePerator/g4.wav',
    'gb3': 'jarblePerator/gb3.wav',
    'gb4': 'jarblePerator/gb4.wav'
  },

  psyTranceBass: {
    'a1': 'psyTranceBass/a1.wav',
    'a2': 'psyTranceBass/a2.wav',
    'b1': 'psyTranceBass/b1.wav',
    'b2': 'psyTranceBass/b2.wav',
    'bb1': 'psyTranceBass/bb1.wav',
    'bb2': 'psyTranceBass/bb2.wav',
    'c1': 'psyTranceBass/c1.wav',
    'c2': 'psyTranceBass/c2.wav',
    'c5': 'psyTranceBass/c5.wav',
    'd1': 'psyTranceBass/d1.wav',
    'd2': 'psyTranceBass/d2.wav',
    'db1': 'psyTranceBass/db1.wav',
    'db2': 'psyTranceBass/db2.wav',
    'e1': 'psyTranceBass/e1.wav',
    'e2': 'psyTranceBass/e2.wav',
    'eb1': 'psyTranceBass/eb1.wav',
    'eb2': 'psyTranceBass/eb2.wav',
    'f1': 'psyTranceBass/f1.wav',
    'f2': 'psyTranceBass/f2.wav',
    'g1': 'psyTranceBass/g1.wav',
    'g2': 'psyTranceBass/g2.wav',
    'gb1': 'psyTranceBass/gb1.wav',
    'gb2': 'psyTranceBass/gb2.wav'
  }
};
