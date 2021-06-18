import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import { useStyles } from './constructor-preview.style';
import { getAllHomeImageLooks } from '../../../redux/home-page-looks/home-page-looks.actions';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';
import { CONSTRUCTOR_VIDEO_LINK } from '../../../configs';

const ConstructorPreview = () => {
  const language = useSelector(({ Language }) => Language.language);

  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isMuted, setIsMuted] = useState(0);

  const styles = useStyles({ isMouseIn });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomeImageLooks());
  }, [dispatch]);

  return (
    <div className={styles.constructorPreview} id='constructor' data-section-style='dark'>
      <ReactPlayer
        width='100%'
        height='100%'
        playing
        volume={isMuted}
        loop
        url={CONSTRUCTOR_VIDEO_LINK}
      />
      <div
        className={styles.constructorInner}
        onMouseLeave={() => setIsMouseIn(false)}
        onMouseEnter={() => setIsMouseIn(true)}
      >
        <ExpandLessIcon className={styles.constructorInnerIcon} />
        <Link to='/constructor' className={styles.constructorInnerLink}>
          {HOME_BUTTONS[language].MOVE_TO_CONSTRUCTOR}
          <ArrowRightAltIcon />
        </Link>
      </div>
      <div className={styles.playerSoundControl}>
        {isMuted ? (
          <VolumeUpIcon onClick={() => setIsMuted(0)} />
        ) : (
          <VolumeOffIcon onClick={() => setIsMuted(1)} />
        )}
      </div>
    </div>
  );
};

export default ConstructorPreview;
