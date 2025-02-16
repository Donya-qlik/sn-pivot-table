export default () => ({
  type: 'sn-pivot-table',
  genericObjects: [
    {
      getLayout: {
        'qInfo': {
          'qId': 'DXR',
          'qType': 'sn-pivot-table'
        },
        'qMeta': {
          'privileges': [
            'read',
            'update',
            'delete',
            'exportdata'
          ]
        },
        'qSelectionInfo': {},
        'qHyperCube': {
          'qSize': {
            'qcx': 18,
            'qcy': 3
          },
          'qDimensionInfo': [
            {
              'qFallbackTitle': 'Dim1',
              'qApprMaxGlyphCount': 1,
              'qCardinal': 3,
              'qSortIndicator': 'A',
              'qGroupFallbackTitles': [
                'Dim1'
              ],
              'qGroupPos': 0,
              'qStateCounts': {
                'qLocked': 0,
                'qSelected': 0,
                'qOption': 3,
                'qDeselected': 0,
                'qAlternative': 0,
                'qExcluded': 0,
                'qSelectedExcluded': 0,
                'qLockedExcluded': 0
              },
              'qTags': [
                '$ascii',
                '$text'
              ],
              'qDimensionType': 'D',
              'qGrouping': 'N',
              'qNumFormat': {
                'qType': 'U',
                'qnDec': 0,
                'qUseThou': 0
              },
              'qIsAutoFormat': true,
              'qGroupFieldDefs': [
                'Dim1'
              ],
              'qMin': 'NaN',
              'qMax': 'NaN',
              'qAttrExprInfo': [],
              'qAttrDimInfo': [],
              'qCardinalities': {
                'qCardinal': 3,
                'qHypercubeCardinal': 3,
                'qAllValuesCardinal': -1
              },
              'autoSort': true,
              'cId': 'FLESxqV'
            },
            {
              'qFallbackTitle': 'Dim2',
              'qApprMaxGlyphCount': 1,
              'qCardinal': 6,
              'qSortIndicator': 'A',
              'qGroupFallbackTitles': [
                'Dim2'
              ],
              'qGroupPos': 0,
              'qStateCounts': {
                'qLocked': 0,
                'qSelected': 0,
                'qOption': 6,
                'qDeselected': 0,
                'qAlternative': 0,
                'qExcluded': 0,
                'qSelectedExcluded': 0,
                'qLockedExcluded': 0
              },
              'qTags': [
                '$ascii',
                '$text'
              ],
              'qDimensionType': 'D',
              'qGrouping': 'N',
              'qNumFormat': {
                'qType': 'U',
                'qnDec': 0,
                'qUseThou': 0
              },
              'qIsAutoFormat': true,
              'qGroupFieldDefs': [
                'Dim2'
              ],
              'qMin': 'NaN',
              'qMax': 'NaN',
              'qAttrExprInfo': [],
              'qAttrDimInfo': [],
              'qCardinalities': {
                'qCardinal': 6,
                'qHypercubeCardinal': 6,
                'qAllValuesCardinal': -1
              },
              'autoSort': true,
              'cId': 'WSUt'
            }
          ],
          'qMeasureInfo': [
            {
              'qFallbackTitle': 'Sum(Expression1)',
              'qApprMaxGlyphCount': 5,
              'qCardinal': 0,
              'qSortIndicator': 'D',
              'qNumFormat': {
                'qType': 'I',
                'qnDec': 0,
                'qUseThou': 1,
                'qFmt': '###0',
                'qDec': '.'
              },
              'qMin': 6273,
              'qMax': 78679,
              'qIsAutoFormat': true,
              'qAttrExprInfo': [],
              'qAttrDimInfo': [],
              'qTrendLines': [],
              'autoSort': true,
              'cId': 'ckCuDmR'
            },
            {
              'qFallbackTitle': 'Sum(Expression2)',
              'qApprMaxGlyphCount': 3,
              'qCardinal': 0,
              'qSortIndicator': 'D',
              'qNumFormat': {
                'qType': 'I',
                'qnDec': 0,
                'qUseThou': 1,
                'qFmt': '###0',
                'qDec': '.'
              },
              'qMin': 39,
              'qMax': 777,
              'qIsAutoFormat': true,
              'qAttrExprInfo': [],
              'qAttrDimInfo': [],
              'qTrendLines': [],
              'autoSort': true,
              'cId': 'kGnjz'
            },
            {
              'qFallbackTitle': 'Sum(Expression3)',
              'qApprMaxGlyphCount': 9,
              'qCardinal': 0,
              'qSortIndicator': 'D',
              'qNumFormat': {
                'qType': 'F',
                'qnDec': 5,
                'qUseThou': 1,
                'qFmt': '###0.00000',
                'qDec': '.'
              },
              'qMin': 14.645580000000002,
              'qMax': 153.10037000000008,
              'qIsAutoFormat': true,
              'qAttrExprInfo': [],
              'qAttrDimInfo': [],
              'qTrendLines': [],
              'autoSort': true,
              'cId': 'YXZQyL'
            }
          ],
          'qEffectiveInterColumnSortOrder': [
            0,
            1,
            -1
          ],
          'qGrandTotalRow': [],
          'qDataPages': [],
          'qPivotDataPages': [
            {
              'qLeft': [
                {
                  'qText': 'A',
                  'qElemNo': 1,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': []
                },
                {
                  'qText': 'B',
                  'qElemNo': 0,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': []
                },
                {
                  'qText': 'C',
                  'qElemNo': 2,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': []
                }
              ],
              'qTop': [
                {
                  'qText': 'a',
                  'qElemNo': 2,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': [
                    {
                      'qText': 'Sum(Expression1)',
                      'qElemNo': 0,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression2)',
                      'qElemNo': 1,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression3)',
                      'qElemNo': 2,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    }
                  ]
                },
                {
                  'qText': 'b',
                  'qElemNo': 1,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': [
                    {
                      'qText': 'Sum(Expression1)',
                      'qElemNo': 0,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression2)',
                      'qElemNo': 1,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression3)',
                      'qElemNo': 2,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    }
                  ]
                },
                {
                  'qText': 'c',
                  'qElemNo': 0,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': [
                    {
                      'qText': 'Sum(Expression1)',
                      'qElemNo': 0,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression2)',
                      'qElemNo': 1,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression3)',
                      'qElemNo': 2,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    }
                  ]
                },
                {
                  'qText': 'd',
                  'qElemNo': 4,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': [
                    {
                      'qText': 'Sum(Expression1)',
                      'qElemNo': 0,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression2)',
                      'qElemNo': 1,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression3)',
                      'qElemNo': 2,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    }
                  ]
                },
                {
                  'qText': 'e',
                  'qElemNo': 3,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': [
                    {
                      'qText': 'Sum(Expression1)',
                      'qElemNo': 0,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression2)',
                      'qElemNo': 1,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression3)',
                      'qElemNo': 2,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    }
                  ]
                },
                {
                  'qText': 'f',
                  'qElemNo': 5,
                  'qValue': 'NaN',
                  'qType': 'N',
                  'qUp': 0,
                  'qDown': 0,
                  'qSubNodes': [
                    {
                      'qText': 'Sum(Expression1)',
                      'qElemNo': 0,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression2)',
                      'qElemNo': 1,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    },
                    {
                      'qText': 'Sum(Expression3)',
                      'qElemNo': 2,
                      'qValue': 'NaN',
                      'qType': 'P',
                      'qUp': 0,
                      'qDown': 0,
                      'qSubNodes': []
                    }
                  ]
                }
              ],
              'qData': [
                [
                  {
                    'qText': '6273',
                    'qNum': 6273,
                    'qType': 'V'
                  },
                  {
                    'qText': '39',
                    'qNum': 39,
                    'qType': 'V'
                  },
                  {
                    'qText': '14.64558',
                    'qNum': 14.645580000000002,
                    'qType': 'V'
                  },
                  {
                    'qText': '21388',
                    'qNum': 21388,
                    'qType': 'V'
                  },
                  {
                    'qText': '208',
                    'qNum': 208,
                    'qType': 'V'
                  },
                  {
                    'qText': '42.12273',
                    'qNum': 42.122730000000026,
                    'qType': 'V'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  }
                ],
                [
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '33020',
                    'qNum': 33020,
                    'qType': 'V'
                  },
                  {
                    'qText': '322',
                    'qNum': 322,
                    'qType': 'V'
                  },
                  {
                    'qText': '59.78438',
                    'qNum': 59.78437999999998,
                    'qType': 'V'
                  },
                  {
                    'qText': '43676',
                    'qNum': 43676,
                    'qType': 'V'
                  },
                  {
                    'qText': '487',
                    'qNum': 487,
                    'qType': 'V'
                  },
                  {
                    'qText': '101.51161',
                    'qNum': 101.51161000000003,
                    'qType': 'V'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  }
                ],
                [
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '-',
                    'qNum': 'NaN',
                    'qType': 'U'
                  },
                  {
                    'qText': '63592',
                    'qNum': 63592,
                    'qType': 'V'
                  },
                  {
                    'qText': '645',
                    'qNum': 645,
                    'qType': 'V'
                  },
                  {
                    'qText': '123.59528',
                    'qNum': 123.59527999999992,
                    'qType': 'V'
                  },
                  {
                    'qText': '78679',
                    'qNum': 78679,
                    'qType': 'V'
                  },
                  {
                    'qText': '777',
                    'qNum': 777,
                    'qType': 'V'
                  },
                  {
                    'qText': '153.10037',
                    'qNum': 153.10037000000008,
                    'qType': 'V'
                  }
                ]
              ],
              'qArea': {
                'qLeft': 0,
                'qTop': 0,
                'qWidth': 18,
                'qHeight': 3
              }
            }
          ],
          'qStackedDataPages': [],
          'qMode': 'P',
          'qNoOfLeftDims': 1,
          'qTreeNodesOnDim': [],
          'qColumnOrder': []
        },
        'search': {
          'sorting': 'auto'
        },
        'showTitles': true,
        'title': 'Scenario 2',
        'subtitle': '',
        'footnote': '',
        'disableNavMenu': false,
        'showDetails': false,
        'showDetailsExpression': false,
        'nullValueRepresentation': {
          'text': 'NULL'
        },
        'visualization': 'sn-pivot-table',
        'version': '0.0.0',
        'extensionMeta': {
          'translationKey': '',
          'icon': 'puzzle',
          'iconChar': 'puzzle',
          'isLibraryItem': true,
          'visible': true,
          'name': 'sn-pivot-table',
          'description': 'Pivot table supernova',
          'template': 'sn-pivot-table',
          'iconPath': 'M14.5,9 L13,9 L13,3.3 C13,3.1 12.9,3 12.7,3 L8,3 L8,1.5 C8,0.7 7.3,0 6.5,0 C5.7,0 5,0.7 5,1.5 L5,3 L0.3,3 C0.1,3 0,3.1 0,3.3 L0,9 L1.5,9 C2.3,9 3,9.7 3,10.5 C3,11.3 2.3,12 1.5,12 L0,12 L0,15.7 C0,15.9 0.1,16 0.3,16 L5,16 L5,14.5 C5,13.7 5.7,13 6.5,13 C7.3,13 8,13.7 8,14.5 L8,16 L12.7,16 C12.9,16 13,15.9 13,15.7 L13,12 L14.5,12 C15.3,12 16,11.3 16,10.5 C16,9.7 15.3,9 14.5,9 Z',
          'isThirdParty': true,
          'version': '0.0.0',
          'author': 'QlikTech International AB',
          'type': 'visualization',
          'supernova': true
        }
      }
    },
  ],
});
