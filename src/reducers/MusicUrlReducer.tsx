export const MusicUrlReducer = (state = {}, action: any) => {
  // const musicArr = {
  //   url: action.redux_music_url,
  //   title: action.reduc_music_title,
  // };

  const aaa = action.redux_music_url;
  switch (action.type) {
    case "SAVE_URL":
      return aaa;
    default:
      return state;
  }
};
