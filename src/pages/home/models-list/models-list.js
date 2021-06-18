import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './models-list.style';
import { useStyles as useModelItemStyles } from '../../../components/model-item/model-item.style';
import { getAllModels } from '../../../redux/model/model.actions';
import ClassicButton from '../../../components/classic-button';
import ModelItem from '../../../components/model-item';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';
import { UNIQUE_MODEL_IMAGE_LINK } from '../../../configs';
import Loader from '../../../components/loader';

const ModelsList = () => {
  const dispatch = useDispatch();
  const { models, language, modelsLoading } = useSelector(({ Model, Language }) => ({
    models: Model.models,
    modelsLoading: Model.loading,
    language: Language.language
  }));

  const [isModelsVisible, setIsModelsVisible] = useState(false);

  const styles = useStyles({ isModelsVisible, modelsCount: models.length });
  const modelItemStyles = useModelItemStyles();

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  const onShowModels = () => {
    setIsModelsVisible(!isModelsVisible);
  };

  if (modelsLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.root} data-section-style='light' id='models'>
      <div className={styles.modelsWrapper}>
        {models.map((model) => (
          <ModelItem key={model._id} model={model} />
        ))}
        <Link className={modelItemStyles.modelItem} to='/unique'>
          <div className={modelItemStyles.modelItemTitle}>Unique</div>
          <div
            className={modelItemStyles.modelItemImage}
            style={{
              background: `url(${UNIQUE_MODEL_IMAGE_LINK}) center center`,
              backgroundSize: 'cover'
            }}
          />
        </Link>
      </div>
      <ClassicButton
        buttonStyle={isModelsVisible ? 'classic' : 'inverse'}
        buttonType='button'
        innerText={
          isModelsVisible ? HOME_BUTTONS[language].HIDE_MODELS : HOME_BUTTONS[language].ALL_MODELS
        }
        onClickHandler={onShowModels}
      />
    </div>
  );
};

export default ModelsList;
