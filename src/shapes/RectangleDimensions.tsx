import { MIN_CELL_HEIGHT_RECTANGLE } from 'Constants';
import { CellDimensions } from './CellDimensions';

export class RectangleDimensions extends CellDimensions {
  private width: number;
  private height: number;

  constructor(
    width: number,
    height: number,
    numColumns: number
  ) {
    super();

    this.width = width / numColumns;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getVerticalShift(): number {
    return 0;
  }

  toString(): string {
    return Math.round(this.getWidth()) + 'x' + Math.round(this.getHeight());
  }

  static getGridHeightFactor(numRows: number): number {
    return numRows;
  }

  static getMinCellHeight() {
    return MIN_CELL_HEIGHT_RECTANGLE;
  }
}
