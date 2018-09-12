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
	}
};

function getSampler(sampler, baseUrl = '/samplers/samples/') {
	return new Tone.Sampler(samplers[sampler], () => {}, baseUrl).toMaster();
}