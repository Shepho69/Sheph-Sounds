import React, { Component } from 'react';

import EditButton from '../components/EditButton.jsx';
import SoundIconsA from '../components/SoundIconsA.jsx';
import SoundIconsB from '../components/SoundIconsB.jsx';
import AddButton from '../components/AddButton.jsx';
import DarkModeButton from '../components/DarkModeButton.jsx';

import ringer1 from "../components/audio files/Ass1.mp3";
import ringer2 from "../components/audio files/Ass2.mp3";
import ringer3 from "../components/audio files/LegoBatmanMeme.mp3";
import ringer4 from "../components/audio files/fantaLightBrev.mp3";
import ringer5 from "../components/audio files/hawkTuaw.mp3";
import ringer6 from "../components/audio files/trynaSee.mp3";
import ringer7 from"../components/audio files/Damn.mp3";
import ringer8 from"../components/audio files/BrotherEHH.mp3";
import ringer9 from"../components/audio files/KanyeRant.mp3";
import ringer10 from"../components/audio files/R2D2.mp3";
import ringer11 from"../components/audio files/wilhelmScream.mp3";
import ringer12 from"../components/audio files/signTheContract.mp3";
import ringer13 from"../components/audio files/RyanGarcia1.mp3";
import ringer14 from"../components/audio files/RyanGarcia2.mp3";
import ringer15 from"../components/audio files/MileyCyrusJoeRoganMeme.mp3";
import ringer16 from"../components/audio files/JoeRoganGorilla.mp3";
import ringer17 from"../components/audio files/Milk.mp3";

import ringer18 from"../components/audio files/1thing.mp3";
import ringer19 from"../components/audio files/bluecheese.mp3";
import ringer20 from"../components/audio files/checkyoself.mp3";
import ringer21 from"../components/audio files/haram.mp3";
import ringer22 from"../components/audio files/high.mp3";
import ringer23 from"../components/audio files/tongue.mp3";

import "../App.css"

class SoundBoard extends Component {
 
  state = { 
    sounds: [
      {id: 1, soundName: "Ass 1", soundTime: 2, soundRinger: ringer1, playing: false},
      {id: 2, soundName: "Ass 2", soundTime: 3, soundRinger: ringer2, playing: false},
      {id: 3, soundName: "Lego Batman Meme", soundTime: 12, soundRinger: ringer3, playing: false},
      {id: 4, soundName: "Fanta Light Brev", soundTime: 11, soundRinger: ringer4, playing: false},
      {id: 5, soundName: "Hawk Tuaw", soundTime: 5, soundRinger: ringer5, playing: false},
      {id: 6, soundName: "Tryna See", soundTime: 4, soundRinger: ringer6, playing: false},
      {id: 7, soundName: "Damn!", soundTime: 2, soundRinger: ringer7, playing: false},
      {id: 8, soundName: "Brother EHH!", soundTime: 11, soundRinger: ringer8, playing: false},
      {id: 9, soundName: "Kanye Rant", soundTime: 3, soundRinger: ringer9, playing: false},
      {id: 10, soundName: "R2D2", soundTime: 2, soundRinger: ringer10, playing: false},
      {id: 11, soundName: "Wilhelm Scream", soundTime: 2, soundRinger: ringer11, playing: false},
      {id: 12, soundName: "Big Boy", soundTime: 4, soundRinger: ringer12, playing: false},
      {id: 13, soundName: "Ryan Garcia 1", soundTime: 2, soundRinger: ringer13, playing: false},
      {id: 14, soundName: "Ryan Garcia 2", soundTime: 6, soundRinger: ringer14, playing: false},    
      {id: 15, soundName: "Miley Cyrus Joe Rogan Meme", soundTime: 9, soundRinger: ringer15, playing: false},
      {id: 16, soundName: "Joe Rogan Gorilla", soundTime: 9, soundRinger: ringer16, playing: false},
      {id: 17, soundName: "Milk", soundTime: 7, soundRinger: ringer17, playing: false},
      {id: 18, soundName: "1 thing", soundTime: 4, soundRinger: ringer18, playing: false},
      {id: 19, soundName: "blue cheese", soundTime: 3, soundRinger: ringer19, playing: false},
      {id: 20, soundName: "check yo self", soundTime: 5, soundRinger: ringer20, playing: false},    
      {id: 21, soundName: "haram", soundTime: 2, soundRinger: ringer21, playing: false},
      {id: 22, soundName: "high", soundTime: 7, soundRinger: ringer22, playing: false},
      {id: 23, soundName: "tongue", soundTime: 6, soundRinger: ringer23, playing: false}
    ],

    playedSounds: [],

    editStatus : false,

    anySoundPlaying : false,
    
    darkModeStatus: false,

    colour: "#515151"
} 

  componentDidMount() {

    this.handleColourMode()

  }

  handleEdit = () => {  

    if(this.state.editStatus === true) {
      this.setState({editStatus: false})
    }

    else if(this.state.editStatus === false) {
      this.setState({editStatus: true})
    }

  } 

  handleColourMode = () => {
    if(this.state.darkModeStatus === true) {
      this.state.darkModeStatus = false;
      this.setState({colour: "#515151"})
      this.state.colour = "#515151"
    }

    else if(this.state.darkModeStatus === false) {
      this.state.darkModeStatus = true;
      this.setState({colour: "lightskyblue"})
      this.state.colour = "lightskyblue"
    }
    
    document.body.style.backgroundColor = this.state.colour

  }

  handleChangeName = (soundID, newName) => {
    let ass = this.state.sounds.find((sound) => sound.id === soundID);
    let index = this.state.sounds.indexOf(ass);
    ass.soundName = newName;
    this.state.sounds[index] = ass;
  }

  handleDelete = (soundID) => {
    const soundIcons = this.state.sounds.filter(a => a.id !== soundID)
    this.setState({sounds: soundIcons})
  }
  

  handleNext = () => {
    console.log("Next");
  }


  handlePlayerSwitch = (soundID, playStatus) => {    

    let ass = this.state.sounds.find((sound) => sound.id === soundID);
    let index = this.state.sounds.indexOf(ass)
    this.state.sounds[index] = ass;
    const replacementSounds = this.state.sounds;
    
    if(this.state.sounds[index].playing === false && playStatus === true) {
      this.state.sounds[index].playing = true;
      this.setState({anySoundPlaying: true});
      this.state.anySoundPlaying = true;
    }

    this.state.sounds = replacementSounds;
    this.setState({sounds: replacementSounds});

    if(this.state.sounds[index].playing === true) {

      this.state.playedSounds.push(ass);
      this.setState({anySoundPlaying: true});
      this.state.anySoundPlaying = true;

      if(this.state.playedSounds.length > 1) {
        this.state.playedSounds[0].playing = false;
        this.state.playedSounds.shift(); 
      }
      
    }

    if(this.state.sounds[index].playing === false) {
      this.state.playedSounds.shift();
    }
    
    if(this.state.playedSounds.length > 0) {
      this.setState({anySoundPlaying: true}); 
      this.state.anySoundPlaying = true;
      this.state.playedSounds[0].playing = true;
    }

    else if(this.state.playedSounds.length === 0) {
      this.setState({anySoundPlaying: false});      
      this.state.anySoundPlaying = false;
    }

  }


  render() { 

    return (<>

      <h1>Sheph-Sounds</h1>
      
      <br></br>
      
      
      <EditButton onEdit={this.handleEdit}/>
      {this.state.editStatus ? <AddButton/> : <></>}      
      <DarkModeButton colour={this.state.colour} colourModeSwitch = {this.handleColourMode} darkModeStatus = {this.state.darkModeStatus}/>
      

      <div className='grid-container'>
        {this.state.editStatus ? 
        
          <SoundIconsA 
            sounds = {this.state.sounds} 
            editStatus = {this.state.editStatus} 
            playedSounds = {this.state.playedSounds} 
            playerSwitch = {this.handlePlayerSwitch} 
            onEdit = {this.handleEdit} 
            onDelete = {this.handleDelete}
            onChangeName = {this.handleChangeName}
          />

          :

          <SoundIconsB 
            sounds = {this.state.sounds} 
            editStatus = {this.state.editStatus} 
            playedSounds = {this.state.playedSounds} 
            playerSwitch = {this.handlePlayerSwitch} 
            onEdit = {this.handleEdit} 
            onEditName = {this.handleChangeName}
            onDelete = {this.handleDelete}
            onChangeName = {this.handleChangeName}
          />
        }
        
      </div>     
     
    </>);
  }
}
 
export default SoundBoard;