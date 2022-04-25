import { stardust } from '@nebula.js/stardust';

export type ExpandOrCollapser = (rowIndex: number, columnIndex: number) => void;

export type FetchNextPage = (isRow: boolean, startIndex: number) => void;

export type FetchMoreData = (left: number, top: number, width: number, height: number) => void;

export interface Rect {
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface DataModel {
  pivotData: PivotData;
  fetchNextPage: FetchNextPage;
  fetchMoreData: FetchMoreData;
  hasMoreColumns: boolean;
  hasMoreRows: boolean;
  collapseLeft: ExpandOrCollapser;
  collapseTop: ExpandOrCollapser;
  expandLeft: ExpandOrCollapser;
  expandTop: ExpandOrCollapser;
  hasData: boolean;
  isDimensionLocked: (qType: EngineAPI.NxSelectionCellType, qRow: number, qCol: number) => boolean;
  getDimensionInfo: () => EngineAPI.INxDimensionInfo[];
  getMeasureInfo: () => EngineAPI.INxMeasureInfo[];
  getNoLeftDims: () => number;
  getMeasureInfoIndexFromCellIndex: (index: number) => number;
  getNullValueText: () => string;
}

export interface ItemData {
  constraints?: stardust.Constraints;
  dataModel?: DataModel;
}

export interface GridItemData extends ItemData {
  grid: EngineAPI.INxPivotValuePoint[][];
  isLeftColumn?: boolean;
}

export interface ListItemData extends ItemData {
  list: Cell[];
  isLeftColumn?: boolean;
}

export interface Cell {
  ref: EngineAPI.INxPivotDimensionCell;
  x: number;
  y: number;
  parent: Cell | null;
  root: Cell | null;
  leafCount: number;
  incrementLeafCount: () => void;
}

export interface PivotData {
  qDataPages: EngineAPI.INxPivotPage[],
  left: Cell[][],
  leftGrid: Cell[][],
  top: Cell[][],
  topGrid: Cell[][],
  data: EngineAPI.INxPivotValuePoint[][],
  headers: (null | string)[][],
  leftDimensionInfoIndexMap: number[];
  topDimensionInfoIndexMap: number[];
  size: {
    headers: Point;
    top: Point;
    left: Point;
    data: Point;
    totalColumns: number;
    totalRows: number;
  }
}

export interface ExtendedSelections extends stardust.ObjectSelections {
  on: (name: string, callback: () => void) => void;
  removeListener: (name: string, callback: () => void) => void;
}

export interface ViewService {
  shouldResetScroll: boolean;
  gridColumnStartIndex: number;
  gridRowStartIndex: number;
  gridWidth: number;
  gridHeight: number;
}

export interface Galaxy {
  translator: {
    get: (str: string) => string
  }
}
