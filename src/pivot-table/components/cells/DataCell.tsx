import React from 'react';
import NxDimCellType from '../../../types/QIX';
import { GridItemData } from '../../../types/types';
import { borderStyle, textStyle } from '../shared-styles';

export interface MeasureCellProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
  data: GridItemData;
}

const numericStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '100%',
  ...borderStyle
};

const nilStyle: React.CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  backgroundClip: 'padding-box',
  ...borderStyle
};

const containerStyle: React.CSSProperties = {
  color: 'rgb(89, 89, 89)',
  justifyContent: 'center',
};

export const testId = 'measure-cell';

export default function MeasureCell({ columnIndex, rowIndex, style, data }: MeasureCellProps): JSX.Element | null {
  const { grid, layoutService } = data;
  const cell = grid[rowIndex]?.[columnIndex];

  if (!cell) {
    return null;
  }

  const { qText, qType } = cell;
  const isNull = qType === NxDimCellType.NX_DIM_CELL_NULL;
  const text = isNull ? layoutService.getNullValueText() : qText;
  const isNumeric = isNull ? !Number.isNaN(+text) : true;
  const cellStyle = {
    ...(isNull ? nilStyle : numericStyle),
    justifyContent: isNumeric ? 'flex-end' : 'center',
  };

  return (
    <div title={`${text} ${columnIndex}:${rowIndex}`} style={{...style, ...containerStyle}} data-testid={testId}>
      <div style={cellStyle}>
        <span style={textStyle}>{text}</span>
      </div>
    </div>
  );
}
