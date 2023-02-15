import React from "react";

// import css
import "../css/Case.css";


import Display from './Display';
import Wheel from './Wheel';


// This component is the outer case of iPod it does nothing special just renders display and wheel component
class Case extends React.Component {
    render() {
        const { active, updateActiveMenu, currentMenu, changeMenuBackward, changeMenuForward, menuItems, musicItems, togglePlayPause, songItems, playing, songIndex, theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse, wheelColor, wallpaper, wallpaperItems, noty, setNoty, notifyText } = this.props;

        return (
            <div className="case-container">
                <div style={{ backgroundColor: theme }} className="case">
                    <Display
                        songIndex={songIndex}
                        playing={playing}
                        noty={noty}
                        setNoty={setNoty}
                        notifyText={notifyText}
                        musicItems={musicItems}
                        songItems={songItems}
                        songUrl={songUrl}
                        songImgUrl={songImgUrl}
                        audio={audio}
                        wallpaper={wallpaper}
                        wallpaperItems={wallpaperItems}
                    />
                    <Wheel
                        updateActiveMenu={updateActiveMenu}
                        changeMenuBackward={changeMenuBackward}
                        togglePlayPause={togglePlayPause}
                        changeMenuForward={changeMenuForward}
                        currentMenu={currentMenu}
                        menuItems={menuItems}
                        seekSongForward={seekSongForward}
                        seekSongReverse={seekSongReverse}
                        active={active}
                        wheelColor={wheelColor}
                    />
                </div>
            </div>
        )
    }
}
export default Case;