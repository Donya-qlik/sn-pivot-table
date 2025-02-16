/* eslint-disable react/jsx-props-no-spreading  */
import ReactDOM from 'react-dom';
import React from 'react';
import { PivotTableProps, StickyPivotTable } from './components/PivotTable';
import SelectionsProvider from './contexts/SelectionsProvider';
import { ExtendedSelections } from '../types/types';

interface RootProps extends PivotTableProps {
  selections: ExtendedSelections;
}

export function render(rootElement: Element, props: RootProps): void {
  ReactDOM.render(
    <React.StrictMode>
      <SelectionsProvider selections={props.selections}>
        <StickyPivotTable {...props} />
      </SelectionsProvider>
    </React.StrictMode>
  , rootElement);
}

export function teardown(rootElement: Element): void {
  ReactDOM.unmountComponentAtNode(rootElement);
}
