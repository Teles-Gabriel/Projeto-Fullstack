import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className='VideoFooter'>
        <div className='VideoFooter_text'>
            <h3>@{name}</h3>
                <p>{description}</p>
            <div className='VideoFooter_music'>
                <MusicNoteIcon className='VideoFooter_icon'/>
                <div className='VideoFooterMusic_text'>
                    <p>{music}</p>
                </div>
            </div>
        </div>
        <img
            className='VideoFooter_record'
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
            alt='Imagem de um vinil girando'
        />
    </div>
  )
}

export default VideoFooter