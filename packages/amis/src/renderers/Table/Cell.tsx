import {
  IColumn,
  IRow,
  ITableStore,
  PlainObject,
  SchemaNode,
  ThemeProps,
  resolveVariable
} from 'amis-core';
import {BadgeObject, Checkbox, Icon} from 'amis-ui';
import React from 'react';

export interface CellProps extends ThemeProps {
  region: string;
  column: IColumn;
  item: IRow;
  props: PlainObject;
  ignoreDrag?: boolean;
  render: (
    region: string,
    node: SchemaNode,
    props?: PlainObject
  ) => JSX.Element;
  store: ITableStore;
  multiple: boolean;
  canAccessSuperData?: boolean;
  itemBadge?: BadgeObject;
  onCheck?: (item: IRow) => void;
  onDragStart?: (e: React.DragEvent) => void;
  popOverContainer?: any;
  quickEditFormRef: any;
  onImageEnlarge?: any;
}

export default function Cell({
  region,
  column,
  item,
  props,
  ignoreDrag,
  render,
  store,
  multiple,
  itemBadge,
  classnames: cx,
  classPrefix: ns,
  canAccessSuperData,
  onCheck,
  onDragStart,
  popOverContainer,
  quickEditFormRef,
  onImageEnlarge
}: CellProps) {
  if (column.name && item.rowSpans[column.name] === 0) {
    return null;
  }

  const [style, stickyClassName]: any = React.useMemo(() => {
    const style = {...column.pristine.style};
    const [stickyStyle, stickyClassName] = store.getStickyStyles(
      column,
      store.filteredColumns
    );
    return [Object.assign(style, stickyStyle), stickyClassName];
  }, []);

  const onCheckboxChange = React.useCallback(() => {
    onCheck?.(item);
  }, []);

  if (column.type === '__checkme') {
    return (
      <td
        style={style}
        key={props.key}
        className={cx(column.pristine.className, stickyClassName)}
      >
        <Checkbox
          classPrefix={ns}
          type={multiple ? 'checkbox' : 'radio'}
          checked={item.checked}
          disabled={item.checkdisable || !item.checkable}
          onChange={onCheckboxChange}
        />
      </td>
    );
  } else if (column.type === '__dragme') {
    return (
      <td
        style={style}
        key={props.key}
        className={cx(column.pristine.className, stickyClassName, {
          'is-dragDisabled': !item.draggable
        })}
      >
        {item.draggable ? <Icon icon="drag" className="icon" /> : null}
      </td>
    );
  } else if (column.type === '__expandme') {
    return (
      <td
        style={style}
        key={props.key}
        className={cx(column.pristine.className, stickyClassName)}
      >
        {item.expandable ? (
          <a
            className={cx('Table-expandBtn', item.expanded ? 'is-active' : '')}
            // data-tooltip="展开/收起"
            // data-position="top"
            onClick={item.toggleExpanded}
          >
            <Icon icon="right-arrow-bold" className="icon" />
          </a>
        ) : null}
      </td>
    );
  }

  let [prefix, affix, addtionalClassName] = React.useMemo(() => {
    let prefix: React.ReactNode[] = [];
    let affix: React.ReactNode[] = [];
    let addtionalClassName = '';

    if (column.isPrimary && store.isNested) {
      addtionalClassName = 'Table-primayCell';
      prefix.push(
        <span
          key="indent"
          className={cx('Table-indent')}
          style={item.indentStyle}
        />
      );
      prefix.push(
        item.expandable ? (
          <a
            key="expandBtn2"
            className={cx('Table-expandBtn2', item.expanded ? 'is-active' : '')}
            // data-tooltip="展开/收起"
            // data-position="top"
            onClick={item.toggleExpanded}
          >
            <Icon icon="right-arrow-bold" className="icon" />
          </a>
        ) : (
          <span key="expandSpace" className={cx('Table-expandSpace')} />
        )
      );
    }

    if (
      !ignoreDrag &&
      column.isPrimary &&
      store.isNested &&
      store.draggable &&
      item.draggable
    ) {
      affix.push(
        <a
          key="dragBtn"
          draggable
          onDragStart={onDragStart}
          className={cx('Table-dragBtn')}
        >
          <Icon icon="drag" className="icon" />
        </a>
      );
    }
    return [prefix, affix, addtionalClassName];
  }, [item.expandable, item.expanded]);
  const data = React.useMemo(() => item.locals, [JSON.stringify(item.locals)]);

  const finalCanAccessSuperData =
    column.pristine.canAccessSuperData ?? canAccessSuperData;
  const subProps: any = {
    ...props,
    // 操作列不下发loading，否则会导致操作栏里面的所有按钮都出现loading
    loading: column.type === 'operation' ? false : props.loading,
    btnDisabled: store.dragging,
    data: data,
    value: column.name
      ? resolveVariable(
          column.name,
          finalCanAccessSuperData ? item.locals : item.data
        )
      : column.value,
    popOverContainer: popOverContainer,
    rowSpan: item.rowSpans[column.name as string],
    quickEditFormRef: quickEditFormRef,
    cellPrefix: prefix,
    cellAffix: affix,
    onImageEnlarge: onImageEnlarge,
    canAccessSuperData: finalCanAccessSuperData,
    row: item,
    itemBadge,
    showBadge:
      !props.isHead &&
      itemBadge &&
      store.firstToggledColumnIndex === props.colIndex,
    onQuery: undefined,
    style,
    className: cx(
      column.pristine.className,
      stickyClassName,
      addtionalClassName
    ),
    /** 给子节点的设置默认值，避免取到env.affixHeader的默认值，导致表头覆盖首行 */
    affixOffsetTop: 0
  };
  delete subProps.label;

  return render(
    region,
    {
      ...column.pristine,
      column: column.pristine,
      type: 'cell'
    },
    subProps
  );
}
