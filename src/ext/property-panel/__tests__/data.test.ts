import createData, { Args } from '../data';

describe('data', () => {
  let data: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

  beforeEach(() => {
    data = createData({ translator: { get: str => str } });
  });

  describe('dimensions', () => {
    describe('libraryId', () => {
      test('should show when qLibraryId exists', () => {
        expect(data.items.dimensions.items.libraryId.show({ qLibraryId: '123' } as EngineAPI.IHyperCubeDimensionDef)).toBe(true);
      });

      test('should not show when qLibraryId does not exist', () => {
        expect(data.items.dimensions.items.libraryId.show({} as EngineAPI.IHyperCubeDimensionDef)).toBe(false);
      });
    });

    describe('inlineDimension', () => {
      test('should show when qLibraryId does not exist', () => {
        expect(data.items.dimensions.items.inlineDimension.show({} as EngineAPI.IHyperCubeDimensionDef)).toBe(true);
      });

      test('should not show when qLibraryId exist', () => {
        expect(data.items.dimensions.items.inlineDimension.show({ qLibraryId: '123'} as EngineAPI.IHyperCubeDimensionDef)).toBe(false);
      });
    });

    describe('visibilityCondition', () => {
      test('should evaluate as an expression when string is not empty', () => {
        expect(data.items.dimensions.items.visibilityCondition.isExpression('123')).toBe(true);
      });

      test('should not evaluate as an expression when string is empty', () => {
        expect(data.items.dimensions.items.visibilityCondition.isExpression('')).toBe(false);
      });

      test('should not evaluate as an expression when string is only spaces', () => {
        expect(data.items.dimensions.items.visibilityCondition.isExpression('  ')).toBe(false);
      });

      test('should not evaluate as an expression when string is undefined', () => {
        expect(data.items.dimensions.items.visibilityCondition.isExpression(undefined)).toBe(false);
      });
    });

    describe('totalsLabel', () => {
      test('should show totalsLabel', () => {
        const itemData = { qOtherTotalSpec: { qTotalMode: 'TOTAL_EXPR' } } as EngineAPI.IHyperCubeDimensionDef;
        const args = {
          properties: {
            qHyperCubeDef: {
              qIndentMode: false
            }
          }
        } as Args;
        expect(data.items.dimensions.items.totalsLabel.show(itemData, null, args)).toBe(true);
      });

      test('should not show totalsLabel when total mode is OFF', () => {
        const itemData = { qOtherTotalSpec: { qTotalMode: 'TOTAL_OFF' } } as EngineAPI.IHyperCubeDimensionDef;
        const args = {
          properties: {
            qHyperCubeDef: {
              qIndentMode: false
            }
          }
        } as Args;
        expect(data.items.dimensions.items.totalsLabel.show(itemData, null, args)).toBe(false);
      });

      test('should show totalsLabel when qIndentMode is true and is first left dimension', () => {
        const itemData = { qOtherTotalSpec: { qTotalMode: 'TOTAL_EXPR' } } as EngineAPI.IHyperCubeDimensionDef;
        const args = {
          properties: {
            qHyperCubeDef: {
              qIndentMode: true,
              qInterColumnSortOrder: [0, -1],
              qNoOfLeftDims: 1,
              qDimensions: [itemData],
            }
          }
        } as unknown as Args;
        expect(data.items.dimensions.items.totalsLabel.show(itemData, null, args)).toBe(true);
      });

      test('should not show totalsLabel when qIndentMode is true and is second left dimension', () => {
        const itemData = { qOtherTotalSpec: { qTotalMode: 'TOTAL_EXPR' } } as EngineAPI.IHyperCubeDimensionDef;
        const args = {
          properties: {
            qHyperCubeDef: {
              qIndentMode: true,
              qInterColumnSortOrder: [0, 1],
              qNoOfLeftDims: 2,
              qDimensions: [{}, itemData],
            }
          }
        } as unknown as Args;
        expect(data.items.dimensions.items.totalsLabel.show(itemData, null, args)).toBe(false);
      });

      test('should show totalsLabel when qIndentMode is true and is top dimension', () => {
        const itemData = { qOtherTotalSpec: { qTotalMode: 'TOTAL_EXPR' } } as EngineAPI.IHyperCubeDimensionDef;
        const args = {
          properties: {
            qHyperCubeDef: {
              qIndentMode: true,
              qInterColumnSortOrder: [0, -1],
              qNoOfLeftDims: 0,
              qDimensions: [itemData],
            }
          }
        } as unknown as Args;
        expect(data.items.dimensions.items.totalsLabel.show(itemData, null, args)).toBe(true);
      });
    });
  });

  describe('measures', () => {
    describe('libraryId', () => {
      test('should show when qLibraryId exists', () => {
        expect(data.items.measures.items.libraryId.show({ qLibraryId: '123' } as EngineAPI.IHyperCubeMeasureDef)).toBe(true);
      });

      test('should not show when qLibraryId does not exist', () => {
        expect(data.items.measures.items.libraryId.show({} as EngineAPI.IHyperCubeMeasureDef)).toBe(false);
      });
    });
  });
});
