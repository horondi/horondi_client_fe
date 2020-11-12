import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './materials.style.js';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { carouselMaterialInterval, IMG_URL } from '../../configs';
import { getPatterns } from '../../../src/redux/pattern/pattern.actions';
import clsx from 'clsx';
import { getImage } from '../../utils/imageLoad';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Materials = () => {
  const [setImage] = useState([]);
  const dispatch = useDispatch();
  const { materialsPage, language, patterns, loading, images } = useSelector(
    ({ BusinessPages, Language, Pattern, HomePageSlider }) => ({
      materialsPage: BusinessPages.pages.materials,
      language: Language.language,
      patterns: Pattern.list,
      loading: HomePageSlider.loading,
      images: HomePageSlider.images
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('materials'));
    dispatch(getPatterns());
  }, [dispatch]);

  useMemo(() => {
    patterns.images &&
      patterns.images.forEach((item) => {
        getImage(patterns.images.medium)
          .then((src) => setImage((prev) => [...prev, src]))
          .catch((badSrc) => setImage((prev) => [...prev, badSrc]));
      });
  }, [images]);

  const materialPageText =
    materialsPage.text && parse(materialsPage.text[language].value);
  const styles = useStyles();

  const imagesForSlider = patterns.map((pattern) => (
    <div
      className={'sliderImage'}
      style={{ width: '100%', height: '100%' }}
      key={pattern._id}
      data-src={`${IMG_URL}${pattern.images.medium}`}
    >
      <p className={clsx(styles.hoverArrow, 'arrow')}>
        {pattern.name[language].value}
      </p>
    </div>
  ));
  // console.log(imagesForSlider)

  // {patterns.length && (
  //     <img src={`${IMG_URL}${patterns[2].images.medium}`} />
  // )}

  // console.log(`${IMG_URL}${patterns}`)

  //   if (loading) {
  //       return (
  //           <Backdrop className={styles.backdrop} open={loading} invisible>
  //               <CircularLoadingBar color='inherit' />
  //           </Backdrop>
  //       );
  //   }
  return (
    <div className={styles.root}>
      {materialsPage.title && <h1>{materialsPage.title[language].value}</h1>}
      <div className={styles.captionBlock}>
        <AutoplaySlider
          play
          interval={carouselMaterialInterval}
          className={styles.slider}
          mobileTouch
          buttons={false}
          infinite
        >
          {imagesForSlider}
        </AutoplaySlider>
        {materialPageText}
      </div>
      {/*<AwesomeSlider>*/}
      {/*  */}
      {/*</AwesomeSlider>*/}
      {/*<SliderHomePage />*/}
      {/*<awesomeSlider />використати цей слайдер */}

      {/*{patterns.length && (*/}
      {/*  <img src={`${IMG_URL}${patterns[2].images.medium}`} />*/}
      {/*)}*/}
      {/*якшо масив більший за 0 тоді покажи його*/}
    </div>
  );
};

export default Materials;
