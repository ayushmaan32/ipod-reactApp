import React from 'react';

import Case from "./Case";


//Import Songs
import song1 from "../static/song/Apna_Bana_Le.mp3"
import song2 from "../static/song/bones.mp3";
import song3 from "../static/song/HeatWaves.mp3";

//Import song Image
import song1Img from "../static/songImage/apna_bna_le.jpg";
import song2Img from "../static/songImage/bones.jpg";
import song3Img from "../static/songImage/heat_waves.jpg";

// Import wallpapers
import Wallpaper1 from "../static/wallpaper/wallpaper1.jpg";
import Wallpaper2 from "../static/wallpaper/wallpaper2.jpg";
import Wallpaper3 from "../static/wallpaper/wallpaper3.jpg";




class App extends 'React.component'{
  constructor() {
    super();
    this.state = {
      active: 0,  //active list items
      menuItems: ["now Playing", "Music", "Games", "settings"],    //menu items
      musicItems: ["All songs", "Artists", "Album"],            //music items
      songItemsUrl: [song1, song2, song3],              //song list
      songImgItemsUrl: [song1Img, song2Img, song3Img],  //song img list

      wallpaperItems: [Wallpaper1, Wallpaper2, Wallpaper3],       //list of wallpaper
      songItems: [],                                             //list of song names
      songIndex: 0,                                                //current song
      lengthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3, 10: 2 },  //length of a particular menu 

      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, //which menu can be rendered by key menu
      currentMenu: -2,                                           //current menu which is lockscreen initially
      navigationStack: [],                                     //used for navigation forward and backward
      songUrl: song1,                                              //current song url
      playing: false,                                             //playing or not 
      theme: "rgb(210,210,210)",
      audio: new Audio(song1),                                  //current audio file
      songImgUrl: song1Img,                                     //current song img for now playing
      wheelColor: "white",                                      //current wheel color
      wallpaper: 0,                                             //current wallpaper
      noty: false,                                               // has to show notification or not
      notifyText: "Wallpaper Changed",                           //notification text
    }
  }





  // FUNCTION FOR : RENDERING APP
  render() {
    const { audio, active, currentMenu, menuItems, musicItems, songItems, playing, songIndex, theme, songUrl, songImgUrl, wheelColor, wallpaper, wallpaperItems, noty, notifyText } = this.state;
    return (
      <div className='App'>
        <Case
          songIndex={songIndex}
          active={active}
          menuItems={menuItems}
          currentMenu={currentMenu}
          musicItems={musicItems}
          theme={theme}
          songUrl={songUrl}
          songImgUrl={songImgUrl}
          audio={audio}
          songItems={songItems}
          playing={playing}
          wheelColor={wheelColor}
          wallpaper={wallpaper}
          wallpaperItems={wallpaperItems}

          changeMenuForward={this.changeMenuForward}
          changeMenuBackward={this.changeMenuBackward}
          updateActiveMenu={this.updateActiveMenu}
          togglePlayPause={this.togglePlayPause}
          seekSongForward={this.seekSongForward}
          seekSongReverse={seekSongReverse}
          noty={noty}
          setNoty={this.setNoty}
          notifyText={this.notifyText}

        />


      </div>
    );
  }

}

export default App;
