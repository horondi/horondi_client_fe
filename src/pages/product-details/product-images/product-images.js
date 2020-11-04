import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import ImgsViewer from 'react-images-viewer';
import { useStyles } from './product-images.styles';

import {
  IMGS_VIEWER,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';
import { getImage } from '../../../utils/imageLoad';

import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import { IMG_URL } from '../../../configs';

const ProductImages = () => {
  const { language, images, isLightTheme } = useSelector(
    ({ Language, Products, Theme }) => ({
      language: Language.language,
      images: Products.product.images,
      isLightTheme: Theme.lightMode
    })
  );

  const [isOpen, setIsOpen] = useState(false);
  const [imagesSet, setImagesSet] = useState([]);
  const [currImg, setCurrImg] = useState(0);

  const initImages = useMemo(
    () => [
      images.primary.large,
      ...images.additional.map(({ large }) => large)
    ],
    [images.primary.large, images.additional]
  );

  useEffect(() => {
    initImages.forEach((item, i) => {
      getImage(item)
        .then((src) =>
          setImagesSet((prev) => {
            const arr = [...prev];
            arr.splice(i, prev.length >= initImages.length ? 1 : 0, { src });
            return arr;
          })
        )
        .catch(() =>
          setImagesSet((prev) => {
            const arr = [...prev];
            arr.splice(i, prev.length >= initImages.length ? 1 : 0, {
              src: isLightTheme ? productPlugLight : productPlugDark
            });
            return arr;
          })
        );
    });
  }, [isLightTheme, initImages]);

  const styles = useStyles({
    primaryImage: imagesSet.length
      ? imagesSet[0].src
      : IMG_URL + images.primary.large
  });

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const primaryImage = (
    <div className={styles.primaryImage} onClick={() => openImage(0)} />
  );

  const sideImages = imagesSet
    .slice(1, imagesSet.length)
    .filter((img, idx) => idx < 3)
    .map((image, idx) => (
      <img
        className={styles.sideImage}
        src={image.src}
        key={idx}
        alt={IMG_ALT_INFO[language].value}
        onClick={() => openImage(idx + 1)}
      />
    ));

  return (
    <div>
      <ImgsViewer
        imgs={imagesSet}
        currImg={currImg}
        showThumbnails
        isOpen={isOpen}
        onClickPrev={() => setCurrImg((prev) => prev - 1)}
        onClickNext={() => setCurrImg((prev) => prev + 1)}
        onClickThumbnail={(index) => setCurrImg(index)}
        onClose={() => setIsOpen(false)}
        closeBtnTitle={IMGS_VIEWER[language].close}
        leftArrowTitle={IMGS_VIEWER[language].prev}
        rightArrowTitle={IMGS_VIEWER[language].next}
      />
      <div className={styles.images}>
        {sideImages}
        {primaryImage}
      </div>
    </div>
  );
};

export default ProductImages;
