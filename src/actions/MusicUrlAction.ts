export const save_url = (url: any) => {
  return {
    type: "SAVE_URL",
    redux_music_url: url,
  };
};
