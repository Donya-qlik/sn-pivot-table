import { LeftDimensionData } from '../../types/types';
import extractLeftGrid from './extract-left';
import createDimInfoToIndexMapCallback from './helpers/dimension-info-to-index-map';

export const addPageToLeftDimensionData = (prevData: LeftDimensionData, nextDataPage: EngineAPI.INxPivotPage): LeftDimensionData => {
  const {
    qLeft,
    qArea,
  } = nextDataPage;
  if (!qLeft.length) return prevData;

  const grid = extractLeftGrid(prevData.grid, qLeft, qArea);
  const data = grid.map(col => col.filter(cell => typeof cell !== 'undefined'));
  const height = Math.max(prevData.size.y, qArea.qHeight + qArea.qTop);

  return {
    ...prevData,
    data,
    grid,
    size: {
      x: data.length,
      y: height
    }
  };
};

export const createLeftDimensionData = (
  dataPage: EngineAPI.INxPivotPage,
  qHyperCube: EngineAPI.IHyperCube,
  ): LeftDimensionData => {
  const {
    qArea,
    qLeft
  } = dataPage;
  const {
    qEffectiveInterColumnSortOrder,
  } = qHyperCube;
  const grid = extractLeftGrid([], qLeft, qArea);
  const data = grid.map(col => col.filter(cell => typeof cell !== 'undefined'));
  const dimensionInfoIndexMap = data.map(createDimInfoToIndexMapCallback(0, qEffectiveInterColumnSortOrder));

  return {
    data,
    grid,
    dimensionInfoIndexMap,
    size: {
      x: data.length,
      y: qArea.qHeight + qArea.qTop
      },
  };
};
