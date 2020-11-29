// export const playAudio = (isPlaying, audioRef) => {
//   if (isPlaying) {
//     const playPromise = audioRef.current.play();
//     if (playPromise !== undefined) {
//       playPromise
//         .then((audio) => {
//           audioRef.current.play();
//         })
//         .catch((error) => console.log(error));
//     }
//   }
// };

export const playAudio = (isPlaying, audioRef) => {
  const playPromise = audioRef.current.play();
  isPlaying &&
    playPromise.then(audio => {
      audioRef.current.play();
    });
};
