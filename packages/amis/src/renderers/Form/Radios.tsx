import React from 'react';
import cx from 'classnames';
import {Radios} from 'amis-ui';
import {
  OptionsControl,
  OptionsControlProps,
  Option,
  FormOptionsControl,
  resolveEventData,
  CustomStyle
} from 'amis-core';
import {autobind, isEmpty, createObject} from 'amis-core';
import {ActionObject} from 'amis-core';
import {FormOptionsSchema} from '../../Schema';
import {supportStatic} from './StaticHoc';
import {filter} from 'amis-core';

/**
 * Radio 单选框。
 * 文档：https://aisuda.bce.baidu.com/amis/zh-CN/components/form/radios
 */
export interface RadiosControlSchema extends FormOptionsSchema {
  type: 'radios';

  /**
   * 每行显示多少个
   */
  columnsCount?: number;
}

export interface RadiosProps extends OptionsControlProps {
  placeholder?: any;
  columnsCount?: number;
  labelField?: string;
  /**
   * @deprecated 和checkbox的labelClassName有冲突，请用optionClassName代替
   */
  labelClassName?: string;
  /** 选项CSS类名 */
  optionClassName?: string;
}

export default class RadiosControl extends React.Component<RadiosProps, any> {
  static defaultProps: Partial<RadiosProps> = {
    columnsCount: 1
  };

  doAction(action: ActionObject, data: object, throwErrors: boolean) {
    const {resetValue, onChange} = this.props;
    const actionType = action?.actionType as string;

    if (actionType === 'clear') {
      onChange?.('');
    } else if (actionType === 'reset') {
      onChange?.(resetValue ?? '');
    }
  }

  @autobind
  async handleChange(option: Option) {
    const {
      joinValues,
      extractValue,
      valueField,
      onChange,
      dispatchEvent,
      options,
      selectedOptions
    } = this.props;
    let value = option;

    if (option && (joinValues || extractValue)) {
      value = option[valueField || 'value'];
    }

    const rendererEvent = await dispatchEvent(
      'change',
      resolveEventData(this.props, {
        value,
        options,
        items: options, // 为了保持名字统一
        selectedItems: option
      })
    );
    if (rendererEvent?.prevented) {
      return;
    }

    onChange && onChange(value);
  }

  reload() {
    const reload = this.props.reloadOptions;
    reload && reload();
  }

  @autobind
  renderLabel(option: Option, {labelField}: any) {
    const {data} = this.props;
    const label = option[labelField || 'label'];
    return <>{typeof label === 'string' ? filter(label, data) : `${label}`}</>;
  }

  @supportStatic()
  render() {
    const {
      className,
      style,
      classPrefix: ns,
      value,
      onChange,
      disabled,
      joinValues,
      extractValue,
      delimiter,
      placeholder,
      options,
      inline = true,
      formMode,
      columnsCount,
      classPrefix,
      itemClassName,
      labelClassName,
      optionClassName,
      labelField,
      valueField,
      data,
      translate: __,
      optionType,
      level,
      id, // 组件在编辑器中生成的id
      wrapperCustomStyle, // 自定义样式源码
      env, // 环境信息，需要传
      themeCss, // 外观样式的配置
      radioClassName
    } = this.props;
    console.log('labelClassName', labelClassName);
    return (
      <>
        <Radios
          inline={inline || formMode === 'inline'}
          className={cx(`${ns}RadiosControl`, className)}
          value={typeof value === 'undefined' || value === null ? '' : value}
          disabled={disabled}
          onChange={this.handleChange}
          joinValues={joinValues}
          extractValue={extractValue!}
          delimiter={delimiter!}
          /** 兼容一下错误的用法 */
          labelClassName={cx(optionClassName ?? labelClassName, radioClassName)}
          labelField={labelField}
          valueField={valueField}
          placeholder={__(placeholder)}
          options={options}
          renderLabel={this.renderLabel}
          columnsCount={columnsCount}
          classPrefix={classPrefix}
          itemClassName={itemClassName}
          optionType={optionType}
          level={level}
        />
        <CustomStyle
          config={{
            wrapperCustomStyle, // 传入自定义样式
            id, // 传入id
            themeCss, // 传入外观样式
            classNames: [
              // 外观配置的类名，是个数组，解析各个类的外观样式，具体配置可以看后面讲解
              {
                key: 'radioClassName',
                value: radioClassName,
                weights: {
                  default: {
                    important: true
                  }
                }
              }
            ]
          }}
          env={env} // 传入env
        />
      </>
    );
  }
}

@OptionsControl({
  type: 'radios',
  sizeMutable: false
})
export class RadiosControlRenderer extends RadiosControl {
  static defaultProps = {
    multiple: false,
    inline: true
  };
}
