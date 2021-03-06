import * as React from 'react';
import { GridHeaderCell } from './GridHeaderCell';

export class GridHeaderPanel extends React.Component<iAXDataGridHeaderPanelProps, iAXDataGridHeaderPanelState> {

  constructor( props: iAXDataGridHeaderPanelProps ) {
    super( props );

    this.state = {};
  }

  public render() {
    const {
            panelName,
            colGroup,
            bodyRow,
            style,
            optionsHeader, focusedCol, selectionCols, onClickHeader, sortInfo, onMouseDownColumnResizer
          } = this.props;

    return (
      <div data-panel={panelName} style={style}>
        <table style={{ height: '100%' }}>
          <colgroup>
            {colGroup.map(
              ( col, ci ) => <col
                key={ci}
                style={{ width: col._width + 'px' }} />
            )}
            <col />
          </colgroup>
          <tbody>
          {bodyRow.rows.map(
            ( row, ri ) => <tr
              key={ri}
              className=''>
              {row.cols.map( ( col, ci ) => <GridHeaderCell
                  key={ci}
                  bodyRow={bodyRow}
                  optionsHeader={optionsHeader}
                  focusedCol={focusedCol}
                  selectionCols={selectionCols}
                  onClickHeader={onClickHeader}
                  sortInfo={sortInfo}
                  ri={ri}
                  col={col}
                />
              )}
              <td>&nbsp;</td>
            </tr>
          )}
          </tbody>
        </table>

        {(() => {
          if ( panelName === 'aside-header' ) return null;
          let resizerHeight = optionsHeader.columnHeight * bodyRow.rows.length - optionsHeader.columnBorderWidth;
          let resizer, resizerLeft = 0, resizerWidth = 4;
          return colGroup.map(
            ( col, ci ) => {
              if ( col.colIndex !== null && typeof col.colIndex !== 'undefined' ) {
                let prevResizerLeft = resizerLeft;
                resizerLeft += col._width;
                resizer = <div
                  key={ci}
                  data-column-resizer={col.colIndex}
                  data-prev-left={prevResizerLeft}
                  data-left={resizerLeft}
                  style={{ width: resizerWidth, height: resizerHeight + 'px', left: (resizerLeft - resizerWidth / 2) + 'px' }}
                  onMouseDown={e => onMouseDownColumnResizer( e, col )}
                />;
              }
              return (resizer);
            }
          )
        })()}
      </div>
    );
  }
}
